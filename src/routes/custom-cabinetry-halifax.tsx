import { createFileRoute, Link } from "@tanstack/react-router";
import ogImg from "@/assets/og/og-halifax.jpg";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, howToSchema, ORG_ID, ORG_NAME, ORG_EMAIL, ORG_PHONE, ORG_SAMEAS, SITE_URL } from "@/lib/schema";
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
  CheckCircle2,
  Quote,
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
import {
  showcaseGallery,
  insetGallery2026,
} from "@/data/door-gallery-2026";



import craftDetail from "@/assets/hempston-craft-detail-2.jpg";


import dovetailDrawers from "@/assets/hempston-dovetail-drawers.jpg";
import cityImg from "@/assets/halifax-city.jpg";
import projGlenHaven from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import projNavyBrass from "@/assets/projects/navy-cabinetry-brass-pulls.jpg";
import projWhiteMarble from "@/assets/projects/white-marble-kitchen.jpg";
import projFarmhouse from "@/assets/projects/farmhouse-sink-blue-tile.jpg";
import projGreyOakBar from "@/assets/projects/grey-oak-bar-pantry.jpg";
import projWhiteOakDetail from "@/assets/projects/white-oak-cabinet-detail.jpg";
import projReededVanity from "@/assets/projects/reeded-oak-vanity.jpg";
import projModernMarble from "@/assets/projects/modern-marble-kitchen.jpg";
import projNwcBrass from "@/assets/projects/nwc-brass-hood-white-cabinets.jpg";
import projNwcMarble from "@/assets/projects/nwc-marble-brass-faucet.jpg";
import projNwcOakIsland from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import projNwcNavyTile from "@/assets/projects/nwc-navy-tile-backsplash.jpg";
import projGhWhite from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";

import projGhOakIsland from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import projGhButler from "@/assets/projects/gh-butler-pantry-glass.jpg";

import projMdKitchen from "@/assets/projects/md-white-kitchen-brass-pendants.jpg";
import projMdLaundry from "@/assets/projects/md-laundry-cabinetry.jpg";
import projMdVanity from "@/assets/projects/md-oak-double-vanity.jpg";
import projCrombieStair from "@/assets/projects/crombie-warm-oak-stairwell.jpg";
import projDbaPlKitchen1 from "@/assets/projects/dba-pl-kitchen-1.jpg";
import projDbaPlKitchen2 from "@/assets/projects/dba-pl-kitchen-2.jpg";
import projDbaPlIsland from "@/assets/projects/dba-pl-island-kitchen.jpg";
import projDbaKentKitchen1 from "@/assets/projects/dba-kent-kitchen-1.jpg";
import projDbaKentKitchen2 from "@/assets/projects/dba-kent-kitchen-2.jpg";
import projDbaKentPantry from "@/assets/projects/dba-kent-pantry.jpg";
import materialWidePlank from "@/assets/materials/detail_10_wideplank_jetblack.png";

const recentProjects = [
  { src: projNwcBrass, alt: "Coastal Cottage custom overlay cabinetry with painted shaker doors and brass hood", title: "Coastal Cottage", subtitle: "Custom Overlay", designer: "31 Westgate" },
  { src: projDbaPlIsland, alt: "Custom painted kitchen with dark stained oak island and white oak beams — House on Peter Lowe", title: "Dark Oak Island Kitchen", subtitle: "Painted + Stained Oak", designer: "DB Architecture" },
  { src: projGhWhite, alt: "Custom white painted shaker kitchen cabinetry", title: "Painted Shaker Kitchen", subtitle: "White Painted Cabinetry", designer: "31 Westgate" },
  { src: projDbaKentKitchen1, alt: "Inset custom cabinetry with white oak island and corner window — House on Kent", title: "Inset Oak Island Kitchen", subtitle: "Inset Cabinetry + Oak Island", designer: "DB Architecture" },
  { src: projMdKitchen, alt: "Custom white kitchen cabinetry with panelled island", title: "White Panelled Kitchen", subtitle: "White Painted Cabinetry", designer: "31 Westgate" },
  { src: projDbaPlKitchen1, alt: "Open-concept custom kitchen cabinetry with quartzite counters and timber ceiling — House on Peter Lowe", title: "Timber-Ceiling Kitchen", subtitle: "Open-Concept Cabinetry", designer: "DB Architecture" },
  { src: projNwcOakIsland, alt: "Custom white oak island cabinetry with painted perimeter cabinets", title: "White Oak Island Kitchen", subtitle: "White Oak Island Cabinetry", designer: "31 Westgate" },
  { src: projDbaKentPantry, alt: "Custom entry cabinetry with painted millwork, upholstered bench and integrated storage — House on Kent", title: "Painted Entry Built-Ins", subtitle: "Custom Built-In Cabinetry", designer: "DB Architecture" },
  { src: projGhOakIsland, alt: "Custom kitchen island cabinetry with painted white oak beams and stained oak base", title: "Painted & Stained Oak Island", subtitle: "Painted & Stained Oak", designer: "31 Westgate" },
  { src: projModernMarble, alt: "Modern light oak custom kitchen cabinetry with book-matched island", title: "Modern Oak Kitchen", subtitle: "Light Oak Cabinetry", designer: "Hempston" },
  { src: projMdVanity, alt: "Light oak double vanity cabinetry with custom drawer bank", title: "Light Oak Double Vanity", subtitle: "Light Oak Vanity Cabinetry", designer: "31 Westgate" },
  { src: projDbaKentKitchen2, alt: "Custom inset kitchen cabinetry with hemlock beams and hidden coffee station — House on Kent", title: "Hidden Coffee Station", subtitle: "Inset Custom Cabinetry", designer: "DB Architecture" },
  { src: projGhButler, alt: "Butler pantry with custom glass-front upper cabinetry", title: "Glass-Front Butler Pantry", subtitle: "Glass-Front Cabinetry", designer: "31 Westgate" },
  { src: projReededVanity, alt: "Reeded walnut bathroom vanity with custom reeded walnut cabinetry", title: "Reeded Walnut Vanity", subtitle: "Reeded Walnut Cabinetry", designer: "Hen House" },
  { src: projMdLaundry, alt: "Laundry room with full-height inset custom cabinetry", title: "Inset Laundry Cabinetry", subtitle: "Inset Cabinetry", designer: "31 Westgate" },
  { src: projDbaPlKitchen2, alt: "Custom sage green mudroom cabinetry with brass hardware and checkered floor — House on Peter Lowe", title: "Sage Green Mudroom", subtitle: "Painted Mudroom Cabinetry", designer: "DB Architecture" },
  { src: projCrombieStair, alt: "Custom framed wall mirror by Hempston", title: "Custom Framed Mirror", subtitle: "Framed Mirror", designer: "31 Westgate" },
  { src: projNwcNavyTile, alt: "Custom navy shaker cabinetry with recessed panel doors", title: "Navy Shaker Kitchen", subtitle: "Navy Shaker Cabinetry", designer: "31 Westgate" },
  { src: projWhiteOakDetail, alt: "Rift-cut micro shaker white oak custom cabinetry detail", title: "Rift Cut Micro Shaker", subtitle: "Rift-Cut White Oak Cabinetry", designer: "Sara McKeenan" },
  { src: projGlenHaven, alt: "Custom white painted perimeter cabinetry with stained oak island", title: "White + Oak Island Kitchen", subtitle: "White Cabinets & Oak Island", designer: "31 Westgate" },
  { src: projNavyBrass, alt: "Custom navy shaker cabinetry with painted recessed panel doors", title: "Navy Shaker Kitchen", subtitle: "Navy Painted Shaker", designer: "31 Westgate" },
  { src: projFarmhouse, alt: "Custom white inset shaker cabinetry with painted recessed panel doors", title: "White Inset Kitchen", subtitle: "White Inset Shaker Cabinetry", designer: "31 Westgate" },
  { src: projWhiteMarble, alt: "Custom white painted kitchen cabinetry with glass-front upper cabinets", title: "White Painted Kitchen", subtitle: "Glass-Front Cabinetry", designer: "31 Westgate" },
  { src: projGreyOakBar, alt: "Grey-stained white oak custom bar and pantry cabinetry", title: "Grey Oak Bar & Pantry", subtitle: "Grey-Stained Oak Cabinetry", designer: "31 Westgate" },
];

// Interleave overlay slab/shaker with inset face frame renders so the Featured
// Doors section shows a mix of construction types, not one grouped block.
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


const PAGE_TITLE = "Custom Kitchen Cabinetry Halifax NS — 100% Custom | Hempston";
const PAGE_DESC =
  "10+ yrs building custom kitchen cabinetry in Halifax & Nova Scotia. Hand-drawn, hand-built, hand-finished. Free in-home design consult · (902) 719-8497.";
const ABSOLUTE_URL = `${SITE_URL}/custom-cabinetry-halifax`;
const ABSOLUTE_IMAGE = `${SITE_URL}${ogImg}`;

const faqs = [
  {
    q: "How much does custom cabinetry cost in Halifax?",
    a: "Custom cabinetry in Halifax typically ranges from $25,000 to $75,000+ for a full kitchen, depending on the size of the space, the door style, the species of wood, hardware, and the complexity of the build. Smaller projects such as a single vanity or a built-in bookcase often start between $4,000 and $12,000. Because every Hempston project is made to measure, we provide a detailed, itemised quote after your design consultation so there are no surprises.",
  },
  {
    q: "How long does a custom kitchen project take in Halifax?",
    a: "From your first design consultation to installation, most Halifax kitchen projects take 8 to 14 weeks. Design and approvals usually take 2 to 4 weeks, fabrication in our workshop takes 4 to 8 weeks, and installation is typically completed within 3 to 7 days. We confirm your timeline in writing before any deposit is taken.",
  },
  {
    q: "What is the difference between custom, semi-custom, and stock cabinets?",
    a: "Stock cabinets come in fixed sizes off the shelf and rarely fit a room perfectly. Semi-custom cabinets offer limited modifications to standard boxes. Fully custom cabinetry — what Hempston builds — is designed and fabricated specifically for your space, your storage needs, and your chosen materials, with no filler panels or compromises. Custom cabinetry maximises every inch and lasts for decades.",
  },
  {
    q: "Do you serve areas outside downtown Halifax?",
    a: "Yes. We design and install custom cabinetry throughout the Halifax Regional Municipality, including Dartmouth, Bedford, Sackville, Clayton Park, the South End, Hammonds Plains, Fall River, St. Margaret's Bay, and surrounding communities across Nova Scotia.",
  },
  {
    q: "What materials and finishes do you offer?",
    a: "We work with solid hardwoods such as walnut, white oak, maple, and cherry, along with premium plywood casework, painted MDF for crisp Shaker and inset styles, and a wide range of hand-applied stains, lacquers, and conversion finishes. Soft-close doors and drawers, dovetailed solid-wood drawer boxes, and quality hardware are standard on every Hempston project.",
  },
  {
    q: "Are your cabinets made locally?",
    a: "Yes. Every piece is designed and built by our team here in Nova Scotia, not imported flat-packed. Building locally lets us control quality, support the regional economy, and respond quickly during installation.",
  },
  {
    q: "Do you offer kitchen design services?",
    a: "Yes. Design is built into every Hempston project. Our kitchen designers handle the full layout — work triangle, island placement, storage zones, lighting, and appliance planning — and provide scaled drawings, 3D renderings, and material samples so you can see and feel your new kitchen before we build it. Because our design and cabinet making happen under one roof, there's no gap between the plan and the finished room.",
  },
  {
    q: "Can you build any cabinet style or colour?",
    a: "Yes. Hempston is a 100% custom cabinet maker, so you're never limited to a fixed catalogue. The door profiles, inset styles, and finishes shown on our site are just a sample. We build virtually any door style, wood species, paint colour, or stain — from modern handleless slabs to classic beaded inset — and can match a reference photo or an existing piece in your home.",
  },
  {
    q: "Do you offer a warranty on custom cabinetry?",
    a: "We stand behind our craftsmanship with a comprehensive workmanship warranty, and we pass along manufacturer warranties on hardware and finishes. Details are provided in writing with your project agreement.",
  },
  {
    q: "Do I need a permit for a kitchen renovation in Halifax?",
    a: "Simply replacing cabinetry usually doesn't require a permit, but a full kitchen renovation that moves plumbing, electrical, or walls typically does need a permit from the Halifax Regional Municipality (HRM). We coordinate with your contractor and can point you to HRM's official building permit information at halifax.ca so the cabinetry side of your project stays fully compliant.",
  },
  {
    q: "Can you build custom cabinetry for heritage homes in Halifax?",
    a: "Absolutely — heritage and character homes are some of our favourite projects. Many South End, North End, and Dartmouth homes have out-of-square walls, sloped ceilings, and period trim that stock cabinets can't accommodate. Because every piece is scribed and built to measure in Nova Scotia, our cabinetry fits historic spaces seamlessly while respecting their original character.",
  },
  {
    q: "Is HST included in your custom cabinetry quotes?",
    a: "Our itemised, written quotes clearly show pricing and applicable Nova Scotia HST before any deposit, so you always know your total investment up front — no vague estimates or surprise add-ons.",
  },
];

const services = [
  {
    icon: ChefHat,
    title: "Custom Kitchens",
    body: "Bespoke kitchen cabinetry designed around how you cook, gather, and entertain — from statement islands to floor-to-ceiling pantries.",
  },
  {
    icon: Bath,
    title: "Bathroom Vanities",
    body: "Made-to-measure vanities, linen towers, and storage that bring spa-level calm and order to ensuites and powder rooms.",
  },
  {
    icon: BookOpen,
    title: "Built-Ins & Shelving",
    body: "Custom bookcases, fireplace surrounds, window seats, and library walls that make a room feel finished and intentional.",
  },
  {
    icon: Hammer,
    title: "Mudrooms & Laundry",
    body: "Hard-working cabinetry, lockers, and benches that tame Halifax's four seasons of coats, boots, and gear.",
  },
  {
    icon: Ruler,
    title: "Home Offices",
    body: "Integrated desks, file storage, and display built to the millimetre for a workspace that disappears into your home.",
  },
  {
    icon: Award,
    title: "Wine & Bar Cabinetry",
    body: "Refined entertaining spaces — wine walls, dry bars, and butler's pantries crafted for collectors and hosts.",
  },
];

const process = [
  {
    icon: Pencil,
    step: "01",
    title: "Design Consultation",
    body: "We visit your Halifax home, take precise measurements, and learn how you live. You leave with a clear direction and an honest budget range.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Detailed Design",
    body: "You receive scaled drawings, 3D renderings, and curated material samples so you can see and feel every decision before we build.",
  },
  {
    icon: Factory,
    step: "03",
    title: "Local Fabrication",
    body: "Your cabinetry is hand-built in our Nova Scotia workshop using solid hardwoods, dovetailed drawers, and conversion-grade finishes.",
  },
  {
    icon: Truck,
    step: "04",
    title: "White-Glove Installation",
    body: "Our installers fit, level, and finish every detail on site, then walk you through care so your investment lasts for generations.",
  },
];

const neighbourhoods = [
  "Downtown Halifax",
  "South End",
  "North End",
  "Clayton Park",
  "Dartmouth",
  "Bedford",
  "Sackville",
  "Hammonds Plains",
  "Fall River",
  "St. Margaret's Bay",
];

const regions = [
  "Halifax Regional Municipality",
  "South Shore",
  "Chester & Mahone Bay",
  "Lunenburg",
  "Annapolis Valley",
  "Wolfville",
  "Truro & Colchester",
  "New Glasgow & Pictou",
  "Cape Breton",
  "Antigonish",
  "Bridgewater",
  "Kentville",
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Built to Last Generations",
    body: "Solid-wood construction, dovetailed drawers, and conversion finishes engineered to weather Halifax humidity and salt air.",
  },
  {
    icon: Leaf,
    title: "Locally Made in Nova Scotia",
    body: "Designed and crafted by local hands — never imported flat-pack — so quality and timelines stay in our control.",
  },
  {
    icon: Clock,
    title: "On-Time, On-Budget",
    body: "Written timelines and itemised quotes before any deposit. No vague estimates, no moving targets.",
  },
  {
    icon: Award,
    title: "Heirloom Craftsmanship",
    body: "Decades of combined cabinetmaking experience poured into every joint, edge, and finished surface.",
  },
];

export const Route = createFileRoute("/custom-cabinetry-halifax")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "custom cabinetry Halifax, custom kitchens Nova Scotia, kitchen cabinets Halifax NS, kitchen design Halifax, kitchen designer Nova Scotia, cabinet making Halifax, cabinet maker Nova Scotia, kitchen renovation Halifax, custom kitchen renovation Nova Scotia, bespoke cabinetry Nova Scotia, custom built-ins Halifax, custom bathroom vanity Nova Scotia, Shaker kitchen Nova Scotia, white oak kitchen Halifax, Maritime custom cabinetry",
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
    links: [
      { rel: "canonical", href: ABSOLUTE_URL },
      { rel: "preload", as: "image", href: projGhOakIsland, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://hempstonhome.com/#halifax",
          name: "Hempston Home — Custom Cabinetry Halifax",
          description: PAGE_DESC,
          image: ABSOLUTE_IMAGE,
          areaServed: [
            {
              "@type": "City",
              name: "Halifax",
              containedInPlace: { "@type": "AdministrativeArea", name: "Nova Scotia" },
            },
            { "@type": "City", name: "Dartmouth" },
            { "@type": "City", name: "Bedford" },
            { "@type": "AdministrativeArea", name: "Nova Scotia" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Halifax",
            addressRegion: "NS",
            addressCountry: "CA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 44.6488,
            longitude: -63.5752,
          },
          telephone: ORG_PHONE,
          email: ORG_EMAIL,
          priceRange: "$$$",
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
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Custom Cabinetry Halifax", item: "/custom-cabinetry-halifax" },
          ]),
        ),
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
            name: "Our Halifax custom cabinetry process",
            description:
              "How Hempston Home designs, builds, and installs custom kitchen cabinetry for Halifax and Nova Scotia homes — from first consultation to final walk-through.",
            totalTime: "P10W",
            steps: process.map((p) => ({ name: p.title, text: p.body })),
          }),
        ),
      },
    ],
  }),
  component: HalifaxPage,
});

function HalifaxPage() {
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
          alt="Custom Glen Haven kitchen by Hempston — painted white oak island cabinetry and shaker perimeter in a Halifax, Nova Scotia home"
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
                <span className="text-white">Custom Cabinetry Halifax</span>
              </nav>
              <p className={eyebrowDark}>Halifax · Nova Scotia</p>
              <h1 className="mt-5 font-display text-5xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-7xl">
                Custom Kitchen<br />Cabinetry in<br />Halifax
              </h1>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-white/75">
                Hempston designs and handcrafts bespoke kitchen cabinetry, vanities, and built-ins
                for Halifax and Nova Scotia homes — made to measure locally, never flat-packed.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#consultation" className={btnLight} aria-label="Book a free in-home design consultation in Halifax">Book a Free Design Consultation</a>
                <a href="#recent-work" className={btnOutlineDark} aria-label="View recent custom Halifax kitchen projects">View Recent Halifax Kitchens</a>
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
          <p className={eyebrowDark}>Halifax's Custom Cabinet Makers</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
            Cabinetry designed for how Halifax really lives
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/70">
            <p>
              A kitchen in a heritage South End rowhouse, a coastal cottage near St. Margaret's Bay, a
              modern build in Bedford — no two Halifax homes are alike, and neither are the people who
              live in them. That is exactly why stock cabinetry so rarely fits. At Hempston, we design
              and build <strong className="text-white">custom cabinetry in Halifax</strong> from
              the ground up, shaping every cabinet, drawer, and surface around your space, your
              storage, and your style.
            </p>
            <p>
              From the first measurement to the final reveal, your project is handled by craftspeople
              who care about the joints you will never see as much as the doors you will open every
              day. The result is cabinetry that feels inevitable — like it was always meant to be
              there.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 sm:px-8 md:grid-cols-4">
          {[
            { n: "10+", l: "Years of cabinetmaking" },
            { n: "100%", l: "Made in Nova Scotia" },
            { n: "8–14", l: "Weeks, concept to install" },
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
              Whether you are renovating a single room or building from scratch, we craft cohesive,
              made-to-measure cabinetry that carries your home's character from one space to the next.
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

      {/* FEATURE: kitchens — light editorial split */}
      <section className={`${lightBg} ${darkText} py-24`}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={projGlenHaven}
              alt="Glen Haven custom white painted perimeter cabinetry with stained white oak island by Hempston"
              width={1200}
              height={1200}
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div>
            <p className={eyebrowLight}>Custom Kitchens & Vanities Halifax</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
              The heart of the home, made entirely yours
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              Custom kitchens are where Hempston does some of its best work. We design layouts that
              respect the way Maritimers actually live — generous islands for gathering, deep pot
              drawers, hidden appliance garages, and pantries that keep clutter out of sight.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Made-to-measure islands, pantries, and hutches",
                "Inset, Shaker, slab, and beaded door styles",
                "Solid-wood dovetailed drawers with soft-close",
                "Hand-applied stains, paints, and durable finishes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-black/50" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURE: built-ins */}
      <section className={`${darkBg} py-24`}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className={eyebrowDark}>Built-Ins & Millwork</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] text-white sm:text-4xl">
              Built-ins that turn awkward spaces into favourite ones
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Older Halifax homes are full of character — and full of nooks, sloped ceilings, and
              chimney breasts that stock furniture can never fit. Our custom built-ins, fireplace
              surrounds, window seats, and library walls work with your home's quirks instead of
              against them, adding storage and a sense of permanence.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Fireplace surrounds and floor-to-ceiling shelving",
                "Window seats, banquettes, and reading nooks",
                "Mudroom lockers, laundry storage, and home offices",
                "Seamless integration with existing trim and crown",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-white/50" />
                  <span className="text-sm text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden lg:order-2">
            <img
              src={dovetailDrawers}
              alt="Custom red built-in pantry and bar cabinetry with glass doors and brass hardware in a Halifax home"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section id="recent-work" className={`${lightBg} ${darkText} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowLight}>Recent Work</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              Kitchens & cabinetry built for Halifax homes
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/65">
              A selection of custom kitchens, bars, and vanities designed and handcrafted for clients
              across Halifax and Nova Scotia — from painted inset shaker to grain-forward white oak.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((p) => (
              <div key={p.src} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-neutral-100">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-4 flex justify-center px-4">
                    <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/40 px-4 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 backdrop-blur-xl">
                      <span className="text-[9px] font-light uppercase tracking-[0.2em] text-black/80">DESIGN by</span>
                      <span className="text-[11px] font-medium text-black">{p.designer}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-base font-light uppercase tracking-[0.18em]">{p.title}</h3>
                  <p className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-black/55">{p.subtitle}</p>
                </div>
              </div>
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
              A few favourite door + finish combinations
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              The doors below are a small sample of the styles, profiles, and finishes we regularly
              build for Halifax and Nova Scotia homes. Because we're{" "}
              <strong className="text-white">100% custom</strong>, every profile can be adapted to
              your preferred wood species, paint colour, or stain — or we can start from a reference
              photo and build something entirely new.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {mixedFeaturedDoors.map((d) => (
              <figure key={d.src} className="overflow-hidden bg-white text-black">
                <div className="aspect-[3/4] overflow-hidden bg-white">
                  <img
                    src={d.src}
                    alt={`${d.name} — ${d.profile} custom cabinet door in ${d.finish}`}
                    width={600}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-4 text-center">
                  <p className="font-display text-sm font-light uppercase tracking-[0.18em]">{d.name}</p>
                  <p className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-black/55">{d.profile} — {d.finish}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/products/door-styles" className={btnOutlineDark} aria-label="Browse all custom cabinet door styles">
              Browse All Custom Door Styles
            </Link>
          </div>
        </div>
      </section>

      {/* INSET FACE FRAME CONTEXT */}
      <section className={`${lightBg} ${darkText} py-20`}>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className={eyebrowLight}>Inset Face Frame Cabinetry</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
            Furniture-grade inset face frame construction
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-black/70">
            Inset cabinetry — where the door sits flush within a solid face frame — is the hallmark
            of heirloom, furniture-quality millwork. It demands precise tolerances and expert
            hands, and it's a signature of the finest custom kitchens across Nova Scotia's heritage
            homes and coastal builds. Several inset examples are mixed into the Featured Doors
            gallery above alongside our slab and shaker profiles. Every project is fully bespoke,
            so you're never limited to a catalogue.
          </p>
          <div className="mt-10">
            <Link to="/products/cabinet-styles" className={btnDark} aria-label="Browse all custom cabinet construction styles">
              Browse All Cabinet Construction Styles
            </Link>
          </div>
        </div>
      </section>


      {/* 100% CUSTOM CALLOUT */}
      <section className={`${darkBg} border-y border-white/10 py-20`}>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className={eyebrowDark}>Endless Possibilities</p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
            Every door you've seen here is just the beginning
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            The door profiles, inset styles, colours, and finishes shown across this page are a small
            sample of what we've built — not a menu you have to choose from. Hempston is a{" "}
            <strong className="text-white">100% custom cabinet maker</strong>. There are no
            fixed sizes, no locked-in door catalogues, and no standard colours. Whatever style,
            profile, wood species, paint, stain, or hardware you have in mind — whether it's a modern
            handleless slab, a classic beaded inset, or something you saw in a magazine — we design
            and build it from scratch, to the millimetre, for your home.
          </p>
          <div className="mt-10">
            <a href="#consultation" className={btnLight}>Start Your Custom Design</a>
          </div>
        </div>
      </section>

      {/* IN-DEPTH GUIDE */}
      <section id="guide" className={`${lightBg} ${darkText} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <p className={eyebrowLight}>Planning Your Project</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              Kitchen design, cabinet making &amp; renovation in Halifax
            </h2>
            <p className="mt-3 text-[10px] font-light uppercase tracking-[0.22em] text-black/50">
              <time dateTime="2026">Guide updated 2026</time>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              Renovating a kitchen or building a new home in Nova Scotia is one of the biggest
              investments you'll make. Here's how thoughtful kitchen design and true custom cabinet
              making come together to create a space that works beautifully for decades.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {[
              {
                h: "Working with a kitchen designer",
                p: [
                  <>A great <Link to="/services" className="underline decoration-black/30 underline-offset-4 hover:decoration-black"><strong>kitchen designer</strong></Link> does far more than pick cabinet doors. They study how you cook, entertain, and move through your space, then plan the layout — work triangle, island placement, traffic flow, lighting, and storage zones — so everything falls to hand. At Hempston, design and cabinet making live under one roof, so the person planning your Halifax kitchen is connected directly to the workshop building it. Nothing gets lost between a showroom drawing and the finished room.</>,
                  <>Every project starts with an in-home consultation and precise measurements, followed by scaled drawings, 3D renderings, and real material samples. You'll see cabinet heights, appliance clearances, countertop overhangs, and door swings before a single board is cut — the surest way to avoid the costly surprises that derail so many kitchen renovations.</>,
                ],
              },
              {
                h: "What custom cabinet making really means",
                p: [
                  <><strong>Custom cabinet making</strong> is the craft of building cabinetry specifically for your room rather than assembling factory boxes in fixed sizes. That means no filler panels, no wasted inches, and storage engineered around your exact needs — deep pot drawers, hidden appliance garages, pull-out pantries, spice dividers, and toe-kick storage. It also means real materials: solid hardwoods, dovetailed drawer boxes, furniture-grade plywood casework, and durable conversion finishes that stand up to Maritime humidity and salt air.</>,
                  <>The difference shows in the details you touch every day — the weight of a door, the whisper of a soft-close drawer, the perfectly aligned grain across a run of cabinets. It's the gap between flat-pack furniture and cabinetry that becomes an heirloom.</>,
                ],
              },
              {
                h: "Popular kitchen styles in Nova Scotia homes",
                p: [
                  <>Across Halifax and the province we build everything from timeless <Link to="/products/door-styles" className="underline decoration-black/30 underline-offset-4 hover:decoration-black"><strong>Shaker kitchens</strong></Link> and heritage inset cabinetry to warm <strong>white oak kitchens</strong>, two-tone islands, and sleek modern handleless designs. Popular choices right now include painted navy and sage-green cabinetry (see our <Link to="/products/colours-finishes" className="underline decoration-black/30 underline-offset-4 hover:decoration-black">custom paint colours and stains</Link>), natural rift-cut oak, brass and matte-black hardware, reeded and fluted detailing, integrated appliance panels, and butler's pantries. Whatever direction you lean — traditional, transitional, or contemporary — every finish is fully bespoke.</>,
                ],
              },
              {
                h: "Planning a kitchen renovation or new build",
                p: [
                  <>Whether you're <strong>renovating a kitchen</strong>, remodelling a bathroom, or <strong>building a new home</strong>, the earlier custom cabinetry enters the conversation, the smoother the project runs. Involving your cabinet maker during design lets us coordinate with your builder, electrician, and plumber on appliance placement, outlet locations, and lighting so the finished cabinetry fits perfectly the first time. Learn more about our <Link to="/services" className="underline decoration-black/30 underline-offset-4 hover:decoration-black">design, shop drawings, and site-measure services</Link>, or explore the <Link to="/products/brands" className="underline decoration-black/30 underline-offset-4 hover:decoration-black">hardware and finish brands we specify</Link>.</>,
                  <>Most full custom kitchens in Halifax run from concept to installation in about 8 to 14 weeks, with an honest budget range shared up front and an itemised, written quote before any deposit — so you can plan your renovation with confidence.</>,
                ],
              },
            ].map((sec) => (
              <article key={sec.h}>
                <h3 className="font-display text-xl font-light uppercase tracking-[0.14em]">{sec.h}</h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/70">
                  {sec.p.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={`${darkBg} py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>Why Hempston</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Why Halifax homeowners choose custom over stock
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Anyone can sell you boxes. We build cabinetry that fits your home perfectly, performs
              for decades, and looks like it belongs.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className={`${darkBg} p-8`}>
                <r.icon className="h-6 w-6 text-white/85" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-base font-light uppercase tracking-[0.18em] text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className={`${lightBg} ${darkText} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowLight}>How It Works</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] sm:text-4xl">
              Our custom cabinetry process, start to finish
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/70">
              A clear, four-step path from idea to installation — with honest budgets and written
              timelines at every stage.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className={`${lightBg} p-8`}>
                <div className="flex items-center justify-between">
                  <p.icon className="h-6 w-6 text-black/80" strokeWidth={1.2} />
                  <span className="font-display text-3xl font-light text-black/25">{p.step}</span>
                </div>
                <h3 className="mt-6 font-display text-base font-light uppercase tracking-[0.18em]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT DETAIL — pull quote */}
      <section className="relative isolate overflow-hidden">
        <img
          src={craftDetail}
          alt="Close-up detail of handcrafted custom cabinetry from the Hempston workshop"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />
        <div className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
          <Quote className="mx-auto h-8 w-8 text-white/80" strokeWidth={1.2} />
          <blockquote className="mt-8 font-display text-2xl font-light leading-snug text-white text-balance sm:text-3xl">
            "We obsess over the dovetail you'll never see and the drawer you'll open ten thousand
            times. That's the difference between furniture and cabinetry that lasts a lifetime."
          </blockquote>
          <p className="mt-8 text-[10px] font-light uppercase tracking-[0.28em] text-white/70">
            The Hempston Workshop
          </p>
        </div>
      </section>

      {/* MATERIALS */}
      <section className={`${darkBg} py-24`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>Materials & Finishes</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Honest materials, finished to endure the Maritime climate
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Coastal humidity and salt air are hard on poorly built cabinetry. We specify and
              finish every project to stand up to Halifax weather for the long haul.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: materialWidePlank, alt: "Wide-plank jet-black stained white oak cabinetry material sample" },
              { src: projWhiteOakDetail, alt: "Detail of rift-cut white oak inset cabinet doors and drawers" },
              { src: projFarmhouse, alt: "Custom white inset shaker cabinetry with painted recessed panel doors" },
            ].map((img) => (
              <div key={img.alt} className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Solid Hardwoods", d: "Walnut, white oak, maple, cherry, and ash — selected for grain, stability, and longevity." },
              { t: "Painted & Inset Styles", d: "Furniture-grade MDF and hardwood frames for crisp, durable painted finishes that resist chipping." },
              { t: "Conversion Finishes", d: "Catalysed lacquers and conversion varnishes that shrug off moisture, heat, and daily wear." },
              { t: "Dovetailed Drawers", d: "Solid-wood, dovetailed drawer boxes with full-extension soft-close runners as standard." },
              { t: "Premium Hardware", d: "Concealed hinges, soft-close mechanisms, and tactile pulls from trusted European makers." },
              { t: "Smart Storage", d: "Pull-outs, dividers, spice racks, and appliance garages engineered around your daily routine." },
            ].map((m) => (
              <div key={m.t} className={`${darkBg} p-6`}>
                <h3 className="font-display text-base font-light uppercase tracking-[0.18em] text-white">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="relative isolate overflow-hidden">
        <img
          src={cityImg}
          alt="Halifax, Nova Scotia waterfront with historic Maritime architecture"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/80" />
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrowDark}>Where We Work</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Serving Halifax and homes across Nova Scotia
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              Hempston is proud to be a Nova Scotia custom cabinet maker. While Halifax and the
              wider HRM are home, we design and install bespoke kitchens, vanities, and built-ins for
              homeowners right across the province — from South Shore cottages and Annapolis Valley
              farmhouses to new builds in Truro, Pictou County, and Cape Breton.
            </p>
          </div>

          <div className="mt-14">
            <p className="text-center text-[10px] font-light uppercase tracking-[0.28em] text-white/70">
              Halifax Regional Municipality
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {neighbourhoods.map((n) => (
                <li key={n} className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-[11px] font-light uppercase tracking-[0.16em] text-white/90">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.2} />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-center text-[10px] font-light uppercase tracking-[0.28em] text-white/70">
              Across Nova Scotia
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {regions.map((n) => (
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
              Loved by Halifax homeowners
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { quote: "Hempston transformed our cramped South End kitchen into the most-used room in the house. The fit and finish are flawless.", name: "Sarah & Daniel M.", place: "South End, Halifax" },
              { quote: "The built-ins around our fireplace look like they've always been there. Thoughtful design and beautiful craftsmanship.", name: "Priya K.", place: "Bedford, NS" },
              { quote: "On time, on budget, and genuinely a pleasure to work with. Our new vanities feel like furniture, not cabinets.", name: "Tom R.", place: "Dartmouth, NS" },
            ].map((t) => (
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

      {/* FAQ */}
      <section id="faq" className={`${darkBg} scroll-mt-24 py-24`}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <p className={eyebrowDark}>Questions, Answered</p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl">
              Custom cabinetry in Halifax: FAQ
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
              Let's design custom cabinetry for your Halifax home
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-black/70">
              Tell us about your space and we'll arrange a free, no-obligation design consultation —
              precise measurements, fresh ideas, and an honest budget for your Halifax project.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Free in-home design consultation across the HRM",
                "Itemised, written quote before any deposit",
                "Locally handcrafted in Nova Scotia",
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
