import { ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
import { ResponsiveImg } from "@/components/responsive-img";
import ogImg from "@/assets/og/og-case-studies.jpg";
import ghImg from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import ghPantry from "@/assets/projects/gh-butler-pantry-glass.jpg";
import ghHood from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import nwcImg from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import nwcHood from "@/assets/projects/nwc-brass-hood-white-cabinets.jpg";
import nwcTile from "@/assets/projects/nwc-navy-tile-backsplash.jpg";
import kentImg from "@/assets/projects/dba-kent-kitchen-1.jpg";
import kentCoffee from "@/assets/projects/dba-kent-kitchen-2.jpg";
import kentEntry from "@/assets/projects/dba-kent-pantry.jpg";
import peterLoweImg from "@/assets/projects/dba-pl-island-kitchen.jpg";
import peterLoweKitchen from "@/assets/projects/dba-pl-kitchen-1.jpg";
import peterLoweMudroom from "@/assets/projects/dba-pl-kitchen-2.jpg";
import dieppeImg from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg";

const PAGE_TITLE = "Custom Kitchen Projects Nova Scotia | Hempston Home";
const PAGE_DESC =
  "Custom kitchens, pantries and millwork by Hempston Home in Halifax and Nova Scotia, including Glen Haven, North West Cove and two DB Architecture houses.";
const ABSOLUTE_URL = `${SITE_URL}/case-studies`;
const ABSOLUTE_IMAGE = `${SITE_URL}${ogImg}`;

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
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
            { name: "Case Studies", item: "/case-studies" },
          ]),
        ),
      },
    ],
  }),
  component: CaseStudiesIndex,
});

type StudyImage = { src: string; alt: string };

const studies: {
  slug: string;
  location: string;
  title: string;
  designer: string;
  externalUrl: string;
  paragraphs: string[];
  images: StudyImage[];
}[] = [
  {
    slug: "glen-haven",
    location: "Glen Haven, Nova Scotia",
    title: "Glen Haven kitchen",
    designer: "31 Westgate Design Studio",
    externalUrl: "https://www.31westgate.com/glen-haven/",
    paragraphs: [
      "31 Westgate publishes this project as Glen Haven, Nova Scotia, and credits the photography to Janet Kimber. The full house story lives on their page. The photographs here are from Hempston's own library.",
      "What our photographs show is a painted Shaker kitchen: white perimeter cabinets, a stained white oak island, a brass hood, and a glass-front butler's pantry. Painted beams are visible over the kitchen. Hempston built the cabinetry in those rooms. The designer page we reviewed does not list materials or a cabinet credit in its text, so the description above follows our existing captions rather than a second source.",
    ],
    images: [
      {
        src: ghImg,
        alt: "Glen Haven kitchen with white painted cabinets, a stained white oak island and painted beams",
      },
      {
        src: ghHood,
        alt: "Glen Haven painted Shaker cabinets with a brass range hood",
      },
      {
        src: ghPantry,
        alt: "Glen Haven butler's pantry with glass-front upper cabinets",
      },
    ],
  },
  {
    slug: "northwest-cove",
    location: "North West Cove, Nova Scotia",
    title: "North West Cove kitchen",
    designer: "31 Westgate Design Studio",
    externalUrl: "https://www.31westgate.com/north-west-cove/",
    paragraphs: [
      "31 Westgate publishes this project as North West Cove, Nova Scotia, and credits the photography to 31 Westgate. Their page is the project story. These photographs are already in Hempston's library.",
      "The kitchen in our photographs has painted white perimeter cabinets, a stained white oak island, a brass hood, integrated appliance panels, and a marble waterfall edge. A navy tile backsplash shows in one view. Hempston built the cabinetry. As with Glen Haven, the public designer page did not publish a materials list in the text we could read, so this note stays with what our own captions already say.",
    ],
    images: [
      {
        src: nwcImg,
        alt: "North West Cove kitchen with a stained white oak island and painted white perimeter cabinets",
      },
      {
        src: nwcHood,
        alt: "North West Cove painted cabinets with a brass range hood",
      },
      {
        src: nwcTile,
        alt: "North West Cove kitchen detail with a navy tile backsplash",
      },
    ],
  },
  {
    slug: "house-on-kent",
    location: "Rockingham, Nova Scotia",
    title: "House on Kent",
    designer: "DB Architecture",
    externalUrl: "https://www.dbarchitecture.ca/project/house-on-kent",
    paragraphs: [
      "DB Architecture publishes House on Kent as a renovation and addition in Rockingham, Nova Scotia, at the edge of Hemlock Ravine Park. They list the project at 3,000 square feet and name Hempston for the cabinets (their credit line reads Hempston Homes). Julian Parkinson is the photographer on their page. We link to that page for the house story and use only photographs already in our library.",
      "The architect describes the kitchen as the centre of the renovation, opening to the backyard through a corner window, with inset cabinetry, a white oak island, custom-panel appliances, a propane range, and a dedicated coffee station. Hemlock beams run overhead. Our photographs show that inset kitchen, the white oak island, the beams, the coffee station, and painted entry cabinetry with a bench. The beams, floors, soapstone fireplace and other finishes are the architect's description of the house. Hempston's published role is the cabinets.",
    ],
    images: [
      {
        src: kentImg,
        alt: "House on Kent inset kitchen with a white oak island and a corner window",
      },
      {
        src: kentCoffee,
        alt: "House on Kent inset kitchen cabinetry with hemlock beams and a coffee station",
      },
      {
        src: kentEntry,
        alt: "House on Kent painted entry cabinetry with a bench",
      },
    ],
  },
  {
    slug: "house-on-peter-lowe",
    location: "Westmount, Halifax",
    title: "House on Peter Lowe",
    designer: "DB Architecture",
    externalUrl: "https://www.dbarchitecture.ca/project/house-on-peter-lowe",
    paragraphs: [
      "DB Architecture publishes House on Peter Lowe as a renovation and addition in Halifax's Westmount neighbourhood. They list it at 4,200 square feet, name Bruno Builders as general contractor, and credit Hempston Home for the cabinets. Photography on their page is by Julian Parkinson and Caroline Andrade.",
      "Their description of the interior is a connected kitchen, breakfast nook and living area, a full-size pantry, and a mudroom. They name colour on the kitchen island, pantry cabinetry, mudroom millwork, and custom built-in foyer doors. Our photographs show the kitchen with a dark stained oak island, white oak beams, a timber-lined ceiling, and quartzite counters, plus sage green mudroom cabinetry with brass hardware. Living Stone is credited for the countertops, so the stone is not Hempston's work. The beams and timber ceiling are part of the architect's description of the house. Hempston's published role is the cabinets, including the pantry cabinetry and mudroom millwork they describe.",
    ],
    images: [
      {
        src: peterLoweImg,
        alt: "House on Peter Lowe kitchen with a dark stained oak island and white oak beams",
      },
      {
        src: peterLoweKitchen,
        alt: "House on Peter Lowe open kitchen with quartzite counters and a timber ceiling",
      },
      {
        src: peterLoweMudroom,
        alt: "House on Peter Lowe sage green mudroom cabinetry with brass hardware",
      },
    ],
  },
];

function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-5 pb-16 pt-32 text-center sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60"
        >
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Case Studies</span>
        </nav>
        <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
          Case Studies
        </p>
        <h1 className="mt-5 font-display text-4xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-6xl">
          Custom Kitchen and Millwork Projects in Nova Scotia
        </h1>
        <BuiltInCanadaLine className="mx-auto mt-6 max-w-xl text-sm text-white/75" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75">
          Short notes on published Hempston cabinetry, written from our photographs and from the
          designers' public project pages. Each note links out for the full story. Prices, client
          names and project timelines are not published here.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-5 pb-24 sm:px-8">
        {studies.map((s) => (
          <article id={s.slug} key={s.slug} className="scroll-mt-28">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="grid gap-4 sm:grid-cols-2">
                {s.images.map((image, index) => (
                  <ResponsiveImg
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 35vw, 100vw"
                        : "(min-width: 1024px) 18vw, 50vw"
                    }
                    className={`w-full object-cover ${index === 0 ? "aspect-[4/3] sm:col-span-2" : "aspect-[4/3]"}`}
                  />
                ))}
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
                  {s.location}
                </p>
                <h2 className="mt-4 font-display text-2xl font-light uppercase tracking-[0.05em] text-white sm:text-3xl">
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
                  {s.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={s.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 hover:text-white"
                >
                  View on {s.designer} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <ResponsiveImg
            src={dieppeImg}
            alt="Painted built-in cabinets and a fireplace surround for a home in Dieppe, New Brunswick"
            width={1600}
            height={1200}
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
              Dieppe, New Brunswick
            </p>
            <h2 className="mt-4 font-display text-2xl font-light uppercase tracking-[0.05em] sm:text-3xl">
              Built-ins and fireplace surround
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Painted white built-in cabinets sit on both sides of a fireplace mantel, with Shaker
              doors, drawers and open upper shelving, for a home in Dieppe, NB. The piece was
              photographed finished, before delivery. No designer is named on our page for this
              project, and no client name is published.
            </p>
            <Link to="/projects" className="mt-6 inline-block text-sm underline">
              Read the Dieppe note on the projects page
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-3 px-5 text-sm sm:px-8">
          <Link to="/custom-cabinetry-halifax" className="underline">
            Custom kitchen cabinets in Halifax
          </Link>
          <Link to="/projects" className="underline">
            All published projects
          </Link>
          <Link to="/custom-bathroom-vanities-halifax" className="underline">
            Bathroom vanities
          </Link>
          <Link to="/built-ins-millwork-nova-scotia" className="underline">
            Built-ins and millwork
          </Link>
        </div>
      </section>

      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
