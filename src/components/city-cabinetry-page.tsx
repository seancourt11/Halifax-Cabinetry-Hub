import { Link } from "@tanstack/react-router";
import {
  ChefHat,
  Bath,
  BookOpen,
  Hammer,
  Ruler,
  Pencil,
  Factory,
  Truck,
  ShieldCheck,
  Leaf,
  Award,
  Clock,
  MapPin,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { VisibleFaq } from "@/components/visible-faq";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
import {
  showcaseGallery,
  insetGallery2026,
} from "@/data/door-gallery-2026";
import { buildCityFaqs, cityPages, nearbyCitiesFor, type CityPageData } from "@/data/city-pages";
import { breadcrumbSchema, cityServiceSchema, faqPageSchema, howToSchema, ORG_NAME, SITE_URL } from "@/lib/schema";
import {
  CITY_SEO,
  FOUNDING_YEAR,
  KITCHEN_PRICE_LABEL,
  LEAD_TIME_LABEL,
  LOCATIONS,
  VANITY_PRICE_LABEL,
  WARRANTY_LABEL,
  mapsUrl,
} from "@/lib/site";
import projGlenHaven from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import projNwcBrass from "@/assets/projects/nwc-brass-hood-white-cabinets.jpg";
import projDbaPlIsland from "@/assets/projects/dba-pl-island-kitchen.jpg";
import projGhWhite from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";
import projDbaKentKitchen1 from "@/assets/projects/dba-kent-kitchen-1.jpg";
import projMdKitchen from "@/assets/projects/md-white-kitchen-brass-pendants.jpg";
import projDbaPlKitchen1 from "@/assets/projects/dba-pl-kitchen-1.jpg";
import projNwcOakIsland from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import projDbaKentPantry from "@/assets/projects/dba-kent-pantry.jpg";
import projModernMarble from "@/assets/projects/modern-marble-kitchen.jpg";
import projMdVanity from "@/assets/projects/md-oak-double-vanity.jpg";
import projGhButler from "@/assets/projects/gh-butler-pantry-glass.jpg";
import projNwcNavyTile from "@/assets/projects/nwc-navy-tile-backsplash.jpg";
import projWhiteMarble from "@/assets/projects/white-marble-kitchen.jpg";
import projReededVanity from "@/assets/projects/reeded-oak-vanity.jpg";

// Mixed featured doors — slab / shaker / inset interleaved
const mixedFeaturedDoors: typeof showcaseGallery = (() => {
  const slabs = showcaseGallery.filter((d) => d.category === "Modern Slab");
  const overlayNonSlab = showcaseGallery.filter((d) => d.category !== "Modern Slab");
  const buckets = [slabs, overlayNonSlab, insetGallery2026];
  const out: typeof showcaseGallery = [];
  const maxLen = Math.max(...buckets.map((b) => b.length));
  for (let i = 0; i < maxLen; i++) {
    for (const b of buckets) if (b[i]) out.push(b[i]);
  }
  return out;
})();

const services = [
  { icon: ChefHat, title: "Custom Kitchens", body: "Bespoke kitchen cabinetry designed around how you cook, gather, and entertain — from statement islands to floor-to-ceiling pantries." },
  { icon: Bath, title: "Bathroom Vanities", body: "Made-to-measure vanities, linen towers, and storage that bring spa-level calm and order to ensuites and powder rooms." },
  { icon: BookOpen, title: "Built-Ins & Shelving", body: "Custom bookcases, fireplace surrounds, window seats, and library walls that make a room feel finished and intentional." },
  { icon: Hammer, title: "Mudrooms & Laundry", body: "Hard-working cabinetry, lockers, and benches that tame Canada's four seasons of coats, boots, and gear." },
  { icon: Ruler, title: "Home Offices", body: "Integrated desks, file storage, and display built to the millimetre for a workspace that disappears into your home." },
  { icon: Award, title: "Wine & Bar Cabinetry", body: "Refined entertaining spaces — wine walls, dry bars, and butler's pantries crafted for collectors and hosts." },
];

const reasons = [
  { icon: ShieldCheck, title: "Built to Last Generations", body: "Solid-wood construction, dovetailed drawers, and conversion finishes engineered to weather Canadian humidity and temperature swings." },
  { icon: Leaf, title: "Built in Canada", body: "Built in Canada. We design, build and install custom cabinetry for your home, and we install across Canada and the United States." },
  { icon: Clock, title: "On-Time, On-Budget", body: "Written timelines and itemised quotes before any deposit. No vague estimates, no moving targets." },
  { icon: Award, title: "Heirloom Craftsmanship", body: "Decades of combined cabinet-making experience poured into every joint, edge, and finished surface." },
];

// Gallery pool for recent work section (24 curated Hempston project images)
const recentProjectsPool = [
  { src: projNwcBrass, alt: "Custom overlay cabinetry with painted shaker doors and brass hood", title: "Coastal Cottage", subtitle: "Custom Overlay", designer: "31 Westgate" },
  { src: projDbaPlIsland, alt: "Custom painted kitchen with dark stained oak island and white oak beams", title: "Dark Oak Island Kitchen", subtitle: "Painted + Stained Oak", designer: "DB Architecture" },
  { src: projGhWhite, alt: "Custom white painted shaker kitchen cabinetry", title: "Painted Shaker Kitchen", subtitle: "White Painted Cabinetry", designer: "31 Westgate" },
  { src: projDbaKentKitchen1, alt: "Inset custom cabinetry with white oak island and corner window", title: "Inset Oak Island Kitchen", subtitle: "Inset + Oak Island", designer: "DB Architecture" },
  { src: projMdKitchen, alt: "Custom white kitchen cabinetry with panelled island", title: "White Panelled Kitchen", subtitle: "White Painted Cabinetry", designer: "31 Westgate" },
  { src: projDbaPlKitchen1, alt: "Open-concept custom kitchen cabinetry with quartzite counters and timber ceiling", title: "Timber-Ceiling Kitchen", subtitle: "Open-Concept Cabinetry", designer: "DB Architecture" },
  { src: projNwcOakIsland, alt: "Custom white oak island cabinetry with painted perimeter cabinets", title: "White Oak Island Kitchen", subtitle: "White Oak Island", designer: "31 Westgate" },
  { src: projDbaKentPantry, alt: "Custom entry cabinetry with painted millwork and integrated storage", title: "Painted Entry Built-Ins", subtitle: "Custom Built-In Cabinetry", designer: "DB Architecture" },
  { src: projModernMarble, alt: "Modern light oak custom kitchen with book-matched island", title: "Modern Oak Kitchen", subtitle: "Light Oak Cabinetry", designer: "Hempston" },
  { src: projMdVanity, alt: "Light oak double vanity cabinetry", title: "Light Oak Double Vanity", subtitle: "Light Oak Vanity", designer: "31 Westgate" },
  { src: projGhButler, alt: "Butler pantry with custom glass-front upper cabinetry", title: "Glass-Front Butler Pantry", subtitle: "Glass-Front Cabinetry", designer: "31 Westgate" },
  { src: projReededVanity, alt: "Reeded walnut bathroom vanity", title: "Reeded Walnut Vanity", subtitle: "Reeded Walnut Cabinetry", designer: "Hen House" },
  { src: projNwcNavyTile, alt: "Custom navy shaker cabinetry with recessed panel doors", title: "Navy Shaker Kitchen", subtitle: "Navy Shaker Cabinetry", designer: "31 Westgate" },
  { src: projWhiteMarble, alt: "Custom white painted kitchen with glass-front uppers", title: "White Painted Kitchen", subtitle: "Glass-Front Cabinetry", designer: "31 Westgate" },
  { src: projGlenHaven, alt: "Custom white painted perimeter with stained oak island", title: "White + Oak Island Kitchen", subtitle: "White Cabinets & Oak Island", designer: "31 Westgate" },
];

const process = [
  { icon: Pencil, step: "01", title: "Design Consultation", body: "We meet, take precise measurements, and learn how you live. You leave with a clear direction and an honest budget range." },
  { icon: Ruler, step: "02", title: "Detailed Design", body: "You receive scaled drawings, 3D renderings, and curated material samples so you can see and feel every decision before we build." },
  { icon: Factory, step: "03", title: "Built in Canada", body: "Your cabinetry is built in Canada, using solid hardwoods, dovetailed drawers, and conversion-grade finishes." },
  { icon: Truck, step: "04", title: "White-Glove Installation", body: "Our installers fit, level, and finish every detail on site, then walk you through care so your investment lasts for generations." },
];

const shareImages = [
  projNwcBrass,
  projDbaPlIsland,
  projGhWhite,
  projDbaKentKitchen1,
  projMdKitchen,
  projDbaPlKitchen1,
  projNwcOakIsland,
  projDbaKentPantry,
  projModernMarble,
  projMdVanity,
  projGhButler,
  projReededVanity,
  projNwcNavyTile,
  projWhiteMarble,
  projGlenHaven,
];

function cityIndex(city: CityPageData) {
  const i = cityPages.findIndex((c) => c.slug === city.slug);
  return i < 0 ? 0 : i;
}

export function cityHead(city: CityPageData) {
  const path = `/${city.slug}`;
  const absoluteUrl = `${SITE_URL}${path}`;
  const seo = CITY_SEO[city.slug];
  const title = seo?.title ?? `Custom Kitchen Cabinets ${city.city} | Hempston Home`;
  const desc = seo?.description ?? city.heroLead;
  const share = shareImages[cityIndex(city) % shareImages.length];
  const absoluteImage = `${SITE_URL}${share}`;
  const faqs = buildCityFaqs(city);

  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { name: "keywords", content: city.keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl },
      { property: "og:image", content: absoluteImage },
      { property: "og:locale", content: "en_CA" },
      { property: "og:site_name", content: ORG_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: absoluteImage },
    ],
    links: [
      { rel: "canonical", href: absoluteUrl },
      { rel: "preload", as: "image", href: share, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          cityServiceSchema({
            slug: city.slug,
            city: city.city,
            province: city.province,
            region: city.region,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Locations", item: "/locations" },
            { name: `Custom Cabinetry ${city.city}`, item: path },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          howToSchema({
            name: `Custom cabinetry process for ${city.city}`,
            description: `How Hempston Home designs, builds, and installs custom kitchen cabinetry for ${city.city} homes. Most kitchens take ${LEAD_TIME_LABEL}.`,
            steps: process.map((p) => ({ name: p.title, text: p.body })),
          }),
        ),
      },
    ],
  };
}

export function CityCabinetryPage({ city }: { city: CityPageData }) {
  const faqs = buildCityFaqs(city);
  const nearby = nearbyCitiesFor(city, 4);
  const seo = CITY_SEO[city.slug];
  const idx = cityIndex(city);
  const heroImg = shareImages[idx % shareImages.length];
  const shownProjects = Array.from({ length: 6 }, (_, i) => recentProjectsPool[(idx + i) % recentProjectsPool.length]);
  const shownDoors = Array.from({ length: 8 }, (_, i) => mixedFeaturedDoors[(idx + i) % mixedFeaturedDoors.length]);
  const torontoStudio = city.slug === "custom-cabinetry-toronto" ? LOCATIONS.toronto : null;
  const darkBg = "bg-[oklch(0.14_0_0)]";
  const lightBg = "bg-[oklch(0.98_0_0)]";
  const darkText = "text-[oklch(0.15_0_0)]";
  const eyebrowDark = "text-[10px] font-medium uppercase tracking-[0.28em] text-white/70";
  const eyebrowLight = "text-[10px] font-medium uppercase tracking-[0.28em] text-black/60";
  const btnLight =
    "inline-block border border-white/80 bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-transparent hover:text-white";
  const btnOutlineDark =
    "inline-block border border-white/60 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black";
  const btnDark =
    "inline-block border border-black bg-black px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black";

  return (
    <div className={`min-h-screen ${darkBg} text-[oklch(0.96_0_0)]`}>
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Custom kitchen cabinetry by Hempston Home"
          width={1600}
          height={1000}
          fetchPriority="high"
          decoding="async"
          className="h-[86vh] min-h-[560px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="max-w-xl">
              <nav aria-label="Breadcrumb" className={`${eyebrowDark} mb-6`}>
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-2 opacity-60">/</span>
                <span className="text-white">Custom Cabinetry {city.city}</span>
              </nav>
              <p className={eyebrowDark}>{city.eyebrow}</p>
              <h1 className="mt-5 font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
                {seo?.h1 ?? `Custom Kitchen Cabinets in ${city.city}`}
              </h1>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-white/75">
                Built in Canada. Hempston Home designs, builds and installs custom kitchen cabinets, vanities and built-ins for {city.city} homes. We install across Canada and the United States.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#consultation"
                  className={btnLight}
                  aria-label={`Book a free design consultation in ${city.city}`}
                >
                  Book a Free Design Consultation
                </a>
                <a
                  href="#recent-work"
                  className={btnOutlineDark}
                  aria-label={`View recent Hempston cabinetry projects for ${city.city} homes`}
                >
                  View Recent Kitchens
                </a>
              </div>
              <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-light uppercase tracking-[0.22em] text-white/55">
                <a href="#services" className="hover:text-white">What we build</a>
                <span aria-hidden="true">·</span>
                <a href="#recent-work" className="hover:text-white">Recent work</a>
                <span aria-hidden="true">·</span>
                <a href="#doors" className="hover:text-white">Doors &amp; finishes</a>
                <span aria-hidden="true">·</span>
                <a href="#process" className="hover:text-white">Process</a>
                <span aria-hidden="true">·</span>
                <a href="#faq" className="hover:text-white">FAQ</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={`${darkBg} py-24`}>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className={eyebrowDark}>{city.city}'s Custom Cabinet Makers</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
            {city.introHeadline}
          </h2>
          <BuiltInCanadaLine className="mt-6 text-sm leading-relaxed text-white/80" />
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/70">
            {city.introBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* AT A GLANCE — 2026 GEO answer-first block. Structured for AI answer
          engines (Google AI Overviews, ChatGPT, Perplexity) to lift verbatim.
          Also referenced by the Speakable schema in <head>. */}
      <section id="at-a-glance" className={`${lightBg} ${darkText} border-y border-black/10 py-16`}>
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className={eyebrowLight}>At a Glance</p>
          <h2 className="mt-4 font-display text-2xl font-light uppercase tracking-[0.06em] sm:text-3xl">
            Custom cabinetry in {city.city}, {city.province}: the essentials
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70">
            {ORG_NAME} designs, builds and installs custom kitchen cabinets, bathroom vanities and
            built-in millwork for homes in {city.city} and {city.region}. Built in Canada. Every project
            is fully custom. We install across Canada and the United States.
          </p>
          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { k: "Service", v: "Custom kitchen cabinets, vanities and built-in millwork" },
              { k: "Service area", v: `${city.city}, ${city.region} and ${city.province}` },
              { k: "Typical kitchen", v: `CAD ${KITCHEN_PRICE_LABEL}` },
              { k: "Vanities and built-ins", v: `Usually ${VANITY_PRICE_LABEL}` },
              { k: "Timeline", v: `${LEAD_TIME_LABEL} from consultation to install` },
              { k: "Warranty", v: WARRANTY_LABEL },
              { k: "Origin", v: "Built in Canada" },
              { k: "Founded", v: FOUNDING_YEAR },
              { k: "Applicable tax", v: `${city.taxNote} (${city.province})` },
              { k: "Consultation", v: "Free" },
              { k: "Phone", v: "(902) 719-8497" },
              { k: "Email", v: "info@hempstonhome.com" },
              ...(torontoStudio
                ? [{ k: "Toronto studio", v: torontoStudio.copyLabel }]
                : []),
            ].map((row) => (
              <div key={row.k} className="border-t border-black/15 pt-4">
                <dt className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/55">
                  {row.k}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-black">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>



      {/* STATS */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 sm:px-8 md:grid-cols-4">
          {[
            { n: "10+", l: "Years of cabinetmaking" },
            { n: "Canada", l: "Built in Canada" },
            { n: "8 to 14", l: "Weeks, concept to install" },
            { n: "5 yr", l: "Workmanship warranty" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-4xl font-light text-white sm:text-5xl">{s.n}</p>
              <p className="mt-3 text-[10px] font-light uppercase tracking-[0.22em] text-white/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`${darkBg} py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>What We Build</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Custom cabinetry for every room
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Whether you are renovating a single room in {city.city} or building from scratch, we craft
              cohesive, made-to-measure cabinetry that carries your home's character from one space
              to the next.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className={`${darkBg} p-8`}>
                <s.icon className="h-6 w-6 text-white/85" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-lg font-light uppercase tracking-[0.18em] text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section id="recent-work" className={`${lightBg} ${darkText} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowLight}>Recent Work</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              Kitchens & millwork we've built
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              A selection of Hempston Home kitchens and millwork. The same design and build process is used for {city.city} homes.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shownProjects.map((p) => (
              <figure key={p.title + p.src} className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-2xl">
                    {p.designer}
                  </div>
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-sm uppercase tracking-[0.16em]">{p.title}</p>
                  <p className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-black/55">{p.subtitle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DOORS */}
      <section id="doors" className={`${darkBg} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>Featured Doors</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Signature doors, colours &amp; finishes
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              These are just a few from our door collections. Because Hempston is 100% custom, you're
              never limited to a catalogue — any door style, wood species, paint colour, or stain can
              be built for your {city.city} kitchen.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shownDoors.map((d) => (
              <figure key={d.name} className="group border border-white/15 bg-white p-4 sm:p-6">
                <img
                  src={d.src}
                  alt={`${d.name} — ${d.profile} custom door render for ${city.city} kitchen cabinetry`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain"
                />
                <figcaption className="mt-4 text-center">
                  <p className="font-display text-sm uppercase tracking-[0.16em] text-black">{d.name}</p>
                  <p className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-black/55">
                    {d.profile}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/products/door-styles" className={btnLight}>
              Browse All Door Styles
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className={`${lightBg} ${darkText} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowLight}>Our Process</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              From first sketch to final install
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              Every {city.city} project follows the same disciplined four-step process — so you always
              know what happens next, what's due when, and what your total investment will be.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <article key={p.step} className="border-t border-black/15 pt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/50">{p.step}</p>
                <p.icon className="mt-6 h-6 w-6" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-base font-light uppercase tracking-[0.18em]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className={`${darkBg} py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>Why {city.city} Chooses Hempston</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Furniture-grade cabinetry, made for real life
            </h2>
          </div>
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <article key={r.title} className={`${darkBg} p-8`}>
                <r.icon className="h-6 w-6 text-white/85" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-base font-light uppercase tracking-[0.18em] text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 100% CUSTOM CALLOUT */}
      <section className={`${lightBg} ${darkText} border-y border-black/10 py-20`}>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className={eyebrowLight}>Endless Possibilities</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
            The doors, colours &amp; finishes shown are just the start
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-black/70">
            Hempston is a <strong>100% custom cabinet maker</strong>. There are no fixed sizes,
            no locked-in door catalogues, and no standard colours. Whatever style, profile, wood
            species, paint, stain, or hardware you have in mind for your {city.city} home — modern
            handleless slab, classic beaded inset, or something you saw in a magazine — we design
            and build it from scratch, to the millimetre.
          </p>
          <div className="mt-10">
            <a href="#consultation" className={btnDark}>Start Your Custom Design</a>
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className={`${darkBg} py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>Where We Work</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Serving {city.city} and homes across {city.province}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              Hempston Home designs, builds and installs custom cabinetry for {city.city} and {city.region}. Built in Canada. We install across Canada and the United States.
            </p>
          </div>

          <div className="mt-14">
            <p className="text-center text-[10px] font-light uppercase tracking-[0.28em] text-white/70">
              {city.city} neighbourhoods
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {city.neighbourhoods.map((n) => (
                <li key={n} className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-[11px] font-light uppercase tracking-[0.16em] text-white/90">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.2} />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-center text-[10px] font-light uppercase tracking-[0.28em] text-white/70">
              Across {city.province}
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {city.regions.map((n) => (
                <li key={n} className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-[11px] font-light uppercase tracking-[0.16em] text-white/90">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.2} />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {torontoStudio ? (
        <section className={`${lightBg} ${darkText} border-y border-black/10 py-16`}>
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className={eyebrowLight}>Toronto studio</p>
            <h2 className="mt-4 font-display text-3xl font-light uppercase tracking-[0.06em]">
              Visit the Toronto studio
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/75">
              The Toronto studio is a local base for Greater Toronto Area projects. {torontoStudio.copyLabel}.
            </p>
            <a href={mapsUrl(torontoStudio)} className="mt-6 inline-block text-sm underline">
              Map for the Toronto studio
            </a>
          </div>
        </section>
      ) : null}

      {/* NEARBY CITIES */}
      <section className={`${lightBg} ${darkText} py-20`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowLight}>Nearby Locations</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              We also build for homes near {city.city}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              Hempston designs, fabricates and installs custom cabinetry across Canada. If you're
              outside {city.city}, one of our other regional pages likely fits your project.
            </p>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  to={`/${n.slug}` as "/custom-cabinetry-toronto"}
                  className="group flex h-full flex-col justify-between gap-4 border border-black/15 bg-white p-6 transition-colors hover:border-black"
                >
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-black/50">
                      {n.province}
                    </span>
                    <span className="mt-2 block font-display text-lg font-light uppercase tracking-[0.14em]">
                      Custom Cabinetry in {n.city}
                    </span>
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 transition-colors group-hover:text-black">
                    View →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              to="/locations"
              className="inline-block border border-black bg-black px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${darkBg} scroll-mt-24 py-24`}>

        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <p className={eyebrowDark}>Questions, Answered</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Custom cabinetry in {city.city}: FAQ
            </h2>
          </div>
          <VisibleFaq
            items={faqs}
            className="mt-12"
            questionClassName="font-display text-lg font-light uppercase tracking-[0.08em] text-white"
            answerClassName="mt-3 text-sm leading-relaxed text-white/75"
          />
          <p className="mt-8 text-sm leading-relaxed text-white/70">
            Need it sooner? See <Link to="/rush-custom-kitchen-cabinets" className="underline">rush custom kitchen cabinets</Link>.
          </p>
        </div>
      </section>

      {/* CTA + LEAD FORM */}
      <section id="consultation" className={`${lightBg} ${darkText} scroll-mt-24 py-24`}>
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className={eyebrowLight}>Start Your Project</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] text-balance sm:text-5xl">
              Let's design custom cabinetry for your {city.city} home
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-black/70">
              Tell us about your space and we'll arrange a free, no-obligation design consultation —
              precise measurements, fresh ideas, and an honest budget for your {city.city} project.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                `Free design consultation across ${city.region}`,
                "Itemised, written quote before any deposit",
                "Built in Canada. We install across Canada and the United States.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-black/50" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+19027198497" className={btnDark}>Call (902) 719-8497</a>
              <a
                href="mailto:info@hempstonhome.com"
                className="inline-block border border-black/70 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-black hover:text-white"
              >
                Email Our Studio
              </a>
            </div>
          </div>
          <HalifaxLeadForm />
        </div>
      </section>

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
