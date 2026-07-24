import { createFileRoute, Link } from "@tanstack/react-router";
import { PencilRuler, Scan, HardHat, FileText, Palette, Gem, Hammer, PackageCheck, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import ogImg from "@/assets/og/og-services.jpg";
import heroImg from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import kitchenImg from "@/assets/projects/modern-marble-kitchen.jpg";
import measureImg from "@/assets/projects/white-oak-cabinet-detail.jpg";
import siteVisitImg from "@/assets/projects/md-laundry-cabinetry.jpg";
import shopDrawImg from "@/assets/projects/gh-butler-pantry-glass.jpg";
import samplesImg from "@/assets/projects/grey-oak-bar-pantry.jpg";
import stoneImg from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import millworkImg from "@/assets/projects/crombie-warm-oak-stairwell.jpg";
import preStageImg from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";

const PAGE_TITLE = "Custom Cabinetry Services: Design, Shop Drawings & Install | Hempston";
const PAGE_DESC =
  "Kitchen design, 3D laser site measures, shop drawings, custom samples & stone management — end-to-end for every Hempston custom cabinetry commission.";

const servicesFaqs = [
  {
    q: "What services are included in a Hempston custom cabinetry project?",
    a: "Every commission includes kitchen design, 3D laser site measures, coordination site visits with your builder and trades, construction-grade shop drawings, custom door and finish samples, and full solid-surface (stone) procurement and management — all delivered by one team.",
  },
  {
    q: "Do you charge separately for design and shop drawings?",
    a: "No. Design, drafting, shop drawings, and site meetings are bundled into every Hempston commission rather than sold à la carte. You receive one itemised cabinetry quote after your initial consultation, with no hidden design retainers.",
  },
  {
    q: "Can Hempston work directly with our architect, interior designer, or builder?",
    a: "Yes — we regularly collaborate with architects, interior designers, and general contractors. We can work from your existing drawings, join trade coordination meetings, and issue shop drawings your team can sign off on.",
  },
  {
    q: "Do you offer 3D renderings before we approve the project?",
    a: "Yes. Plan drawings, elevations, and 3D perspectives are part of the design deliverable so you can see and approve the cabinetry, hardware, and finish palette before fabrication begins.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: ogImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ogImg },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(servicesFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            serviceSchema({ name: "Kitchen Design", description: "Full custom kitchen design led by a Hempston designer — layouts, elevations, appliance and plumbing coordination, and material curation.", url: "/services#kitchen-design" }),
            serviceSchema({ name: "3D Laser Site Measures", description: "Millimetre-accurate 3D laser scanning of your space to drive precision cabinetry design and inset construction.", url: "/services#3d-site-measure" }),
            serviceSchema({ name: "Site Visits & Trade Coordination", description: "Pre-construction, mid-build, and punch-list site meetings with your builder, designer, and trades.", url: "/services#site-visits" }),
            serviceSchema({ name: "Shop Drawings", description: "Construction-grade plans, elevations, sections, and joinery details for every cabinet before fabrication.", url: "/services#shop-drawings" }),
            serviceSchema({ name: "Custom Samples", description: "Hand-made door, wood, paint, and stain samples in your specific finish so you approve exactly what gets built.", url: "/services#custom-samples" }),
            serviceSchema({ name: "Millwork Fabrication", description: "In-house millwork fabrication — custom cabinetry, panelling, built-ins, and architectural millwork built by Hempston craftsmen on our own machines.", url: "/services#millwork-fabrication" }),
            serviceSchema({ name: "Pre-Staging & Full Shop Assembly", description: "Every project is fully assembled and pre-staged in our facility before it ships — cabinetry, panels, mouldings, and hardware dry-fit and aligned so install day is flawless. Stone is prepped and templated for install, not pre-staged.", url: "/services#pre-staging" }),
            serviceSchema({ name: "Solid Surface Procurement & Management", description: "Full stone and solid-surface management — selection, layout, templating, fabrication oversight, and installation coordination.", url: "/services#solid-surfaces" }),
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "kitchen-design",
    icon: PencilRuler,
    eyebrow: "01 — Design",
    title: "Kitchen Design",
    image: kitchenImg,
    alt: "Custom light oak kitchen cabinetry designed by Hempston",
    body: "Full custom kitchen design led by a Hempston designer. We work from your architectural drawings, lifestyle, and how you actually cook — laying out zones, sightlines, storage, appliance integration, and cabinetry elevations until every millimetre earns its place. Deliverables include plan drawings, elevations, a curated door / material / finish palette, and a fixed-scope quote you can build against.",
    bullets: [
      "Concept plans, elevations, and 3D perspectives",
      "Appliance and plumbing coordination with your trades",
      "Door style, wood species, paint, stain, and hardware curation",
      "Fixed-scope proposal with itemised cabinetry pricing",
    ],
  },
  {
    id: "3d-site-measure",
    icon: Scan,
    eyebrow: "02 — Capture",
    title: "3D Site Measures",
    image: measureImg,
    alt: "Precision measured white oak cabinetry detail",
    body: "Before a single cabinet is drawn, we capture your space with a millimetre-accurate 3D laser scan. That point cloud becomes the base file every drawing, machine, and installer works from — so out-of-square walls, sloped floors, and bulkheads are designed for, not discovered on install day. Inset cabinetry lives and dies by this step.",
    bullets: [
      "Millimetre-accurate laser scan of the full room",
      "Point cloud drops directly into our CAD model",
      "Deviation report on out-of-square walls & floor slope",
      "Foundational for tight-tolerance inset construction",
    ],
  },
  {
    id: "site-visits",
    icon: HardHat,
    eyebrow: "03 — Coordination",
    title: "Site Visits & Trade Meetings",
    image: siteVisitImg,
    alt: "Custom inset laundry cabinetry with drawer bank",
    body: "Cabinetry doesn't live in a vacuum — it meets stone, tile, plumbing, electrical, HVAC, and trim. Your Hempston project lead attends key site meetings with your builder, designer, and trades to coordinate blocking, rough-ins, tolerances, and sequencing. Fewer surprises, cleaner reveals, and a build everyone signs off on.",
    bullets: [
      "Pre-construction walk-through with builder & GC",
      "Rough-in coordination for plumbing, electrical, HVAC",
      "Mid-build check-ins as walls close and stone templates",
      "Punch-list walk with your designer on completion",
    ],
  },
  {
    id: "shop-drawings",
    icon: FileText,
    eyebrow: "04 — Documentation",
    title: "Shop Drawings",
    image: shopDrawImg,
    alt: "Glass-front butler pantry cabinetry with fitted uppers",
    body: "Every commission is documented in full construction-grade shop drawings before it hits the shop floor. Plans, elevations, sections, and joinery details for every cabinet — reviewed and signed off by you and your designer. It's how we lock the design, protect the budget, and give our craftsmen a single source of truth.",
    bullets: [
      "Plan, elevation, and section views for every run",
      "Joinery, hardware, and reveal callouts",
      "Client & designer sign-off before manufacture",
      "Delivered as PDF and native CAD to your team",
    ],
  },
  {
    id: "custom-samples",
    icon: Palette,
    eyebrow: "05 — Material",
    title: "Custom Samples",
    image: samplesImg,
    alt: "Grey-stained white oak cabinetry sample surfaces",
    body: "Colour on a chip is not colour on your door. We produce full-size custom samples in your exact door profile, wood species, and finish — sprayed or hand-rubbed the way your kitchen will be. View them in your home, under your light, before we commit a single sheet of veneer or gallon of paint.",
    bullets: [
      "True-to-spec door profile and wood species",
      "Custom colour matching to any paint or stain reference",
      "Rubio Monocoat, conversion varnish, and lacquer finishes",
      "Reviewed in your home under your lighting",
    ],
  },
  {
    id: "solid-surfaces",
    icon: Gem,
    eyebrow: "06 — Procurement",
    title: "Solid Surfaces Procurement & Management",
    image: stoneImg,
    alt: "Custom white oak island cabinetry with stone waterfall",
    body: "Cabinetry and stone need to move as one project, not two. We manage slab selection, templating, fabrication, and installation of your countertops, waterfalls, and backsplashes — coordinated directly with our cabinetry install schedule. One point of contact, one set of tolerances, one on-time reveal.",
    bullets: [
      "Slab sourcing from vetted marble, quartzite & quartz yards",
      "Bookmatch, vein, and edge-profile selection with you",
      "Digital templating scheduled around cabinet install",
      "Fabrication + install coordinated by your Hempston lead",
    ],
  },
  {
    id: "millwork-fabrication",
    icon: Hammer,
    eyebrow: "07 — Fabrication",
    title: "Millwork Fabrication",
    image: millworkImg,
    alt: "Custom warm oak millwork and stairwell panelling by Hempston",
    body: "Beyond kitchens, our shop fabricates the full scope of architectural millwork — panelled walls, built-in libraries, mudrooms, closets, bars, staircases, and integrated furniture. Every piece is built by Hempston craftsmen on our own CNC, edgebander, and hand-finishing lines, so the same tolerances and finish quality carry from cabinetry into every fixed element of the home.",
    bullets: [
      "Architectural panelling, built-ins, and integrated furniture",
      "Solid wood and veneered casework in any species",
      "CNC-cut, hand-finished, and shop-assembled in-house",
      "Matched finishes across cabinetry and millwork packages",
    ],
  },
  {
    id: "pre-staging",
    icon: PackageCheck,
    eyebrow: "08 — Pre-Staging",
    title: "Pre-Staging & Full Shop Assembly",
    image: preStageImg,
    alt: "Fully assembled white Hempston kitchen with brass hood pre-staged in shop",
    body: "Before anything ships, your project is fully assembled and pre-staged in our facility — cabinetry, panels, mouldings, and hardware dry-fit into the exact layout of your room. Reveals, alignments, and mitres are checked and tuned in-house, not on your job site. Final scribing happens on site against real walls and floors, and stone is prepped and templated for install rather than pre-staged. When the truck leaves, install becomes a placement exercise, not a problem-solving one.",
    bullets: [
      "Full room mocked up and dry-fit in our shop",
      "Reveals, alignments, and mitres tuned before shipping",
      "Hardware, panels, and mouldings verified against shop drawings",
      "Stone prepped and templated for final install on site",
      "Faster, cleaner install with fewer job-site surprises",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.14 0 0)" }}>
      <SiteHeader />

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Custom white painted Hempston kitchen with stained white oak island"
          width={1600}
          height={1000}
          className="h-[70vh] min-h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
            <p className="tracked text-xs font-medium text-white/70">Project Services</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.12em] text-white text-balance sm:text-6xl">
              Bespoke Solutions for Every Project
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              From first sketch to final install, every Hempston commission is guided by a single
              team through eight deliberate stages of design, documentation, fabrication, and coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Intro card */}
      <section className="bg-background px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-2xl border border-border bg-card p-12 text-center shadow-[var(--shadow-soft)] sm:p-16">
          <p className="tracked text-xs font-medium text-accent">Full-service cabinetry</p>
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.14em] text-foreground sm:text-4xl">
            One team,<br /> start to install
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            The services below are how we deliver a Hempston project — bundled into every
            commission, not sold à la carte. Your designer, drafter, cabinetmaker, and installer
            work from a single set of drawings so nothing is lost between hands.
          </p>
        </div>
      </section>

      {/* Service list — alternating zigzag */}
      <section className="bg-[oklch(0.14_0_0)] py-24 sm:py-32">
        <div className="mx-auto mb-20 max-w-2xl px-5 text-center sm:px-8">
          <p className="tracked text-xs font-medium text-white/60">Services</p>
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.18em] text-white sm:text-4xl">
            What's Included
          </h2>
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-5 sm:space-y-32 sm:px-8">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={s.id}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className={reverse ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 text-white/60">
                    <s.icon className="h-5 w-5" strokeWidth={1.2} />
                    <span className="tracked text-xs font-medium">{s.eyebrow}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.1em] text-white sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-white/75">{s.body}</p>
                  <ul className="mt-8 space-y-3 border-t border-white/15 pt-6">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-white/80">
                        <span className="mt-2 h-px w-4 flex-none bg-white/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-background px-5 py-24 text-center sm:px-8">
        <p className="tracked text-xs font-medium text-accent">Ready when you are</p>
        <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.18em] text-foreground sm:text-4xl">
          Start Your Commission
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every Hempston project begins with a conversation. Tell us about your space and we'll walk
          you through design, timeline, and budget in a complimentary consultation.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 tracked text-xs font-medium text-background transition-colors hover:bg-transparent hover:text-foreground"
        >
          Request a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* FAQ — natural Q&A voice for AI/LLM search */}
      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="tracked text-xs font-medium text-white/60">FAQ</p>
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.14em] text-white sm:text-4xl">
            Custom Cabinetry Services — Frequently Asked
          </h2>
          <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {servicesFaqs.map((f) => (
              <div key={f.q} className="grid gap-3 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
                <dt className="font-display text-lg font-medium uppercase tracking-[0.06em] text-white">
                  {f.q}
                </dt>
                <dd className="text-sm leading-relaxed text-white/75">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
