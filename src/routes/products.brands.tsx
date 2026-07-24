import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { ProductCTA, ProductBreadcrumb } from "@/components/product-cta";
import ogImg from "@/assets/og/og-brands.jpg";
import calacattaBg from "@/assets/materials/detail_13_calacatta_viola_bookmatch.png";

const PAGE_TITLE = "Brands We Work With: Cabinetry Suppliers — Hempston";
const PAGE_DESC =
  "The premium brands Hempston Home specifies — Blum, Sub-Zero, Rubio Monocoat, Caesarstone, Richelieu & more — for hardware, finishes, stone, appliances, and panels.";

type Brand = { name: string; desc: string };
type BrandGroup = { name?: string; brands: Brand[] };
type Category = {
  id: string;
  title: string;
  intro: string;
  groups: BrandGroup[];
};

const categories: Category[] = [
  {
    id: "wood-finishes",
    title: "Wood Finishes & Coatings",
    intro:
      "The finish is what separates a good cabinet from a great one. We work with premium hardwax oils, natural penetrating finishes, and waterborne polyurethanes trusted by luxury woodworkers and flooring specialists worldwide.",
    groups: [
      {
        brands: [
          { name: "Rubio Monocoat", desc: "Belgian single-coat hardwax oil available in 50+ colours (Smoke, Charcoal, Chocolate, Pure, Natural, Sky Grey, and more). Our go-to for natural, low-sheen kitchen and millwork finishes." },
          { name: "Osmo", desc: "Polyx-Oil and 2K Wood Oil. German hardwax oil with excellent durability and matte, satin, and gloss options." },
          { name: "WOCA", desc: "Danish plant-based penetrating oils, favoured for soft, natural aesthetics on white oak and walnut." },
          { name: "Bona", desc: "Swedish waterborne polyurethane, the gold standard for high-traffic hardwood surfaces." },
          { name: "Odie's Oil", desc: "Hand-applied artisan finish, non-toxic and food-safe." },
          { name: "General Finishes", desc: "Full range of stains, dyes, and hardwax oils." },
          { name: "Natura Onecoat, Fiddes, Blanchon, Saicos", desc: "Alternative hardwax oils for specific project requirements." },
          { name: "Vermeister", desc: "Italian waterborne polyurethane for luxury residential and boutique commercial finishes." },
        ],
      },
    ],
  },
  {
    id: "hardware",
    title: "Cabinet Hardware",
    intro:
      "Precision hardware is what makes a cabinet feel expensive. We spec Austrian and German engineering for hinges, drawers, and lift systems, with decorative pulls and knobs sourced through our Canadian distribution network.",
    groups: [
      {
        name: "Functional Hardware",
        brands: [
          { name: "Blum", desc: "Austrian benchmark for kitchen hardware. Tandembox and Legrabox drawer systems, CLIP top and Blumotion soft-close hinges, Aventos lift systems." },
          { name: "Häfele", desc: "Full-system hardware, integrated lighting, smart storage, and pantry pull-outs." },
          { name: "Hettich", desc: "German-engineered Sensys hinges, InnoTech Atira and Quadro drawer systems." },
          { name: "Salice, Grass", desc: "Secondary hinge and slide systems for specific applications." },
          { name: "Kesseböhmer", desc: "Corner solutions, pull-out pantries, and heavy-duty racks." },
          { name: "Sugatsune", desc: "Japanese precision hardware for minimalist and specialty applications." },
        ],
      },
      {
        name: "Decorative Hardware (Pulls, Knobs, Edge Pulls)",
        brands: [
          { name: "Richelieu", desc: "Canada's largest cabinet and furniture hardware supplier; our primary source for decorative hardware across finishes." },
          { name: "Top Knobs", desc: "U.S. designer pulls and knobs in unlacquered brass, bronze, and gunmetal." },
          { name: "Berenson", desc: "Wide range of finishes and styles from a Canadian distributor." },
          { name: "Emtek", desc: "Architectural-grade cabinet and door hardware." },
          { name: "Armac Martin, Sun Valley Bronze", desc: "Specialty solid brass and bronze for high-end residential." },
        ],
      },
    ],
  },
  {
    id: "stone",
    title: "Stone & Countertop Surfaces",
    intro:
      "We design and manage stone production through partnerships with trusted leading fabricators, ensuring every slab, seam, and edge detail is executed to spec. From material selection and slab layout to templating, fabrication, and installation oversight — we manage the full process so the finished product matches the design intent.",
    groups: [
      {
        name: "Engineered Quartz",
        brands: [
          { name: "Caesarstone", desc: "Israeli quartz, widely specified for its consistency and warranty." },
          { name: "Cambria", desc: "U.S. quartz, deep pattern library with strong marble-look options." },
          { name: "Silestone (Cosentino)", desc: "Spanish quartz with a broad palette and integrated antimicrobial technology." },
          { name: "Hanstone", desc: "Korean quartz, popular in the Canadian market." },
        ],
      },
      {
        name: "Sintered Stone & Ultra-Compact Surfaces",
        brands: [
          { name: "Dekton (Cosentino)", desc: "Ultra-durable sintered surface for countertops, backsplashes, and exterior applications." },
          { name: "Neolith", desc: "Sintered stone with large-format slabs, ideal for waterfall islands and full-height backsplashes." },
          { name: "Lapitec", desc: "Italian sintered stone, full-body colour, UV-stable." },
        ],
      },
      {
        name: "Natural Stone",
        brands: [
          { name: "Polycor", desc: "Canadian natural stone supplier (marble, granite, limestone)." },
          { name: "Antolini", desc: "Italian luxury natural stone for statement islands and vanities." },
        ],
      },
      {
        name: "Solid Surface & Specialty",
        brands: [
          { name: "Corian (DuPont)", desc: "Seamless solid surface, thermoformable." },
          { name: "Wilsonart, Formica", desc: "High-pressure laminate countertops and cabinet surfaces." },
          { name: "Fenix NTM", desc: "Italian nano-tech matte laminate; a designer favourite for fingerprint-resistant cabinetry." },
          { name: "Richlite, PaperStone", desc: "Sustainable resin-composite surfaces." },
        ],
      },
    ],
  },
  {
    id: "panels",
    title: "Panels, Veneers & Substrates",
    intro:
      "The core of any custom cabinet build. We source premium plywood, MDF, veneers, and decorative panels through Canada's leading distributors.",
    groups: [
      {
        brands: [
          { name: "Columbia Forest Products", desc: "North American hardwood plywood, formaldehyde-free PureBond technology." },
          { name: "Baltic Birch", desc: "Multi-ply birch for structural and exposed applications." },
          { name: "Hardwoods Inc.", desc: "Premium architectural materials distributor (hardwood plywood, veneers, solid lumber)." },
          { name: "Upper Canada Forest Products (UCS Group)", desc: "Hardwood lumber, decorative panels, edgebanding, architectural surfaces." },
          { name: "Wanderosa", desc: "Ontario manufacturer of raw and decorative panels, melamine, and edgebanding." },
          { name: "Abet Laminati", desc: "Italian designer laminates." },
          { name: "Egger, Kronospan", desc: "European melamine and TFL panels." },
        ],
      },
    ],
  },
  {
    id: "appliances",
    title: "Luxury Kitchen Appliances",
    intro:
      "When we build a kitchen around Sub-Zero refrigeration or a Wolf range, every millimetre of the cabinetry is engineered around the appliance. These are the appliance brands we regularly integrate into custom kitchens.",
    groups: [
      {
        brands: [
          { name: "Sub-Zero / Wolf / Cove", desc: "The gold-standard trio for refrigeration, cooking, and dishwashing in luxury kitchens." },
          { name: "Miele", desc: "German precision across ovens, steam ovens, dishwashers, and coffee systems." },
          { name: "Gaggenau", desc: "Ultra-premium built-ins for serious home chefs." },
          { name: "Thermador", desc: "Star Burner ranges, professional-grade built-ins." },
          { name: "JennAir", desc: "Modern luxury with strong panel-ready options." },
          { name: "Monogram (GE)", desc: "Customizable finishes and smart connectivity." },
          { name: "Viking", desc: "Professional-grade American design." },
          { name: "Fisher & Paykel", desc: "New Zealand engineering, panel-ready refrigeration and column options." },
          { name: "BlueStar", desc: "1,000+ custom colours; the most customizable pro range on the market." },
          { name: "Signature Kitchen Suite (SKS)", desc: "Tech-forward luxury from LG." },
          { name: "Dacor, Café, AGA, La Cornue", desc: "Specialty and heritage brands for statement kitchens." },
        ],
      },
    ],
  },
  {
    id: "coatings-suppliers",
    title: "Finishing & Coatings Suppliers",
    intro: "Behind every flawless spray finish is a professional coatings partner.",
    groups: [
      {
        brands: [
          { name: "Clancy's Commercial Coatings", desc: "Professional wood coatings, lacquers, and spray finishing systems." },
          { name: "ML Campbell", desc: "Full range of pre-catalyzed and conversion varnishes." },
          { name: "Sherwin-Williams Wood Coatings", desc: "Industrial-grade lacquers and stains." },
          { name: "Renner Italia", desc: "European water-based coatings for premium millwork." },
        ],
      },
    ],
  },
];

export const Route = createFileRoute("/products/brands")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "cabinetry brands, Blum hardware, Sub-Zero Wolf, Rubio Monocoat, Caesarstone, Richelieu, kitchen appliance brands, cabinet hardware suppliers" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products/brands" },
      { property: "og:image", content: calacattaBg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: calacattaBg },
    ],
    links: [{ rel: "canonical", href: "/products/brands" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
            { "@type": "ListItem", position: 3, name: "Brands", item: "/products/brands" },
          ],
        }),
      },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  const darkBg = "bg-[oklch(0.14_0_0)]";
  const lightBg = "bg-[oklch(0.98_0_0)]";
  const eyebrowDark = "text-[10px] font-medium uppercase tracking-[0.28em] text-white/70";
  const eyebrowLight = "text-[10px] font-medium uppercase tracking-[0.28em] text-black/60";

  return (
    <div className={`min-h-screen ${darkBg} text-white`}>
      <SiteHeader />

      {/* HERO — dark editorial */}
      <section className={`relative overflow-hidden ${darkBg}`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${calacattaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <div className="text-white/80">
            <ProductBreadcrumb label="Brands" />
          </div>
          <p className={`${eyebrowDark} mt-10`}>Brands We Work With</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            The Brands Behind Every Hempston Build
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Every kitchen, cabinetry build, and custom installation is only as good as the components inside it. We specify and install the same materials, hardware, and finishes trusted by top designers, architects, and luxury builders worldwide — sourced through established Canadian and international suppliers.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            Below are the brands we regularly work with, organized by category. If you're looking for a specific product, finish, or brand not listed here, get in touch — our sourcing network is extensive.
          </p>
        </div>
      </section>

      {/* CATEGORIES — alternating dark/light editorial bands, fully expanded */}
      {categories.map((cat, idx) => {
        const isDark = idx % 2 === 0;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`border-t ${isDark ? `${darkBg} border-white/10 text-white` : `${lightBg} border-black/10 text-black`}`}
          >
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
              <div className="grid gap-14 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.4fr)]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p className={isDark ? eyebrowDark : eyebrowLight}>
                    {String(idx + 1).padStart(2, "0")} — Category
                  </p>
                  <h2
                    className={`mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] sm:text-4xl ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {cat.title}
                  </h2>
                  <p
                    className={`mt-6 text-sm leading-relaxed sm:text-base ${
                      isDark ? "text-white/70" : "text-black/65"
                    }`}
                  >
                    {cat.intro}
                  </p>
                </div>

                <div className="space-y-12">
                  {cat.groups.map((group, gi) => (
                    <div key={group.name ?? gi}>
                      {group.name && (
                        <h3
                          className={`mb-8 font-display text-xs font-medium uppercase tracking-[0.28em] ${
                            isDark ? "text-white/60" : "text-black/55"
                          }`}
                        >
                          {group.name}
                        </h3>
                      )}
                      <ul
                        className={`divide-y ${
                          isDark ? "divide-white/10" : "divide-black/10"
                        } border-y ${isDark ? "border-white/10" : "border-black/10"}`}
                      >
                        {group.brands.map((b) => (
                          <li key={b.name} className="grid gap-3 py-6 sm:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.6fr)] sm:gap-10 sm:py-7">
                            <p
                              className={`font-display text-base font-light uppercase tracking-[0.14em] ${
                                isDark ? "text-white" : "text-black"
                              }`}
                            >
                              {b.name}
                            </p>
                            <p
                              className={`text-sm leading-relaxed ${
                                isDark ? "text-white/65" : "text-black/65"
                              }`}
                            >
                              {b.desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why this matters */}
      <section className={`border-t border-white/10 ${darkBg}`}>
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
          <p className={eyebrowDark}>Why It Matters</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-5xl">
            Built From The Inside Out
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              When you invest in a custom kitchen project with Hempston Home, you're not just paying for cabinets — you're paying for the sum of every component inside them. The brands above represent decades of engineering, testing, and refinement.
            </p>
            <p>
              Specifying them isn't about name-dropping; it's about building something that will still look and function beautifully in twenty years. If you'd like to discuss a project — or you're looking for a specific brand, finish, or product not listed here — get in touch. We'll help you spec the right materials for your budget, timeline, and design vision.
            </p>
          </div>
        </div>
      </section>

      <ProductCTA
        eyebrow="Spec it with us"
        heading="Looking for a specific brand or finish?"
        body="Our sourcing network runs deep. Tell us what you have in mind and we'll help you spec the right materials for your budget, timeline, and design vision."
      />

      <SiteFooter />
    </div>
  );
}
