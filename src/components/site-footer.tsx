import { Link } from "@tanstack/react-router";

const productLinks = [
  { label: "Cabinet Door Styles", to: "/products/door-styles" as const },
  { label: "Construction Styles", to: "/products/cabinet-styles" as const },
  { label: "Colours & Finishes", to: "/products/colours-finishes" as const },
  { label: "Brands We Work With", to: "/products/brands" as const },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[oklch(0.14_0_0)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-light uppercase tracking-[0.28em] text-white"
            >
              Hempston
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Bespoke cabinetry and fine millwork, designed and built for homes from coast to
              coast. Heirloom craftsmanship, made to measure.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex border border-white/25 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-[oklch(0.14_0_0)]"
            >
              Book a Consultation
            </Link>
          </div>

          <FooterColumn eyebrow="01 — Products" items={productLinks} />

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
              02 — Contact
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>Halifax · Toronto · Long Beach</li>
              <li className="text-white/50">Installing coast to coast</li>
              <li>
                <Link to="/locations" className="transition-colors hover:text-white">
                  All locations
                </Link>
              </li>
              <li>
                <a href="tel:+19027198497" className="transition-colors hover:text-white">
                  (902) 719-8497
                </a>
              </li>
              <li>
                <a href="mailto:info@hempstonhome.com" className="transition-colors hover:text-white">
                  info@hempstonhome.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
              03 — Studio
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>Mon–Fri · 9am–5pm</li>
              <li>By appointment</li>
              <li>Installing coast to coast</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
            Halifax · Toronto · Long Beach + installing coast to coast
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
            © {new Date().getFullYear()} Hempston
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">{eyebrow}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
