import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { VisibleFaq } from "@/components/visible-faq";
import { ResponsiveImg } from "@/components/responsive-img";
import { heroImagePreload } from "@/lib/image-srcset";
import { breadcrumbSchema, faqPageSchema, serviceSchema, SITE_URL } from "@/lib/schema";
import {
  HOURS,
  KITCHEN_PRICE_LABEL,
  LEAD_TIME_LABEL,
  LOCATIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  VANITY_PRICE_LABEL,
  mapsUrl,
} from "@/lib/site";
import heroImg from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import secondImg from "@/assets/projects/nwc-oak-island-kitchen.jpg";

const PAGE_TITLE = "Custom Cabinets Dartmouth and Bedford | Hempston Home";
const PAGE_DESC =
  "Custom cabinets for Dartmouth and Bedford, designed and built at the Hempston Home shop on Bayne St in Halifax. We measure and install in both communities.";
const PATH = "/custom-cabinets-dartmouth-bedford";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const faqs = [
  {
    q: "Do you build cabinets for Dartmouth and Bedford?",
    a: "Yes. Dartmouth and Bedford are part of the Halifax Regional Municipality service area. We measure on site and install there. The cabinets are designed and built at the Bayne St shop in Halifax.",
  },
  {
    q: "Where do I visit for a Dartmouth or Bedford project?",
    a: "Projects in Dartmouth and Bedford are served from the shop at 6359 Bayne St, Halifax, NS B3K 2V6. That is the studio to visit. Measuring happens at your house.",
  },
  {
    q: "How much do custom cabinets cost, and how long do they take?",
    a: `A full custom kitchen typically runs ${KITCHEN_PRICE_LABEL}. Vanities and built-ins usually run ${VANITY_PRICE_LABEL}. Standard projects take ${LEAD_TIME_LABEL}. The quote and the date are confirmed in writing before any deposit.`,
  },
  {
    q: "Who installs in Dartmouth and Bedford?",
    a: "Our own install team installs the cabinetry after it is built at the Halifax shop.",
  },
];

export const Route = createFileRoute("/custom-cabinets-dartmouth-bedford")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [{ rel: "canonical", href: ABSOLUTE_URL }, heroImagePreload(heroImg)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Custom cabinets for Dartmouth and Bedford",
            description: PAGE_DESC,
            url: ABSOLUTE_URL,
            areaServed: [
              { "@type": "City", name: "Dartmouth" },
              { "@type": "City", name: "Bedford" },
              { "@type": "AdministrativeArea", name: "Halifax Regional Municipality" },
            ],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Halifax", item: "/custom-cabinetry-halifax" },
            { name: "Dartmouth and Bedford", item: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }),
  component: DartmouthPage,
});

function DartmouthPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <section className="relative">
        <ResponsiveImg
          src={heroImg}
          alt="Example of Hempston custom kitchen cabinetry with a stained oak island and painted beams"
          width={1600}
          height={1000}
          fetchPriority="high"
          sizes="100vw"
          className="h-[68vh] min-h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8">
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/80"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/custom-cabinetry-halifax" className="hover:text-white">
                Halifax
              </Link>
              <span className="mx-2">/</span>
              <span>Dartmouth and Bedford</span>
            </nav>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl">
              Custom Cabinets for Dartmouth and Bedford
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90">
              Dartmouth and Bedford homes are served from the Hempston shop on Bayne Street in
              Halifax. We measure at the house and install with our own team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm leading-relaxed text-white/90 sm:px-8">
        <p>
          The Halifax page already names Dartmouth and Bedford in the service area, along with
          Sackville, Clayton Park, the South End, Hammonds Plains, Fall River and St. Margaret's
          Bay. This page is the note for the two communities people ask about most often. It is a
          service-area page for work that starts at {LOCATIONS.halifax.copyLabel}.
        </p>
        <p>
          Cabinets are built in Canada at that shop. Hours are {HOURS.label}. The phone is{" "}
          <a href={PHONE_TEL} className="underline">
            {PHONE_DISPLAY}
          </a>
          . A map pin for the shop is on the{" "}
          <Link to="/custom-cabinetry-halifax" className="underline">
            Halifax page
          </Link>
          , and you can{" "}
          <a href={mapsUrl(LOCATIONS.halifax)} className="underline">
            open it in Google Maps
          </a>
          .
        </p>
        <p>
          A full custom kitchen typically runs {KITCHEN_PRICE_LABEL}. Vanities and built-ins
          usually run {VANITY_PRICE_LABEL}. Standard projects take {LEAD_TIME_LABEL}. Character
          houses in Dartmouth and newer builds in Bedford are both drawn to the walls they actually
          have, which is the same approach the Halifax page describes.
        </p>
        <p>
          The photographs on this page are examples of Hempston kitchens from other commissions.
          They are not labelled as Dartmouth or Bedford projects. Published Nova Scotia kitchens are
          on the{" "}
          <Link to="/case-studies" className="underline">
            case studies
          </Link>{" "}
          page. The{" "}
          <Link to="/custom-kitchen-cabinet-cost-halifax" className="underline">
            cost guide
          </Link>{" "}
          explains the kitchen range in more detail.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:grid-cols-2 sm:px-8">
        <figure>
          <ResponsiveImg
            src={heroImg}
            alt="Example Hempston kitchen with painted cabinets, a white oak island and painted beams"
            width={1200}
            height={900}
            loading="lazy"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-white/80">
            Example kitchen from the Hempston library, not a Dartmouth or Bedford address.
          </figcaption>
        </figure>
        <figure>
          <ResponsiveImg
            src={secondImg}
            alt="Example Hempston kitchen with a white oak island and painted perimeter cabinets"
            width={1200}
            height={900}
            loading="lazy"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-white/80">
            Another example from the library, shown for the kind of cabinetry we build.
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Dartmouth and Bedford questions
          </h2>
          <VisibleFaq
            items={faqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light text-white"
            answerClassName="mt-3 text-sm leading-relaxed text-white/85"
          />
        </div>
      </section>
      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
