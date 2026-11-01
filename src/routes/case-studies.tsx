import { ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { BuiltInCanadaLine } from "@/components/built-in-canada";
import { ResponsiveImg } from "@/components/responsive-img";
import ogImg from "@/assets/door-gallery-2026/11_setting_plaster_shaker.png";
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

const studies: {
  slug: string;
  location: string;
  title: string;
  designer: string;
  externalUrl: string;
  paragraphs: string[];
}[] = [
  {
    slug: "glen-haven",
    location: "Glen Haven, Nova Scotia",
    title: "Glen Haven kitchen",
    designer: "31 Westgate Design Studio",
    externalUrl: "https://www.31westgate.com/glen-haven/",
    paragraphs: [
      "31 Westgate publishes this project as Glen Haven, Nova Scotia, and credits the photography to Janet Kimber. The full house story, and those photographs, live on their page. This page does not republish them.",
      "Captions already used on this site describe a painted Shaker kitchen: white perimeter cabinets, a stained white oak island, a brass hood, and a glass-front butler's pantry, with painted beams over the kitchen. Hempston built the cabinetry in those rooms. The designer page we reviewed does not list materials or a cabinet credit in its text, so this note follows those existing captions.",
    ],
  },
  {
    slug: "northwest-cove",
    location: "North West Cove, Nova Scotia",
    title: "North West Cove kitchen",
    designer: "31 Westgate Design Studio",
    externalUrl: "https://www.31westgate.com/north-west-cove/",
    paragraphs: [
      "31 Westgate publishes this project as North West Cove, Nova Scotia, and credits the photography to 31 Westgate. Their page is the project story. This page does not republish those photographs.",
      "Captions already used on this site describe painted white perimeter cabinets, a stained white oak island, a brass hood, integrated appliance panels, and a marble waterfall edge, plus a navy tile backsplash. Hempston built the cabinetry. The public designer page did not publish a materials list in the text we could read, so this note stays with those captions.",
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
      "The architect describes the kitchen as the centre of the renovation, opening to the backyard through a corner window, with inset cabinetry, a white oak island, custom-panel appliances, a propane range, and a dedicated coffee station. Hemlock beams run overhead. Captions on earlier pages of this site also describe painted entry cabinetry with a bench. The beams, floors, soapstone fireplace and other finishes are the architect's description of the house. Hempston's published role is the cabinets. The architect's photographs are not repeated here.",
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
      "Their description of the interior is a connected kitchen, breakfast nook and living area, a full-size pantry, and a mudroom. They name colour on the kitchen island, pantry cabinetry, mudroom millwork, and custom built-in foyer doors. Earlier captions on this site also describe a dark stained oak island, white oak beams, a timber ceiling, quartzite counters, and sage green mudroom cabinetry. Living Stone is credited for the countertops, so the stone is not Hempston's work. The beams and timber ceiling are part of the architect's description of the house. Hempston's published role is the cabinets. The project photographs are not repeated here.",
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
          Short notes on published Hempston cabinetry, written from captions already on this site
          and from the designers' public project pages. Designer photographs stay on those pages.
          The Dieppe built-ins below were photographed in our shop. Prices, client names and
          project timelines are not published here.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-5 pb-24 sm:px-8">
        {studies.map((s) => (
          <article id={s.slug} key={s.slug} className="scroll-mt-28 border-t border-white/10 pt-12">
            <div className="mx-auto max-w-3xl">
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
            alt="Painted Shaker built-ins and a fireplace surround, photographed in the Hempston shop before delivery to Dieppe"
            width={2000}
            height={1500}
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
