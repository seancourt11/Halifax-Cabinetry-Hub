import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

/**
 * Mobile-only sticky bottom CTA that appears after the user scrolls past
 * the hero. Encourages a consultation booking from anywhere on the page.
 */
export function StickyConsultationCTA({
  label = "Book Free Consultation",
  href = "/contact",
}: {
  label?: string;
  href?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-black/90 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        to={href}
        aria-label={`${label} — Hempston Home custom cabinetry`}
        className="flex w-full items-center justify-center gap-2 bg-white px-5 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-90"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
