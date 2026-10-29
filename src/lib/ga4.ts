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

export const INTERNAL_STORAGE_KEY = "hh_internal";
export const INTERNAL_COOKIE_MAX_AGE_SECONDS = 400 * 24 * 60 * 60;
export const STAFF_TOAST_OFF = "Analytics off for this browser (staff)";
export const STAFF_TOAST_ON = "Analytics on";

/** Bots and headless browsers. "Headless" covers HeadlessChrome as well. */
export const BOT_UA_RE =
  /HeadlessChrome|Headless|bot|crawler|spider|Lighthouse|PageSpeed|Playwright|Puppeteer/i;

export function isBotClient(webdriver: unknown, userAgent: string): boolean {
  return webdriver === true || BOT_UA_RE.test(userAgent || "");
}

export function hasStaffOptOut(storageValue: string | null, cookieHeader: string): boolean {
  if (storageValue === "1") return true;
  return cookieHeader.split(";").some((part) => part.trim() === `${INTERNAL_STORAGE_KEY}=1`);
}

export function shouldLoadGtag(input: {
  hostname: string;
  webdriver: unknown;
  userAgent: string;
  storageValue: string | null;
  cookieHeader: string;
}): boolean {
  if (!isAnalyticsHost(input.hostname)) return false;
  if (isBotClient(input.webdriver, input.userAgent)) return false;
  if (hasStaffOptOut(input.storageValue, input.cookieHeader)) return false;
  return true;
}

/**
 * Runs during HTML parse. Loads gtag.js async on the live hosts only.
 * Skips bots and browsers that opted out with ?internal=on.
 * send_page_view is false so the router tracker does not double-count the first load.
 */
export const GA_BOOTSTRAP_SCRIPT = `(()=>{var id=${JSON.stringify(GA_MEASUREMENT_ID)};var hosts=${JSON.stringify([...GA_HOSTS])};var key=${JSON.stringify(INTERNAL_STORAGE_KEY)};var maxAge=${INTERNAL_COOKIE_MAX_AGE_SECONDS};var botRe=new RegExp(${JSON.stringify(BOT_UA_RE.source)},${JSON.stringify(BOT_UA_RE.flags)});var toastOff=${JSON.stringify(STAFF_TOAST_OFF)};var toastOn=${JSON.stringify(STAFF_TOAST_ON)};function staffOn(){try{if(localStorage.getItem(key)==="1")return true}catch(e){}var parts=(document.cookie||"").split(";");for(var i=0;i<parts.length;i++){if(parts[i].trim()===key+"=1")return true}return false}function showToast(message){var mount=function(){if(!document.body)return;var el=document.createElement("div");el.setAttribute("role","status");el.textContent=message;el.style.cssText="position:fixed;z-index:2147483647;left:12px;bottom:12px;max-width:280px;padding:8px 10px;border-radius:4px;background:#141414;color:#fff;font:12px/1.3 system-ui,sans-serif";document.body.appendChild(el);setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el)},4000)};if(document.body)mount();else document.addEventListener("DOMContentLoaded",mount)}try{var url=new URL(location.href);var mode=url.searchParams.get("internal");if(mode==="on"||mode==="off"){if(mode==="on"){try{localStorage.setItem(key,"1")}catch(e){}document.cookie=key+"=1; Max-Age="+maxAge+"; Path=/; SameSite=Lax; Secure"}else{try{localStorage.removeItem(key)}catch(e){}document.cookie=key+"=; Max-Age=0; Path=/; SameSite=Lax; Secure"}url.searchParams.delete("internal");history.replaceState(history.state,"",url.pathname+url.search+url.hash);showToast(mode==="on"?toastOff:toastOn)}}catch(e){}if(hosts.indexOf(location.hostname)===-1)return;if(navigator.webdriver===true||botRe.test(navigator.userAgent||"")||staffOn())return;window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag("js",new Date());window.gtag("config",id,{send_page_view:false});var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(id);document.head.appendChild(s)})();`;
