/**
 * Shared JSON-LD schema builders. Keep site-wide constants here so they stay
 * in sync across routes.
 */
export const SITE_URL = "https://www.hempstonhome.com";
export const ORG_ID = "https://hempstonhome.com/#organization";
export const ORG_NAME = "Hempston Home";
export const ORG_EMAIL = "info@hempstonhome.com";
export const ORG_PHONE = "+1-902-719-8497";
export const ORG_SAMEAS = ["https://www.instagram.com/hempstonhome"];
export const ORG_FOUNDING_YEAR = "2015";

export type Crumb = { name: string; item: string };

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
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`,
    provider: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME },
    areaServed:
      opts.areaServed ??
      [
        { "@type": "AdministrativeArea", name: "Nova Scotia" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
      ],
    serviceType: "Custom cabinetry",
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

export function imageObjectsSchema(
  items: { url: string; caption: string; creator?: string }[],
) {
  return items.map((it) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: it.url,
    caption: it.caption,
    ...(it.creator
      ? { creator: { "@type": "Person", name: it.creator } }
      : {}),
    copyrightHolder: { "@id": ORG_ID, "@type": "Organization", name: ORG_NAME },
  }));
}
