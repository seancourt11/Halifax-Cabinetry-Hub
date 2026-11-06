import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCTA, ProductBreadcrumb } from "@/components/product-cta";
import { CustomRequestCTA } from "@/components/custom-request-cta";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
import { CatalogueGroups } from "@/components/catalogue-grid";
import { VanityPromoBanner } from "@/components/vanity-promo-banner";
import { vanityGroups, vanityPieces } from "@/data/furniture-catalogue";
import { catalogueItemList } from "@/lib/catalogue-schema";
import { breadcrumbSchema, faqPageSchema, SITE_URL } from "@/lib/schema";
import { heroImagePreload } from "@/lib/image-srcset";

const PAGE_TITLE = "Custom Bathroom Vanities | Hempston Home";
const PAGE_DESC =
  "Custom bathroom vanities in slab, shaker, floating and furniture forms. The vanities shown are a selection, and we can design any vanity from a photo you send. Built in Canada. Catalogue and custom vanities are made in 2 to 4 weeks of production time.";
const ABSOLUTE_URL = `${SITE_URL}/products/vanities`;
const hero = vanityPieces[0];
const ABSOLUTE_IMAGE = `${SITE_URL}${hero.src}`;

const faqs = [
  {
    q: "What sizes do these bathroom vanities come in?",
    a: "Every vanity is built to measure. Single vanities are often 30 to 54 inches wide, double vanities 60 to 84 inches, and floating vanities are set at the height that suits the room and the basin.",
  },
  {
    q: "What is the difference between a floating vanity and a furniture vanity?",
    a: "A floating vanity is hung on the wall, with open floor beneath it. A furniture vanity sits on legs, a plinth or a toe kick and reads as a freestanding piece.",
  },
  {
    q: "Can the colour or stain be changed?",
    a: "Yes. Paint colours, including Farrow & Ball and Benjamin Moore, and wood stains are fully custom. Natural oil finishes such as Rubio Monocoat and Osmo are available as well.",
  },
  {
    q: "Can you build a vanity that is not shown here?",
    a: "Yes. The vanities shown here are just a selection. We custom design and build vanities of any size, style or finish. Send us a photo of a vanity you love and we'll design and produce one to match. A custom vanity is made in the same 2 to 4 weeks of production time.",
  },
  {
    q: "How long do these vanities take?",
    a: "Catalogue vanities and a vanity designed from your photo are made in 2 to 4 weeks of production time. Hours are Monday to Friday, 9 AM to 5 PM.",
  },
];

export const Route = createFileRoute("/products/vanities")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "custom bathroom vanity, six drawer vanity, floating double vanity, wall hung double vanity, shaker vanity, slab vanity, white marble vanity, smoked oak vanity, cerused oak vanity",
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
            { name: "Bathroom Vanities", item: "/products/vanities" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(catalogueItemList("Custom Bathroom Vanities", vanityPieces)),
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
      <VanityPromoBanner />

      <section className="bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-24">
          <div className="text-white/80">
            <ProductBreadcrumb label="Bathroom Vanities" tone="onDark" />
          </div>
          <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Slab vanities and vanity shapes
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            Custom Bathroom Vanities
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Six-drawer slab vanities, wall-hung doubles, floating doubles and furniture-style
            singles. Each piece is shown in a real finish, with a white marble top, and can be built
            to the width, height and basin layout of the room.
          </p>
          <BuiltInCanadaLine className="mt-4 max-w-2xl text-sm text-white/70" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            The vanities shown here are just a selection. We custom design and build vanities of any
            size, style or finish. Send us a photo of a vanity you love and we'll design and produce
            one to match. Catalogue vanities and custom vanities are both made in 2 to 4 weeks of
            production time. See the{" "}
            <Link to="/products/door-styles" className="underline hover:text-white">
              door styles
            </Link>
            .
          </p>
        </div>
      </section>

      <CustomRequestCTA
        tone="dark"
        eyebrow="100% Custom Vanities"
        heading="Your vanity, your dimensions."
        body="These are examples from the vanity catalogue, not a fixed size list. Any width, height, drawer layout, door profile, paint colour or stain can be built to your drawings or a reference photo."
        buttonLabel="Request a custom vanity"
      />

      <CatalogueGroups groups={vanityGroups} />

      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Choosing a vanity
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-5xl">
            Single, double or floating
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

      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
              Any vanity
            </p>
            <h2 className="mt-4 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-4xl">
              Bring us a vanity you love
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              The vanities shown here are just a selection. We custom design and build vanities of
              any size, style or finish. Send us a photo of a vanity you love and we'll design and
              produce one to match. A custom vanity is made in the same 2 to 4 weeks of production
              time.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-white px-6 py-4 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-[oklch(0.14_0_0)] transition-colors hover:bg-white/85"
          >
            Send us your inspiration
          </Link>
        </div>
      </section>

      <ProductCTA
        eyebrow="Request a quote"
        heading="Start a vanity quote"
        body="Tell us the vanity, the finish and the room, or send a photo of a vanity you love. We will sample the colour or stain and quote the piece. Catalogue and custom vanities are made in 2 to 4 weeks of production time."
      />
      <SiteFooter />
    </div>
  );
}
