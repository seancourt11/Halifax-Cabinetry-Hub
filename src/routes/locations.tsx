import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { cityPages, type CityPageData } from "@/data/city-pages";
import {
  ORG_ID,
  ORG_NAME,
  ORG_EMAIL,
  ORG_PHONE,
  SITE_URL,
  breadcrumbSchema,
} from "@/lib/schema";

const PAGE_TITLE = "Custom Cabinetry Across Canada — Locations We Serve | Hempston";
const PAGE_DESC =
  "Hempston designs and hand-builds custom kitchen cabinetry, vanities and built-in millwork for cities across Canada — from Halifax and Toronto to Vancouver and Calgary. Free design consultation.";
const ABSOLUTE_URL = `${SITE_URL}/locations`;

// Group cities by province for a clean hub structure — Google & AI answer
// engines index hub pages best when the location graph is explicit.
function groupByProvince(cities: CityPageData[]) {
  const map = new Map<string, CityPageData[]>();
  for (const c of cities) {
    if (!map.has(c.province)) map.set(c.province, []);
    map.get(c.province)!.push(c);
  }
  // Canonical province order (east → west, then territories) — familiar for CA users.
  const order = [
    "Nova Scotia",
    "New Brunswick",
    "Prince Edward Island",
    "Newfoundland and Labrador",
    "Quebec",
    "Ontario",
    "Manitoba",
    "Saskatchewan",
    "Alberta",
    "British Columbia",
  ];
  return order
    .filter((p) => map.has(p))
    .map((p) => ({
      province: p,
      cities: map.get(p)!.sort((a, b) => a.city.localeCompare(b.city)),
    }));
}

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { property: "og:site_name", content: ORG_NAME },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: ABSOLUTE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: `${SITE_URL}/` },
            { name: "Locations", item: ABSOLUTE_URL },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${ABSOLUTE_URL}#collection`,
          url: ABSOLUTE_URL,
          name: PAGE_TITLE,
          description: PAGE_DESC,
          inLanguage: "en-CA",
          isPartOf: { "@type": "WebSite", url: SITE_URL, name: ORG_NAME },
          about: { "@id": ORG_ID },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: cityPages.length,
            itemListElement: cityPages.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/${c.slug}`,
              name: `Custom Cabinetry ${c.city}, ${c.provinceCode}`,
            })),
          },
        }),
      },
    ],
  }),
  component: LocationsHub,
});

function LocationsHub() {
  const groups = groupByProvince(cityPages);

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
          <span className="mx-2 opacity-60">/</span>
          <span className="text-white">Locations</span>
        </nav>
        <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
          Locations we serve
        </p>
        <h1 className="mt-5 font-display text-4xl font-light uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-6xl">
          Custom Cabinetry, Coast to Coast
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75">
          Hempston designs and hand-builds bespoke kitchens, vanities and built-in millwork for
          homes across Canada. Studios in Halifax, Toronto and Long Beach — install crews coast to
          coast.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${ORG_PHONE.replace(/[^0-9+]/g, "")}`}
            className="inline-block border border-white/80 bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors hover:bg-transparent hover:text-white"
          >
            Call (902) 719-8497
          </a>
          <a
            href={`mailto:${ORG_EMAIL}`}
            className="inline-block border border-white/60 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Email Our Studio
          </a>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.province} className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
              {g.province}
            </p>
            <h2 className="mt-4 font-display text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-3xl">
              Custom cabinetry across {g.province}
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/${c.slug}` as "/custom-cabinetry-toronto"}
                    className="group flex h-full flex-col justify-between gap-4 border border-white/15 p-6 transition-colors hover:border-white"
                  >
                    <span>
                      <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                        <MapPin className="h-3.5 w-3.5" strokeWidth={1.2} />
                        {c.city}, {c.provinceCode}
                      </span>
                      <span className="mt-3 block font-display text-lg font-light uppercase tracking-[0.14em] text-white">
                        Custom Cabinetry in {c.city}
                      </span>
                      <span className="mt-2 block text-xs leading-relaxed text-white/60">
                        Serving {c.region} — kitchens, vanities & built-ins.
                      </span>
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors group-hover:text-white">
                      View {c.city} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
