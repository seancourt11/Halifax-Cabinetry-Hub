import { Link } from "@tanstack/react-router";

// Inline CTA banner for product pages: prompts visitors to request a fully
// custom door profile, colour, or stain — reinforcing that Hempston is 100%
// custom and the on-page examples are not a fixed catalogue.
export function CustomRequestCTA({
  tone = "light",
  eyebrow = "100% Custom",
  heading = "Don't see it? Request a custom door, colour or stain.",
  body = "Every Hempston kitchen is built to order. Send us a reference — a photo, a paint chip, a proprietary profile — and we'll match it or design it from scratch.",
  buttonLabel = "Request a custom door, colour or stain",
}: {
  tone?: "light" | "dark";
  eyebrow?: string;
  heading?: string;
  body?: string;
  buttonLabel?: string;
}) {
  const isDark = tone === "dark";
  return (
    <section
      className={
        isDark
          ? "border-y border-white/10 bg-[oklch(0.14_0_0)] text-white"
          : "border-y border-black/10 bg-white text-black"
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p
            className={
              isDark
                ? "text-[10px] font-medium uppercase tracking-[0.28em] text-white/70"
                : "text-[10px] font-medium uppercase tracking-[0.28em] text-black/60"
            }
          >
            {eyebrow}
          </p>
          <h2
            className={`mt-4 font-display text-2xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-3xl ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`mt-4 text-sm leading-relaxed sm:text-base ${
              isDark ? "text-white/70" : "text-black/65"
            }`}
          >
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <Link
            to="/work-with-us"
            className={
              isDark
                ? "inline-flex items-center justify-center whitespace-nowrap border border-white bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-colors hover:bg-transparent hover:text-white"
                : "inline-flex items-center justify-center whitespace-nowrap border border-black bg-black px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
            }
          >
            {buttonLabel}
          </Link>
          <Link
            to="/contact"
            className={
              isDark
                ? "inline-flex items-center justify-center whitespace-nowrap border border-white/40 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-white"
                : "inline-flex items-center justify-center whitespace-nowrap border border-black/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-colors hover:border-black"
            }
          >
            Talk to a designer
          </Link>
        </div>
      </div>
    </section>
  );
}
