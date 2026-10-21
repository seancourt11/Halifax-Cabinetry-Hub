import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import monctonHero from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg";
import monctonSmall from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg?w=800";

const PAGE_TITLE = "Cabinetry Projects | Hempston Home";
const PAGE_DESC =
  "Published Hempston Home cabinetry: a Greater Moncton built-in, plus Nova Scotia kitchens whose stories live on the designers' sites.";
const ABSOLUTE_URL = `${SITE_URL}/projects`;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: ABSOLUTE_URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
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

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-28 sm:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">
          Projects
        </p>
        <h1 className="mt-5 font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl">
          Published cabinetry projects
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-white/90">
          Only work we can show is listed here. Client names, prices and timelines are not
          published. Built in Canada. We install across Canada and the United States.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2">
        <img
          src={monctonHero}
          srcSet={`${monctonSmall} 800w, ${monctonHero} 1600w`}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt="Custom painted built-in cabinets and fireplace surround for a home in Dieppe, NB by Hempston Home"
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full object-cover"
        />
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85">
            Dieppe, NB
          </p>
          <h2 className="mt-4 font-display text-3xl font-light uppercase tracking-[0.06em]">
            Built-ins and fireplace surround, Dieppe, NB
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/90">
            Painted white built-in cabinets on both sides of a fireplace mantel, with shaker doors,
            drawers and open upper shelving, for a home in Dieppe, NB. Photographed finished before
            delivery. Built in Canada.
          </p>
          <Link
            to="/custom-cabinetry-moncton"
            className="mt-6 inline-block text-sm text-white underline"
          >
            Custom kitchen cabinets in Moncton
          </Link>
        </div>
      </section>

      {/*
        TODO(sean): Add more project entries only when a real photo and a factual caption exist.
        Do not invent clients, towns, prices, or timelines.
      */}

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-light uppercase tracking-[0.06em]">
            Nova Scotia kitchens with designer stories
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Four published kitchens link out to the designers who led them. Those pages are the
            project stories. This site does not add a separate write-up.
          </p>
          <Link to="/case-studies" className="mt-6 inline-block text-sm underline">
            View the Nova Scotia case studies
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
