import assert from "node:assert/strict";
import { test } from "node:test";
import {
  DEFAULT_MAIL_CC,
  MAX_SUBMITS_PER_DAY,
  MAX_SUBMITS_PER_WEEK,
  MIN_FILL_MS,
  RATE_LIMIT_MESSAGE,
  clientIpFromHeaders,
  evaluateRateLimit,
  resolveMailCc,
  spamReason,
  turnstileConfig,
} from "./contact-guard.ts";

const NOW = Date.parse("2026-11-01T12:00:00.000Z");

test("mail CC falls back to Sean when unset or blank", () => {
  assert.equal(resolveMailCc(undefined), DEFAULT_MAIL_CC);
  assert.equal(resolveMailCc("  "), DEFAULT_MAIL_CC);
  assert.equal(resolveMailCc("studio@hempstonhome.com"), "studio@hempstonhome.com");
});

test("Turnstile stays off unless both keys are set", () => {
  assert.equal(turnstileConfig({}).enabled, false);
  assert.equal(turnstileConfig({}).misconfigured, false);
  assert.deepEqual(
    turnstileConfig({ TURNSTILE_SITE_KEY: "site", TURNSTILE_SECRET_KEY: "" }).enabled,
    false,
  );
  assert.equal(
    turnstileConfig({ TURNSTILE_SITE_KEY: "site", TURNSTILE_SECRET_KEY: "" }).misconfigured,
    true,
  );
  const ready = turnstileConfig({
    TURNSTILE_SITE_KEY: " site ",
    TURNSTILE_SECRET_KEY: " secret ",
  });
  assert.equal(ready.enabled, true);
  assert.equal(ready.siteKey, "site");
  assert.equal(ready.secretKey, "secret");
});

test("honeypot and too-fast submissions are spam, real fill time is not", () => {
  assert.equal(
    spamReason({ company_website: "http://spam.test", formStartedAt: "1" }, NOW),
    "honeypot",
  );
  assert.equal(
    spamReason({ company_website: "   ", formStartedAt: String(NOW - 10_000) }, NOW),
    null,
  );
  assert.equal(spamReason({ formStartedAt: String(NOW - 500) }, NOW), "timing");
  assert.equal(spamReason({}, NOW), "timing");
  assert.equal(spamReason({ formStartedAt: "nope" }, NOW), "timing");
  assert.equal(spamReason({ formStartedAt: String(NOW - MIN_FILL_MS) }, NOW), null);
  assert.equal(spamReason({ formStartedAt: String(NOW + 5_000) }, NOW), null);
  assert.equal(spamReason({ formStartedAt: String(NOW + 60_000) }, NOW), "timing");
});

test("rate limit allows 3 a day and 5 a week", () => {
  let stamps: number[] = [];
  for (let i = 0; i < MAX_SUBMITS_PER_DAY; i += 1) {
    const decision = evaluateRateLimit(stamps, NOW + i);
    assert.equal(decision.allowed, true);
    stamps = decision.timestamps;
  }
  const blocked = evaluateRateLimit(stamps, NOW + 10_000);
  assert.equal(blocked.allowed, false);

  const older = [NOW - 3 * 24 * 60 * 60 * 1000, NOW - 2 * 24 * 60 * 60 * 1000];
  let week = older;
  for (let i = 0; i < 3; i += 1) {
    const decision = evaluateRateLimit(week, NOW + i);
    assert.equal(decision.allowed, true);
    week = decision.timestamps;
  }
  assert.equal(evaluateRateLimit(week, NOW + 10).allowed, false);
  assert.equal(week.length, MAX_SUBMITS_PER_WEEK);
});

test("client IP prefers x-real-ip, otherwise the last forwarded hop", () => {
  assert.equal(
    clientIpFromHeaders(new Headers({ "x-real-ip": "203.0.113.9", "x-forwarded-for": "1.1.1.1" })),
    "203.0.113.9",
  );
  assert.equal(
    clientIpFromHeaders(new Headers({ "x-forwarded-for": "198.51.100.4, 203.0.113.20" })),
    "203.0.113.20",
  );
  assert.equal(clientIpFromHeaders(new Headers()), null);
});

test("rate limit copy names the inbox and phone", () => {
  assert.match(RATE_LIMIT_MESSAGE, /info@hempstonhome.com/);
  assert.match(RATE_LIMIT_MESSAGE, /\(902\) 442-0543/);
});
