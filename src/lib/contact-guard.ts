import { EMAIL, PHONE_DISPLAY } from "./site.ts";

/** Public site key. Safe to send to the browser. */
export const TURNSTILE_SITE_KEY_ENV = "TURNSTILE_SITE_KEY";
/** Server secret. Never send this to the browser. */
export const TURNSTILE_SECRET_KEY_ENV = "TURNSTILE_SECRET_KEY";
/** Optional override. When unset, leads are copied to sean@hempstonhome.com. */
export const MAIL_CC_ENV = "MAIL_CC";

export const DEFAULT_MAIL_CC = "sean@hempstonhome.com";
export const MIN_FILL_MS = 3_000;
export const MAX_FILL_MS = 24 * 60 * 60 * 1000;
export const MAX_SUBMITS_PER_DAY = 3;
export const MAX_SUBMITS_PER_WEEK = 5;
export const DAY_MS = 24 * 60 * 60 * 1000;
export const WEEK_MS = 7 * DAY_MS;

export const RATE_LIMIT_MESSAGE = `You've sent several requests recently. Please email ${EMAIL} or call ${PHONE_DISPLAY} and we'll help you directly.`;

export const TURNSTILE_REJECT_MESSAGE = `Please complete the security check and try again, or email ${EMAIL} or call ${PHONE_DISPLAY}.`;

export type SpamReason = "honeypot" | "timing";

export function resolveMailCc(raw = process.env.MAIL_CC): string {
  const trimmed = raw?.trim();
  return trimmed || DEFAULT_MAIL_CC;
}

export function turnstileConfig(env: Record<string, string | undefined> = process.env): {
  siteKey: string;
  secretKey: string;
  enabled: boolean;
  misconfigured: boolean;
} {
  const siteKey = env[TURNSTILE_SITE_KEY_ENV]?.trim() ?? "";
  const secretKey = env[TURNSTILE_SECRET_KEY_ENV]?.trim() ?? "";
  const hasSite = siteKey.length > 0;
  const hasSecret = secretKey.length > 0;
  return {
    siteKey,
    secretKey,
    enabled: hasSite && hasSecret,
    misconfigured: hasSite !== hasSecret,
  };
}

/**
 * Naive bots either fill the hidden field or post immediately.
 * A missing or too-quick timer is treated the same as a filled honeypot.
 */
export function spamReason(
  fields: Record<string, string | undefined>,
  now = Date.now(),
): SpamReason | null {
  if ((fields.company_website ?? "").trim() !== "") return "honeypot";
  const started = Number(fields.formStartedAt);
  if (!Number.isFinite(started)) return "timing";
  const elapsed = now - started;
  // A few seconds in the future is client clock skew, not a forged stamp.
  if (elapsed < -15_000 || elapsed > MAX_FILL_MS) return "timing";
  if (elapsed >= 0 && elapsed < MIN_FILL_MS) return "timing";
  return null;
}

export function clientIpFromHeaders(headers: Headers): string | null {
  const real = headers.get("x-real-ip")?.trim();
  if (real) return real;
  const forwarded = headers.get("x-forwarded-for");
  if (!forwarded) return null;
  const parts = forwarded
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return parts[parts.length - 1] ?? null;
}

export function readTimestamps(value: unknown): number[] {
  if (typeof value === "string") {
    try {
      return readTimestamps(JSON.parse(value));
    } catch {
      return [];
    }
  }
  if (Array.isArray(value) && value.every((stamp) => typeof stamp === "number")) return value;
  if (value && typeof value === "object") {
    const record = value as { timestamps?: unknown; stamps?: unknown };
    if ("timestamps" in record) return readTimestamps(record.timestamps);
    if ("stamps" in record) return readTimestamps(record.stamps);
  }
  return [];
}

export function evaluateRateLimit(
  timestamps: number[],
  now: number,
): { allowed: boolean; timestamps: number[] } {
  const recent = timestamps.filter((stamp) => now - stamp < WEEK_MS && stamp <= now);
  const dayCount = recent.filter((stamp) => now - stamp < DAY_MS).length;
  const allowed = dayCount < MAX_SUBMITS_PER_DAY && recent.length < MAX_SUBMITS_PER_WEEK;
  return { allowed, timestamps: [...recent, now].slice(-20) };
}
