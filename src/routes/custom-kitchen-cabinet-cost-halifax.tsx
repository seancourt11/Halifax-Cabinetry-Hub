import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { VisibleFaq } from "@/components/visible-faq";
import { ResponsiveImg } from "@/components/responsive-img";
import { heroImagePreload } from "@/lib/image-srcset";
import { breadcrumbSchema, faqPageSchema, SITE_URL } from "@/lib/schema";
import {
  KITCHEN_PRICE_LABEL,
  LEAD_TIME_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RUSH_LEAD_TIME_LABEL,
  VANITY_PRICE_LABEL,
} from "@/lib/site";
import heroImg from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";

const PAGE_TITLE = "Kitchen Cabinet Cost in Halifax | Hempston Home";
const PAGE_DESC =
  "How much custom kitchen cabinets cost in Halifax: most full kitchens run $25,000 to $75,000 and take 8 to 14 weeks. Vanities and built-ins are quoted too.";
const PATH = "/custom-kitchen-cabinet-cost-halifax";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const faqs = [
  {
    q: "How much do custom kitchen cabinets cost in Halifax?",
    a: `A full custom kitchen typically runs ${KITCHEN_PRICE_LABEL}. The quote is itemised after a design consultation and reflects the size of the room, the door style, the wood and the hardware.`,
  },
  {
    q: "How much are vanities and built-ins?",
    a: `Vanities and built-ins usually run ${VANITY_PRICE_LABEL}. They are quoted on their own when they are not part of a kitchen.`,
  },
  {
    q: "How long does a Halifax kitchen take?",
    a: `Most Halifax kitchens take ${LEAD_TIME_LABEL} from the first design consultation to installation. On the Halifax page, design and approvals are described as usually 2 to 4 weeks, fabrication as 4 to 8 weeks, and installation as typically 3 to 7 days. We confirm the timeline in writing before any deposit.`,
  },
  {
    q: "Is a faster kitchen possible?",
    a: `Qualifying rush projects can be ${RUSH_LEAD_TIME_LABEL}. The rush premium is quoted up front. The rush page explains that program. It does not change the standard ${LEAD_TIME_LABEL} window.`,
  },
];

export const Route = createFileRoute("/custom-kitchen-cabinet-cost-halifax")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "article" },
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
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Halifax", item: "/custom-cabinetry-halifax" },
            { name: "Custom kitchen cabinet cost in Halifax", item: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }),
  component: CostGuidePage,
});

function CostGuidePage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 pb-8 pt-28 sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70"
        >
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/custom-cabinetry-halifax" className="hover:text-white">
            Halifax
          </Link>
          <span className="mx-2">/</span>
          <span>Cost</span>
        </nav>
        <h1 className="mt-6 font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-5xl">
          How Much Do Custom Kitchen Cabinets Cost in Halifax?
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-white/90">
          A full custom Hempston kitchen in Halifax typically runs {KITCHEN_PRICE_LABEL}. Most of
          those projects take {LEAD_TIME_LABEL} from the first design consultation to installation.
          Vanities and smaller built-ins usually run {VANITY_PRICE_LABEL}.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ResponsiveImg
          src={heroImg}
          alt="White painted Shaker kitchen cabinetry with a brass hood, an example of Hempston work"
          width={1600}
          height={1000}
          fetchPriority="high"
          sizes="(min-width: 768px) 768px, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
        <p className="mt-3 text-sm text-white/70">
          An example of painted Shaker cabinetry from the Hempston library. It is not a priced
          Halifax quote.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-sm leading-relaxed text-white/90 sm:px-8">
        <h2 className="font-display text-2xl font-light uppercase tracking-[0.06em] text-white">
          What the range covers
        </h2>
        <p>
          The {KITCHEN_PRICE_LABEL} figure is the typical range for a full custom kitchen, not a
          price per door and not a sale price. Hempston quotes after a design consultation. The
          written quote is itemised. On the Halifax page, the things that move a number are the size
          of the space, the door style, the species of wood, the hardware, and the complexity of the
          build.
        </p>
        <p>
          Design is included in the cabinetry quote. We do not publish a separate design fee on this
          site. Nova Scotia tax is shown on the written quote before any deposit, the same way other
          Hempston quotes are written. This page does not list line-item prices for stone, appliances
          or labour from other trades.
        </p>
        <h2 className="pt-4 font-display text-2xl font-light uppercase tracking-[0.06em] text-white">
          How the {LEAD_TIME_LABEL} breaks down
        </h2>
        <p>
          The Halifax page already splits a typical kitchen this way: design and approvals usually
          take 2 to 4 weeks, fabrication in the workshop takes 4 to 8 weeks, and installation is
          typically completed within 3 to 7 days. Together that sits inside {LEAD_TIME_LABEL}. The
          date is confirmed in writing before any deposit.
        </p>
        <p>
          Qualifying rush kitchens are a separate program, {RUSH_LEAD_TIME_LABEL}, with the rush
          premium quoted up front. Read{" "}
          <Link to="/rush-custom-kitchen-cabinets" className="underline">
            rush custom kitchen cabinets
          </Link>{" "}
          for that timeline. The standard figure on every other page, including this one, is{" "}
          {LEAD_TIME_LABEL}.
        </p>
        <h2 className="pt-4 font-display text-2xl font-light uppercase tracking-[0.06em] text-white">
          Vanities, built-ins and where the work is built
        </h2>
        <p>
          Vanities and built-ins usually run {VANITY_PRICE_LABEL}. See{" "}
          <Link to="/custom-bathroom-vanities-halifax" className="underline">
            custom bathroom vanities in Halifax
          </Link>{" "}
          and{" "}
          <Link to="/built-ins-millwork-nova-scotia" className="underline">
            built-ins and millwork in Nova Scotia
          </Link>
          . Cabinets are built at 6359 Bayne St, Halifax. Dartmouth and Bedford are served from that
          shop, which is described on the{" "}
          <Link to="/custom-cabinets-dartmouth-bedford" className="underline">
            Dartmouth and Bedford page
          </Link>
          .
        </p>
        <p>
          To get a number for your room, call {PHONE_DISPLAY} or{" "}
          <Link to="/contact" className="underline">
            book a consultation
          </Link>
          . The consultation is free.
        </p>
      </div>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Cost and timeline questions
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
          </p>
        </div>
      </section>
      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
