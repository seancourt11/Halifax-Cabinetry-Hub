import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackGenerateLead } from "@/lib/ga4";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB per file
const MAX_FILES = 5;
const ACCEPT = "image/*,application/pdf,.doc,.docx,.heic,.heif";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone must be under 30 characters" })
    .optional()
    .or(z.literal("")),
  projectType: z
    .string()
    .trim()
    .max(60, { message: "Please keep this short" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Tell us a little about your project" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

type LeadErrors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

export function HalifaxLeadForm({
  market = "Halifax",
  phoneDisplay = PHONE_DISPLAY,
  phoneTel = PHONE_TEL,
}: {
  market?: string;
  phoneDisplay?: string;
  phoneTel?: string;
}) {
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [prefill, setPrefill] = useState<{ projectType?: string; message?: string }>({});
  const [formKey, setFormKey] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(selected: FileList | null) {
    if (!selected) return;
    const incoming = Array.from(selected);
    const combined = [...files, ...incoming].slice(0, MAX_FILES);
    const oversize = combined.find((f) => f.size > MAX_FILE_SIZE);
    if (oversize) {
      setFileError(`"${oversize.name}" is larger than 10 MB.`);
      return;
    }
    if (files.length + incoming.length > MAX_FILES) {
      setFileError(`You can attach up to ${MAX_FILES} files.`);
    } else {
      setFileError(null);
    }
    setFiles(combined);
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setFileError(null);
  }

  useEffect(() => {
    function readHash() {
      const raw = window.location.hash;
      if (!raw.startsWith("#consultation")) return;
      const qIdx = raw.indexOf("?");
      if (qIdx === -1) return;
      const params = new URLSearchParams(raw.slice(qIdx + 1));
      const msg = params.get("msg") ?? undefined;
      const type = params.get("type") ?? undefined;
      if (msg || type) {
        setPrefill({ message: msg, projectType: type });
        setSubmitted(false);
        setFormKey((k) => k + 1);
      }
    }
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const result = leadSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: LeadErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof LeadErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.set("formType", "consultation");
      body.set("name", result.data.name);
      body.set("email", result.data.email);
      body.set("phone", result.data.phone ?? "");
      body.set("projectType", result.data.projectType ?? "");
      body.set("message", result.data.message);
      for (const file of files) body.append("attachments", file);

      const res = await fetch("/api/contact", { method: "POST", body });
      const json = (await res.json().catch(() => null)) as { ok: boolean; error?: string } | null;
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Something went wrong. Please try again or call us.");
      }

      trackGenerateLead("consultation");
      setSubmitted(true);
      form.reset();
      setFiles([]);
      setFileError(null);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again or call us.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="h-12 w-12 text-foreground" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
          Thank you — request received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          A Hempston designer will reach out within one business day to schedule your free {market}
          consultation. Prefer to talk now? Call{" "}
          <a href={phoneTel} className="font-medium text-foreground underline">
            {phoneDisplay}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-7" onClick={() => setSubmitted(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      key={formKey}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground">
        Request your free consultation
      </h3>

      <p className="mt-2 text-sm text-black/80">
        No pressure, no obligation — just expert guidance and an honest budget.
      </p>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@email.com"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={phoneDisplay}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="text-sm text-destructive">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="projectType">Project type (optional)</Label>
          <Input
            id="projectType"
            name="projectType"
            defaultValue={prefill.projectType ?? ""}
            placeholder="Kitchen, vanity, built-ins, sample request…"
            aria-invalid={errors.projectType ? true : undefined}
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
          />
          {errors.projectType && (
            <p id="project-type-error" role="alert" className="text-sm text-destructive">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Tell us about your project</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            defaultValue={prefill.message ?? ""}
            placeholder="Your space and what you have in mind…"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="text-sm text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="attachments">Attachments (optional)</Label>
          <div>
            <input
              ref={fileInputRef}
              id="attachments"
              name="attachments"
              type="file"
              multiple
              accept={ACCEPT}
              aria-describedby="attachments-help"
              className="sr-only"
              onChange={(e) => {
                handleFiles(e.target.files);
                e.target.value = "";
              }}
            />
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full justify-center gap-2 border border-black bg-black text-white hover:bg-black/80 hover:text-white sm:w-auto"
            >
              <Paperclip className="h-4 w-4" />
              Attach files
            </Button>
          </div>
          <p id="attachments-help" className="text-xs text-black/75">
            Photos, floor plans, or inspiration — PDF, DOC, or images up to 10 MB each (max{" "}
            {MAX_FILES}).
          </p>
          {files.length > 0 && (
            <ul className="mt-1 grid gap-1.5">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between gap-3 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm"
                >
                  <span className="truncate">
                    <span className="text-foreground">{f.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {(f.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Remove ${f.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {fileError && (
            <p role="alert" className="text-sm text-destructive">
              {fileError}
            </p>
          )}
        </div>

        {submitError && (
          <p role="alert" className="text-sm text-destructive">
            {submitError}
          </p>
        )}

        <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Book My Free Consultation"}
        </Button>
        <p className="text-center text-xs text-black/75">
          We typically respond within one business day.
        </p>
      </div>
    </form>
  );
}
