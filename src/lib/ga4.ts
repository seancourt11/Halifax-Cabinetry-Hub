/**
 * Google Analytics 4 for the live Hempston Home hosts only.
 * The measurement ID is public. Event params never include name, email, phone, or message.
 */

export const GA_MEASUREMENT_ID = "G-XVCKCE8S0X";

const GA_HOSTS = ["www.hempstonhome.com", "hempstonhome.com"] as const;

const SENSITIVE_QUERY_KEYS = new Set([
  "name",
  "email",
  "e-mail",
  "mail",
  "phone",
  "tel",
  "message",
  "msg",
]);

export type LeadFormType = "consultation" | "work-with-us";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function isAnalyticsHost(hostname: string): boolean {
  return (GA_HOSTS as readonly string[]).includes(hostname);
}

/** Page URL with the hash and any contact-field query params removed. */
export function sanitizePageUrl(raw: string, base?: string): string {
  try {
    const url = new URL(raw, base);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (SENSITIVE_QUERY_KEYS.has(key.toLowerCase())) url.searchParams.delete(key);
    }
    return url.origin + url.pathname + url.search;
  } catch {
    return "";
  }
}

export function safePageLocation(): string {
  if (typeof window === "undefined") return "";
  return sanitizePageUrl(window.location.href);
}

function pagePath(pageLocation: string): string {
  try {
    const url = new URL(pageLocation);
    return url.pathname + url.search;
  } catch {
    return "";
  }
}

const ALLOWED_EVENT_PARAMS = new Set([
  "form_type",
  "page_location",
  "page_path",
  "page_title",
  "page_referrer",
]);

function canTrack(): boolean {
  return (
    typeof window !== "undefined" &&
    isAnalyticsHost(window.location.hostname) &&
    typeof window.gtag === "function"
  );
}

export function trackGaEvent(name: string, params: Record<string, string> = {}) {
  try {
    if (!canTrack()) return;
    const safe: Record<string, string> = {};
    for (const [key, value] of Object.entries(params)) {
      if (ALLOWED_EVENT_PARAMS.has(key)) safe[key] = value;
    }
    window.gtag!("event", name, safe);
  } catch {
    // Measurement must not block the page or a successful form submit.
  }
}

let lastTrackedLocation = "";

/**
 * One page_view per location. gtag config uses send_page_view: false, so this
 * is the only page_view, including the first load.
 */
export function trackPageView() {
  if (!canTrack()) return;
  const pageLocation = safePageLocation();
  if (!pageLocation || pageLocation === lastTrackedLocation) return;
  const pageReferrer = lastTrackedLocation || sanitizePageUrl(document.referrer);
  lastTrackedLocation = pageLocation;
  const params: Record<string, string> = {
    page_location: pageLocation,
    page_path: pagePath(pageLocation),
    page_title: document.title,
  };
  if (pageReferrer) params.page_referrer = pageReferrer;
  trackGaEvent("page_view", params);
}

export function trackGenerateLead(formType: LeadFormType) {
  const pageLocation = safePageLocation();
  if (!pageLocation) return;
  trackGaEvent("generate_lead", {
    form_type: formType,
    page_location: pageLocation,
  });
}

/**
 * Runs during HTML parse. Defines gtag immediately, then loads gtag.js async
 * only on the production hosts so preview deploys are not measured.
 * send_page_view is false so the router tracker does not double-count the first load.
 */
export const GA_BOOTSTRAP_SCRIPT = `(()=>{var id=${JSON.stringify(GA_MEASUREMENT_ID)};var hosts=${JSON.stringify([...GA_HOSTS])};if(hosts.indexOf(location.hostname)===-1)return;window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag("js",new Date());window.gtag("config",id,{send_page_view:false});var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(id);document.head.appendChild(s)})();`;
