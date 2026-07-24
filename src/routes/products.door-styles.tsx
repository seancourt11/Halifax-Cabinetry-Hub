import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCTA, ProductBreadcrumb } from "@/components/product-cta";
import { CustomRequestCTA } from "@/components/custom-request-cta";
import { SampleRequestLink } from "@/components/sample-request-link";
import { faqPageSchema, ORG_ID, ORG_NAME } from "@/lib/schema";
import ogImg from "@/assets/og/og-door-styles.jpg";

import { showcaseGallery, insetGallery2026 } from "@/data/door-gallery-2026";

const PAGE_TITLE = "Cabinet Door Styles: Shaker, Slab, Raised Panel & More — Hempston";
const PAGE_DESC =
  "Browse Hempston's custom cabinet door styles — Shaker, slim shaker, slab, raised panel, beaded, reeded and inset face frame doors. Hand-finished in any colour or stain.";

const doorFaqs = [
  {
    q: "What is a Shaker cabinet door?",
    a: "A Shaker cabinet door is a five-piece frame-and-panel door with a flat recessed centre panel and simple square-edged rails and stiles. It's the most versatile custom cabinet door style, working equally well in traditional, transitional, and modern kitchens.",
  },
  {
    q: "What's the difference between a slab door and a Shaker door?",
    a: "A slab door is a single flat panel with no frame or profile — the go-to for modern and handleless kitchens. A Shaker door has a five-piece frame with a recessed centre panel, giving it more depth and shadow line. Slab reads modern; Shaker reads transitional to traditional.",
  },
  {
    q: "Are these the only door styles Hempston offers?",
    a: "No. Hempston is a 100% custom cabinet maker — the styles shown are a selection from our collection. We can build virtually any door profile, wood species, or finish, and match a reference photo or existing door.",
  },
  {
    q: "Can I get a real sample of a door style and finish before I commit?",
    a: "Yes. We produce hand-made door samples in your specific wood species, paint colour, or hardwax-oil stain before fabrication so you approve exactly what will be built.",
  },
];

// Show non-inset doors first so the initial 8 visible items never include face-frame doors;
// inset face-frame doors follow for users who expand the gallery.
const allDoors = [...showcaseGallery, ...insetGallery2026];

const darkBg = "bg-[oklch(0.14_0_0)]";
const lightBg = "bg-[oklch(0.98_0_0)]";
const eyebrowDark = "text-[10px] font-medium uppercase tracking-[0.28em] text-white/70";
const eyebrowLight = "text-[10px] font-medium uppercase tracking-[0.28em] text-black/60";

export const Route = createFileRoute("/products/door-styles")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "cabinet door styles, shaker vs slab cabinet doors, raised panel cabinet doors, recessed panel doors, beaded inset doors, reeded cabinet doors, inset face frame cabinets, custom kitchen door styles",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/door-styles" },
      { property: "og:image", content: ogImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:image", content: ogImg },
    ],
    links: [{ rel: "canonical", href: "/products/door-styles" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Custom Cabinets", item: "/products/door-styles" },
            { "@type": "ListItem", position: 3, name: "Cabinet Door Styles", item: "/products/door-styles" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Cabinet Door Styles",
          itemListElement: allDoors.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: d.name,
              brand: { "@id": ORG_ID, "@type": "Brand", name: ORG_NAME },
              category: "Custom cabinet door",
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(doorFaqs)),
      },
    ],
  }),
  component: DoorStylesPage,
});

function DoorStylesPage() {
  const INITIAL = 8;
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allDoors : allDoors.slice(0, INITIAL);
  const hiddenCount = allDoors.length - INITIAL;

  return (
    <div className={`min-h-screen ${darkBg} text-white`}>
      <SiteHeader />

      {/* HERO */}
      <section className={`relative overflow-hidden ${darkBg}`}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${allDoors[0]?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <div className="text-white/80">
            <ProductBreadcrumb label="Cabinet Door Styles" />
          </div>
          <p className={`${eyebrowDark} mt-10`}>Cabinet Door Styles</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            Custom Door Styles + Finishes
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Hempston is a 100% custom cabinet maker. The doors below are pieces from our signature
            door collections — a starting point, not a fixed catalogue. Any profile, wood species,
            colour or stain can be built to your specification.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            Have a reference photo, an existing door, or a proprietary profile in mind? We'll match
            it or design it from scratch.
          </p>
        </div>
      </section>

      <CustomRequestCTA
        tone="dark"
        eyebrow="100% Custom Doors"
        heading="Don't see your door? Request a custom profile."
        body="The doors below are pieces from our signature door collections — not our full range. Any profile, wood species, colour or stain can be built to your exact specification. Send a reference photo or an existing door and we'll match or design from scratch."
        buttonLabel="Request a custom door profile"
      />

      {/* Unified door gallery */}
      <section className={`border-t border-white/10 ${lightBg} text-black`}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className={eyebrowLight}>Signature Collections · 100% Custom</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] text-black sm:text-4xl">
              Slab, Shaker, Raised Panel, Beaded & Inset
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg">
              A cross-section of our signature door collections — stained white oak and walnut
              slabs, cerused and driftwood shakers, and painted MDF in deep, considered colours,
              alongside inset face-frame doors. Every commission is drawn, built and finished to
              your project.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((d) => (
              <figure key={d.src} className="border border-black/10 bg-white">
                <div className="aspect-[3/4] overflow-hidden bg-white p-4 sm:p-6">
                  <img
                    src={d.src}
                    alt={`${d.name} — ${d.profile} custom cabinet door in ${d.finish}`}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="border-t border-black/10 p-4">
                  <p className="font-display text-sm font-light uppercase tracking-[0.14em] text-black">
                    {d.name}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-black/55">
                    {d.profile} — {d.finish}
                  </p>
                  <div className="mt-3 border-t border-black/10 pt-3">
                    <SampleRequestLink
                      tone="light"
                      projectType={`${d.name} — ${d.profile} in ${d.finish} — sample`}
                      message={`Please prepare a sample of the ${d.name} door (${d.profile} in ${d.finish}).`}
                      label="Request this sample"
                    />
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {hiddenCount > 0 && (
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="border border-black bg-black px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
              >
                {expanded ? "Show fewer examples" : `Show all ${allDoors.length} examples`}
              </button>
              <p className="max-w-md text-xs leading-relaxed text-black/55">
                A selection from our door collections. Every Hempston kitchen is 100% custom —
                your door can be any profile, wood, colour or stain.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO editorial */}
      <section className={`border-t border-white/10 ${darkBg}`}>
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
          <p className={eyebrowDark}>Choosing A Door</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-5xl">
            Shaker Vs Slab — Which Is Right For You?
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              The <strong className="text-white">Shaker door</strong> is the most popular cabinet
              door style for good reason — its flat recessed panel and clean square frame suit
              traditional, transitional, and modern kitchens alike, and it pairs with virtually any
              hardware or finish.
            </p>
            <p>
              A <strong className="text-white">slab door</strong> is the choice for a strictly
              contemporary, minimalist look. With no frame or panel detail, it puts the spotlight on
              continuous wood grain or a flawless painted surface, and works especially well on
              frameless European cabinetry.
            </p>
            <p>
              If you love detail, a <strong className="text-white">raised or recessed panel</strong>{" "}
              door adds depth and shadow lines for a more formal feel, while a{" "}
              <strong className="text-white">beaded inset</strong> door brings furniture-grade
              refinement to heritage spaces. For texture, nothing beats a{" "}
              <strong className="text-white">reeded door</strong> on an island or range hood.
            </p>
          </div>
        </div>
      </section>

      <ProductCTA
        eyebrow="Request a sample"
        heading="Request a painted or stained sample of this door"
        body="Tell us the door style, wood species, and paint or stain you're drawn to — we'll hand-finish a real sample so you can live with it in your space before we build."
      />

      <SiteFooter />
    </div>
  );
}
