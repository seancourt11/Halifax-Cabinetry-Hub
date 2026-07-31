import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { ProductCTA, ProductBreadcrumb } from "@/components/product-cta";
import { CustomRequestCTA } from "@/components/custom-request-cta";
import { cabinetStyles } from "@/data/finishes";
import { insetGallery2026 as faceFrameGallery } from "@/data/door-gallery-2026";
import { breadcrumbSchema, faqPageSchema, SITE_URL } from "@/lib/schema";
import ogImg from "@/assets/og/og-cabinet-styles.jpg";

const cabinetFaqs = [
  { q: "What's the difference between inset and frameless cabinets?", a: "Inset cabinet doors sit flush inside a face frame with a small even reveal around each door. Frameless (European) cabinets have no face frame — doors mount directly to the box for full interior access and a seamless modern face." },
  { q: "Is inset face-frame cabinetry worth the extra cost?", a: "For heritage homes and high-end kitchens where reveal lines matter, yes — inset construction is the mark of true custom cabinetry. It requires more precise fabrication and a 3D laser site measure." },
  { q: "Do you build frameless (European) cabinets?", a: "Yes. Frameless construction maximises interior storage and pairs beautifully with modern slab doors. We build in both frameless and face-frame construction." },
  { q: "Can I mix construction styles in one kitchen?", a: "Yes — it's common to run frameless perimeter cabinetry with an inset face-frame island, or vice versa. Everything is custom, so the construction style can be tuned to each piece." },
];

const PAGE_TITLE = "Cabinetry Construction: Frameless vs Inset Face Frame — Hempston";
const PAGE_DESC =
  "Compare frameless European cabinetry and inset face-frame construction. See real door examples and learn which build style suits your custom kitchen.";
const ABSOLUTE_URL = `${SITE_URL}/products/cabinet-styles`;
const ABSOLUTE_IMAGE = `${SITE_URL}${ogImg}`;

const darkBg = "bg-[oklch(0.14_0_0)]";
const lightBg = "bg-[oklch(0.98_0_0)]";
const eyebrowDark = "text-[10px] font-medium uppercase tracking-[0.28em] text-white/70";
const eyebrowLight = "text-[10px] font-medium uppercase tracking-[0.28em] text-black/60";

export const Route = createFileRoute("/products/cabinet-styles")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "frameless cabinets, inset face frame cabinetry, European cabinetry, custom kitchen construction, frameless vs inset cabinets",
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
    links: [{ rel: "canonical", href: ABSOLUTE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Custom Cabinets", item: "/products/door-styles" },
            { name: "Cabinetry Construction Styles", item: "/products/cabinet-styles" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(cabinetFaqs)),
      },
    ],
  }),
  component: CabinetStylesPage,
});

function CabinetStylesPage() {
  return (
    <div className={`min-h-screen ${darkBg} text-white`}>
      <SiteHeader />

      {/* HERO */}
      <section className={`relative overflow-hidden ${darkBg}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <div className="text-white/80">
            <ProductBreadcrumb label="Cabinetry Construction Styles" />
          </div>
          <p className={`${eyebrowDark} mt-10`}>Cabinetry Construction</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            Frameless vs Inset Face Frame
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Before the door style and finish, there's the construction — how the doors meet the
            cabinet box. It's the single biggest driver of a kitchen's character, from crisp
            modern to furniture-grade heritage.
          </p>
        </div>
      </section>

      <CustomRequestCTA
        tone="dark"
        eyebrow="100% Custom Construction"
        heading="Request a custom cabinetry build."
        body="Frameless, inset face frame, or a hybrid across a single kitchen — every Hempston box, door and drawer is built to order. Tell us what you're planning and we'll spec the construction to suit."
        buttonLabel="Request a custom cabinetry build"
      />

      {/* Construction types — light band */}
      <section className={`border-t border-white/10 ${lightBg} text-black`}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className={eyebrowLight}>01 — Construction Types</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] text-black sm:text-4xl">
              Two Ways To Build A Cabinet
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {cabinetStyles.map((c, i) => (
              <article key={c.id} className="border border-black/10 bg-white p-8">
                <div className="flex items-start gap-6">
                  <div className="h-28 w-28 shrink-0 overflow-hidden bg-white">
                    <img
                      src={c.thumbnail}
                      alt={`${c.name} cabinetry construction example`}
                      width={224}
                      height={224}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/50">
                      {String(i + 1).padStart(2, "0")} — {c.reveal}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-light uppercase tracking-[0.14em] text-black">
                      {c.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-black/65">{c.description}</p>
                <ul className="mt-5 space-y-2 border-t border-black/10 pt-5">
                  {c.pros.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-black/80">
                      <span className="mt-2 h-px w-3 shrink-0 bg-black/40" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-black/70">
                  <span className="font-medium uppercase tracking-[0.16em] text-black/50">Best for </span>
                  {c.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inset face frame gallery — dark band */}
      <section className={`border-t border-white/10 ${darkBg} text-white`}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className={eyebrowDark}>02 — Inset Face Frame</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-4xl">
              Inset Face Frame Cabinetry Examples
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Our most exacting construction — doors fitted flush within a hand-built face frame
              for furniture-grade shadow lines. Here are inset doors across shaker, recessed-panel,
              beaded and slab profiles, finished in a range of paint colours.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {faceFrameGallery.map((d) => (
              <figure key={d.src} className="border border-white/10 bg-black/40">
                <div className="aspect-[3/4] overflow-hidden bg-white/[0.02]">
                  <img
                    src={d.src}
                    alt={`${d.name} — inset face frame ${d.profile} door in ${d.finish}`}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="border-t border-white/10 p-4">
                  <p className="font-display text-sm font-light uppercase tracking-[0.14em] text-white">
                    {d.name}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
                    {d.profile} — {d.finish}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SEO editorial */}
      <section className={`border-t border-white/10 ${darkBg}`}>
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
          <p className={eyebrowDark}>Frameless vs Inset</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-5xl">
            What's The Difference?
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              It comes down to the presence of a face frame. With{" "}
              <strong className="text-white">frameless (European) cabinetry</strong>, doors mount
              directly to the cabinet box. There is no frame between doors, which maximises interior
              volume and creates a clean, contemporary face.
            </p>
            <p>
              <strong className="text-white">Inset face frame</strong> construction is the most
              labour-intensive and exacting — the gaps around every door must be perfect — which
              is why it carries a premium and a distinctly high-end, furniture-like character.
              It's the classic choice for heritage homes and bespoke builds.
            </p>
            <p>
              Both are built to order in our shop. Whether you need the full-access efficiency of
              frameless construction or the tailored shadow lines of inset cabinetry, we fabricate
              every box, door and drawer front to suit the project.
            </p>
          </div>
        </div>
      </section>

      <ProductCTA
        eyebrow="Choose your construction"
        heading="Book a consultation — frameless or inset"
        body="Tell us the construction style you're drawn to and we'll walk you through the trade-offs, pricing, and lead times — and hand-finish a sample door in the profile and colour of your choice."
      />

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
