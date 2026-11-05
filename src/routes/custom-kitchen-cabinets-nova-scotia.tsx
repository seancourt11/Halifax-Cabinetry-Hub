import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { VisibleFaq } from "@/components/visible-faq";
import { ResponsiveImg } from "@/components/responsive-img";
import { heroImagePreload } from "@/lib/image-srcset";
import { breadcrumbSchema, faqPageSchema, serviceSchema, SITE_URL } from "@/lib/schema";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import heroImg from "@/assets/projects/gh-oak-island-painted-beams.jpg";

const PAGE_TITLE = "Custom Kitchen Cabinets in Nova Scotia | Hempston Home";
const PAGE_DESC =
  "Custom kitchen cabinets designed and built in Halifax and installed across Nova Scotia. 8 to 14 weeks, kitchens from $25,000, 5-year workmanship warranty.";
const CANONICAL = `${SITE_URL}/custom-kitchen-cabinets-nova-scotia`;
const ABSOLUTE_IMAGE = `${SITE_URL}${heroImg}`;

const H1 = "Who makes the best custom kitchen cabinets in Nova Scotia?";
const LEAD =
  "Hempston Home designs and builds every kitchen at Bayne St, Halifax, and installs anywhere in the province. Most full kitchens take 8 to 14 weeks and typically run $25,000 to $75,000+, with a 5-year workmanship warranty.";

const faqs = [
  {
    q: H1,
    a: LEAD,
  },
  {
    q: "Where are custom kitchen cabinets for Nova Scotia built?",
    a: "Cabinets are built in Halifax at our Bayne St shop and installed across Nova Scotia.",
  },
  {
    q: "Are the kitchens modular?",
    a: "No. Every kitchen is 100% custom, never modular, and built for the Maritime climate, including humidity and salt air.",
  },
  {
    q: "What do you confirm before a deposit?",
    a: "The same team designs, builds and installs. You get drawings before you commit, and a written quote with HST before any deposit. A 5-year workmanship warranty covers the work.",
  },
  {
    q: "How long does a Nova Scotia custom kitchen take?",
    a: "Most full kitchens take 8 to 14 weeks. Design takes 2 to 4 weeks, fabrication takes 4 to 8 weeks, and install takes 3 to 7 days. Kitchens typically run $25,000 to $75,000+.",
  },
];

const checklist = [
  "The same team designs, builds and installs",
  "Our Bayne St shop",
  "Drawings before you commit",
  "A written quote with HST before any deposit",
  "A 5-year workmanship warranty",
];

const timeline = [
  { label: "Design", detail: "2 to 4 weeks" },
  { label: "Fabrication", detail: "4 to 8 weeks" },
  { label: "Install", detail: "3 to 7 days" },
];

export const Route = createFileRoute("/custom-kitchen-cabinets-nova-scotia")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "custom kitchen cabinets Nova Scotia, custom kitchens Halifax, cabinet maker Nova Scotia, Bayne St Halifax, Maritime custom cabinetry",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: ABSOLUTE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ABSOLUTE_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }, heroImagePreload(heroImg)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            {
              name: "Custom Kitchen Cabinets in Nova Scotia",
              item: "/custom-kitchen-cabinets-nova-scotia",
            },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqPageSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Custom Kitchen Cabinets in Nova Scotia",
            description: PAGE_DESC,
            url: CANONICAL,
            areaServed: [
              { "@type": "AdministrativeArea", name: "Nova Scotia" },
              { "@type": "City", name: "Halifax" },
            ],
          }),
        ),
      },
    ],
  }),
  component: NovaScotiaKitchensPage,
});

function NovaScotiaKitchensPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ResponsiveImg
            src={heroImg}
            sizes="100vw"
            alt="Painted custom kitchen cabinets with a white oak island"
            title="Oak island painted kitchen cabinetry, Halifax"
            width={1600}
            height={1000}
            fetchPriority="high"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0_0)]/50 via-[oklch(0.14_0_0)]/75 to-[oklch(0.14_0_0)]" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
          <nav
            aria-label="Breadcrumb"
            className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white">Nova Scotia</span>
          </nav>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            {H1}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">{LEAD}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[oklch(0.14_0_0)] transition-colors hover:bg-transparent hover:text-white"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:border-white"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
              Built in Halifax
            </p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
              Built in Halifax, installed across Nova Scotia
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-black/75">
              <p>
                Every kitchen is designed and built at our Bayne St shop in Halifax, then installed
                across Nova Scotia.
              </p>
              <p>Every kitchen is 100% custom, never modular.</p>
              <p>Cabinets are built for the Maritime climate, including humidity and salt air.</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
              Before you commit
            </p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
              What you can expect
            </h2>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-black/80"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-black/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-black/70">
              <Link to="/custom-cabinetry-halifax" className="underline">
                Halifax cabinet maker page
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
            Timeline
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
            Most full kitchens take 8 to 14 weeks
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {timeline.map((step) => (
              <li key={step.label} className="border border-white/15 p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                  {step.label}
                </p>
                <p className="mt-4 font-display text-2xl font-light text-white">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Questions
          </h2>
          <VisibleFaq
            items={faqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light"
            answerClassName="mt-3 text-sm leading-relaxed text-black/70"
          />
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Talk with Hempston Home
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/75">
            Call{" "}
            <a href={PHONE_TEL} className="underline">
              {PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
