import process from "node:process";
import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import nodemailer, { type Transporter } from "nodemailer";
import { z } from "zod";
import { readContactForm } from "@/lib/contact-attachments";
import {
  RATE_LIMIT_MESSAGE,
  TURNSTILE_REJECT_MESSAGE,
  clientIpFromHeaders,
  resolveMailCc,
  spamReason,
  turnstileConfig,
} from "@/lib/contact-guard";
import { consumeContactRateLimit } from "@/lib/contact-rate-limit";
import { verifyTurnstile, warnIfTurnstileMisconfigured } from "@/lib/turnstile.server";

const contactSchema = z.object({
  formType: z.enum(["consultation", "work-with-us"]).default("consultation"),
  name: z.string().trim().nonempty().max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  projectType: z.string().trim().max(80).optional().or(z.literal("")),
  location: z.string().trim().max(160).optional().or(z.literal("")),
  installDate: z.string().trim().max(40).optional().or(z.literal("")),
  meetingPref: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().nonempty().max(1500),
});

let transporter: Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      GET: async () => {
        warnIfTurnstileMisconfigured();
        const config = turnstileConfig();
        return Response.json(
          { turnstileSiteKey: config.enabled ? config.siteKey : null },
          { headers: { "cache-control": "no-store" } },
        );
      },
      POST: async ({ request }) => {
        let formData: FormData;
        try {
          formData = await request.formData();
        } catch {
          return Response.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
        }

        const parsed = await readContactForm(formData);
        if (!parsed.ok) {
          return Response.json({ ok: false, error: parsed.error }, { status: 400 });
        }
        const { fields, attachments } = parsed;

        const result = contactSchema.safeParse(fields);
        if (!result.success) {
          return Response.json(
            { ok: false, error: result.error.issues[0]?.message ?? "Invalid submission." },
            { status: 400 },
          );
        }
        const data = result.data;
        const spam = spamReason(fields);
        const ip = clientIpFromHeaders(request.headers);
        let withinLimit = true;
        if (ip) {
          try {
            withinLimit = await consumeContactRateLimit(ip);
          } catch (error) {
            console.error("Contact rate limit failed open:", error);
            withinLimit = true;
          }
        }
        if (!withinLimit && !spam) {
          return Response.json({ ok: false, error: RATE_LIMIT_MESSAGE }, { status: 429 });
        }
        if (spam) {
          console.info(`Dropped contact submission (spam signal: ${spam})`);
          return Response.json({ ok: true });
        }

        warnIfTurnstileMisconfigured();
        const turnstileOk = await verifyTurnstile(fields["cf-turnstile-response"] ?? "", ip);
        if (!turnstileOk) {
          return Response.json({ ok: false, error: TURNSTILE_REJECT_MESSAGE }, { status: 400 });
        }

        const from = process.env.MAIL_FROM || process.env.SMTP_USER;
        if (!from) {
          console.error("Email not sent: SMTP_USER/MAIL_FROM is not configured.");
          return Response.json(
            { ok: false, error: "Email is not configured on the server yet." },
            { status: 500 },
          );
        }
        const to = process.env.MAIL_TO || "info@hempstonhome.com";

        const subject =
          data.formType === "work-with-us"
            ? `New project inquiry from ${data.name}`
            : `New consultation request from ${data.name}`;

        const lines = [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : null,
          data.location ? `Location: ${data.location}` : null,
          data.projectType ? `Project type: ${data.projectType}` : null,
          data.installDate ? `Preferred install date: ${data.installDate}` : null,
          data.meetingPref ? `Preferred meeting time: ${data.meetingPref}` : null,
          "",
          "Message:",
          data.message,
        ].filter((line): line is string => line !== null);

        try {
          await getTransporter().sendMail({
            to,
            cc: resolveMailCc(),
            from,
            replyTo: data.email,
            subject,
            text: lines.join("\n"),
            attachments,
          });
        } catch (error) {
          console.error("Failed to send contact email:", error);
          return Response.json(
            {
              ok: false,
              error: "Something went wrong sending your request. Please try again or call us.",
            },
            { status: 500 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
