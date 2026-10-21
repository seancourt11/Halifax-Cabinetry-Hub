import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";
import { VisibleFaq } from "@/components/visible-faq";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
import { ResponsiveImg } from "@/components/responsive-img";
import { heroImagePreload } from "@/lib/image-srcset";
import { breadcrumbSchema, faqPageSchema, serviceSchema, SITE_URL } from "@/lib/schema";
import monctonHero from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg";

const PAGE_TITLE = "Custom Kitchen Cabinets Moncton | Hempston Home";
const PAGE_DESC =
  "Custom kitchen cabinets and kitchen design for Moncton, Dieppe, Riverview and Shediac. Built in Canada. Consult in person or by video call.";
const ABSOLUTE_URL = `${SITE_URL}/custom-cabinetry-moncton`;
const HERO_ALT =
  "Custom painted built-in cabinets and fireplace surround for a home in Dieppe, NB by Hempston Home";

const areas = [
  { name: "Moncton", note: "Houses and renovations across the city." },
  { name: "Dieppe", note: "Includes built-ins and a fireplace surround for a home in Dieppe." },
  { name: "Riverview", note: "Measured to the room, then delivered and installed." },
  { name: "Shediac", note: "Greater Moncton, including the Shediac shore." },
];

const serviceSteps = [
  {
    n: "01",
    title: "Design consult",
    body: "In person in Greater Moncton, or by video call if that is easier. We talk through the kitchen, the storage, and the doors before anything is drawn.",
  },
  {
    n: "02",
    title: "Measuring",
    body: "The room is measured as it stands, including out-of-square walls. The drawings follow that measure.",
  },
  {
    n: "03",
    title: "Built in Canada",
    body: "Cabinetry for Moncton homes is built in Canada. This page does not publish a Moncton street address because there is not a Moncton shop.",
  },
  {
    n: "04",
    title: "Delivery and installation",
    body: "Finished cabinets are delivered to the home in Moncton, Dieppe, Riverview or Shediac and installed on site.",
  },
  {
    n: "05",
    title: "5-year warranty",
    body: "Hempston Home warrants cabinetry workmanship for 5 years. Hardware and finish warranties from the manufacturers are passed along in the project agreement.",
  },
];

const faqs = [
  {
    q: "Do you build custom kitchen cabinets in Moncton?",
    a: "Yes. Hempston Home designs and builds custom kitchen cabinets for homes in Moncton, Dieppe, Riverview and Shediac. Built in Canada. A designer meets you in person or by video call, the room is measured, and the cabinets are delivered and installed. There is no Moncton showroom address.",
  },
  {
    q: "Do you offer kitchen design in Moncton?",
    a: "Yes. Kitchen design in Moncton is part of the project. The consult covers layout, storage, appliances and finishes, either in person or by video call, and you see drawings before the cabinetry is built.",
  },
  {
    q: "Can you make custom kitchen doors in Moncton?",
    a: "Yes. Custom kitchen doors for Moncton homes are built to order. Shaker, slab, inset and other profiles can be made in the wood, paint or stain you choose. The door styles on this site are examples, not a fixed catalogue, and they are delivered and installed with the rest of the kitchen.",
  },
  {
    q: "How does cabinetry service work in Greater Moncton?",
    a: "It is a service-area visit, not a local shop. Design consult in person or by video call, then measuring, then cabinetry built in Canada, then delivery and installation in Moncton, Dieppe, Riverview or Shediac. Workmanship is covered by a 5-year warranty.",
  },
  {
    q: "Which communities around Moncton do you serve?",
    a: "Moncton, Dieppe, Riverview and Shediac. If your home is elsewhere in Greater Moncton, ask and we will say whether we can take the project.",
  },
  {
    q: "Where are the cabinets made?",
    a: "Built in Canada. We design, deliver and install them for Greater Moncton homes. We also install across Canada and the United States.",
  },
];

export const Route = createFileRoute("/custom-cabinetry-moncton")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "custom kitchen cabinets Moncton, kitchen design Moncton, custom kitchen doors Moncton, custom kitchen designs Moncton, cabinet maker Moncton, Dieppe, Riverview, Shediac",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { property: "og:image", content: `${SITE_URL}${monctonHero}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: `${SITE_URL}${monctonHero}` },
    ],
    links: [{ rel: "canonical", href: ABSOLUTE_URL }, heroImagePreload(monctonHero)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Custom kitchen cabinets in Moncton",
            description: PAGE_DESC,
            url: ABSOLUTE_URL,
            areaServed: [
              {
                "@type": "City",
                name: "Moncton",
                containedInPlace: { "@type": "AdministrativeArea", name: "New Brunswick" },
              },
              { "@type": "City", name: "Dieppe" },
              { "@type": "City", name: "Riverview" },
              { "@type": "City", name: "Shediac" },
            ],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Locations", item: "/locations" },
            { name: "Custom kitchen cabinets in Moncton", item: "/custom-cabinetry-moncton" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }),
  component: MonctonPage,
});

function MonctonPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-[oklch(0.96_0_0)]">
      <SiteHeader />

      <section className="relative">
        <ResponsiveImg
          src={monctonHero}
          sizes="100vw"
          alt={HERO_ALT}
          width={1600}
          height={1200}
          fetchPriority="high"
          decoding="sync"
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16">
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/90"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/locations" className="hover:text-white">
                Locations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Moncton</span>
            </nav>
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white/90">
              Moncton · Dieppe · Riverview · Shediac
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
              Custom Kitchen Cabinets in Moncton
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white">
              Hempston Home designs custom kitchen cabinets, kitchen layouts and custom kitchen
              doors for Greater Moncton. Built in Canada. The consult is in person or by video call,
              then we measure, deliver and install.
            </p>
          </div>
        </div>
      </section>

      <figure className="border-b border-white/10 bg-[oklch(0.16_0_0)]">
        <figcaption className="mx-auto max-w-3xl px-5 py-6 text-sm leading-relaxed text-white/90 sm:px-8">
          Built-ins and fireplace surround, Dieppe, NB. Painted shaker doors, drawers and open upper
          shelving, photographed finished before delivery. Built in Canada.
        </figcaption>
      </figure>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/90">
            Service area
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
            Greater Moncton, without a local shop address
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/90">
            <p>
              This is a service-area page for custom kitchen cabinets in Moncton. Hempston does not
              publish a Moncton street address, and this page does not describe a Moncton
              storefront. You book a design consult, we measure the house, and the finished
              cabinetry is delivered and installed.
            </p>
            <p>
              Kitchen design in Moncton covers the layout, the storage and the appliances. Custom
              kitchen doors are part of that drawing: the profile, the paint or stain, and the way
              the door sits on the cabinet. Shaker doors like the ones in the photograph above are
              one option. Slab, inset and other profiles are built the same way, to the room rather
              than from a stock size.
            </p>
            <BuiltInCanadaLine className="text-sm text-white/90" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/75">
            How it works
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
            Design, measure, deliver and install in Greater Moncton
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSteps.map((step) => (
              <li key={step.n} className="border-t border-black/20 pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/75">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-light uppercase tracking-[0.08em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20" aria-labelledby="moncton-project-heading">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/90">
            Dieppe, NB
          </p>
          <h2
            id="moncton-project-heading"
            className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl"
          >
            Built-ins and fireplace surround, Dieppe, NB
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/90">
            The photograph at the top of this page is a real Hempston project for a home in Dieppe,
            NB: painted white built-in cabinets on both sides of a fireplace mantel, with shaker
            doors, drawers and open upper shelving. It was photographed finished, before delivery.
          </p>
          {/*
            TODO(sean): Add further Greater Moncton project photos and captions below when Sean
            provides them. Do not invent client names, prices, or timelines. The Dieppe fireplace
            built-ins above are the first published Moncton-area project.
          */}
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
            Where we install around Moncton
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <li key={area.name} className="border border-white/20 p-6">
                <h3 className="font-display text-lg font-light uppercase tracking-[0.12em] text-white">
                  {area.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{area.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-white/90">
            Door profiles and finishes are examples on the{" "}
            <Link to="/products/door-styles" className="underline">
              cabinet door styles
            </Link>{" "}
            page. They are not a list of Moncton kitchens.
          </p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-white/10 py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
            Custom kitchen cabinets in Moncton: questions
          </h2>
          <VisibleFaq
            items={faqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light text-white"
            answerClassName="mt-3 text-sm leading-relaxed text-white/90"
          />
        </div>
      </section>

      <section
        id="consultation"
        className="scroll-mt-24 border-t border-black/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-5xl">
              Book a Greater Moncton consult
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/80">
              Tell us about the kitchen, the doors, or the built-in. We will set a design consult in
              person or by video call. Built in Canada. Installation is in Moncton, Dieppe,
              Riverview or Shediac, and the cabinetry carries a 5-year workmanship warranty.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+19027198497"
                className="inline-block border border-black bg-black px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white"
              >
                Call (902) 719-8497
              </a>
              <a
                href="mailto:info@hempstonhome.com"
                className="inline-block border border-black px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-black"
              >
                Email the studio
              </a>
            </div>
          </div>
          <HalifaxLeadForm market="Greater Moncton" />
        </div>
      </section>

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
