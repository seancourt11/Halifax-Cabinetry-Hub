/**
 * Holiday vanity promotion.
 * Set VANITY_PROMO_ENABLED to false to take the banner down early.
 * It also hides on its own after 13 November 2026, America/Halifax (Atlantic time).
 * The included end date is the last day the banner is shown.
 */
export const VANITY_PROMO_ENABLED = true;
export const VANITY_PROMO_END_DATE = "2026-11-13";

export function halifaxCalendarDay(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Halifax",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function vanityPromoActive(now = new Date()) {
  if (!VANITY_PROMO_ENABLED) return false;
  return halifaxCalendarDay(now) <= VANITY_PROMO_END_DATE;
}
