import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { ProductCTA, ProductBreadcrumb } from "@/components/product-cta";
import { CustomRequestCTA } from "@/components/custom-request-cta";
import { SampleRequestLink } from "@/components/sample-request-link";

import { paintColors, woodStains } from "@/data/finishes";
import { insetGallery2026 } from "@/data/door-gallery-2026";
import { faqPageSchema } from "@/lib/schema";
import ogImg from "@/assets/og/og-colours-finishes.jpg";

const finishFaqs = [
  { q: "Can Hempston match any paint colour on cabinetry?", a: "Yes — we can match virtually any paint colour, including Farrow & Ball, Benjamin Moore, Sherwin-Williams, and custom mixes. The palette on this page is our reference edit, not a limit." },
  { q: "What is a hardwax-oil wood stain?", a: "A hardwax oil is a penetrating wood finish (like Rubio Monocoat) that colours and protects hardwood in a single hand-rubbed application. It leaves a natural low-sheen surface that shows the wood's grain." },
  { q: "What finish do you use on painted cabinets?", a: "Our painted cabinets are hand-sprayed with a professional conversion varnish or waterborne 2K polyurethane, cured in a dedicated finishing room. Hard, low-sheen, and repairable." },
  { q: "Can I get a real painted or stained sample before I decide?", a: "Yes. We produce hand-made samples in your exact wood species, paint colour, or hardwax-oil stain before fabrication." },
];

const PAGE_TITLE = "Custom Cabinet Paint Colours & Wood Stains — Hempston";
const PAGE_DESC =
  "Hempston's curated cabinet paint palette and hardwax-oil wood stain range — hand-sprayed conversion finishes and hand-rubbed oils for white oak, walnut and painted cabinetry.";

const darkBg = "bg-[oklch(0.14_0_0)]";
const lightBg = "bg-[oklch(0.98_0_0)]";
const eyebrowDark = "text-[10px] font-medium uppercase tracking-[0.28em] text-white/70";
const eyebrowLight = "text-[10px] font-medium uppercase tracking-[0.28em] text-black/60";

export const Route = createFileRoute("/products/colours-finishes")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "cabinet paint colours, hardwax oil wood stains, custom cabinet colour palette, painted kitchen cabinets, white oak stain, conversion varnish cabinet finish",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/colours-finishes" },
      { property: "og:image", content: ogImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ogImg },
    ],
    links: [{ rel: "canonical", href: "/products/colours-finishes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Custom Cabinets", item: "/products/door-styles" },
            { "@type": "ListItem", position: 3, name: "Colours & Finishes", item: "/products/colours-finishes" },
          ],
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqPageSchema(finishFaqs)) },
    ],
  }),
  component: ColoursFinishesPage,
});

function ColoursFinishesPage() {
  const INITIAL_PAINTS = 6;
  const [paintsExpanded, setPaintsExpanded] = useState(false);
  // Only show swatches backed by a real hand-finished door render — never flat colour blocks.
  const paintsWithDoors = paintColors.filter((c) => c.image);
  const visiblePaints = paintsExpanded ? paintsWithDoors : paintsWithDoors.slice(0, INITIAL_PAINTS);
  const hiddenPaints = paintsWithDoors.length - INITIAL_PAINTS;

  return (
    <div className={`min-h-screen ${darkBg} text-white`}>
      <SiteHeader />

      {/* HERO */}
      <section className={`relative overflow-hidden ${darkBg}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <div className="text-white/80">
            <ProductBreadcrumb label="Colours & Finishes" />
          </div>
          <p className={`${eyebrowDark} mt-10`}>Colours & Finishes</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            Cabinet Paint Colours & Wood Stains
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Hempston is a 100% custom cabinet maker. The colours and stains below are from our
            signature palette collection — not a fixed catalogue. We can match virtually any paint
            colour or wood tone you bring to us.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            Hand-sprayed conversion finishes for painted cabinetry, and hand-rubbed hardwax-oil
            stains for solid hardwoods — specified, mixed and applied under one roof.
          </p>
        </div>
      </section>


      <CustomRequestCTA
        tone="dark"
        eyebrow="Any Colour · Any Stain"
        heading="Request a custom colour or stain match."
        body="Bring us a Farrow & Ball, Benjamin Moore, Sherwin-Williams or Rubio Monocoat reference — or a paint chip, fabric or memory — and we'll hand-finish a real sample on your chosen wood species so you can approve it in your own light."
        buttonLabel="Request a custom colour or stain"
      />

      {/* PAINT COLOURS — light band */}
      <section id="paint" className={`border-t border-white/10 ${lightBg} text-black`}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.6fr)]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className={eyebrowLight}>01 — Paint Colours · Signature Palette</p>
              <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] text-black sm:text-4xl">
                A Colour For Every Kind Of Home
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-black/65 sm:text-base">
                Softened whites, earthy neutrals, and saturated heritage tones — a look at our
                signature paint collection, hand-mixed and hand-sprayed in our finish room. We
                regularly match Farrow &amp; Ball, Benjamin Moore, Sherwin-Williams, Tonester and
                custom mixes. Colours shown on screen are a guide; we prepare hand-painted samples
                before any work begins.
              </p>
              <p className="mt-6 text-xs leading-relaxed text-black/55">
                Every painted door is hand-sprayed in a catalysed conversion varnish — a
                professional-grade finish that resists chipping, yellowing and moisture, in your
                choice of flat matte, satin or semi-gloss sheen.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {visiblePaints.map((c) => (
                  <div key={c.id} className="border-y border-black/10 bg-white">
                    <img
                      src={c.image}
                      alt={`${c.name} painted cabinet door sample`}
                      loading="lazy"
                      width={640}
                      height={800}
                      className="aspect-[5/6] w-full object-cover"
                    />
                    <div className="border-t border-black/10 p-4">
                      <p className="font-display text-sm font-light uppercase tracking-[0.14em] text-black">
                        {c.name}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-black/60">{c.note}</p>
                      <div className="mt-3 border-t border-black/10 pt-3">
                        <SampleRequestLink
                          tone="light"
                          projectType={`${c.name} painted sample`}
                          message={`Please prepare a hand-painted sample of ${c.name} on a Shaker door in a conversion-varnish finish.`}
                          label="Request a painted sample"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {hiddenPaints > 0 && (
                <div className="mt-10 flex flex-col items-center gap-3 text-center">
                  <button
                    type="button"
                    onClick={() => setPaintsExpanded((v) => !v)}
                    className="border border-black bg-black px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
                  >
                    {paintsExpanded ? "Show fewer colours" : `Show all ${paintsWithDoors.length} signature colours`}
                  </button>
                  <p className="max-w-md text-xs leading-relaxed text-black/55">
                    A selection from our signature palette — Hempston can match virtually any paint
                    colour or custom mix.
                  </p>
                </div>
              )}

          {/* Neutral inset face frame highlight */}
          <div className="mt-14 border border-black/10 bg-white p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className={eyebrowLight}>Inset Face Frame</p>
                <h3 className="mt-4 font-display text-2xl font-light uppercase leading-[1.05] tracking-[0.06em] text-black sm:text-3xl">
                  Neutrals on an inset face frame
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/65 sm:text-base">
                  Hand-sprayed conversion varnish on furniture-grade inset face frames. The
                  door sits flush inside the frame for a tailored, heritage look. Shown below
                  in <em>Tracadie</em> and <em>Vieux-Port Plaster</em> — two of our
                  most-requested neutrals. Any Farrow &amp; Ball, Benjamin Moore or custom
                  colour can be matched on the same construction.
                </p>
                <div className="mt-6">
                  <SampleRequestLink
                    tone="light"
                    projectType="Neutral inset face frame sample"
                    message="Please prepare a hand-painted neutral conversion-varnish sample on an inset face-frame door."
                    label="Request an inset face-frame sample"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <figure className="border-y border-black/10 bg-white">
                  <img
                    src={insetGallery2026[1].src}
                    alt="Tracadie painted inset face frame cabinet door"
                    loading="lazy"
                    width={640}
                    height={800}
                    className="aspect-[5/6] w-full object-cover"
                  />
                  <figcaption className="border-t border-black/10 p-3 text-center">
                    <p className="font-display text-[11px] font-light uppercase tracking-[0.18em]">Tracadie</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-black/55">Inset Face Frame</p>
                  </figcaption>
                </figure>
                <figure className="border-y border-black/10 bg-white">
                  <img
                    src={insetGallery2026[0].src}
                    alt="Vieux-Port Plaster painted inset face frame cabinet door"
                    loading="lazy"
                    width={640}
                    height={800}
                    className="aspect-[5/6] w-full object-cover"
                  />
                  <figcaption className="border-t border-black/10 p-3 text-center">
                    <p className="font-display text-[11px] font-light uppercase tracking-[0.18em]">Vieux-Port Plaster</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-black/55">Inset Face Frame</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* WOOD STAINS — dark band */}
      <section id="stains" className={`border-t border-white/10 ${darkBg} text-white`}>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_3fr)]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className={eyebrowDark}>02 — Wood Stains</p>
              <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-4xl lg:text-5xl">
                From Raw & Clear To Deep Etna Oak
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Hand-rubbed tones inspired by the natural, single-coat hardwax oils popularised by
                makers like Rubio Monocoat. Shown on white oak — final colour varies with species
                and grain.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/55">
                Hardwax oils penetrate the timber rather than sit on top, so the surface reads warm,
                matte and tactile — and stays spot-repairable for decades of daily use.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {woodStains.map((s) => (
                <div key={s.id} className="border border-white/10 bg-black/40">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={`${s.name} hardwax-oil stain sample on white oak`}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="aspect-square w-full object-contain"
                    />
                  ) : (
                    <div
                      className="aspect-square w-full"
                      style={{ backgroundColor: s.hex }}
                      role="img"
                      aria-label={`${s.name} wood stain sample on white oak`}
                    />
                  )}
                  <div className="border-t border-white/10 p-5">
                    <p className="font-display text-base font-light uppercase tracking-[0.12em] text-white">
                      {s.name}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.note}</p>
                    <div className="mt-4 border-t border-white/10 pt-4">
                      <SampleRequestLink
                        tone="dark"
                        projectType={`${s.name} stain sample`}
                        message={`Please prepare a hardwax-oil stain sample in ${s.name} on white oak.`}
                        label="Request a stain sample"
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductCTA
        eyebrow="Request a custom sample"
        heading="Request a sample of a custom colour or stain"
        body="Bring us any Farrow & Ball, Benjamin Moore, Sherwin-Williams, or Rubio Monocoat reference — or a colour of your own — and we'll hand-finish a real sample on your chosen species so you can approve it in your own light."
      />


      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
