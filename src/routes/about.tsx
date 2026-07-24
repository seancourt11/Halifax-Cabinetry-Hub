import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, ORG_ID, ORG_NAME, ORG_EMAIL, ORG_PHONE, ORG_SAMEAS } from "@/lib/schema";
import ogImg from "@/assets/og/og-about.jpg";
import heroImg from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";
import workshopImg from "@/assets/projects/white-oak-cabinet-detail.jpg";

const PAGE_TITLE = "About Hempston — Custom Cabinet Makers, Halifax & Toronto";
const PAGE_DESC =
  "Meet the Hempston Home studio: 10+ years crafting custom cabinetry, 100% built-to-order, coast to coast. Our craftspeople, credentials, and design collaborators.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: ogImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ogImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: PAGE_TITLE,
          description: PAGE_DESC,
          url: "/about",
          about: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME, email: ORG_EMAIL, telephone: ORG_PHONE, sameAs: ORG_SAMEAS },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          [
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hempston Studio Team",
              jobTitle: "Custom cabinet makers, designers & installers",
              worksFor: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME },
              description: "The Hempston Home design and cabinet-making team — designers, drafters, cabinetmakers, finishers and installers working under one roof.",
            },
          ],
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "About", item: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    n: "01",
    title: "100% Custom, Never Modular",
    body: "Every cabinet is drawn, cut, and built to the room. No stock boxes, no flat-pack — the design responds to your walls, ceilings, and how you actually live.",
  },
  {
    n: "02",
    title: "One Team, Start to Install",
    body: "Designer, drafter, cabinetmaker, finisher, and installer all sit in one studio. Nothing gets lost in translation between a showroom and a factory floor.",
  },
  {
    n: "03",
    title: "Craft Over Speed",
    body: "Dovetail drawers, mortise-and-tenon face frames, hand-sanded profiles, sprayed conversion varnish or Rubio Monocoat. The details are the work.",
  },
  {
    n: "04",
    title: "Coast-to-Coast Install",
    body: "Studios in Halifax, Toronto, and Long Beach — with installation crews travelling across Canada and the United States for full-home commissions.",
  },
];

const collaborators = [
  "31 Westgate Design Studio",
  "David Bourque",
  "Sara McKeenan",
  "Hen House",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Hempston Home custom white painted shaker kitchen cabinetry with brass hood in Glen Haven, Nova Scotia"
          width={1600}
          height={1000}
          className="h-[70vh] min-h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">About Hempston Home</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-6xl">
              Custom Cabinet Makers,<br />Coast to Coast
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              Hempston Home is a fully bespoke cabinetry studio with roots in Nova Scotia and
              installs from the Atlantic to the Pacific. Ten-plus years of kitchens, vanities,
              butler's pantries, and built-in millwork — designed, drawn, and built under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Definitional / at-a-glance for AI search */}
      <section className="border-b border-white/10 bg-[oklch(0.16_0_0)] py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-3 sm:px-8">
          {[
            { k: "Founded", v: "10+ years cabinet making" },
            { k: "Studios", v: "Halifax · Toronto · Long Beach" },
            { k: "Install", v: "Coast to coast, Canada + US" },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">{s.k}</p>
              <p className="mt-3 font-display text-2xl font-light uppercase tracking-[0.05em] text-white">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">Our Story</p>
        <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
          A studio built around the room
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-white/75">
          <p>
            Hempston Home was founded on a stubborn belief: a kitchen worth building deserves to
            be drawn from scratch. Not sized from a catalog, not adapted from a stock box —
            drawn from the exact walls, ceilings, sightlines, and daily rituals of the home
            it's going into.
          </p>
          <p>
            Over the past decade our studio has grown from a single Nova Scotia workshop into a
            multi-studio operation with design and install crews on both coasts. What hasn't
            changed is the process: one team from concept to install, laser-measured shop
            drawings for every commission, and finishes hand-sprayed or hand-rubbed the way
            they were a hundred years ago.
          </p>
          <p>
            We take on kitchens, bathrooms, butler's pantries, wet bars, mudrooms, media units,
            libraries, and any built-in millwork a house needs. Every project is 100% custom,
            so the pages of doors, colours, and construction styles on this site are examples —
            not menus. If you can draw it, we can build it.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[oklch(0.16_0_0)] py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">How we work</p>
          <h2 className="mx-auto mt-5 max-w-xl text-center font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
            The Hempston way
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.n} className="border-t border-white/15 pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">{v.n}</p>
                <h3 className="mt-4 font-display text-xl font-light uppercase tracking-[0.06em] text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft / workshop image */}
      <section className="relative">
        <img
          src={workshopImg}
          alt="Hand-detailed custom white oak cabinet by Hempston Home craftspeople"
          width={1600}
          height={900}
          loading="lazy"
          className="h-[60vh] min-h-[420px] w-full object-cover"
        />
      </section>

      {/* Craftspeople / roles */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">Craftspeople</p>
        <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
          Every commission passes through six pairs of hands
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            { role: "Kitchen Designer", body: "Plans layout, sightlines, storage, and material palette in a first-principles design brief." },
            { role: "Drafter", body: "Turns the design into millimetre-accurate shop drawings — plans, elevations, sections." },
            { role: "Cabinetmaker", body: "Cuts, joins, and assembles every box, face frame, door, and drawer in the workshop." },
            { role: "Finisher", body: "Hand-sprays conversion varnish, lacquer, or hand-rubs Rubio Monocoat under studio lighting." },
            { role: "Project Lead", body: "Coordinates with your builder, designer, and trades — one point of contact from start to punch list." },
            { role: "Installer", body: "Sets, scribes, and reveals every cabinet on site. Inset construction lives and dies here." },
          ].map((p) => (
            <div key={p.role} className="border-t border-white/15 pt-6">
              <h3 className="font-display text-lg font-light uppercase tracking-[0.06em] text-white">{p.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design collaborators (press / as-featured-in equivalent) */}
      <section className="border-y border-white/10 bg-[oklch(0.16_0_0)] py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
            Design collaborators
          </p>
          <h2 className="mx-auto mt-5 max-w-xl text-center font-display text-2xl font-light uppercase tracking-[0.06em] sm:text-3xl">
            Trusted by the designers we build with
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {collaborators.map((c) => (
              <span
                key={c}
                className="text-[11px] font-light uppercase tracking-[0.28em] text-white/70"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/60">
            Our cabinetry appears in projects designed by 31 Westgate Design Studio, David
            Bourque, Sara McKeenan, and Hen House — among the interior designers and architects
            we regularly collaborate with across Nova Scotia, Ontario, and beyond.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-5 py-24 text-center text-foreground sm:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-accent">Start your project</p>
        <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
          Bring us your walls
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Whether you're renovating a Halifax heritage kitchen or building new on either coast,
          we'd love to hear what you're planning.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-background transition-colors hover:bg-transparent hover:text-foreground"
        >
          Book a Free Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
