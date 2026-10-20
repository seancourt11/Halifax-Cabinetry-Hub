import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { faqPageSchema, SITE_URL } from "@/lib/schema";
import {
  HALIFAX_BUILD_SENTENCE,
  KITCHEN_PRICE_LABEL,
  LEAD_TIME_LABEL,
  VANITY_PRICE_LABEL,
  WARRANTY_LABEL,
} from "@/lib/site";
import { VisibleFaq } from "@/components/visible-faq";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
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

const PAGE_TITLE = "Custom Cabinetry and Millwork Nova Scotia | Hempston Home";
const PAGE_DESC =
  "Hempston Home designs and builds 100% custom kitchen cabinets and millwork in Halifax, Nova Scotia. Built in Canada. Book a free consultation.";

const homeFaqs = [
  {
    q: "Where are Hempston Home cabinets built?",
    a: `${HALIFAX_BUILD_SENTENCE} Built in Canada. We install across Canada and the United States.`,
  },
  {
    q: "How much does a Hempston Home kitchen cost?",
    a: `A full custom kitchen typically runs from ${KITCHEN_PRICE_LABEL}. Vanities and built-ins usually start between ${VANITY_PRICE_LABEL}. Quotes are itemised in writing.`,
  },
  {
    q: "How long does a custom kitchen take?",
    a: `Most kitchens take ${LEAD_TIME_LABEL} from the first design consultation to installation. Qualifying rush projects can be about 6 weeks. We confirm the timeline in writing before any deposit.`,
  },
  {
    q: "What warranty do you offer?",
    a: `Hempston Home warrants cabinetry workmanship for 5 years. Manufacturer warranties on hardware and finishes are passed along in the project agreement.`,
  },
];
const ABSOLUTE_URL = SITE_URL;
const ABSOLUTE_IMAGE = `${SITE_URL}${heroKitchen}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { property: "og:image", content: ABSOLUTE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ABSOLUTE_IMAGE },
    ],
    links: [
      { rel: "canonical", href: ABSOLUTE_URL },
      { rel: "preload", as: "image", href: heroKitchen, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(homeFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: ABSOLUTE_URL,
          name: PAGE_TITLE,
          description: PAGE_DESC,
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["#home-summary"],
          },
        }),
      },
    ],
  }),
  component: Index,
});

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
              <h1 className="font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
                Custom Cabinetry and Millwork, Made in Nova Scotia
              </h1>
              <p id="home-summary" className="mt-6 max-w-md text-sm leading-relaxed text-white/80">
                Hempston Home is a Halifax, Nova Scotia cabinet studio that designs, builds and installs 100% custom kitchens, vanities and built-ins. Built in Canada. Most kitchens take {LEAD_TIME_LABEL} and start around $25,000. We install across Canada and the United States.
              </p>
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

      <section className="border-y border-white/10 bg-[oklch(0.98_0_0)] text-[oklch(0.15_0_0)]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-4 sm:px-8">
          {[
            { k: "Based in", v: "Halifax, Nova Scotia" },
            { k: "Kitchens", v: `From ${KITCHEN_PRICE_LABEL.split(" to ")[0]}` },
            { k: "Lead time", v: LEAD_TIME_LABEL },
            { k: "Consult", v: "Free in-home consult in HRM" },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/50">{item.k}</p>
              <p className="mt-2 text-sm">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-5 py-10 sm:px-8">
          <Link to="/products/door-styles" className="text-[11px] font-medium uppercase tracking-[0.26em] text-white hover:text-white/70">
            Cabinet door styles
          </Link>
          <Link to="/services" className="text-[11px] font-medium uppercase tracking-[0.26em] text-white hover:text-white/70">
            Services
          </Link>
          <Link to="/case-studies" className="text-[11px] font-medium uppercase tracking-[0.26em] text-white hover:text-white/70">
            Projects
          </Link>
          <Link to="/about" className="text-[11px] font-medium uppercase tracking-[0.26em] text-white hover:text-white/70">
            About
          </Link>
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
                <Link to="/case-studies" className="hover:text-neutral-600">
                  {exploreProducts[0].title}
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
                    <Link to="/case-studies" className="hover:text-neutral-600">
                      {p.title}
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
              to="/about"
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
                href="https://www.instagram.com/hempstonhome"
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
            Halifax, Toronto and Long Beach
          </p>
          <BuiltInCanadaLine className="mt-4 text-sm text-white/70" />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)] py-20 text-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">Questions</h2>
          <VisibleFaq
            items={homeFaqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light text-white"
            answerClassName="mt-3 text-sm leading-relaxed text-white/75"
          />
          <p className="mt-6 text-sm text-white/60">{WARRANTY_LABEL}.</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
