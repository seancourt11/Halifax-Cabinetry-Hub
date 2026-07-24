import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplet, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroKitchen from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import elevateRoom from "@/assets/projects/md-laundry-cabinetry.jpg";
import featureLever from "@/assets/projects/nwc-marble-brass-faucet.jpg";
import productPot from "@/assets/projects/grey-oak-bar-pantry.jpg";
import productSconce from "@/assets/door-gallery-2026/04_cerused_oak_shaker.png";
import productCopper from "@/assets/projects/navy-cabinetry-brass-pulls.jpg";
import reededVanity from "@/assets/projects/reeded-oak-vanity.jpg";
import storyRoom from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import ig1 from "@/assets/projects/farmhouse-sink-blue-tile.jpg";
import ig2 from "@/assets/projects/white-oak-cabinet-detail.jpg";
import ig3 from "@/assets/projects/nwc-navy-tile-backsplash.jpg";
import ig4 from "@/assets/door-gallery-2026/04_cerused_oak_shaker.png";

const PAGE_TITLE = "Custom Kitchen Cabinetry & Bespoke Millwork | Hempston Home";
const PAGE_DESC =
  "Hempston Home designs and handcrafts custom kitchen cabinetry, vanities and built-in millwork — Halifax, Toronto, Long Beach + install coast to coast. Book a free design consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroKitchen },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: heroKitchen },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroKitchen, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Hempston Home",
          url: "/",
          publisher: { "@type": "Organization", name: "Hempston Home" },
        }),
      },
    ],
  }),
  component: Index,
});

function ShakerDoorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="2" width="8" height="20" rx="0.5" />
      <rect x="4.25" y="3.25" width="5.5" height="17.5" rx="0.25" />
      <rect x="13" y="2" width="8" height="20" rx="0.5" />
      <rect x="14.25" y="3.25" width="5.5" height="17.5" rx="0.25" />
    </svg>
  );
}

function SolidSurfaceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="0.3" y="5" width="23.4" height="14" rx="1" />
    </svg>
  );
}

function CabinetPullIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="7" cy="5" r="1" />
      <circle cx="7" cy="19" r="1" />
      <path d="M7 6v12" />
      <circle cx="17" cy="5" r="1" />
      <circle cx="17" cy="19" r="1" />
      <path d="M17 6v12" />
    </svg>
  );
}

function TileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="5.5" height="5.5" rx="0.5" />
      <rect x="9.25" y="3" width="5.5" height="5.5" rx="0.5" />
      <rect x="15.5" y="3" width="5.5" height="5.5" rx="0.5" />
      <rect x="3" y="9.25" width="5.5" height="5.5" rx="0.5" />
      <rect x="9.25" y="9.25" width="5.5" height="5.5" rx="0.5" />
      <rect x="15.5" y="9.25" width="5.5" height="5.5" rx="0.5" />
      <rect x="3" y="15.5" width="5.5" height="5.5" rx="0.5" />
      <rect x="9.25" y="15.5" width="5.5" height="5.5" rx="0.5" />
      <rect x="15.5" y="15.5" width="5.5" height="5.5" rx="0.5" />
    </svg>
  );
}

function FlooringPlanksIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="2" width="4" height="20" rx="0.5" />
      <rect x="10" y="2" width="4" height="20" rx="0.5" />
      <rect x="17" y="2" width="4" height="20" rx="0.5" />
    </svg>
  );
}

const categories = [
  { icon: ShakerDoorIcon, label: "Cabinetry", active: true },
  { icon: SolidSurfaceIcon, label: "Solid Surfaces", active: false },
  { icon: CabinetPullIcon, label: "Hardware", active: false },
  { icon: FlooringPlanksIcon, label: "Flooring", active: false },
  { icon: Droplet, label: "Faucets", active: false },
  { icon: TileIcon, label: "Tile", active: false },
];

type Category = (typeof categories)[number];

function CategoryIcon({ category: c }: { category: Category }) {
  const Icon = c.icon;
  return (
    <div
      key={c.label}
      title={`${c.label} — launching soon`}
      aria-label={`${c.label} — launching soon`}
      role="img"
      className="group flex flex-col items-center gap-4 text-white/75 grayscale transition-opacity hover:opacity-90"
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <Icon className="h-10 w-10 blur-[2px]" strokeWidth={1.1} aria-hidden="true" />
        <span className="absolute -right-2 -top-2 rounded-sm bg-black/50 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm blur-[1px]">
          SOON
        </span>
      </div>
      <div className="text-center">
        <span className="text-[10px] font-light uppercase tracking-[0.26em] text-white/90 blur-[2px]">{c.label}</span>
      </div>
    </div>
  );
}

const carouselProducts = [
  { title: "Custom Kitchen Cabinetry", image: featureLever, alt: "Bespoke white inset kitchen cabinetry with painted shaker doors", designer: "31 Westgate" },
  { title: "Cefalù — Cerused Washed Oak", image: productSconce, alt: "Cefalù cerused washed oak shaker door with white oak finish", designer: "Hempston Home" },
  { title: "White Painted Cabinetry", image: featureLever, alt: "Custom white painted kitchen cabinetry with inset doors", designer: "31 Westgate" },
  { title: "Navy Cabinetry", image: productCopper, alt: "Navy custom cabinetry with brass pulls", designer: "31 Westgate" },
];

const exploreProducts = [
  { title: "Reeded Oak Vanity", image: reededVanity, alt: "Reeded white oak vanity cabinetry with integrated storage and warm wood grain", tall: true,
    blurb: "A reeded white oak vanity built for a coastal bathroom — tactile grain, soft light, and cabinetry made to feel like furniture.", designer: "Hen House" },
  { title: "Bar & Pantry Cabinetry", image: productPot, alt: "Custom bar and pantry cabinetry", tall: false,
    blurb: "Tailored pantry and bar cabinetry designed around how you entertain, store, and live.", designer: "31 Westgate" },
  { title: "Navy Kitchen Cabinets", image: productCopper, alt: "Navy custom kitchen cabinets with painted shaker doors", tall: false,
    blurb: "Painted inset cabinetry with hand-selected hardware — made to order for kitchens that feel considered.", designer: "31 Westgate" },
];

const instagramTiles = [
  { asset: ig1, designer: "31 Westgate" },
  { asset: ig2, designer: "Sara McKeenan" },
  { asset: ig3, designer: "31 Westgate" },
  { asset: ig4, designer: "Hempston Home" },
];

function Index() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-[oklch(0.96_0_0)]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <img
          src={heroKitchen}
          alt="Glen Haven custom white painted kitchen cabinetry with stained white oak island by Hempston Home"
          width={1920}
          height={1100}
          fetchPriority="high"
          decoding="async"
          className="h-[86vh] min-h-[560px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="max-w-xl">
              <h1 className="font-display text-5xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-7xl">
                Custom<br />Cabinetry<br />+ More
              </h1>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-block border border-white/80 bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-transparent hover:text-white"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY ICON ROW */}
      <section className="border-t border-b border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <p className="mb-10 text-center text-[10px] font-medium uppercase tracking-[0.32em] text-white/60">
            Our Products
          </p>
          <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-10 md:gap-x-10 lg:gap-x-14">
            {categories
              .filter((c) => !c.active)
              .slice(0, 2)
              .map((c) => (
                <CategoryIcon key={c.label} category={c} />
              ))}

            {/* Cabinetry — centered and emphasized */}
            {(() => {
              const c = categories.find((x) => x.active)!;
              const Icon = c.icon;
              return (
                <Link
                  to="/products/door-styles"
                  className="group flex flex-col items-center gap-5 text-white transition-opacity hover:opacity-90"
                >
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <Icon className="h-12 w-12" strokeWidth={1} />
                    <span className="absolute -bottom-1.5 h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <div className="text-center">
                    <span className="text-[11px] font-light uppercase tracking-[0.26em]">{c.label}</span>
                  </div>
                </Link>
              );
            })()}

            {categories
              .filter((c) => !c.active)
              .slice(2)
              .map((c) => (
                <CategoryIcon key={c.label} category={c} />
              ))}
          </div>
        </div>
      </section>

      {/* ELEVATE EVERY DETAIL */}
      <section className="bg-[oklch(0.14_0_0)] py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden">
            <img
              src={elevateRoom}
              alt="Modern Drift custom white laundry room cabinetry with painted shaker doors and full-height storage by Hempston Home"
              width={1600}
              height={780}
              loading="lazy"
              className="h-[60vh] min-h-[380px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-md px-8 sm:px-14">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">Hempston Home</p>
                <h2 className="mt-4 font-display text-3xl font-light uppercase tracking-[0.04em] text-white sm:text-5xl">
                  Cabinetry Built to Last
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
                  Custom kitchen cabinets, built-ins, vanities, and millwork — designed, built, and finished
                  for homes that improve with age.
                </p>
                <div className="mt-8">
                  <Link
                    to="/products/door-styles"
                    className="inline-block border border-white/80 bg-white px-7 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-transparent hover:text-white"
                  >
                    Discover the Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEMPSTON HOME PRODUCTS — carousel */}
      <section className="bg-[oklch(0.14_0_0)] py-20">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-light uppercase tracking-[0.28em] text-white sm:text-3xl">
            Custom Cabinetry Collections
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70">
            From shaker kitchens to inset face-frame cabinets — explore the styles, materials, and
            finishes that define our custom cabinetry work.
          </p>
          <Link
            to="/products/door-styles"
            className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 underline-offset-8 hover:underline"
          >
            View All Products →
          </Link>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="mx-auto flex max-w-7xl items-stretch justify-center gap-6 px-5 sm:px-8">
            {carouselProducts.map((p, i) => {
              const isFocus = i === 1;
              const isDoorRender = p.image === productSconce;
              return (
                <article
                  key={i}
                  className={`relative shrink-0 overflow-hidden transition-all ${
                    isFocus ? "w-[340px] sm:w-[420px]" : "w-[220px] sm:w-[300px] opacity-40"
                  } ${isDoorRender ? "bg-white" : ""}`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className={`w-full ${isDoorRender ? "object-contain p-4 sm:p-6" : "object-cover"} ${isFocus ? "h-[520px]" : "h-[520px] blur-sm"}`}
                  />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="absolute inset-x-0 top-0 flex justify-center py-6">
                    <span className="text-[10px] font-light uppercase tracking-[0.28em] text-white/90">
                      {p.title}
                    </span>
                  </div>
                  <div className={`absolute inset-x-0 flex justify-center px-4 ${isFocus ? "bottom-36" : "bottom-6"}`}>
                    <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-4 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 backdrop-blur-xl">
                      <span className="text-[9px] font-light uppercase tracking-[0.2em] text-black/80">DESIGN by</span>
                      <span className="text-[11px] font-medium text-black">{p.designer}</span>
                    </div>
                  </div>
                  {isFocus && (
                    <div className="absolute inset-x-6 bottom-6 bg-white p-6 text-center text-black">
                      <p className="text-xs leading-relaxed text-black/70">
                        Cefalù cerused washed oak shaker doors, hand-finished to highlight the grain and
                        built to order for custom kitchens and built-ins.
                      </p>
                      <Link
                        to="/products/door-styles"
                        className="mt-5 inline-block border border-black bg-black px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black"
                      >
                        View Item
                      </Link>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE — light */}
      <section className="bg-[oklch(0.98_0_0)] py-24 text-[oklch(0.15_0_0)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center font-display text-2xl font-light uppercase tracking-[0.28em] sm:text-3xl">
            Explore Custom Cabinetry Work
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Tall left */}
            <article className="group">
              <div className="relative overflow-hidden bg-neutral-100">
                <img
                  src={exploreProducts[0].image}
                  alt={exploreProducts[0].alt}
                  loading="lazy"
                  className="h-[640px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-4 flex justify-center px-4">
                  <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-4 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 backdrop-blur-xl">
                    <span className="text-[9px] font-light uppercase tracking-[0.2em] text-black/80">DESIGN by</span>
                    <span className="text-[11px] font-medium text-black">{exploreProducts[0].designer}</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.22em]">
                <Link to="/products/door-styles" className="hover:text-neutral-600">
                  {exploreProducts[0].title} →
                </Link>
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                {exploreProducts[0].blurb}
              </p>
            </article>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              {exploreProducts.slice(1).map((p) => (
                <article key={p.title} className="group">
                  <div className="relative overflow-hidden bg-neutral-100">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-0 bottom-4 flex justify-center px-4">
                      <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-4 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 backdrop-blur-xl">
                        <span className="text-[9px] font-light uppercase tracking-[0.2em] text-black/80">DESIGN by</span>
                        <span className="text-[11px] font-medium text-black">{p.designer}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-5 text-sm font-medium uppercase tracking-[0.22em]">
                    <Link to="/products/door-styles" className="hover:text-neutral-600">
                      {p.title} →
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600">{p.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE HEMPSTON STORY */}
      <section className="bg-[oklch(0.14_0_0)] py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center font-display text-2xl font-light uppercase tracking-[0.28em] text-white sm:text-3xl">
            The Hempston Story
          </h2>

          <div className="relative mt-12 overflow-hidden">
            <img
              src={storyRoom}
              alt="Glen Haven custom white painted kitchen cabinetry with brass hood and shaker doors by Hempston Home"
              width={1600}
              height={800}
              loading="lazy"
              className="h-[62vh] min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-white/70">
            Hempston Home was born out of a devotion to timeless cabinetry. Every cabinet is built to feel
            like a permanent part of the home — from the first kitchen sketch to the final hardware
            installation. We work with a small circle of makers who share our belief that good things
            take time.
          </p>
          <div className="mt-8 text-center">
            <Link
              to="/custom-cabinetry-halifax"
              className="inline-block border border-white/80 bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-transparent hover:text-white"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* #HEMPSTONHOME */}
      <section className="bg-[oklch(0.98_0_0)] py-24 text-[oklch(0.15_0_0)]">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-light uppercase tracking-[0.28em] sm:text-3xl">
            #HempstonHome
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            See how designers, architects, and homeowners are bringing Hempston Home into their
            spaces. Tag us on Instagram to be featured.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {instagramTiles.map((tile, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden bg-neutral-100"
              >
                <img
                  src={tile.asset}
                  alt={`Custom Hempston Home cabinetry project ${i + 1} on Instagram`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-3 flex justify-center px-3">
                  <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-3 py-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 backdrop-blur-xl">
                    <span className="text-[8px] font-light uppercase tracking-[0.2em] text-black/80">DESIGN by</span>
                    <span className="text-[10px] font-medium text-black">{tile.designer}</span>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/60 to-transparent px-3 py-3 text-left text-[10px] font-light uppercase tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
                  @HempstonHome
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEO COPY */}
      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)] py-20 text-[oklch(0.96_0_0)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
            Custom Cabinet Makers
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] text-white sm:text-4xl">
            Bespoke Kitchen Cabinetry, Vanities & Built-In Millwork
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70">
            <p>
              Hempston Home is a custom cabinet maker designing and handcrafting bespoke kitchens,
              bathroom vanities, built-in millwork, and pantry cabinetry for architects, interior
              designers, and homeowners. Every project is drawn, built, and finished under one roof —
              from the first site measure to white-glove installation.
            </p>
            <p>
              We specialise in Shaker kitchens, inset face-frame cabinetry, rift-cut white oak
              vanities, painted slab cabinets, and reeded walnut millwork — hand-finished with
              conversion varnish or <a href="https://www.rubiomonocoat.com/" target="_blank" rel="noopener" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">Rubio Monocoat</a> hardwax oil. If you can draw it, we can build it.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link to="/products/door-styles" className="border border-white/15 p-5 transition-colors hover:border-white/40">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">01</p>
              <p className="mt-3 font-display text-lg font-light uppercase tracking-[0.06em] text-white">Cabinet Door Styles</p>
              <p className="mt-2 text-sm text-white/60">Shaker, slab, beaded inset, raised & recessed panel, reeded.</p>
            </Link>
            <Link to="/products/cabinet-styles" className="border border-white/15 p-5 transition-colors hover:border-white/40">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">02</p>
              <p className="mt-3 font-display text-lg font-light uppercase tracking-[0.06em] text-white">Cabinet Construction</p>
              <p className="mt-2 text-sm text-white/60">Inset face frame, full and partial overlay, frameless European.</p>
            </Link>
            <Link to="/products/colours-finishes" className="border border-white/15 p-5 transition-colors hover:border-white/40">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">03</p>
              <p className="mt-3 font-display text-lg font-light uppercase tracking-[0.06em] text-white">Colours & Finishes</p>
              <p className="mt-2 text-sm text-white/60">Hand-sprayed paints and hand-rubbed hardwax-oil stains.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)] py-16 text-[oklch(0.96_0_0)]">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
            Physical Locations
          </p>
          <p className="mt-4 font-display text-2xl font-light uppercase tracking-[0.12em] text-white sm:text-3xl">
            Halifax · Toronto · Long Beach
          </p>
          <p className="mt-3 text-sm font-light uppercase tracking-[0.22em] text-white/70">
            + installing coast to coast
          </p>
        </div>
      </section>


      <SiteFooter />
    </div>
  );
}
