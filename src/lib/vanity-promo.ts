/**
 * Holiday vanity promotion. All dates are calendar days in America/Halifax.
 * Set VANITY_PROMO_ENABLED to false to take the promotion down early.
 * Phase 1 runs through 11:59 PM America/Halifax on Tuesday, November 10, 2026.
 * That instant is 2026-11-11 03:59:59 UTC because Atlantic Standard Time is UTC-4.
 * Phase 2 runs from Wednesday, November 11 through 11:59 PM America/Halifax
 * on Friday, November 27, 2026. That instant is 2026-11-28 03:59:59 UTC.
 * After that the promotion hides and regular pricing applies.
 */
export const VANITY_PROMO_ENABLED = true;
export const VANITY_PROMO_PHASE1_END = "2026-11-10";
export const VANITY_PROMO_PHASE2_END = "2026-11-27";

/** Shown only while the holiday promotion is active. Not a standing lead time. */
export const VANITY_PROMO_TIMING =
  "Order during our holiday promotion, ending Friday, November 27, 2026, and we'll aim for 2 to 4 week production on catalogue and custom vanities, in time for Christmas.";

export const VANITY_TIMELINE_NOTE =
  "Timelines are confirmed when you order and depend on the shop schedule.";

export type VanityPromoPhaseId = "phase1" | "phase2";

export type VanityPromoPhase = {
  id: VanityPromoPhaseId;
  percent: 40 | 30;
  /** Inclusive last America/Halifax calendar day. */
  endDay: string;
  discount: string;
  note: string;
};

const PHASES: Record<VanityPromoPhaseId, VanityPromoPhase> = {
  phase1: {
    id: "phase1",
    percent: 40,
    endDay: VANITY_PROMO_PHASE1_END,
    discount: "40% off until Tuesday, November 10. Then 30% off until Friday, November 27.",
    note: VANITY_TIMELINE_NOTE,
  },
  phase2: {
    id: "phase2",
    percent: 30,
    endDay: VANITY_PROMO_PHASE2_END,
    discount: "30% off until Friday, November 27.",
    note: `Regular pricing applies after Friday, November 27. ${VANITY_TIMELINE_NOTE}`,
  },
};

export function halifaxCalendarDay(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Halifax",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

function normalizeHost(host: string) {
  const name = host.trim().toLowerCase();
  if (name.startsWith("[")) {
    const end = name.indexOf("]");
    return end >= 0 ? name.slice(1, end) : name.slice(1);
  }
  return name.split(":")[0] ?? "";
}

/** Query override is only for localhost and Vercel preview hosts. */
export function vanityPromoOverrideAllowed(host: string) {
  const name = normalizeHost(host);
  if (!name) return false;
  if (name === "hempstonhome.com" || name === "www.hempstonhome.com") return false;
  if (LOCAL_HOSTS.has(name)) return true;
  return name.endsWith(".vercel.app");
}

/**
 * Preview review values: phase1, phase2, off, or a YYYY-MM-DD America/Halifax day.
 * Example: /products/vanities?vanityPromo=phase2
 */
export function vanityPromoOverrideDay(search: string, host = "") {
  if (!vanityPromoOverrideAllowed(host)) return null;
  const query = search.startsWith("?") ? search.slice(1) : search;
  const raw = new URLSearchParams(query).get("vanityPromo");
  if (!raw) return null;
  if (raw === "phase1") return VANITY_PROMO_PHASE1_END;
  if (raw === "phase2") return "2026-11-11";
  if (raw === "off") return "2026-11-28";
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  return null;
}

export function vanityPromoPhase(
  now = new Date(),
  overrideDay?: string | null,
  enabled = VANITY_PROMO_ENABLED,
): VanityPromoPhase | null {
  if (!enabled) return null;
  const day =
    overrideDay && /^\d{4}-\d{2}-\d{2}$/.test(overrideDay) ? overrideDay : halifaxCalendarDay(now);
  if (day <= VANITY_PROMO_PHASE1_END) return PHASES.phase1;
  if (day <= VANITY_PROMO_PHASE2_END) return PHASES.phase2;
  return null;
}

export function vanityPromoActive(now = new Date(), overrideDay?: string | null) {
  return vanityPromoPhase(now, overrideDay) !== null;
}
