import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardList,
  CalendarDays,
  Paperclip,
  MapPin,
  Video,
  PencilRuler,
  Hammer,
  Truck,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { WorkWithUsForm } from "@/components/work-with-us-form";
import { breadcrumbSchema, faqPageSchema, SITE_URL } from "@/lib/schema";

const PAGE_TITLE = "How to Work With Us | Custom Cabinetry Process | Hempston Home";
const PAGE_DESC =
  "Our step-by-step process for custom cabinetry — from first Google Meet consultation to design, shop build, pre-staging, and white-glove install.";
const ABSOLUTE_URL = `${SITE_URL}/work-with-us`;

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Submit the project form",
    body:
      "Share your name, contact info, project type, and a few notes about your space. It only takes a couple of minutes and gives our design team what they need to prepare for the first call.",
  },
  {
    n: "02",
    icon: CalendarDays,
    title: "Add your preferred install date",
    body:
      "Tell us when you'd like the finished cabinetry installed. Custom lead times typically run 10–16 weeks — the earlier we know, the more precisely we can schedule shop time.",
  },
  {
    n: "03",
    icon: Paperclip,
    title: "Attach project files",
    body:
      "Upload floor plans, DWGs, photos of the existing space, or inspiration images. The more we see up front, the more focused the first conversation becomes.",
  },
  {
    n: "04",
    icon: MapPin,
    title: "Confirm project logistics",
    body:
      "Share where the project will be installed so we can plan measure visits, freight, and white-glove install logistics from the start.",
  },
  {
    n: "05",
    icon: Video,
    title: "Schedule a Google Meet consultation",
    body:
      "We'll email you a Google Meet invite based on the window you prefer. In the call we review your space, materials, budget, and timeline — no pressure, no obligation.",
  },
  {
    n: "06",
    icon: PencilRuler,
    title: "Design, quote & material selection",
    body:
      "Our design team drafts elevations and 3D renderings, walks you through door styles, wood species, paints, and hardware, and delivers a clear itemised quote for approval.",
  },
  {
    n: "07",
    icon: Hammer,
    title: "Shop build & pre-staging",
    body:
      "Every commission is built by hand in our shop. Before it ships we pre-stage the full project — cabinets assembled together — so alignment, reveals, and finish are perfect.",
  },
  {
    n: "08",
    icon: Truck,
    title: "Delivery & white-glove install",
    body:
      "Our install team crates, freights, and installs your cabinetry on site — scribing, aligning, and finishing so it looks like it grew out of the room.",
  },
];

const faqs = [
  {
    q: "What happens after I submit the form?",
    a: "Within one business day a Hempston designer replies by email with a Google Meet invite based on the meeting window you shared. If you added an install date, we also confirm whether that timeline is realistic before the call.",
  },
  {
    q: "Do I need drawings or a designer already?",
    a: "No. Many clients come to us with a rough idea and a few inspiration photos. Our in-house design team handles the elevations, 3D renderings, and material selections. If you already work with an architect or interior designer, we collaborate directly with them.",
  },
  {
    q: "How long does the full process take?",
    a: "From first Google Meet to installed cabinetry is typically 12–20 weeks depending on scope and finishes. Design usually takes 3–5 weeks, shop build 6–10 weeks, and install 1–2 weeks.",
  },
  {
    q: "Can we meet in person instead of Google Meet?",
    a: "Yes. We can meet at our shop or on site when geography allows. For clients further afield, Google Meet keeps the process moving quickly without waiting on travel.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. The first consultation, budgetary quote, and initial design conversation are complimentary. We only charge once you approve a full design package and commission the project.",
  },
];

export const Route = createFileRoute("/work-with-us")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: ABSOLUTE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "How to Work With Us", item: "/work-with-us" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to work with Hempston Home on a custom cabinetry project",
          description: PAGE_DESC,
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.body,
          })),
        }),
      },
    ],
  }),
  component: WorkWithUsPage,
});

function WorkWithUsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.14 0 0)" }}>
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-white/10 px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
          Our process
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.14em] text-white sm:text-6xl">
          How to Work With Us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          From the first message to install day, here's exactly how a Hempston commission comes
          together — eight deliberate steps designed to make custom cabinetry feel effortless.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#start"
            className="inline-flex items-center gap-2 bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition-opacity hover:opacity-90"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+19027198497"
            className="inline-flex items-center gap-2 border border-white/25 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-black"
          >
            <Phone className="h-4 w-4" /> (902) 719-8497
          </a>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
              Eight steps
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.14em] text-white sm:text-4xl">
              From First Message to Install Day
            </h2>
          </div>

          <ol className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
            {steps.map(({ n, icon: Icon, title, body }) => (
              <li
                key={n}
                className="flex flex-col gap-5 bg-[oklch(0.14_0_0)] p-8 sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-light text-white/40">
                    {n}
                  </span>
                  <Icon className="h-6 w-6 text-white/70" strokeWidth={1.2} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form */}
      <section id="start" className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
              Step one
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.14em] text-white sm:text-4xl">
              Tell Us About Your Project
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Share your contact info, a preferred install date, and any floor plans or
              inspiration files. We'll email you a Google Meet invite based on the meeting window
              you choose.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Video className="mt-0.5 h-4 w-4 text-white/60" />
                <span>Google Meet within one business day — no pressure, no obligation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-4 w-4 text-white/60" />
                <span>We confirm whether your install date is realistic before we meet.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
                <span>Design and install logistics planned from the first conversation.</span>
              </li>
            </ul>
            <div className="mt-10 space-y-2 border-t border-white/10 pt-8 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60" />
                <a href="tel:+19027198497" className="hover:text-white">(902) 719-8497</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/60" />
                <a href="mailto:info@hempstonhome.com" className="hover:text-white">
                  info@hempstonhome.com
                </a>
              </p>
            </div>
          </div>
          <WorkWithUsForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
              Frequently asked
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.14em] text-white sm:text-4xl">
              Working With Hempston
            </h2>
          </div>
          <dl className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-8">
                <dt className="font-display text-lg font-semibold text-white">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.18em] text-white sm:text-4xl">
          Ready When You Are
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70">
          Whether install is next season or two years out, the earlier the conversation
          starts, the better the outcome. Book your Google Meet today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#start"
            className="inline-flex items-center gap-2 bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition-opacity hover:opacity-90"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border border-white/25 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-black"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      <StickyConsultationCTA href="/work-with-us" label="Start Your Project" />
      <SiteFooter />
    </div>
  );
}
