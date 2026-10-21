/**
 * Shared JSON-LD schema builders. Site-wide constants live in site.ts.
 */
import {
  BRAND,
  CITY_SEO,
  EMAIL,
  ENTITY_SENTENCE,
  FOUNDING_YEAR,
  HALIFAX_SHOP_HOURS,
  HOURS,
  INSTAGRAM_URL,
  KITCHEN_PRICE_MAX,
  KITCHEN_PRICE_MIN,
  LEAD_TIME_LABEL,
  LOCATION_LIST,
  LOGO_URL,
  ORG_ID,
  PHONE_E164,
  SITE_URL,
  WEBSITE_ID,
  WARRANTY_LABEL,
  type ShopLocation,
} from "@/lib/site";

export { SITE_URL, ORG_ID };
export const ORG_NAME = BRAND;
export const ORG_EMAIL = EMAIL;
export const ORG_PHONE = PHONE_E164;
export const ORG_SAMEAS = [INSTAGRAM_URL];
export const ORG_FOUNDING_YEAR = FOUNDING_YEAR;

export type Crumb = { name: string; item: string };

function postalAddress(loc: ShopLocation) {
  return {
    "@type": "PostalAddress",
    streetAddress: loc.streetAddress,
    addressLocality: loc.addressLocality,
    addressRegion: loc.addressRegion,
    postalCode: loc.postalCode,
    addressCountry: loc.addressCountry,
  };
}

function openingHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...HOURS.days],
      opens: HOURS.opens,
      closes: HOURS.closes,
    },
  ];
}

function halifaxOpeningHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...HALIFAX_SHOP_HOURS.days],
      opens: HALIFAX_SHOP_HOURS.opens,
      closes: HALIFAX_SHOP_HOURS.closes,
    },
  ];
}

function locationEntity(loc: ShopLocation) {
  const isHalifax = loc.key === "halifax";
  return {
    // LocalBusiness, not a store or building-supplies type.
    "@type": "LocalBusiness",
    "@id": loc.id,
    name: loc.name,
    description: loc.schemaDescription,
    url: isHalifax ? `${SITE_URL}/custom-cabinetry-halifax` : `${SITE_URL}/`,
    image: LOGO_URL,
    logo: LOGO_URL,
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress(loc),
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.latitude,
      longitude: loc.longitude,
    },
    // One published phone, on the organization and the Halifax studio only.
    ...(isHalifax ? { telephone: PHONE_E164, email: EMAIL } : { email: EMAIL }),
    ...(isHalifax
      ? {
          openingHours: HALIFAX_SHOP_HOURS.openingHours,
          openingHoursSpecification: halifaxOpeningHours(),
        }
      : { openingHoursSpecification: openingHours() }),
    priceRange: "$$$",
    currenciesAccepted: loc.addressCountry === "US" ? "USD" : "CAD",
    areaServed:
      loc.key === "longBeach"
        ? [
            { "@type": "City", name: "Long Beach" },
            { "@type": "AdministrativeArea", name: "Southern California" },
          ]
        : loc.key === "toronto"
          ? [
              { "@type": "City", name: "Toronto" },
              { "@type": "AdministrativeArea", name: "Ontario" },
            ]
          : [
              { "@type": "City", name: "Halifax" },
              { "@type": "AdministrativeArea", name: "Halifax Regional Municipality" },
              { "@type": "AdministrativeArea", name: "Nova Scotia" },
            ],
  };
}

/**
 * Service-area city pages (every cabinetry city except the Halifax and Toronto
 * offices) must not carry LocalBusiness or a street address.
 */
export function isServiceAreaPath(pathname: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  return (
    path.startsWith("/custom-cabinetry-") &&
    path !== "/custom-cabinetry-halifax" &&
    path !== "/custom-cabinetry-toronto"
  );
}

/** One Organization. Office pages also include the three real locations. */
export function organizationJsonLd(opts?: { includeOffices?: boolean }) {
  const includeOffices = opts?.includeOffices !== false;
  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    image: LOGO_URL,
    description: ENTITY_SENTENCE,
    email: EMAIL,
    telephone: PHONE_E164,
    foundingDate: FOUNDING_YEAR,
    priceRange: "$$$",
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    sameAs: ORG_SAMEAS,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: EMAIL,
      telephone: PHONE_E164,
      areaServed: ["CA", "US"],
      availableLanguage: ["English"],
    },
    openingHoursSpecification: openingHours(),
  };
  if (includeOffices) {
    organization.address = postalAddress(LOCATION_LIST[0]);
    organization.location = LOCATION_LIST.map((loc) => ({ "@id": loc.id }));
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      ...(includeOffices ? LOCATION_LIST.map(locationEntity) : []),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: BRAND,
        url: `${SITE_URL}/`,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item.startsWith("http") ? c.item : `${SITE_URL}${c.item}`,
    })),
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: unknown;
  providerId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`,
    provider: { "@id": opts.providerId ?? ORG_ID },
    areaServed: opts.areaServed ?? [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Custom cabinetry",
  };
}

/** City pages point at the one organization. They do not invent a local business. */
export function cityServiceSchema(opts: {
  slug: string;
  city: string;
  province: string;
  region: string;
}) {
  const seo = CITY_SEO[opts.slug];
  const url = `${SITE_URL}/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo?.h1 ?? `Custom kitchen cabinets in ${opts.city}`,
    description: seo?.description,
    serviceType: "Custom kitchen cabinetry",
    url,
    provider: { "@id": ORG_ID },
    areaServed: [
      {
        "@type": "City",
        name: opts.city,
        containedInPlace: { "@type": "AdministrativeArea", name: opts.province },
      },
      { "@type": "AdministrativeArea", name: opts.region },
      { "@type": "AdministrativeArea", name: opts.province },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      lowPrice: KITCHEN_PRICE_MIN,
      highPrice: KITCHEN_PRICE_MAX,
      description: `Typical full custom kitchen ${KITCHEN_PRICE_MIN.toLocaleString("en-CA")} to ${KITCHEN_PRICE_MAX.toLocaleString("en-CA")} CAD. Lead time ${LEAD_TIME_LABEL}. ${WARRANTY_LABEL}.`,
    },
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  image?: string;
  material?: string;
  category?: string;
  additionalProperty?: { name: string; value: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    ...(opts.image ? { image: opts.image } : {}),
    ...(opts.material ? { material: opts.material } : {}),
    ...(opts.category ? { category: opts.category } : {}),
    brand: { "@type": "Brand", name: ORG_NAME },
    manufacturer: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME },
    ...(opts.additionalProperty
      ? {
          additionalProperty: opts.additionalProperty.map((p) => ({
            "@type": "PropertyValue",
            name: p.name,
            value: p.value,
          })),
        }
      : {}),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function imageObjectsSchema(items: { url: string; caption: string; creator?: string }[]) {
  return items.map((it) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: it.url,
    caption: it.caption,
    ...(it.creator ? { creator: { "@type": "Person", name: it.creator } } : {}),
    copyrightHolder: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME },
  }));
}
