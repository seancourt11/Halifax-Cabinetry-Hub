import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";
import { ResponsiveImg } from "@/components/responsive-img";
import { useVanityPromoPhase } from "@/components/vanity-promo-banner";
import vanityHero from "@/assets/vanities/antique-walnut-six-drawer-vanity-slab-fronts-3-4-inch-gables.webp";
import reededVanity from "@/assets/projects/reeded-oak-vanity.jpg";
import oakSixDrawer from "@/assets/vanities/cerused-oak-six-drawer-vanity-shaker-fronts-3-4-inch-gables.webp";
import navyKitchen from "@/assets/projects/navy-cabinetry-brass-pulls.jpg";
import woodSamples from "@/assets/hempston-oak-samples.jpg";
import { breadcrumbSchema, faqPageSchema, imageObjectGraph, SITE_URL } from "@/lib/schema";
import {
  EMAIL,
  KITCHEN_PRICE_LABEL,
  LEAD_TIME_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PUBLIC_HOURS_LABEL,
  RUSH_LEAD_TIME_LABEL,
  VANITY_PRICE_LABEL,
  WARRANTY_LABEL,
} from "@/lib/site";
import { VANITY_PROMO_TIMING, VANITY_TIMELINE_NOTE, vanityPromoPhase } from "@/lib/vanity-promo";

const PAGE_TITLE = "Custom Bathroom Vanities | Hempston Home";
const PAGE_DESC =
  "Custom bathroom vanities from the Hempston Home shop at 6359 Bayne St, Halifax. Any colour or stain, oil finishes, and a 5-year workmanship warranty. Call (902) 442-0543.";
const ABSOLUTE_URL = `${SITE_URL}/lp/custom-vanities`;

const proof = [
  {
    src: vanityHero,
    alt: "Custom bathroom vanity with white marble top",
    width: 1440,
    height: 1920,
    eager: true,
  },
  {
    src: reededVanity,
    alt: "Reeded white oak bathroom vanity",
    width: 1024,
    height: 768,
    eager: false,
  },
  {
    src: oakSixDrawer,
    alt: "Six-drawer oak vanity with undermount sink",
    width: 1440,
    height: 1920,
    eager: false,
  },
  {
    src: navyKitchen,
    alt: "Custom painted kitchen cabinetry",
    width: 1282,
    height: 1920,
    eager: false,
  },
] as const;

const samplePhoto = {
  src: woodSamples,
  alt: "Hand-finished wood cabinetry sample",
  width: 1600,
  height: 1200,
};

const vanityTypes = [
  {
    title: "Six-drawer vanities",
    body: "Slab or shaker fronts, with 3/4 inch or 1.5 inch side gables.",
    hash: "six-drawer-34",
  },
  {
    title: "Wall-hung double",
    body: "Doors on either side of a centre drawer stack, hung on the wall.",
    hash: "wall-hung-double",
  },
  {
    title: "Floating double",
    body: "Three drawers over an open shelf, with two sinks.",
    hash: "floating-double",
  },
  {
    title: "Three-drawer and tapered-leg singles",
    body: "A furniture vanity with full-width drawers, or one drawer over two doors.",
    hash: "three-drawer-single",
  },
  {
    title: "Open-shelf doubles",
    body: "Four drawers over an open lower shelf, on four legs.",
    hash: "open-shelf-double",
  },
] as const;

const steps = [
  {
    name: "Photo and dimensions",
    text: "Send a photo of a vanity you love, plus the room width and basin layout.",
  },
  {
    name: "Colour or stain sample",
    text: "We hand-finish a sample in your paint colour, stain, or oil before production.",
  },
  {
    name: "Written quote",
    text: `You receive an itemised quote. Vanities and built-ins usually start at ${VANITY_PRICE_LABEL}.`,
  },
  { name: "Production", text: "Design, build, and finish happen under one roof at Bayne St." },
  { name: "Install", text: "We install across Canada and the United States." },
];

function landingFaqs(promo: boolean) {
  return [
    {
      q: "How long do vanities take?",
      a: promo
        ? `${VANITY_PROMO_TIMING} ${VANITY_TIMELINE_NOTE} Hours are ${PUBLIC_HOURS_LABEL}.`
        : `${VANITY_TIMELINE_NOTE} Hours are ${PUBLIC_HOURS_LABEL}. Full kitchens typically take ${LEAD_TIME_LABEL}.`,
    },
    {
      q: "Can the colour or stain be changed?",
      a: "Yes. Paint colours, including Farrow & Ball and Benjamin Moore, and wood stains are fully custom. Natural oil finishes such as Rubio Monocoat and Osmo are available as well.",
    },
    {
      q: "Can you match a vanity that is not shown?",
      a: "Yes. The vanities shown are a selection. We custom design and build vanities of any size, style or finish. Send us a photo of a vanity you love and we'll design and produce one to match.",
    },
    {
      q: "Where are the cabinets built?",
      a: "They are designed, built, and finished at 6359 Bayne St, Halifax, NS B3K 2V6. We install across Canada and the United States. Toronto and the Long Beach area are facilities and service bases.",
    },
  ];
}

function pageImages(promo: boolean) {
  const items = promo ? [...proof, samplePhoto] : [...proof];
  return items.map((image) => ({
    url: `${SITE_URL}${image.src}`,
    caption: image.alt,
    name: image.alt,
    width: image.width,
    height: image.height,
  }));
}

const callClass =
  "inline-flex items-center justify-center bg-white px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[oklch(0.14_0_0)] transition-colors hover:bg-white/85";
const quoteClass =
  "inline-flex items-center justify-center border border-white/40 px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-white";

export const Route = createFileRoute("/lp/custom-vanities")({
  head: () => {
    const phase = vanityPromoPhase();
    const description = phase ? `${PAGE_DESC} ${phase.discount} ${VANITY_PROMO_TIMING}` : PAGE_DESC;
    return {
      meta: [
        { title: PAGE_TITLE },
        { name: "description", content: description },
        { name: "robots", content: "noindex" },
        { property: "og:title", content: PAGE_TITLE },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: ABSOLUTE_URL },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: PAGE_TITLE },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: ABSOLUTE_URL }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Custom bathroom vanities", item: "/lp/custom-vanities" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(imageObjectGraph(pageImages(phase !== null))),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqPageSchema(landingFaqs(phase !== null))),
        },
      ],
    };
  },
  component: LandingPage,
});

function LandingPage() {
  const phase = useVanityPromoPhase();
  const faqs = landingFaqs(phase !== null);
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      <section className="bg-[oklch(0.14_0_0)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
              Hempston Home
            </p>
            <h1 className="mt-4 font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl">
              Custom bathroom vanities from a Halifax shop
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Any colour or stain, including Farrow & Ball and Benjamin Moore. Oil finishes such as
              Rubio Monocoat and Osmo are available.
              {phase ? ` ${VANITY_PROMO_TIMING}` : ` ${VANITY_TIMELINE_NOTE}`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className={callClass}>
                Call {PHONE_DISPLAY}
              </a>
              <a href="#quote" className={quoteClass}>
                Start a vanity quote
              </a>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70">
              Built at 6359 Bayne St, Halifax. {WARRANTY_LABEL}.
            </p>
          </div>
          <div>
            <ResponsiveImg
              src={vanityHero}
              alt="Custom bathroom vanity with white marble top"
              title="Custom bathroom vanity with white marble top"
              width={1440}
              height={1920}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-auto w-full bg-white object-contain"
            />
          </div>
        </div>
      </section>

      {phase ? (
        <section className="border-y border-black/10 bg-[oklch(0.96_0.012_85)] text-black">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-[180px_1fr]">
            <div>
              <ResponsiveImg
                src={samplePhoto.src}
                alt={samplePhoto.alt}
                title={samplePhoto.alt}
                width={samplePhoto.width}
                height={samplePhoto.height}
                loading="lazy"
                sizes="180px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/55">
                Holiday offer
              </p>
              <p className="mt-3 font-display text-2xl font-light uppercase leading-tight tracking-[0.04em] sm:text-3xl">
                {phase.discount}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70">
                {VANITY_PROMO_TIMING} {phase.note}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[oklch(0.98_0_0)] text-black">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/55">
            Recent work
          </p>
          <h2 className="mt-4 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-4xl">
            Vanities, with kitchen proof
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {proof.slice(1).map((image) => (
              <figure key={image.alt} className="border border-black/10 bg-white">
                <ResponsiveImg
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="border-t border-black/10 p-4 text-sm text-black/70">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Why Hempston
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-4xl">
            Design, build, finish, and install under one roof
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Design, build, and finish happen at 6359 Bayne St, Halifax.",
              "We custom design to your drawings or a photo of a vanity you love.",
              "Drawer boxes are dovetailed, and doors and drawers use soft-close hardware.",
              "We install across Canada and the United States.",
            ].map((item) => (
              <li
                key={item}
                className="border-t border-white/15 pt-4 text-base leading-relaxed text-white/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[oklch(0.98_0_0)] text-black">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/55">
            Vanity types
          </p>
          <h2 className="mt-4 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-4xl">
            A selection, not the limit
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {vanityTypes.map((item) => (
              <Link
                key={item.hash}
                to="/products/vanities"
                hash={item.hash}
                className="border border-black/10 bg-white p-5 transition-colors hover:border-black/30"
              >
                <p className="font-display text-xl font-light uppercase tracking-[0.04em]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Process
          </p>
          <h2 className="mt-4 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-4xl">
            From a photo to a finished vanity
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.name} className="border-t border-white/15 pt-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                  0{index + 1}
                </p>
                <p className="mt-3 font-display text-lg font-light uppercase tracking-[0.04em]">
                  {step.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70">
            {VANITY_TIMELINE_NOTE} Full kitchens typically take {LEAD_TIME_LABEL} and run{" "}
            {KITCHEN_PRICE_LABEL}. A qualifying rush kitchen is {RUSH_LEAD_TIME_LABEL}. Vanities and
            built-ins usually start at {VANITY_PRICE_LABEL}.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.98_0_0)] text-black">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-4xl">
            Common questions
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-black/10 pt-5">
                <dt className="font-display text-lg font-light uppercase tracking-[0.04em]">
                  {faq.q}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-black/70">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="quote" className="scroll-mt-44 border-t border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
              Start a vanity quote
            </p>
            <h2 className="mt-4 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-5xl">
              Call or send the details
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Call {PHONE_DISPLAY}, or tell us the room and send a photo of a vanity you love.
            </p>
            <a href={PHONE_TEL} className={`${callClass} mt-8`}>
              Call {PHONE_DISPLAY}
            </a>
            <p className="mt-8 text-sm leading-relaxed text-white/70">
              6359 Bayne St, Halifax, NS B3K 2V6
              <br />
              {PUBLIC_HOURS_LABEL}
              <br />
              <a href={`mailto:${EMAIL}`} className="underline hover:text-white">
                {EMAIL}
              </a>
            </p>
          </div>
          <HalifaxLeadForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
