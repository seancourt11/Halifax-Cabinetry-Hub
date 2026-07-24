import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[oklch(0.14_0_0)]/95 backdrop-blur">
      {/* Top utility bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
              Canada, USA.
            </span>
            <Link
              to="/contact"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <a
              href="tel:+19027198497"
              className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              (902) 719-8497
            </a>
            <Link
              to="/contact"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
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
          <nav className="mt-7 hidden items-center gap-12 lg:flex">
            <Link
              to="/"
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 transition-colors hover:text-white"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 transition-colors hover:text-white focus:outline-none">
                Custom Cabinets
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="min-w-[14rem] rounded-none border border-white/10 bg-[oklch(0.14_0_0)] p-1"
              >
                {customCabinets.map((l) => (
                  <DropdownMenuItem
                    key={l.label}
                    asChild
                    className="rounded-none focus:bg-white/5 focus:text-white"
                  >
                    <Link
                      to={l.to}
                      className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70"
                    >
                      {l.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 transition-colors hover:text-white focus:outline-none">
                Studio
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="min-w-[12rem] rounded-none border border-white/10 bg-[oklch(0.14_0_0)] p-1"
              >
                {studioLinks.map((l) => (
                  <DropdownMenuItem
                    key={l.label}
                    asChild
                    className="rounded-none focus:bg-white/5 focus:text-white"
                  >
                    <Link
                      to={l.to}
                      className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70"
                    >
                      {l.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 transition-colors hover:text-white focus:outline-none">
                Locations
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="min-w-[12rem] rounded-none border border-white/10 bg-[oklch(0.14_0_0)] p-1"
              >
                {locations.map((l) => (
                  <DropdownMenuItem
                    key={l.label}
                    asChild
                    className="rounded-none focus:bg-white/5 focus:text-white"
                  >
                    <Link
                      to={l.to}
                      className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70"
                    >
                      {l.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/contact"
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 transition-colors hover:text-white"
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
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-white/10 bg-[oklch(0.14_0_0)] p-0"
            >
              <SheetHeader className="border-b border-white/10 p-6 text-left">
                <SheetTitle className="font-display text-xl font-light uppercase tracking-[0.35em] text-white">
                  Hempston
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6">
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </SheetClose>
                <div className="mt-4 pt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                  Custom Cabinets
                </div>
                {customCabinets.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      to={item.to}
                      className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4 pt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                  Studio
                </div>
                {studioLinks.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <Link
                      to={l.to}
                      className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4 pt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                  Locations
                </div>
                {locations.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <Link
                      to={l.to}
                      className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
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
