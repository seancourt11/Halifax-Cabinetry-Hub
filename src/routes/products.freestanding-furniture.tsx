import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCTA, ProductBreadcrumb } from "@/components/product-cta";
import { CustomRequestCTA } from "@/components/custom-request-cta";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
import { CatalogueGroups } from "@/components/catalogue-grid";
import { VanityPromoStrip } from "@/components/vanity-promo-banner";
import { freestandingGroups, freestandingPieces } from "@/data/furniture-catalogue";
import { catalogueItemList } from "@/lib/catalogue-schema";
import { breadcrumbSchema, faqPageSchema, SITE_URL } from "@/lib/schema";
import { heroImagePreload } from "@/lib/image-srcset";

const PAGE_TITLE = "Freestanding Kitchen Furniture | Hempston Home";
const PAGE_DESC =
  "Freestanding hutches, kitchen islands, storage tables and worktables in paint and wood stain. Built in Canada, finished on every face. Standard lead time is 8 to 14 weeks.";
const ABSOLUTE_URL = `${SITE_URL}/products/freestanding-furniture`;
const hero = freestandingPieces[0];
const ABSOLUTE_IMAGE = `${SITE_URL}${hero.src}`;

const faqs = [
  {
    q: "What is freestanding kitchen furniture?",
    a: "It is cabinetry built as its own piece rather than a fitted run: a hutch, a kitchen island, a storage table or a worktable. It is finished on the sides you see and can sit beside fitted cabinets or stand on its own.",
  },
  {
    q: "Can an island be plumbed or wired?",
    a: "Yes. Power, plumbing and appliance openings are detailed in the shop drawings, and the base can take a stone, butcher block or steel top.",
  },
  {
    q: "Are these the only pieces you build?",
    a: "No. These are examples. Dressers, bar cabinets, benches and pieces from a designer's drawings are built the same way.",
  },
  {
    q: "How long does freestanding furniture take?",
    a: "Freestanding pieces follow the standard lead time of 8 to 14 weeks. The 2 to 4 week production time applies only to the catalogue vanities, not to this furniture. Hours are Monday to Friday, 9 AM to 5 PM.",
  },
];

export const Route = createFileRoute("/products/freestanding-furniture")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "freestanding kitchen hutch, glass door hutch, mesh door hutch, freestanding kitchen island, kitchen storage table, turned leg worktable, painted hutch, white oak hutch",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { property: "og:image", content: ABSOLUTE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ABSOLUTE_IMAGE },
    ],
    links: [{ rel: "canonical", href: ABSOLUTE_URL }, heroImagePreload(hero.src)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Custom Cabinets", item: "/products/door-styles" },
            { name: "Freestanding Furniture", item: "/products/freestanding-furniture" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          catalogueItemList("Freestanding Kitchen Furniture", freestandingPieces),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }),
  component: FreestandingPage,
});

function FreestandingPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <VanityPromoStrip />

      <section className="bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-24">
          <div className="text-white/80">
            <ProductBreadcrumb label="Freestanding Furniture" tone="onDark" />
          </div>
          <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Hutches, islands and tables
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            Freestanding Kitchen Furniture
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Hutches, kitchen islands, storage tables and worktables built as individual pieces.
            Finished on the faces you see, in paint or wood stain, to sit with fitted cabinetry or
            stand alone.
          </p>
          <BuiltInCanadaLine className="mt-4 max-w-2xl text-sm text-white/70" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            Standard lead time is 8 to 14 weeks. See{" "}
            <Link to="/products/vanities" className="underline hover:text-white">
              bathroom vanities
            </Link>{" "}
            and{" "}
            <Link to="/products/door-styles" className="underline hover:text-white">
              door styles
            </Link>
            .
          </p>
        </div>
      </section>

      <CustomRequestCTA
        tone="dark"
        eyebrow="100% Custom Furniture"
        heading="Have a piece in mind? We will draw and build it."
        body="These are examples, not a fixed range. Send a sketch, a drawing set or a reference photo and the piece can be detailed for production."
        buttonLabel="Request a custom piece"
      />

      <CatalogueGroups groups={freestandingGroups} />

      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Common questions
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-5xl">
            Freestanding furniture, answered
          </h2>
          <dl className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-white/10 pt-6">
                <dt className="font-display text-lg font-light uppercase tracking-[0.06em]">
                  {faq.q}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-white/65">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ProductCTA
        eyebrow="Start your piece"
        heading="Commission a freestanding piece"
        body="Tell us the piece, the room and the finish. We will draw it, sample the colour or stain, and build it. Standard lead time is 8 to 14 weeks."
      />
      <SiteFooter />
    </div>
  );
}
