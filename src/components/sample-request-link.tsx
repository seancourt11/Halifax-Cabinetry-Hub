import { ArrowRight } from "lucide-react";

// Small inline CTA that scrolls to the on-page consultation form
// and prefills the message/projectType via URL hash params the
// HalifaxLeadForm listens for.
export function SampleRequestLink({
  message,
  projectType = "Sample request",
  label = "Request a sample",
  tone = "dark",
  className = "",
}: {
  message: string;
  projectType?: string;
  label?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const href = `#consultation?type=${encodeURIComponent(
    projectType
  )}&msg=${encodeURIComponent(message)}`;

  const base =
    "group inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors";
  const toneCls =
    tone === "light"
      ? "text-black/70 hover:text-black"
      : "text-white/70 hover:text-white";

  return (
    <a href={href} className={`${base} ${toneCls} ${className}`}>
      {label}
      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
