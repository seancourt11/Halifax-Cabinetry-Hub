import { useRef, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Paperclip, X, CalendarDays, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 8;
const ACCEPT = "image/*,application/pdf,.doc,.docx,.dwg,.heic,.heif";

const schema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  location: z
    .string()
    .trim()
    .nonempty({ message: "Where is the project located?" })
    .max(160),
  projectType: z.string().trim().max(80).optional().or(z.literal("")),
  installDate: z.string().trim().max(40).optional().or(z.literal("")),
  meetingPref: z.string().trim().max(40).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Tell us a little about your project" })
    .max(1500),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function WorkWithUsForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLInputElement).value,
      installDate: (form.elements.namedItem("installDate") as HTMLInputElement).value,
      meetingPref: (form.elements.namedItem("meetingPref") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fe: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitted(true);
    form.reset();
    setFiles([]);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-white" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-white">
          Request received
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
          A Hempston designer will email you within one business day with a Google Meet
          invite and next steps. Prefer to talk now? Call{" "}
          <a href="tel:+19027198497" className="font-medium text-white underline">
            (902) 719-8497
          </a>
          .
        </p>
        <Button variant="outline" className="mt-7 border-white/30 bg-transparent text-white hover:bg-white hover:text-black" onClick={() => setSubmitted(false)}>
          Submit another project
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-white/15 bg-white/[0.03] p-7 sm:p-9"
    >
      <h3 className="font-display text-2xl font-semibold text-white">
        Start your project
      </h3>
      <p className="mt-2 text-sm text-white/60">
        Share the details below and we'll follow up with a Google Meet invite.
      </p>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white/80">Full name</Label>
            <Input id="name" name="name" autoComplete="name" placeholder="Jane Doe" />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white/80">Email</Label>
            <Input id="email" name="email" type="email" autoComplete="email" placeholder="jane@email.com" />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-white/80">Phone (optional)</Label>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(902) 719-8497" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location" className="flex items-center gap-1.5 text-white/80">
              <MapPin className="h-3.5 w-3.5" /> Project location
            </Label>
            <Input id="location" name="location" placeholder="City, Province / State" />
            {errors.location && <p className="text-sm text-destructive">{errors.location}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="projectType" className="text-white/80">Project type</Label>
            <Input id="projectType" name="projectType" placeholder="Kitchen, vanity, built-ins…" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="installDate" className="flex items-center gap-1.5 text-white/80">
              <CalendarDays className="h-3.5 w-3.5" /> Preferred install date
            </Label>
            <Input id="installDate" name="installDate" type="date" />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="meetingPref" className="flex items-center gap-1.5 text-white/80">
            <Video className="h-3.5 w-3.5" /> Preferred meeting time (Google Meet)
          </Label>
          <Input
            id="meetingPref"
            name="meetingPref"
            placeholder="e.g. Weekday mornings, AST"
          />
          <p className="text-xs text-white/50">
            We'll email you a Google Meet invite based on this window.
          </p>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="text-white/80">Tell us about your project</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your space, your timeline, materials you love, and what you have in mind…"
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>

        <div className="grid gap-2">
          <Label className="text-white/80">Attach project files (optional)</Label>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={ACCEPT}
            className="sr-only"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <Button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full justify-center gap-2 border border-white bg-white text-black hover:bg-white/90 hover:text-black sm:w-auto"
          >
            <Paperclip className="h-4 w-4" />
            Attach files
          </Button>
          <p className="text-xs text-white/50">
            Photos, floor plans, DWG, PDF, or inspiration — up to 10 MB each (max {MAX_FILES}).
          </p>
          {files.length > 0 && (
            <ul className="mt-1 grid gap-1.5">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between gap-3 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80"
                >
                  <span className="truncate">
                    <span>{f.name}</span>
                    <span className="ml-2 text-xs text-white/50">
                      {(f.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="text-white/60 transition-colors hover:text-white"
                    aria-label={`Remove ${f.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {fileError && <p className="text-sm text-destructive">{fileError}</p>}
        </div>

        <Button type="submit" size="xl" className="w-full bg-white text-black hover:bg-white/90">
          Submit & Schedule Google Meet
        </Button>
        <p className="text-center text-xs text-white/50">
          We reply within one business day with a meeting invite.
        </p>
      </div>
    </form>
  );
}
