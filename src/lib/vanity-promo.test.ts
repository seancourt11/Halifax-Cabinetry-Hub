import assert from "node:assert/strict";
import { test } from "node:test";
import {
  VANITY_PROMO_TIMING,
  vanityPromoOverrideAllowed,
  vanityPromoOverrideDay,
  vanityPromoPhase,
} from "./vanity-promo.ts";

const phase1Evening = new Date("2026-11-10T03:59:00Z");
const phase2Start = new Date("2026-11-10T04:00:00Z");
const phase2Evening = new Date("2026-11-17T03:59:00Z");
const afterPromo = new Date("2026-11-17T04:00:00Z");

test("phase 1 lasts through 11:59 PM Halifax on November 9", () => {
  const phase = vanityPromoPhase(phase1Evening);
  assert.equal(phase?.id, "phase1");
  assert.equal(phase?.percent, 40);
  assert.equal(phase?.discount, "40% off until Monday, November 9. Then 30% off until November 16.");
});

test("phase 2 runs from November 10 through 11:59 PM Halifax on November 16", () => {
  assert.equal(vanityPromoPhase(phase2Start)?.id, "phase2");
  assert.equal(vanityPromoPhase(phase2Start)?.percent, 30);
  assert.equal(vanityPromoPhase(phase2Evening)?.discount, "30% off until Monday, November 16.");
  assert.match(vanityPromoPhase(phase2Evening)?.note ?? "", /Regular pricing applies after Monday, November 16/);
});

test("the promotion hides after November 16 and when it is switched off", () => {
  assert.equal(vanityPromoPhase(afterPromo), null);
  assert.equal(vanityPromoPhase(phase2Start, null, false), null);
});

test("the 2 to 4 week line names the November 16 end of the promotion", () => {
  assert.match(VANITY_PROMO_TIMING, /ending Monday, November 16, 2026/);
  assert.match(VANITY_PROMO_TIMING, /2 to 4 week production on catalogue and custom vanities/);
  assert.equal(VANITY_PROMO_TIMING.includes("\u2014"), false);
});

test("preview query overrides the phase and is ignored on the live host", () => {
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase1", "localhost"), "2026-11-09");
  assert.equal(vanityPromoOverrideDay("vanityPromo=phase2", "preview.vercel.app"), "2026-11-10");
  assert.equal(vanityPromoOverrideDay("?vanityPromo=off"), "2026-11-17");
  assert.equal(vanityPromoOverrideDay("?vanityPromo=2026-11-12", "127.0.0.1"), "2026-11-12");
  assert.equal(vanityPromoPhase(afterPromo, "2026-11-12")?.id, "phase2");
  assert.equal(vanityPromoOverrideAllowed("www.hempstonhome.com"), false);
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase2", "www.hempstonhome.com"), null);
});
