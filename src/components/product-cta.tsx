import { Link } from "@tanstack/react-router";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";

// Shared CTA band with lead form for the product pages.
export function ProductCTA({
  eyebrow = "Start your project",
  heading = "Bring these finishes home",
  body = "Book a complimentary design consultation and we'll help you choose the door style, wood, and finish that's right for your space — then handcraft it to measure.",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section id="consultation" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{body}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer to keep exploring?{" "}
            <Link to="/products/door-styles" className="font-medium text-foreground underline">
              Browse the full product range
            </Link>
            .
          </p>
        </div>
        <HalifaxLeadForm />
      </div>
    </section>
  );
}

export function ProductBreadcrumb({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <Link to="/" className="hover:text-foreground">
        Home
      </Link>
      <span className="mx-2 opacity-60">/</span>
      <Link to="/products/door-styles" className="hover:text-foreground">
        Products
      </Link>
      <span className="mx-2 opacity-60">/</span>
      <span className="text-foreground">{label}</span>
    </nav>
  );
}
