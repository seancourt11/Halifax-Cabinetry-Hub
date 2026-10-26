/**
 * Single config for Hempston Home facts.
 * Address, price, lead time, and warranty are defined here so every page stays
 * consistent. Do not add a phone number that is not already published.
 *
 * Build location (Bayne St / Halifax shop) may be stated on the Halifax page,
 * the About page, and the global FAQ / llms.txt only. Other Canadian pages say
 * "Built in Canada" and do not name the shop. US-facing copy stays neutral
 * about where cabinets are made.
 */

export const BRAND = "Hempston Home";
export const SITE_URL = "https://www.hempstonhome.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const EMAIL = "info@hempstonhome.com";
/** Already published on every page. Do not add other numbers. */
export const PHONE_E164 = "+1-902-719-8497";
export const PHONE_DISPLAY = "(902) 719-8497";
export const FOUNDING_YEAR = "2015";
export const INSTAGRAM_URL = "https://www.instagram.com/hempstonhome";
export const LOGO_PATH = "/logo-512.png";
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;

export const KITCHEN_PRICE_MIN = 25000;
export const KITCHEN_PRICE_MAX = 75000;
export const KITCHEN_PRICE_LABEL = "$25,000 to $75,000";
export const VANITY_PRICE_LABEL = "$4,000 to $12,000";
export const LEAD_TIME_LABEL = "8 to 14 weeks";
export const RUSH_LEAD_TIME_LABEL = "about 6 weeks";
export const WARRANTY_YEARS = 5;
export const WARRANTY_LABEL = "5-year workmanship warranty";

export const BUILT_IN_CANADA = "Built in Canada.";
export const INSTALL_LINE = "We install across Canada and the United States.";

/** Allowed on the Halifax page, About, and the global FAQ / llms.txt. */
export const HALIFAX_BUILD_SENTENCE =
  "Cabinets are built in Halifax, Nova Scotia at our Bayne St shop, 6359 Bayne St, Halifax, NS B3K 2V6. Toronto and the Long Beach area facility are studios and service bases, not manufacturing sites.";

export type ShopLocation = {
  id: string;
  key: "halifax" | "toronto" | "longBeach";
  name: string;
  role: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: "CA" | "US";
  countryName: string;
  latitude: number;
  longitude: number;
  /** One-line postal address for visible copy. */
  copyLabel: string;
  /** Neutral description. Only Halifax states that cabinets are built there. */
  schemaDescription: string;
};

export const LOCATIONS: Record<ShopLocation["key"], ShopLocation> = {
  halifax: {
    id: `${SITE_URL}/#location-halifax`,
    key: "halifax",
    name: "Hempston Home",
    role: "Halifax studio",
    streetAddress: "6359 Bayne St",
    addressLocality: "Halifax",
    addressRegion: "NS",
    postalCode: "B3K 2V6",
    addressCountry: "CA",
    countryName: "Canada",
    // OSM house node for 6359 Bayne Street, North End (Convoy Place), not downtown.
    latitude: 44.6659588,
    longitude: -63.6203887,
    copyLabel: "6359 Bayne St, Halifax, NS B3K 2V6, Canada",
    schemaDescription:
      "Halifax studio at 6359 Bayne St, Halifax, NS B3K 2V6.",
  },
  toronto: {
    id: `${SITE_URL}/#location-toronto`,
    key: "toronto",
    name: "Hempston Home Toronto",
    role: "Toronto studio",
    streetAddress: "116B Galaxy Blvd",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M9W 4Y6",
    addressCountry: "CA",
    countryName: "Canada",
    // Published pin for 112-116 Galaxy Blvd, Etobicoke, postal code M9W 4Y6.
    latitude: 43.6801961,
    longitude: -79.5865821,
    copyLabel: "116B Galaxy Blvd, Toronto (Etobicoke), ON M9W 4Y6, Canada",
    schemaDescription:
      "Toronto studio and service base for Toronto and Greater Toronto Area projects.",
  },
  longBeach: {
    id: `${SITE_URL}/#location-long-beach`,
    key: "longBeach",
    name: "Hempston Home Long Beach",
    role: "Long Beach area facility",
    streetAddress: "3460 Cherry Ave",
    addressLocality: "Lakewood",
    addressRegion: "CA",
    postalCode: "90712",
    addressCountry: "US",
    countryName: "United States",
    // 3460 Cherry Avenue, on the Lakewood / Long Beach corridor.
    latitude: 33.8194237,
    longitude: -118.1674728,
    copyLabel: "3460 Cherry Ave, Lakewood, CA 90712, USA",
    schemaDescription:
      "Long Beach area facility in Lakewood, California, serving Long Beach and Southern California.",
  },
};

export const LOCATION_LIST: ShopLocation[] = [
  LOCATIONS.halifax,
  LOCATIONS.toronto,
  LOCATIONS.longBeach,
];

export const HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
  opens: "09:00",
  closes: "17:00",
  label: "Monday to Friday, 9am to 5pm, by appointment",
};

export type PageSeo = { title: string; description: string; h1: string };

export const CITY_SEO: Record<string, PageSeo> = {
  "custom-cabinetry-moncton": {
    title: "Custom Kitchen Cabinets Moncton NB | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Moncton, Dieppe and Riverview homes. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Moncton, New Brunswick",
  },
  "custom-cabinetry-charlottetown": {
    title: "Custom Kitchen Cabinets Charlottetown | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Charlottetown and PEI homes. Built in Canada by Hempston Home. Book a free consultation.",
    h1: "Custom Kitchen Cabinets in Charlottetown, PEI",
  },
  "custom-cabinetry-fredericton": {
    title: "Custom Kitchen Cabinets Fredericton | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Fredericton and capital region homes. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Fredericton, New Brunswick",
  },
  "custom-cabinetry-saint-john": {
    title: "Custom Kitchen Cabinets Saint John NB | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Saint John, Rothesay and Quispamsis homes. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Saint John, New Brunswick",
  },
  "custom-cabinetry-st-johns": {
    title: "Custom Kitchen Cabinets St. John's | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for St. John's and Northeast Avalon homes. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in St. John's, Newfoundland",
  },
  "custom-cabinetry-toronto": {
    title: "Custom Kitchen Cabinets Toronto | Hempston Home",
    description:
      "Custom kitchen cabinets and built-in millwork for Toronto and GTA homes, from inset Shaker to white oak. Built in Canada. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Toronto and the GTA",
  },
  "custom-cabinetry-montreal": {
    title: "Custom Kitchen Cabinets Montreal | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Montreal homes. Built in Canada by Hempston Home and installed by our crew. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Montreal, Quebec",
  },
  "custom-cabinetry-vancouver": {
    title: "Custom Kitchen Cabinets Vancouver | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Metro Vancouver homes. Built in Canada by Hempston Home and installed by our crew. Book a consult.",
    h1: "Custom Kitchen Cabinets in Vancouver, BC",
  },
  "custom-cabinetry-calgary": {
    title: "Custom Kitchen Cabinets Calgary | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Calgary homes. Built in Canada by Hempston Home and installed by our own crew. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Calgary, Alberta",
  },
  "custom-cabinetry-ottawa": {
    title: "Custom Kitchen Cabinets Ottawa | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Ottawa and National Capital Region homes. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Ottawa, Ontario",
  },
  "custom-cabinetry-edmonton": {
    title: "Custom Kitchen Cabinets Edmonton | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Edmonton homes. Built in Canada by Hempston Home and installed by our own crew. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Edmonton, Alberta",
  },
  "custom-cabinetry-winnipeg": {
    title: "Custom Kitchen Cabinets Winnipeg | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Winnipeg homes. Built in Canada by Hempston Home and installed by our own crew. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Winnipeg, Manitoba",
  },
  "custom-cabinetry-quebec-city": {
    title: "Custom Kitchen Cabinets Quebec City | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Quebec City homes. Built in Canada by Hempston Home and installed by our crew. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Quebec City",
  },
  "custom-cabinetry-hamilton": {
    title: "Custom Kitchen Cabinets Hamilton | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Hamilton, Burlington and Oakville homes. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Hamilton, Ontario",
  },
  "custom-cabinetry-kitchener": {
    title: "Custom Kitchen Cabinets Kitchener | Hempston Home",
    description:
      "Custom kitchen cabinets, vanities and built-ins for Kitchener, Waterloo and Cambridge. Built in Canada by Hempston Home. Book a free consult.",
    h1: "Custom Kitchen Cabinets in Kitchener-Waterloo",
  },
};

export function mapsUrl(loc: ShopLocation) {
  const q = encodeURIComponent(loc.copyLabel);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
