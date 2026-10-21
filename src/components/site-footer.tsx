import { Link, useRouterState } from "@tanstack/react-router";
import {
  LOCATION_LIST,
  MONCTON_PHONE_DISPLAY,
  MONCTON_PHONE_TEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  mapsUrl,
} from "@/lib/site";

const productLinks = [
  { label: "Cabinet Door Styles", to: "/products/door-styles" as const },
  { label: "Construction Styles", to: "/products/cabinet-styles" as const },
  { label: "Colours and Finishes", to: "/products/colours-finishes" as const },
  { label: "Brands We Work With", to: "/products/brands" as const },
];

const studioLinks = [
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Case Studies", to: "/case-studies" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "How We Work", to: "/work-with-us" as const },
  { label: "Rush Cabinets", to: "/rush-custom-kitchen-cabinets" as const },
  { label: "Halifax", to: "/custom-cabinetry-halifax" as const },
  { label: "Toronto", to: "/custom-cabinetry-toronto" as const },
  { label: "All locations", to: "/locations" as const },
];

export function SiteFooter() {
  const onMoncton = useRouterState({
    select: (s) => s.location.pathname === "/custom-cabinetry-moncton",
  });
  const studios = onMoncton ? studioLinks.filter((item) => item.label !== "Halifax") : studioLinks;
  const locations = onMoncton
    ? LOCATION_LIST.filter((loc) => loc.key !== "halifax")
    : LOCATION_LIST;
  const phoneDisplay = onMoncton ? MONCTON_PHONE_DISPLAY : PHONE_DISPLAY;
  const phoneTel = onMoncton ? MONCTON_PHONE_TEL : PHONE_TEL;

  return (
    <footer className="border-t border-white/10 bg-[oklch(0.14_0_0)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              aria-label="Hempston Home"
              className="font-display text-2xl font-light uppercase tracking-[0.28em] text-white"
            >
              Hempston Home
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
              Custom kitchen cabinets, vanities and built-in millwork. We install across Canada and
              the United States.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex border border-white/25 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-[oklch(0.14_0_0)]"
            >
              Book a Consultation
            </Link>
          </div>

          <FooterColumn eyebrow="01 Products" items={productLinks} />
          <FooterColumn eyebrow="02 Studio" items={studios} />

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">
              03 Contact
            </p>
            <ul className="mt-6 space-y-4 text-sm text-white/90">
              {locations.map((loc) => (
                <li key={loc.key}>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/85">
                    {loc.role}
                  </p>
                  <a href={mapsUrl(loc)} className="mt-1 block transition-colors hover:text-white">
                    {loc.copyLabel}
                  </a>
                </li>
              ))}
              <li>
                <a href={phoneTel} className="transition-colors hover:text-white">
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hempstonhome.com"
                  className="transition-colors hover:text-white"
                >
                  info@hempstonhome.com
                </a>
              </li>
              <li>Monday to Friday, 9am to 5pm, by appointment</li>
              <li>
                <a
                  href="https://www.instagram.com/hempstonhome"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">
            We install across Canada and the United States.
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">
            © {new Date().getFullYear()} Hempston Home
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
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">{eyebrow}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/90">
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
