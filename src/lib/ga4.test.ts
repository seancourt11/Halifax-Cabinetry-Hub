import assert from "node:assert/strict";
import { test } from "node:test";
import vm from "node:vm";
import {
  BOT_UA_RE,
  GA_BOOTSTRAP_SCRIPT,
  GA_MEASUREMENT_ID,
  INTERNAL_COOKIE_MAX_AGE_SECONDS,
  INTERNAL_STORAGE_KEY,
  STAFF_TOAST_OFF,
  STAFF_TOAST_ON,
  hasStaffOptOut,
  isAnalyticsHost,
  isBotClient,
  shouldLoadGtag,
} from "./ga4.ts";

const CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

test("bot check is webdriver or the user-agent pattern", () => {
  assert.equal(isBotClient(true, CHROME_UA), true);
  assert.equal(isBotClient(false, CHROME_UA), false);
  assert.equal(isBotClient(undefined, CHROME_UA), false);
  assert.equal(isBotClient(1, CHROME_UA), false);
  for (const token of [
    "HeadlessChrome",
    "Headless",
    "bot",
    "crawler",
    "spider",
    "Lighthouse",
    "PageSpeed",
    "Playwright",
    "Puppeteer",
  ]) {
    assert.equal(BOT_UA_RE.test(`Mozilla/5.0 ${token}/1.0`), true, token);
    assert.equal(isBotClient(false, `Mozilla/5.0 ${token}/1.0`), true, token);
  }
  assert.equal(isBotClient(false, "Mozilla/5.0 Googlebot/2.1"), true);
  assert.equal(isBotClient(false, CHROME_UA.toUpperCase()), false);
});

test("staff opt-out is localStorage or the hh_internal cookie", () => {
  assert.equal(hasStaffOptOut("1", ""), true);
  assert.equal(hasStaffOptOut(null, "hh_internal=1"), true);
  assert.equal(hasStaffOptOut(null, "theme=dark; hh_internal=1"), true);
  assert.equal(hasStaffOptOut(null, "hh_internal=1; theme=dark"), true);
  assert.equal(hasStaffOptOut("0", ""), false);
  assert.equal(hasStaffOptOut(null, "hh_internal=0"), false);
  assert.equal(hasStaffOptOut(null, "xhh_internal=1"), false);
  assert.equal(hasStaffOptOut(null, ""), false);
});

test("gtag loads only for a normal browser on the live hosts", () => {
  const normal = {
    webdriver: false,
    userAgent: CHROME_UA,
    storageValue: null,
    cookieHeader: "",
  };
  assert.equal(shouldLoadGtag({ ...normal, hostname: "www.hempstonhome.com" }), true);
  assert.equal(shouldLoadGtag({ ...normal, hostname: "hempstonhome.com" }), true);
  assert.equal(shouldLoadGtag({ ...normal, hostname: "preview.vercel.app" }), false);
  assert.equal(
    shouldLoadGtag({ ...normal, hostname: "www.hempstonhome.com", webdriver: true }),
    false,
  );
  assert.equal(
    shouldLoadGtag({
      ...normal,
      hostname: "www.hempstonhome.com",
      userAgent: "Mozilla/5.0 HeadlessChrome/131",
    }),
    false,
  );
  assert.equal(
    shouldLoadGtag({ ...normal, hostname: "www.hempstonhome.com", storageValue: "1" }),
    false,
  );
  assert.equal(
    shouldLoadGtag({ ...normal, hostname: "hempstonhome.com", cookieHeader: "hh_internal=1" }),
    false,
  );
  assert.equal(isAnalyticsHost("www.hempstonhome.com"), true);
});

type Harness = ReturnType<typeof runBootstrap>;

function runBootstrap(options: {
  href?: string;
  hostname?: string;
  webdriver?: unknown;
  userAgent?: string;
  storage?: Record<string, string>;
  cookie?: string;
}) {
  const start = new URL(options.href ?? "https://www.hempstonhome.com/");
  if (options.hostname) start.hostname = options.hostname;
  const store = new Map(Object.entries(options.storage ?? {}));
  let cookie = options.cookie ?? "";
  const cookieWrites: string[] = [];
  const scripts: Array<{ async: boolean; src: string }> = [];
  const toasts: string[] = [];
  const listeners: Record<string, () => void> = {};
  const historyState = { idx: 1 };
  const location = {
    href: start.href,
    hostname: start.hostname,
    pathname: start.pathname,
    search: start.search,
    hash: start.hash,
  };
  const history = {
    state: historyState as object | null,
    replaceState(state: object | null, _title: string, next: string) {
      this.state = state;
      const nextUrl = new URL(next, location.href);
      location.href = nextUrl.href;
      location.hostname = nextUrl.hostname;
      location.pathname = nextUrl.pathname;
      location.search = nextUrl.search;
      location.hash = nextUrl.hash;
    },
  };
  const document = {
    body: null as { appendChild: (el: { textContent: string }) => void } | null,
    cookie: "",
    head: {
      appendChild(el: { async: boolean; src: string }) {
        scripts.push(el);
      },
    },
    createElement() {
      return {
        async: false,
        src: "",
        textContent: "",
        style: { cssText: "" },
        parentNode: null as unknown,
        setAttribute() {},
      };
    },
    addEventListener(type: string, fn: () => void) {
      listeners[type] = fn;
    },
  };
  Object.defineProperty(document, "cookie", {
    get: () => cookie,
    set: (value: string) => {
      cookieWrites.push(value);
      cookie = applySetCookie(cookie, value);
    },
  });
  const window = { location };
  const context = {
    location,
    history,
    document,
    window,
    navigator: {
      webdriver: options.webdriver,
      userAgent: options.userAgent ?? CHROME_UA,
    },
    localStorage: {
      getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
      setItem: (key: string, value: string) => {
        store.set(key, String(value));
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
    },
    URL,
    encodeURIComponent,
    setTimeout: () => 0,
  };
  vm.runInNewContext(GA_BOOTSTRAP_SCRIPT, context);
  if (listeners.DOMContentLoaded) {
    document.body = {
      appendChild(el) {
        toasts.push(el.textContent);
      },
    };
    listeners.DOMContentLoaded();
  }
  const queued = Array.isArray((window as { dataLayer?: unknown[] }).dataLayer)
    ? (window as { dataLayer: unknown[] }).dataLayer.map((entry) =>
        Array.from(entry as ArrayLike<unknown>),
      )
    : [];
  return {
    scripts,
    toasts,
    cookie,
    cookieWrites,
    storage: Object.fromEntries(store),
    href: location.href,
    historyState: history.state,
    queued,
    gtag: (window as { gtag?: unknown }).gtag,
  };
}

function applySetCookie(current: string, setCookie: string) {
  const [pair, ...attrs] = setCookie.split(";").map((part) => part.trim());
  const eq = pair.indexOf("=");
  const name = pair.slice(0, eq);
  const value = pair.slice(eq + 1);
  const maxAgeAttr = attrs.find((attr) => attr.toLowerCase().startsWith("max-age="));
  const maxAge = maxAgeAttr ? Number(maxAgeAttr.split("=")[1]) : undefined;
  const map = new Map<string, string>();
  for (const part of current.split(";")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const i = trimmed.indexOf("=");
    map.set(trimmed.slice(0, i), trimmed.slice(i + 1));
  }
  if (maxAge === 0) map.delete(name);
  else map.set(name, value);
  return [...map.entries()].map(([key, item]) => `${key}=${item}`).join("; ");
}

function assertNoGtag(result: Harness) {
  assert.equal(result.scripts.length, 0);
  assert.equal(result.gtag, undefined);
}

function assertGtagLoaded(result: Harness) {
  assert.equal(result.scripts.length, 1);
  assert.equal(result.scripts[0].async, true);
  assert.equal(
    result.scripts[0].src,
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
  );
  assert.equal(result.queued[1]?.[0], "config");
  assert.equal(result.queued[1]?.[1], GA_MEASUREMENT_ID);
  const config = result.queued[1]?.[2] as { send_page_view?: boolean };
  assert.equal(config.send_page_view, false);
  assert.equal(
    result.queued.some((entry) => entry[1] === "page_view"),
    false,
  );
}

test("bootstrap loads async gtag once for a normal visit", () => {
  const result = runBootstrap({});
  assertGtagLoaded(result);
  assert.deepEqual(result.toasts, []);
  assert.deepEqual(result.cookieWrites, []);
});

test("bootstrap skips webdriver and bot user agents", () => {
  assertNoGtag(runBootstrap({ webdriver: true }));
  for (const token of [
    "HeadlessChrome",
    "Headless",
    "bot",
    "crawler",
    "spider",
    "Lighthouse",
    "PageSpeed",
    "Playwright",
    "Puppeteer",
  ]) {
    assertNoGtag(runBootstrap({ userAgent: `Mozilla/5.0 (${token})` }));
  }
});

test("bootstrap skips an existing staff opt-out without a toast", () => {
  assertNoGtag(runBootstrap({ storage: { [INTERNAL_STORAGE_KEY]: "1" } }));
  const fromCookie = runBootstrap({ cookie: "theme=dark; hh_internal=1" });
  assertNoGtag(fromCookie);
  assert.deepEqual(fromCookie.toasts, []);
  assert.equal(fromCookie.cookie, "theme=dark; hh_internal=1");
});

test("?internal=on opts this browser out and strips the param", () => {
  const result = runBootstrap({
    href: "https://www.hempstonhome.com/contact?internal=on&utm=ad#visit",
  });
  assertNoGtag(result);
  assert.equal(result.storage[INTERNAL_STORAGE_KEY], "1");
  assert.equal(result.cookie, "hh_internal=1");
  assert.equal(result.cookieWrites.length, 1);
  assert.ok(result.cookieWrites[0].includes(`Max-Age=${INTERNAL_COOKIE_MAX_AGE_SECONDS}`));
  assert.ok(result.cookieWrites[0].includes("Path=/"));
  assert.ok(result.cookieWrites[0].includes("SameSite=Lax"));
  assert.ok(result.cookieWrites[0].includes("Secure"));
  assert.equal(INTERNAL_COOKIE_MAX_AGE_SECONDS, 400 * 24 * 60 * 60);
  assert.equal(result.href, "https://www.hempstonhome.com/contact?utm=ad#visit");
  assert.deepEqual(result.historyState, { idx: 1 });
  assert.deepEqual(result.toasts, [STAFF_TOAST_OFF]);
});

test("?internal=off clears the opt-out and allows gtag", () => {
  const result = runBootstrap({
    href: "https://hempstonhome.com/?internal=off",
    storage: { [INTERNAL_STORAGE_KEY]: "1" },
    cookie: "hh_internal=1",
  });
  assertGtagLoaded(result);
  assert.equal(result.storage[INTERNAL_STORAGE_KEY], undefined);
  assert.equal(result.cookie, "");
  assert.ok(result.cookieWrites[0].includes("Max-Age=0"));
  assert.equal(result.href, "https://hempstonhome.com/");
  assert.deepEqual(result.toasts, [STAFF_TOAST_ON]);
});

test("a bot stays excluded after turning staff mode off", () => {
  const result = runBootstrap({
    href: "https://www.hempstonhome.com/?internal=off",
    userAgent: "Mozilla/5.0 Playwright",
    storage: { [INTERNAL_STORAGE_KEY]: "1" },
  });
  assertNoGtag(result);
  assert.equal(result.storage[INTERNAL_STORAGE_KEY], undefined);
  assert.deepEqual(result.toasts, [STAFF_TOAST_ON]);
});

test("other internal values do not toggle or strip the query", () => {
  const result = runBootstrap({ href: "https://www.hempstonhome.com/?internal=ON" });
  assertGtagLoaded(result);
  assert.equal(result.href, "https://www.hempstonhome.com/?internal=ON");
  assert.deepEqual(result.toasts, []);
  assert.equal(result.storage[INTERNAL_STORAGE_KEY], undefined);
});

test("preview hosts never load gtag, and the staff toggle still applies", () => {
  assertNoGtag(runBootstrap({ hostname: "halifax-cabinetry-hub-kt26.vercel.app" }));
  const opted = runBootstrap({
    href: "https://preview.vercel.app/work-with-us?internal=on",
  });
  assertNoGtag(opted);
  assert.equal(opted.storage[INTERNAL_STORAGE_KEY], "1");
  assert.equal(opted.href, "https://preview.vercel.app/work-with-us");
  assert.deepEqual(opted.toasts, [STAFF_TOAST_OFF]);
});
