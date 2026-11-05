import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import { ResponsiveImg } from "@/components/responsive-img";
import monctonHero from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg";
import ghImg from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import nwcImg from "@/assets/projects/nwc-oak-island-kitchen.jpg";
import kentImg from "@/assets/projects/dba-kent-kitchen-1.jpg";
import peterLoweImg from "@/assets/projects/dba-pl-island-kitchen.jpg";

const PAGE_TITLE = "Cabinetry Projects | Hempston Home";
const PAGE_DESC =
  "Published Hempston Home cabinetry, including built-ins and a fireplace surround in Dieppe, NB, plus Nova Scotia kitchens with links to the designers' pages.";
const ABSOLUTE_URL = `${SITE_URL}/projects`;
const ABSOLUTE_IMAGE = `${SITE_URL}${monctonHero}`;

export const Route = createFileRoute("/projects")({
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
            { name: "Projects", item: "/projects" },
          ]),
        ),
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: "dieppe-builtins",
    place: "Dieppe, New Brunswick",
    title: "Built-ins and fireplace surround, Dieppe, NB",
    image: monctonHero,
    alt: "Custom painted built-in cabinets and fireplace surround for a home in Dieppe, NB by Hempston Home",
    body: "Painted white built-in cabinets stand on both sides of a fireplace mantel, with Shaker doors, drawers and open upper shelving, for a home in Dieppe, NB. Hempston built the cabinetry. The photograph was taken when the piece was finished, before delivery. No client name and no designer credit are published for this project.",
    href: "/custom-cabinetry-moncton" as const,
    linkLabel: "Custom kitchen cabinets in Moncton",
  },
  {
    id: "glen-haven",
    place: "Glen Haven, Nova Scotia",
    title: "Glen Haven kitchen",
    image: ghImg,
    alt: "Glen Haven kitchen with white painted cabinets and a stained white oak island",
    body: "31 Westgate publishes this as Glen Haven, Nova Scotia. Our photographs show white painted Shaker cabinets, a stained white oak island, a brass hood and a glass-front butler's pantry. Hempston built that cabinetry. Their page credits photography to Janet Kimber and is the place for the rest of the house story.",
    href: "/case-studies" as const,
    hash: "glen-haven",
    linkLabel: "Glen Haven note and designer link",
    external: "https://www.31westgate.com/glen-haven/",
    externalLabel: "31 Westgate, Glen Haven",
  },
  {
    id: "northwest-cove",
    place: "North West Cove, Nova Scotia",
    title: "North West Cove kitchen",
    image: nwcImg,
    alt: "North West Cove kitchen with a stained white oak island and painted white cabinets",
    body: "31 Westgate publishes this as North West Cove, Nova Scotia, and credits the photography to their studio. Our photograph shows painted white perimeter cabinets and a stained white oak island. Other views in our library show a brass hood, integrated appliance panels, a marble waterfall edge and a navy tile backsplash. Hempston built the cabinetry.",
    href: "/case-studies" as const,
    hash: "northwest-cove",
    linkLabel: "North West Cove note and designer link",
    external: "https://www.31westgate.com/north-west-cove/",
    externalLabel: "31 Westgate, North West Cove",
  },
  {
    id: "house-on-kent",
    place: "Rockingham, Nova Scotia",
    title: "House on Kent",
    image: kentImg,
    alt: "House on Kent inset kitchen with a white oak island and a corner window",
    body: "DB Architecture lists House on Kent as a 3,000 square foot renovation and addition in Rockingham, at the edge of Hemlock Ravine Park, and credits Hempston for the cabinets. They describe inset cabinetry, a white oak island, custom-panel appliances and a coffee station. Our photograph shows that kitchen. Beams, stone and the fireplace are part of their description of the house, not a Hempston credit.",
    href: "/case-studies" as const,
    hash: "house-on-kent",
    linkLabel: "House on Kent note",
    external: "https://www.dbarchitecture.ca/project/house-on-kent",
    externalLabel: "DB Architecture, House on Kent",
  },
  {
    id: "house-on-peter-lowe",
    place: "Westmount, Halifax",
    title: "House on Peter Lowe",
    image: peterLoweImg,
    alt: "House on Peter Lowe kitchen with a dark stained oak island and white oak beams",
    body: "DB Architecture lists House on Peter Lowe as a 4,200 square foot renovation and addition in Westmount, Halifax, and credits Hempston Home for the cabinets. They describe a kitchen with a full-size pantry, colour on the island, mudroom millwork and built-in foyer doors. Our photograph shows the kitchen, including the dark stained oak island. Living Stone is credited for the countertops.",
    href: "/case-studies" as const,
    hash: "house-on-peter-lowe",
    linkLabel: "House on Peter Lowe note",
    external: "https://www.dbarchitecture.ca/project/house-on-peter-lowe",
    externalLabel: "DB Architecture, House on Peter Lowe",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-28 sm:px-8">
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70"
        >
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Projects</span>
        </nav>
        <h1 className="mt-6 font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl">
          Published cabinetry projects
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-white/90">
          Only work we can show is listed here. Cabinetry is built in Canada. Client names, prices
          and timelines for these rooms are not published. The longer notes, and the links to 31
          Westgate and DB Architecture, are on the case studies page.
        </p>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-5 pb-24 sm:px-8">
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <ResponsiveImg
              src={project.image}
              alt={project.alt}
              width={1600}
              height={1200}
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">
                {project.place}
              </p>
              <h2 className="mt-4 font-display text-3xl font-light uppercase tracking-[0.06em]">
                {project.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/90">{project.body}</p>
              <div className="mt-6 flex flex-col gap-3 text-sm">
                {"hash" in project && project.hash ? (
                  <a href={`/case-studies#${project.hash}`} className="underline">
                    {project.linkLabel}
                  </a>
                ) : (
                  <Link to={project.href} className="underline">
                    {project.linkLabel}
                  </Link>
                )}
                {project.external ? (
                  <a href={project.external} className="underline" rel="noopener noreferrer">
                    {project.externalLabel}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      <SiteFooter />
    </div>
  );
}
