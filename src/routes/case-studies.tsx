import { ArrowRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema } from "@/lib/schema";
import ogImg from "@/assets/og/og-case-studies.jpg";
import ghImg from "@/assets/projects/gh-oak-island-painted-beams.jpg";

import nwcImg from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import kentImg from "@/assets/projects/dba-kent-kitchen-1.jpg";
import peterLoweImg from "@/assets/projects/dba-pl-island-kitchen.jpg";

const PAGE_TITLE = "Cabinetry Case Studies — Custom Kitchens & Millwork | Hempston";
const PAGE_DESC =
  "A curated look at Hempston Home cabinetry commissions — coastal kitchens, heritage millwork, and whole-home installations designed with 31 Westgate and DB Architecture.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { property: "og:image", content: ogImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImg },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Case Studies", item: "/case-studies" },
          ]),
        ),
      },
    ],
  }),
  component: CaseStudiesIndex,
});

const studies = [
  {
    slug: "glen-haven",
    location: "Painted Shaker Kitchen",
    title: "Coastal Shaker Kitchen",
    summary:
      "White painted Shaker cabinetry with a stained white oak island, brass hood, and glass-front butler's pantry.",
    image: ghImg,
    designer: "31 Westgate Design Studio",
    externalUrl: "https://www.31westgate.com/glen-haven/",
  },
  {
    slug: "house-on-kent",
    location: "Transitional Family Kitchen",
    title: "House on Kent",
    summary:
      "A warm, durable kitchen designed for family living at the edge of Hemlock Ravine — natural materials, subtle transitions, and cabinetry built for daily use.",
    image: kentImg,
    designer: "DB Architecture",
    externalUrl: "https://www.dbarchitecture.ca/project/house-on-kent",
  },
  {
    slug: "house-on-peter-lowe",
    location: "Vaulted Westmount Kitchen",
    title: "House on Peter Lowe",
    summary:
      "A calm, cohesive redesign beneath newly vaulted ceilings — reclaimed space, clarity, and a kitchen that anchors the home.",
    image: peterLoweImg,
    designer: "DB Architecture",
    externalUrl: "https://www.dbarchitecture.ca/project/house-on-peter-lowe",
  },
  {
    slug: "northwest-cove",
    location: "White Oak Island Kitchen",
    title: "White Oak Island Kitchen",
    summary:
      "Painted white perimeter cabinetry with a monolithic stained white oak island, integrated appliance panels, and marble waterfall.",
    image: nwcImg,
    designer: "31 Westgate Design Studio",
    externalUrl: "https://www.31westgate.com/north-west-cove/",
  },
];

function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-5 pb-16 pt-32 text-center sm:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">Case Studies</p>
        <h1 className="mt-5 font-display text-4xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-6xl">
          Kitchens, Pantries<br />+ Whole Homes
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75">
          A closer look at recent Hempston cabinetry commissions — brief, materials, and the
          craftsmanship behind each finished room. Select a project to view the full story on the designer's site.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-32 sm:px-8">
        {studies.map((s) => (
          <a
            key={s.slug}
            href={s.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
          >
            <div className="overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} — custom Hempston cabinetry, designed by ${s.designer}`}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">{s.location}</p>
              <h2 className="mt-4 font-display text-2xl font-light uppercase tracking-[0.05em] text-white sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{s.summary}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 transition-opacity group-hover:opacity-70">
                View on {s.designer} <ArrowRight className="h-4 w-4" />
              </p>
            </div>
          </a>
        ))}
      </section>

      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
