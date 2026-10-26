import { Link, useRouterState } from "@tanstack/react-router";
import { MONCTON_PHONE_DISPLAY, MONCTON_PHONE_TEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { ChevronDown, Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const customCabinets = [
  { label: "Door Styles", to: "/products/door-styles" as const },
  { label: "Cabinet Styles", to: "/products/cabinet-styles" as const },
  { label: "Colours & Finishes", to: "/products/colours-finishes" as const },
  { label: "Brands We Work With", to: "/products/brands" as const },
  { label: "Services", to: "/services" as const },
  { label: "Rush / Fast Timeline", to: "/rush-custom-kitchen-cabinets" as const },
];

const studioLinks = [
  { label: "About", to: "/about" as const },
  { label: "Case Studies", to: "/case-studies" as const },
  { label: "How to Work With Us", to: "/work-with-us" as const },
];

const locations = [
  { label: "All Locations", to: "/locations" as const },
  { label: "Halifax", to: "/custom-cabinetry-halifax" as const },
  { label: "Moncton", to: "/custom-cabinetry-moncton" as const },
  { label: "Charlottetown", to: "/custom-cabinetry-charlottetown" as const },
  { label: "Fredericton", to: "/custom-cabinetry-fredericton" as const },
  { label: "Saint John", to: "/custom-cabinetry-saint-john" as const },
  { label: "St. John’s", to: "/custom-cabinetry-st-johns" as const },
];

function NavMenu({
  label,
  links,
}: {
  label: string;
  links: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
        {label}
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </summary>
      <div className="absolute left-1/2 z-50 mt-3 min-w-[14rem] -translate-x-1/2 border border-white/10 bg-[oklch(0.14_0_0)] p-2">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="block px-3 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const onMoncton = useRouterState({
    select: (s) => s.location.pathname === "/custom-cabinetry-moncton",
  });
  const locationLinks = onMoncton
    ? locations.filter((item) => item.label !== "Halifax")
    : locations;
  const phoneDisplay = onMoncton ? MONCTON_PHONE_DISPLAY : PHONE_DISPLAY;
  const phoneTel = onMoncton ? MONCTON_PHONE_TEL : PHONE_TEL;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[oklch(0.14_0_0)]/95 backdrop-blur">
      {/* Top utility bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/85">
              Canada, USA.
            </span>
            <Link
              to="/contact"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <a
              href={phoneTel}
              className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              {phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center py-7">
          {/* Centered wordmark */}
          <Link
            to="/"
            className="font-display text-2xl font-light uppercase tracking-[0.35em] text-white sm:text-3xl"
          >
            Hempston
          </Link>

          {/* Desktop navigation — generous spacing, no CTA here */}
          <nav className="mt-7 hidden items-center gap-12 lg:flex" aria-label="Primary">
            <Link
              to="/"
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 transition-colors hover:text-white"
            >
              Home
            </Link>
            <NavMenu label="Custom Cabinets" links={customCabinets} />
            <NavMenu label="Studio" links={studioLinks} />
            <NavMenu label="Locations" links={locationLinks} />
            <Link
              to="/contact"
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile menu trigger */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-white/10 bg-[oklch(0.14_0_0)] p-0"
            >
              <SheetHeader className="border-b border-white/10 p-6 text-left">
                <SheetTitle asChild>
                  <p className="font-display text-xl font-light uppercase tracking-[0.35em] text-white">
                    Hempston
                  </p>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6">
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </SheetClose>
                <div className="mt-4 pt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/85">
                  Custom Cabinets
                </div>
                {customCabinets.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      to={item.to}
                      className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4 pt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/85">
                  Studio
                </div>
                {studioLinks.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <Link
                      to={l.to}
                      className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4 pt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/85">
                  Locations
                </div>
                {locationLinks.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <Link
                      to={l.to}
                      className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="mt-6 border border-white/25 px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-[oklch(0.14_0_0)]"
                  >
                    Book a Consultation
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
