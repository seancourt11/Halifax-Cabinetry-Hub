import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, CalendarCheck, ShieldCheck, Zap, CheckCircle2, ArrowRight, AlertTriangle, Hammer, Ruler, Truck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, faqPageSchema, serviceSchema, howToSchema } from "@/lib/schema";

import heroImg from "@/assets/projects/modern-marble-kitchen.jpg";
import processImg from "@/assets/projects/white-oak-cabinet-detail.jpg";
import shakerImg from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";
import islandImg from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import panelImg from "@/assets/projects/md-white-kitchen-brass-pendants.jpg";
import proofImg from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";

const PAGE_TITLE = "Fast Custom Kitchen Cabinets | Rush Timeline | Hempston";
const PAGE_DESC =
  "Expedited bespoke kitchen cabinetry for high-end renovations, move-in dates and delayed projects. Custom-quality millwork on a compressed timeline without compromise.";
const CANONICAL = "/rush-custom-kitchen-cabinets";

const faqs = [
  {
    q: "How fast can I get custom kitchen cabinets?",
    a: "For qualifying projects, Hempston can deliver bespoke kitchen cabinetry in as little as 4–6 weeks from a signed design — roughly half our standard timeline. The exact lead time depends on the door style, finish, and current shop capacity. Painted Shaker and slab doors in a stocked species (white oak, maple, painted MDF) expedite fastest.",
  },
  {
    q: "Can I get kitchen cabinets in 2 weeks or 3 weeks?",
    a: "A fully custom kitchen in 2–3 weeks is not realistic if quality matters — millwork, finishing, and cure times cannot be safely compressed below that. If your deadline is inside 3 weeks, we'll be honest about it and can often help with a hybrid approach: expedited install of the critical run (sink, range, main cabinets) first, with balance of cabinetry to follow.",
  },
  {
    q: "What is a rush cabinet lead time?",
    a: "A rush lead time is any custom cabinetry order fabricated and installed faster than a shop's standard queue. Industry standard for high-end custom cabinetry is 10–16 weeks. Rush lead time typically means 4–8 weeks and requires shop capacity, simplified specification, and a rush premium (industry standard is roughly 10–20%).",
  },
  {
    q: "What are the fastest high-end kitchen cabinets to install?",
    a: "Frameless (Euro-style) construction with slab or Shaker doors in a painted or lightly stained finish installs fastest. Inset face-frame cabinetry, complex mouldings, hand-glazed finishes, and specialty veneers all add lead time and are difficult to expedite without compromising quality.",
  },
  {
    q: "What should I do if my kitchen cabinets are delayed?",
    a: "First, get the current status in writing from your existing supplier — a real ship date, not a guess. Second, contact a custom shop with rush capacity (like Hempston) with your existing drawings, appliance specs, and site dimensions. A shop that can work from your existing design can often shave weeks off a standard rebuild.",
  },
  {
    q: "Do you charge a premium for rush orders?",
    a: "Yes — expediting a bespoke project means reshuffling shop capacity, prioritising finishing, and often overtime. Rush pricing is typically a 10–20% premium on the cabinetry line depending on how tight the timeline is. We quote the premium transparently up front, not after the fact.",
  },
  {
    q: "Do you serve rush projects outside Halifax?",
    a: "Yes. Hempston ships and installs coast to coast across Canada and the United States. For out-of-market rush projects, we coordinate freight and installation around your deadline.",
  },
  {
    q: "What is the fastest way to replace kitchen cabinets?",
    a: "The fastest full replacement path is a frameless custom kitchen in a stocked species with a painted or lightly stained finish, using your existing appliance layout so plumbing and electrical don't move. Keeping the footprint means demo, template, fabrication and install can overlap. A layout change adds trade coordination that almost always adds two to four weeks.",
  },
  {
    q: "Can I get custom kitchen cabinets before my move-in date?",
    a: "In most cases yes — if you contact us early. A signed design 6–8 weeks before your move-in date is the safest window for a fully bespoke rush kitchen. Inside 4 weeks we can still often help with a phased install: main run first so the kitchen is functional on move-in, secondary cabinetry (pantry, island, built-ins) delivered shortly after.",
  },
  {
    q: "Are rush custom kitchen cabinets the same quality as standard-timeline cabinets?",
    a: "Yes. A Hempston rush order uses the same solid-wood dovetailed drawer boxes, plywood cabinet construction, Blum soft-close hardware, and hand-applied conversion finishes as a standard-timeline project. What we compress is scheduling, drafting turnaround, and finishing sequencing — never build quality, materials, or fit.",
  },
  {
    q: "Do you offer expedited kitchen cabinet installation in Nova Scotia?",
    a: "Yes. Halifax, Dartmouth, Bedford, Chester, Lunenburg, and the wider HRM are our home market — most rush projects in Nova Scotia can be measured within days of the deadline call, which is often the difference between hitting the date and missing it.",
  },
  {
    q: "Can I get luxury custom cabinets on a rush timeline?",
    a: "Yes — luxury and speed are not mutually exclusive when the process is built for it. We regularly deliver high-end painted kitchens, custom islands, integrated appliance panels, and bespoke millwork on compressed timelines for designers, architects, and homeowners with fixed deadlines.",
  },
];


const timeline = [
  { step: "Deadline Call", when: "Day 0", detail: "Tell us your install date. In one call we confirm whether it's achievable and what door styles / finishes fit the window." },
  { step: "Rush Design & Signoff", when: "Week 1", detail: "Compressed design sprint — plans, elevations, and finish samples delivered fast. Signoff triggers shop scheduling." },
  { step: "Expedited Fabrication", when: "Weeks 2–5", detail: "Your project moves to the front of the queue. Painted and stained finishes run in parallel with box construction." },
  { step: "Delivery & Install", when: "Week 6", detail: "Coordinated freight and install crew hit your deadline. Punch list handled the same week." },
];

const rushFitStyles = [
  { title: "Painted Shaker", img: shakerImg, alt: "Painted white Shaker kitchen cabinetry — fast rush timeline" },
  { title: "Modern Slab", img: heroImg, alt: "Modern slab kitchen cabinetry in light oak — expedited lead time" },
  { title: "White Oak Frameless", img: islandImg, alt: "White oak frameless island cabinetry available on rush timeline" },
  { title: "Painted Panel", img: panelImg, alt: "Painted panel kitchen cabinetry with brass hardware, rush-friendly" },
];

export const Route = createFileRoute("/rush-custom-kitchen-cabinets")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "fast custom kitchen cabinets, rush kitchen cabinet order, quick turnaround kitchen cabinets, expedited cabinetry, short lead time cabinets, bespoke kitchen cabinets, luxury custom cabinets, cabinets for tight deadline" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Rush Custom Kitchen Cabinets", item: CANONICAL },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqPageSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Rush Custom Kitchen Cabinetry",
            description:
              "Expedited custom kitchen cabinetry for tight deadlines — move-in dates, delayed builds, and event timelines. Custom quality on a rush lead time.",
            url: CANONICAL,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          howToSchema({
            name: "How to get custom kitchen cabinets on a rush timeline",
            description: "A four-step process to expedite a custom kitchen cabinetry order without compromising quality.",
            totalTime: "P42D",
            steps: timeline.map((t) => ({ name: t.step, text: t.detail })),
          }),
        ),
      },
    ],
  }),
  component: RushPage,
});

function RushPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Custom kitchen cabinetry delivered on a rush timeline" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0_0)]/60 via-[oklch(0.14_0_0)]/70 to-[oklch(0.14_0_0)]" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-40">
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            <Clock className="h-3 w-3" /> Rush · Fast-Timeline Cabinetry
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Fast Custom Kitchen Cabinets — On a Tight Deadline?
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Bespoke kitchen cabinetry in as little as <strong className="text-white">4–6 weeks</strong> for qualifying projects.
            Built for move-in dates, delayed renovations, and deadlines other high-end shops can't hit — without compressing quality, materials, or fit.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#rush-quote"
              className="inline-flex items-center justify-center gap-2 border border-white bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[oklch(0.14_0_0)] transition-colors hover:bg-transparent hover:text-white"
            >
              Get a Rush Quote <ArrowRight className="h-3 w-3" />
            </a>
            <a
              href="tel:+19027198497"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:border-white"
            >
              Call (902) 719-8497
            </a>
          </div>
          <p className="mt-6 text-xs text-white/40">Tell us your deadline — we'll tell you honestly if we can hit it.</p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Who this is for</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            When the calendar is the constraint — not the design brief.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CalendarCheck, title: "Move-In Date Locked", body: "Closing, tenants, or family arriving. The kitchen needs to be in and functional." },
              { icon: AlertTriangle, title: "Delayed Renovation", body: "Existing cabinet supplier missed dates. You need a shop that can pick up drawings and finish the project." },
              { icon: Zap, title: "Event Timeline", body: "Wedding, holiday, listing photos, short-term rental launch. A hard external date." },
              { icon: Hammer, title: "Contractor Schedule Slip", body: "Trades stacked. The GC needs cabinets in-place next month to keep the whole build on track." },
            ].map((it) => (
              <div key={it.title} className="border border-white/10 p-8">
                <it.icon className="h-5 w-5 text-white/70" />
                <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-white">{it.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE RUSH PROCESS WORKS */}
      <section id="rush-process" className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">How the rush process works</p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl">
                Six weeks from deadline call to installed kitchen — for qualifying projects.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/60">
                Rush timelines aren't a discount on process — they're a reshuffle of shop capacity. We move
                your project to the front of the queue, run finishing in parallel with construction, and
                assign a dedicated project lead to keep every hand-off inside 24 hours.
              </p>
              <img src={processImg} alt="Hempston workshop expediting a custom kitchen cabinetry order" className="mt-10 aspect-[4/3] w-full object-cover" />
            </div>
            <ol className="space-y-6">
              {timeline.map((t, i) => (
                <li key={t.step} className="border border-white/10 p-8">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-4xl font-light text-white/30">0{i + 1}</span>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">{t.when}</p>
                      <h3 className="mt-2 text-lg font-medium text-white">{t.step}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">{t.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* QUALITY DIFFERENTIATOR */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">What "fast" means at Hempston</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            Speed comes from process — never from cut corners.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            A Hempston rush order is still fully bespoke — designed to your millimetre-accurate site dimensions, built with
            dovetailed drawer boxes, soft-close hardware, and hand-applied finishes. What we compress is scheduling, drafting,
            and finishing sequencing — never build quality, materials, or fit. Every cabinet is made-to-measure in our shop,
            then pre-staged and inspected before it leaves for site.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Solid-wood dovetailed drawer boxes — standard, never optional",
              "Soft-close doors and drawers on every cabinet",
              "Millimetre-accurate 3D site measurement",
              "Hand-applied paint, stain, and conversion finishes",
              "Construction-grade shop drawings before fabrication",
              "In-shop pre-staging on complex runs",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 border border-white/10 p-6 text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-white" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUSH-FRIENDLY STYLES */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Rush-friendly styles</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            Door styles and finishes that expedite fastest.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            Every Hempston door is available on a standard timeline. These four expedite fastest because materials are
            stocked and finishing runs cleanly. Explore the full range in{" "}
            <Link to="/products/door-styles" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              door styles
            </Link>{" "}
            and{" "}
            <Link to="/products/colours-finishes" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              colours &amp; finishes
            </Link>.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rushFitStyles.map((s) => (
              <div key={s.title} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-white/5">
                  <img src={s.img} alt={s.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">Rush-friendly</p>
                <h3 className="mt-2 text-base font-medium text-white">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <img src={proofImg} alt="Custom kitchen cabinetry delivered on a compressed timeline for a move-in deadline" className="aspect-[4/3] w-full object-cover" />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Recent rush project</p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl">
                A painted Shaker kitchen delivered in 42 days.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/65">
                Existing supplier missed a summer move-in. Hempston picked up the client's drawings, re-detailed for our
                shop, and delivered a fully installed painted Shaker kitchen — dovetailed boxes, soft-close hardware,
                conversion-finished doors — six weeks after design signoff. Family moved in on the original date.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div><dt className="text-[10px] uppercase tracking-[0.24em] text-white/40">Timeline</dt><dd className="mt-2 font-display text-2xl font-light text-white">42 days</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.24em] text-white/40">Style</dt><dd className="mt-2 font-display text-2xl font-light text-white">Shaker</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.24em] text-white/40">Deadline</dt><dd className="mt-2 font-display text-2xl font-light text-white">Hit</dd></div>
              </dl>
              <Link to="/case-studies" className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 hover:text-white">
                See more Hempston projects <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RUSH PRICING */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Rush pricing — no surprises</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl">
            What a rush timeline actually costs.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-white/70">
            <p>
              Rush pricing is standard practice in custom cabinetry — reshuffling shop capacity and running finishing in
              parallel carries real cost. Industry rush premiums run <strong className="text-white">10–20%</strong> on the
              cabinetry line depending on how tight the timeline is.
            </p>
            <p>
              We quote it transparently up front, alongside the standard-timeline price, so you can compare and decide.
              There's no back-end surcharge, no expedited freight surprise, and no "materials adjustment" invoice.
            </p>
            <p>
              For most projects, the tradeoff is worth it — the cost of missing a move-in date, holding a mortgage, or
              extending a rental almost always exceeds the rush premium.
            </p>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="rush-quote" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Tell us your deadline</p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl">
                We'll tell you honestly if we can hit it.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/65">
                Send us your target install date, the size of your kitchen, and any existing drawings or appliance
                specs. Within one business day we'll come back with either a rush quote and confirmed schedule, or a
                straight answer that the window isn't safely achievable — and what the closest realistic date looks like.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  { icon: Ruler, label: "Bring your existing drawings — we can work from them." },
                  { icon: Truck, label: "Coast-to-coast install across Canada and the US." },
                  { icon: ShieldCheck, label: "Written schedule + rush premium quoted up front." },
                ].map((it) => (
                  <li key={it.label} className="flex items-start gap-3 text-sm text-white/70">
                    <it.icon className="mt-0.5 h-4 w-4 flex-none text-white" />
                    {it.label}
                  </li>
                ))}
              </ul>
            </div>
            <HalifaxLeadForm />
          </div>
        </div>
      </section>

      {/* LEAD TIMES DEEP DIVE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Rush kitchen cabinet lead times</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            Short lead time cabinets — what is actually achievable.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            Every custom cabinet shop in North America runs on the same physics — hardwood has to be milled, boxes have to be
            assembled, finishes have to cure, and installers have to be scheduled. Standard custom kitchen cabinet lead times
            run 10–16 weeks. A true rush custom kitchen cabinet order compresses that to 4–8 weeks by reshuffling shop capacity,
            not by skipping steps. Here is how the lead-time bands break down in practice.
          </p>
          <div className="mt-14 space-y-8">
            {[
              {
                band: "2–3 weeks",
                label: "Emergency / phased only",
                body: "Not achievable as a full fully-custom kitchen if quality matters. We can often help with a phased rush install: main sink and range run first so the kitchen is functional, remaining cabinetry (pantry, island, tall cabinets, built-ins) shipped within a few weeks after.",
              },
              {
                band: "4–6 weeks",
                label: "Fast custom rush",
                body: "Achievable for painted Shaker, painted slab, and stained white oak or maple in frameless construction with standard box sizes. Requires signed design at day zero, stocked materials, and a rush premium. This is the sweet spot for most Hempston rush kitchen cabinet orders.",
              },
              {
                band: "7–9 weeks",
                label: "Expedited custom",
                body: "Room for inset face-frame construction, more complex door profiles, glazed or specialty finishes, and appliance-panel integration. Still meaningfully faster than a standard queue and typically the right window for a fully-detailed custom kitchen renovation on a real deadline.",
              },
              {
                band: "10–16 weeks",
                label: "Standard custom",
                body: "Industry standard for custom kitchen cabinetry. Full design development, unlimited style and finish options, complex millwork, hand-glazed finishes, and specialty veneers all fit comfortably inside this window.",
              },
            ].map((row) => (
              <div key={row.band} className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-[180px_1fr]">
                <div>
                  <p className="font-display text-2xl font-light text-white">{row.band}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">{row.label}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/65">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE RUSH CRAFTSMANSHIP */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Bespoke rush craftsmanship</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            Luxury custom kitchen cabinets on an urgent timeline.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            Most custom shops treat rush work as an afterthought. We built our process so that high-end detailing — inset
            face frames, custom range hoods, integrated appliance panels, matched veneer, hand-applied conversion finishes —
            can still move quickly. Our project lead, shop foreman, and finishing team review every rush job daily, not weekly,
            so decisions happen in hours instead of days.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Made-to-measure cabinet boxes, not modular filler strips",
              "Solid-wood dovetailed drawer boxes — standard, never optional",
              "Blum soft-close doors, drawers, and lift systems",
              "Hand-applied paint, stain, and conversion finishes",
              "Full shop drawings and 3D approval before fabrication",
              "In-shop pre-staging and fit check on complex runs",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 border border-white/10 p-6 text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-white" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUSH BY PROJECT TYPE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Rush cabinetry by project type</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            Expedited custom cabinets for the deadlines we see most.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Quick Kitchen Renovation Before Move-In",
                body: "Homeowners closing on a new build or resale who want the kitchen replaced before furniture arrives. Typical rush window: 5–7 weeks. Keeping the existing footprint is the single biggest lever to hit the date.",
              },
              {
                title: "Rescue of a Delayed Cabinet Order",
                body: "Existing supplier has slipped past the promised ship date and there is no realistic recovery plan. We can work from your existing drawings, re-detail for our shop, and often hit the original install date.",
              },
              {
                title: "Short-Term Rental or Listing Launch",
                body: "Fixed launch date driven by bookings or a listing photoshoot. Painted Shaker or slab in a light neutral photographs cleanly and expedites fastest — a common rush spec for STR operators.",
              },
              {
                title: "Contractor / GC Schedule Recovery",
                body: "Trades are stacked and the general contractor needs cabinets in-place next month to keep drywall, tile, plumbing, and countertop schedules from slipping. We coordinate directly with the GC on site sequencing.",
              },
              {
                title: "Kitchen Cabinets for Event Deadlines",
                body: "Wedding, holiday, family gathering, or corporate event driving the date. External dates are non-negotiable and we plan the fabrication schedule backward from the event, not forward from signoff.",
              },
              {
                title: "Luxury Investment Property Turnaround",
                body: "Every carrying week has a mortgage cost. Rush bespoke cabinetry lets high-end flips and investment properties hit listing dates with a kitchen that supports the asking price — not a placeholder that needs replacing.",
              },
            ].map((row) => (
              <div key={row.title} className="border border-white/10 p-8">
                <h3 className="text-base font-medium text-white">{row.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO PREPARE */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">How to prepare for a rush cabinet order</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            What to have ready before you call about a last minute kitchen cabinets order.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            The single fastest way to shave a week off a rush custom kitchen cabinet order is to arrive at the first call
            with the information a shop needs to quote and schedule. Every item below is optional, but every item you can
            provide compresses the front end of the timeline.
          </p>
          <ol className="mt-12 space-y-4">
            {[
              "Target install date and whether it is hard (move-in, event, contractor sequence) or soft.",
              "Rough kitchen footprint — dimensions, ceiling height, and photos of every wall.",
              "Existing drawings, elevations, or a floor plan if you have them (any format — PDF, JPG, sketch).",
              "Appliance specifications: brand, model, and dimensions for fridge, range, hood, dishwasher, and any panel-ready units.",
              "Countertop material and edge profile if already selected (affects overhang and cabinet depth).",
              "Door style direction — Shaker, slab, inset — even loosely. Reference images help.",
              "Colour or finish direction — paint chip name, wood species, or reference photos.",
              "Hardware direction (knob or pull, finish) if selected — otherwise we specify from our standard lines.",
              "Site access notes for install: stairs, elevators, parking, condo booking rules.",
            ].map((line, i) => (
              <li key={line} className="flex items-start gap-6 border-t border-white/10 pt-4">
                <span className="font-display text-xl font-light text-white/30">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-white/70">{line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SIGNS OF DELAY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Cabinet order delays</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl">
            Signs your existing kitchen cabinet order is about to be delayed.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65">
            Most rush cabinet calls we get come from homeowners whose original supplier is quietly slipping. If any of these
            are true, call a rush-capable shop now — not in three weeks when the ship date is officially missed and your
            options have narrowed.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Your ship date has been \"confirmed\" verbally but not in writing.",
              "Your shop has not asked for a template or final site measure and install is under 6 weeks away.",
              "Finish samples are late or have changed batch without explanation.",
              "Your project manager is slow to reply or has been reassigned.",
              "Hardware or appliance panels are still marked \"TBD\" on the order confirmation.",
              "Your GC or designer is quietly sourcing backup quotes on your behalf.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-white/70">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-white" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Rush cabinet service areas</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            Fast custom kitchen cabinets near you — coast to coast.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            Hempston is headquartered in <Link to="/custom-cabinetry-halifax" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">Halifax, Nova Scotia</Link>{" "}
            with install crews in Toronto and Long Beach and coordinated freight and installation across Canada and the
            continental United States. Rush projects outside our home market are handled by the same in-house shop —
            freight and install are sequenced around your deadline, not the other way around.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { city: "Halifax &amp; Nova Scotia", detail: "Home market. Site measure often within 48 hours of the deadline call. HRM, Dartmouth, Bedford, Chester, Lunenburg, South Shore." },
              { city: "Toronto &amp; GTA", detail: "Install crew in-market. Coordinated freight from the Halifax shop; typical rush install windows the same as home market." },
              { city: "Long Beach &amp; US", detail: "US install crew for California, Pacific Northwest, and cross-border rush projects. Customs and freight handled in-house." },
            ].map((area) => (
              <div key={area.city} className="border border-white/10 p-8">
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white" dangerouslySetInnerHTML={{ __html: area.city }} />
                <p className="mt-4 text-sm leading-relaxed text-white/60">{area.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-white/60">
            Installing coast to coast — if your project is outside these markets, tell us your deadline and we'll confirm
            whether we can hit it within one business day.
          </p>
        </div>
      </section>

      {/* LUXURY FINISHES ON A DEADLINE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Finishes &amp; detailing</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            High-end finishes that still move quickly.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            A compressed timeline does not mean a compressed design vocabulary. We regularly expedite painted kitchens in
            Farrow &amp; Ball and Benjamin Moore colours, white oak kitchens in Rubio Monocoat stains, and custom-matched
            conversion finishes for designers with exacting standards. The key is deciding early — every finish sample approved
            at signoff keeps the schedule intact.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Painted Custom Cabinetry",
                body: "Shaker, slab, and raised-panel doors in any paint colour. Painted MDF and painted hardwood expedite fastest and deliver the crisp, furniture-grade look expected in luxury kitchens.",
              },
              {
                title: "Stained White Oak &amp; Walnut",
                body: "Natural wood kitchens in stocked species. Rubio Monocoat and conversion-varnish stains cure predictably and age beautifully — ideal for rush projects that still need warmth.",
              },
              {
                title: "Inset Face Frame on a Deadline",
                body: "The most refined cabinet construction type can be expedited in the 7–9 week band. Perfect for traditional homes, coastal estates, and architect-driven renovations.",
              },
              {
                title: "Custom Islands &amp; Range Hoods",
                body: "Statement millwork — paneled hoods, waterfall islands, appliance garages — can be built on the same rush schedule when detailed early and signed off fast.",
              },
            ].map((row) => (
              <div key={row.title} className="border border-white/10 p-8">
                <h3 className="text-base font-medium text-white">{row.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNER / ARCHITECT RUSH PARTNERSHIPS */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">For designers &amp; architects</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light leading-tight sm:text-4xl">
            A cabinet shop that keeps pace with your project timeline.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">
            Designers and architects often bring us rush cabinetry after another shop falls behind. We work directly from your
            drawings, elevations, and finish schedules — no redesign required unless you want it. Our shop speaks the same
            language: sight lines, reveal consistency, hardware specs, appliance panels, and flush inset tolerances.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Work from existing architectural drawings and specs",
              "Direct coordination with your GC on site sequencing",
              "Millimetre-exact templates and as-built adjustments",
              "Shop drawings returned for approval within days, not weeks",
              "White-glove install crews in Halifax, Toronto, and Long Beach",
              "Full pre-staging so site install is fast and clean",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 border border-white/10 p-6 text-sm text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-white" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl">
            Rush custom cabinetry — straight answers.
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium text-white">
                  <span>{f.q}</span>
                  <span className="mt-1 flex-none text-white/40 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
            Tell us your deadline — we'll tell you if we can hit it.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rush-quote"
              className="inline-flex items-center gap-2 border border-white bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[oklch(0.14_0_0)] transition-colors hover:bg-transparent hover:text-white"
            >
              Get a Rush Quote <ArrowRight className="h-3 w-3" />
            </a>
            <a
              href="tel:+19027198497"
              className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white hover:border-white"
            >
              Call (902) 719-8497
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
