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
  LEAD_TIME_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  VANITY_PRICE_LABEL,
} from "@/lib/site";
import heroImg from "@/assets/projects/reeded-oak-vanity.jpg";
import doubleVanity from "@/assets/projects/md-oak-double-vanity.jpg";

const PAGE_TITLE = "Custom Bathroom Vanities Halifax | Hempston Home";
const PAGE_DESC =
  "Custom bathroom vanities in Halifax, built to the room at the Bayne St shop. Vanities and built-ins usually run $4,000 to $12,000. Book a free consult.";
const PATH = "/custom-bathroom-vanities-halifax";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const faqs = [
  {
    q: "How much does a custom bathroom vanity cost in Halifax?",
    a: `Vanities and built-ins usually run ${VANITY_PRICE_LABEL}. The written quote depends on the size of the room, the door style, the wood and the hardware. A full kitchen is a different range, typically $25,000 to $75,000.`,
  },
  {
    q: "How long does a vanity take?",
    a: `Standard Hempston projects take ${LEAD_TIME_LABEL} from the first consultation to installation. A vanity-only timeline is not published separately. We confirm the date for your room in writing before any deposit.`,
  },
  {
    q: "Where are Halifax vanities built?",
    a: "Vanities are built in Canada at our Bayne St shop, 6359 Bayne St, Halifax, NS B3K 2V6. We measure the bathroom and our own team installs.",
  },
  {
    q: "Which woods and door styles can a vanity use?",
    a: "The same shop that builds kitchens builds vanities. Solid hardwoods such as walnut, white oak, maple and cherry are on offer, along with painted doors. Shaker, slab, inset and reeded profiles are examples, not a fixed catalogue.",
  },
];

export const Route = createFileRoute("/custom-bathroom-vanities-halifax")({
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
            name: "Custom bathroom vanities in Halifax",
            description: PAGE_DESC,
            url: ABSOLUTE_URL,
            areaServed: [
              { "@type": "City", name: "Halifax" },
              { "@type": "AdministrativeArea", name: "Nova Scotia" },
            ],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Custom bathroom vanities in Halifax", item: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }),
  component: VanitiesPage,
});

function VanitiesPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <section className="relative">
        <ResponsiveImg
          src={heroImg}
          alt="Reeded white oak bathroom vanity built by Hempston Home"
          width={1600}
          height={1200}
          fetchPriority="high"
          sizes="100vw"
          className="h-[68vh] min-h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
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
              <span>Bathroom vanities</span>
            </nav>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl">
              Custom Bathroom Vanities in Halifax
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90">
              Made-to-measure vanities for Halifax bathrooms, built at the Bayne St shop and
              installed by our own team. Vanities and built-ins usually run {VANITY_PRICE_LABEL}.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm leading-relaxed text-white/90 sm:px-8">
        <p>
          A Hempston vanity is drawn to the bathroom you have. The width, the height, the plumbing
          and the storage are part of the same design conversation as a kitchen. There is no stock
          size to pad out with filler.
        </p>
        <p>
          Vanities are built at 6359 Bayne St, Halifax, NS B3K 2V6. The shop is open{" "}
          {HOURS.label}. Call {PHONE_DISPLAY} or book a consultation and we will measure the room.
          Standard projects take {LEAD_TIME_LABEL}. We confirm that date in writing before any
          deposit. A shorter vanity-only schedule is not published on this site.
        </p>
        <p>
          Woods already offered for Hempston cabinetry include walnut, white oak, maple and cherry,
          plus painted doors. The photographs below are examples from our library: a reeded oak
          vanity and a light oak double vanity. They are not labelled as a specific Halifax
          bathroom, and no client name is attached.
        </p>
        <p>
          Workmanship is covered for 5 years. If the bathroom is part of a larger kitchen project,
          both are quoted together. Kitchen ranges and the full process are on the{" "}
          <Link to="/custom-kitchen-cabinet-cost-halifax" className="underline">
            Halifax cabinet cost guide
          </Link>{" "}
          and the{" "}
          <Link to="/custom-cabinetry-halifax" className="underline">
            Halifax cabinet maker page
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:grid-cols-2 sm:px-8">
        <figure>
          <ResponsiveImg
            src={heroImg}
            alt="Reeded oak bathroom vanity with vertical fluting and a warm wood finish"
            width={1200}
            height={900}
            loading="lazy"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-white/80">
            Reeded oak vanity from the Hempston photo library.
          </figcaption>
        </figure>
        <figure>
          <ResponsiveImg
            src={doubleVanity}
            alt="Light oak double bathroom vanity with two sinks"
            width={1200}
            height={900}
            loading="lazy"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-3 text-sm text-white/80">
            Light oak double vanity from the Hempston photo library.
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Bathroom vanity questions
          </h2>
          <VisibleFaq
            items={faqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light text-white"
            answerClassName="mt-3 text-sm leading-relaxed text-white/85"
          />
          <p className="mt-8 text-sm">
            <a href={PHONE_TEL} className="underline">
              Call {PHONE_DISPLAY}
            </a>
            {" · "}
            <Link to="/contact" className="underline">
              Book a consultation
            </Link>
            {" · "}
            <Link to="/built-ins-millwork-nova-scotia" className="underline">
              Built-ins and millwork
            </Link>
          </p>
        </div>
      </section>
      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
