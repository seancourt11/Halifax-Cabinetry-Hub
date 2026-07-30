import process from "node:process";
import { Buffer } from "node:buffer";
import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB per file
const MAX_FILES = 8;
const MAX_TOTAL_ATTACHMENTS_SIZE = 20 * 1024 * 1024; // keep total message size mailbox-friendly

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

let transporter: nodemailer.Transporter | null = null;

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
      POST: async ({ request }) => {
        let formData: FormData;
        try {
          formData = await request.formData();
        } catch {
          return Response.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
        }

        const fields: Record<string, string> = {};
        const attachments: { filename: string; content: Buffer; contentType?: string }[] = [];
        let totalAttachmentBytes = 0;

        for (const [key, value] of formData.entries()) {
          if (value instanceof File) {
            if (key !== "attachments" || value.size === 0) continue;
            if (attachments.length >= MAX_FILES) continue;
            if (value.size > MAX_FILE_SIZE) {
              return Response.json(
                { ok: false, error: `"${value.name}" is larger than 10 MB.` },
                { status: 400 },
              );
            }
            totalAttachmentBytes += value.size;
            if (totalAttachmentBytes > MAX_TOTAL_ATTACHMENTS_SIZE) {
              return Response.json(
                {
                  ok: false,
                  error: "Attachments are too large overall. Please remove a file and try again.",
                },
                { status: 400 },
              );
            }
            attachments.push({
              filename: value.name,
              content: Buffer.from(await value.arrayBuffer()),
              contentType: value.type || undefined,
            });
          } else {
            fields[key] = value;
          }
        }

        const result = contactSchema.safeParse(fields);
        if (!result.success) {
          return Response.json(
            { ok: false, error: result.error.issues[0]?.message ?? "Invalid submission." },
            { status: 400 },
          );
        }
        const data = result.data;

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
