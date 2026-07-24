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
  Star,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import {
  showcaseGallery,
  insetGallery2026,
} from "@/data/door-gallery-2026";
import { buildCityFaqs, nearbyCitiesFor, type CityPageData } from "@/data/city-pages";
import {
  howToSchema,
  ORG_ID,
  ORG_NAME,
  ORG_EMAIL,
  ORG_PHONE,
  ORG_SAMEAS,
  ORG_FOUNDING_YEAR,
  SITE_URL,
} from "@/lib/schema";

import ogImg from "@/assets/og/og-halifax.jpg";
import projGhOakIsland from "@/assets/projects/gh-oak-island-painted-beams.jpg";
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
  { icon: Leaf, title: "Handcrafted in Canada", body: "Designed and crafted by local hands — never imported flat-pack — so quality and timelines stay in our control." },
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
  { icon: Factory, step: "03", title: "Local Fabrication", body: "Your cabinetry is hand-built in our Canadian workshops using solid hardwoods, dovetailed drawers, and conversion-grade finishes." },
  { icon: Truck, step: "04", title: "White-Glove Installation", body: "Our installers fit, level, and finish every detail on site, then walk you through care so your investment lasts for generations." },
];

/**
 * Build the full <head> metadata for a city page. Consumed by each route file:
 *   head: () => cityHead(city)
 *
 * 2026 local/GEO SEO checklist applied here:
 *  - Absolute canonical + og:url (crawlers require self-referencing absolute URLs).
 *  - Differentiated title & meta description per city (city + region + province)
 *    so no two pages ship the same tags.
 *  - LocalBusiness JSON-LD enriched with knowsAbout, serviceType, slogan,
 *    foundingDate, aggregateRating + Review array (derived from real testimonials),
 *    hasOfferCatalog, and dateModified for freshness signals.
 *  - Speakable schema for voice + AI Overviews.
 *  - Per-city FAQPage, BreadcrumbList, HowTo schemas.
 */
export function cityHead(city: CityPageData) {
  const path = `/${city.slug}`;
  const absoluteUrl = `${SITE_URL}${path}`;
  const absoluteImage = `${SITE_URL}${ogImg}`;
  const title = `Custom Kitchen Cabinetry ${city.city}, ${city.provinceCode} — Bespoke Cabinet Makers | Hempston`;
  const desc = `Award-winning custom kitchen cabinetry in ${city.city}, ${city.province}. Hand-drawn, hand-built and installed across ${city.region}. Free design consultation — call (902) 719-8497.`;
  const faqs = buildCityFaqs(city);
  const nearby = nearbyCitiesFor(city, 4);
  const dateModified = new Date().toISOString().split("T")[0];

  const reviews = city.testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    locationCreated: { "@type": "Place", name: t.place },
  }));

  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { name: "keywords", content: city.keywords },
      { name: "geo.region", content: `${city.countryCode}-${city.provinceCode}` },
      { name: "geo.placename", content: `${city.city}, ${city.province}` },
      { name: "geo.position", content: `${city.geo.lat};${city.geo.lng}` },
      { name: "ICBM", content: `${city.geo.lat}, ${city.geo.lng}` },
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
      { rel: "preload", as: "image", href: projGhOakIsland, fetchpriority: "high" },
      // Local link graph: hint to search engines about sibling city pages.
      ...nearby.map((n) => ({ rel: "alternate", href: `${SITE_URL}/${n.slug}` })),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}${path}#localbusiness`,
          name: `${ORG_NAME} — Custom Cabinetry ${city.city}`,
          alternateName: `Hempston Cabinet Makers ${city.city}`,
          url: absoluteUrl,
          slogan: "100% custom cabinetry, coast to coast.",
          description: desc,
          image: absoluteImage,
          logo: `${SITE_URL}/favicon.ico`,
          foundingDate: ORG_FOUNDING_YEAR,
          dateModified,
          knowsAbout: [
            "Custom kitchen cabinetry",
            "Bespoke millwork",
            "Inset face-frame cabinetry",
            "Frameless (European) cabinetry",
            "Painted Shaker cabinets",
            "White oak cabinetry",
            "Butler's pantries",
            "Custom vanities",
            "Built-in millwork",
            "Mudroom and laundry cabinetry",
            "Home office built-ins",
            "Kitchen design",
          ],
          serviceType: [
            "Custom kitchen design",
            "Custom cabinet making",
            "Bathroom vanity fabrication",
            "Built-in millwork",
            "Cabinet installation",
          ],
          areaServed: [
            {
              "@type": "City",
              name: city.city,
              containedInPlace: { "@type": "AdministrativeArea", name: city.province },
            },
            ...city.neighbourhoods.slice(0, 8).map((n) => ({ "@type": "Place", name: n })),
            ...city.regions.slice(0, 6).map((n) => ({ "@type": "Place", name: n })),
            { "@type": "AdministrativeArea", name: city.province },
            { "@type": "Country", name: "Canada" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: city.city,
            addressRegion: city.provinceCode,
            addressCountry: city.countryCode,
          },
          geo: { "@type": "GeoCoordinates", latitude: city.geo.lat, longitude: city.geo.lng },
          telephone: ORG_PHONE,
          email: ORG_EMAIL,
          priceRange: "$$$",
          currenciesAccepted: "CAD",
          paymentAccepted: "Cash, Cheque, EFT, Credit Card",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
          ],
          sameAs: ORG_SAMEAS,
          parentOrganization: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Custom cabinetry services — ${city.city}`,
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.body },
            })),
          },
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
          ...(reviews.length > 0
            ? {
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5.0",
                  bestRating: "5",
                  reviewCount: String(reviews.length),
                },
                review: reviews,
              }
            : {}),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
            {
              "@type": "ListItem",
              position: 3,
              name: `Custom Cabinetry ${city.city}`,
              item: absoluteUrl,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          howToSchema({
            name: `Our ${city.city} custom cabinetry process`,
            description: `How Hempston designs, builds, and installs custom kitchen cabinetry for ${city.city} and ${city.province} homes — first consultation to final walk-through.`,
            totalTime: "P10W",
            steps: process.map((p) => ({ name: p.title, text: p.body })),
          }),
        ),
      },
      // Speakable: AI Overviews + voice assistants read the At-a-Glance block aloud.
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${absoluteUrl}#webpage`,
          url: absoluteUrl,
          name: title,
          description: desc,
          inLanguage: "en-CA",
          dateModified,
          isPartOf: { "@type": "WebSite", url: SITE_URL, name: ORG_NAME },
          about: { "@type": "Place", name: `${city.city}, ${city.province}` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["#at-a-glance", "#at-a-glance dl"],
          },
        }),
      },
    ],
  };
}

export function CityCabinetryPage({ city }: { city: CityPageData }) {
  const faqs = buildCityFaqs(city);
  const nearby = nearbyCitiesFor(city, 4);
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
          src={projGhOakIsland}
          alt={`Custom kitchen by Hempston — painted white oak island cabinetry and shaker perimeter in a ${city.city} home`}
          width={1920}
          height={1100}
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
              <h1 className="mt-5 font-display text-5xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-7xl">
                {city.heroTitle.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < city.heroTitle.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-white/75">{city.heroLead}</p>
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
            Custom cabinetry in {city.city}, {city.province} — the essentials
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70">
            {ORG_NAME} designs and hand-builds custom kitchen cabinetry, bathroom vanities and
            built-in millwork for homes throughout {city.city} and {city.region}. Every project
            is 100% custom — no fixed catalogues, no stock sizes.
          </p>
          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { k: "Service", v: "Custom kitchen cabinetry, vanities & built-in millwork" },
              { k: "Service area", v: `${city.city}, ${city.region} and all of ${city.province}` },
              { k: "Typical kitchen investment", v: "CAD $30,000 – $90,000+ (fully itemised quotes)" },
              { k: "Timeline", v: "8 – 16 weeks, first consultation to installed kitchen" },
              { k: "Founded", v: `${ORG_FOUNDING_YEAR} · 10+ years of cabinet making` },
              { k: "Applicable tax", v: `${city.taxNote} (${city.province})` },
              { k: "Consultation", v: "Free, on-site, no obligation" },
              { k: "Phone", v: "(902) 719-8497" },
              { k: "Email", v: "info@hempstonhome.com" },
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
            { n: "100%", l: "Handcrafted in Canada" },
            { n: "8–16", l: "Weeks, concept to install" },
            { n: "5.0", l: "Average client rating" },
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
              A curated selection of recent Hempston projects. Every kitchen, vanity and built-in was
              designed and hand-built to measure — the same care goes into every {city.city} commission.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentProjectsPool.map((p) => (
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
            {mixedFeaturedDoors.slice(0, 12).map((d) => (
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
              While Hempston's workshops are based in Halifax, Toronto and Long Beach, we design and
              install bespoke kitchens, vanities and built-ins for homeowners across {city.region} — and
              we ship &amp; install coast to coast.
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

      {/* TESTIMONIALS */}
      <section className={`${lightBg} ${darkText} py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowLight}>Client Stories</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              Loved by {city.city} homeowners
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {city.testimonials.map((t) => (
              <figure key={t.name} className="border border-black/10 bg-white p-8">
                <div className="flex gap-1 text-black">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-black/10 pt-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em]">{t.name}</p>
                  <p className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-black/55">{t.place}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY CITIES — internal link graph across the location network.
          Sends local ranking signals city-to-city and gives crawlers /
          AI answer engines a clear "we serve this whole region" map. */}
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
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/15">
                <AccordionTrigger className="text-left font-display text-base font-light uppercase tracking-[0.1em] text-white hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-white/70">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
                "Handcrafted in Canada, installed coast to coast",
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
