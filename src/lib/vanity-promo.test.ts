import assert from "node:assert/strict";
import { test } from "node:test";
import {
  VANITY_PROMO_TIMING,
  halifaxCalendarDay,
  vanityPromoOverrideAllowed,
  vanityPromoOverrideDay,
  vanityPromoPhase,
} from "./vanity-promo.ts";

const phase1Start = new Date("2026-11-10T04:00:00Z");
const phase1Evening = new Date("2026-11-11T03:59:00Z");
const phase2Start = new Date("2026-11-11T04:00:00Z");
const phase2Evening = new Date("2026-11-28T03:59:59Z");
const afterPromo = new Date("2026-11-28T04:00:00Z");

test("phase 1 lasts through 11:59 PM Halifax on November 10", () => {
  assert.equal(halifaxCalendarDay(phase1Start), "2026-11-10");
  assert.equal(halifaxCalendarDay(phase1Evening), "2026-11-10");
  const phase = vanityPromoPhase(phase1Evening);
  assert.equal(vanityPromoPhase(phase1Start)?.id, "phase1");
  assert.equal(phase?.id, "phase1");
  assert.equal(phase?.percent, 40);
  assert.equal(
    phase?.discount,
    "40% off until Tuesday, November 10. Then 30% off until Friday, November 27.",
  );
  assert.equal(phase?.discount.includes("\u2014"), false);
});

test("phase 2 runs from November 11 through 11:59:59 PM Halifax on November 27", () => {
  assert.equal(halifaxCalendarDay(phase2Start), "2026-11-11");
  assert.equal(halifaxCalendarDay(phase2Evening), "2026-11-27");
  assert.equal(halifaxCalendarDay(afterPromo), "2026-11-28");
  assert.equal(vanityPromoPhase(phase2Start)?.id, "phase2");
  assert.equal(vanityPromoPhase(phase2Start)?.percent, 30);
  assert.equal(vanityPromoPhase(phase2Evening)?.discount, "30% off until Friday, November 27.");
  assert.match(
    vanityPromoPhase(phase2Evening)?.note ?? "",
    /Regular pricing applies after Friday, November 27/,
  );
});

test("the promotion hides after November 27 and when it is switched off", () => {
  assert.equal(vanityPromoPhase(afterPromo), null);
  assert.equal(vanityPromoPhase(phase2Start, null, false), null);
});

test("the 2 to 4 week line names the November 27 end of the promotion", () => {
  assert.match(VANITY_PROMO_TIMING, /ending Friday, November 27, 2026/);
  assert.match(VANITY_PROMO_TIMING, /2 to 4 week production on catalogue and custom vanities/);
  assert.equal(VANITY_PROMO_TIMING.includes("\u2014"), false);
});

test("preview query overrides the phase only on localhost and preview hosts", () => {
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase1", "localhost"), "2026-11-10");
  assert.equal(vanityPromoOverrideDay("vanityPromo=phase2", "preview.vercel.app"), "2026-11-11");
  assert.equal(vanityPromoOverrideDay("?vanityPromo=off", "127.0.0.1"), "2026-11-28");
  assert.equal(vanityPromoOverrideDay("?vanityPromo=2026-11-12", "localhost:4321"), "2026-11-12");
  assert.equal(vanityPromoPhase(afterPromo, "2026-11-12")?.id, "phase2");
  assert.equal(vanityPromoOverrideAllowed(""), false);
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase2", ""), null);
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase2"), null);
  assert.equal(vanityPromoOverrideAllowed("hempstonhome.com"), false);
  assert.equal(vanityPromoOverrideAllowed("www.hempstonhome.com"), false);
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase2", "www.hempstonhome.com"), null);
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase2", "hempstonhome.com"), null);
  assert.equal(vanityPromoOverrideAllowed("example.com"), false);
  assert.equal(vanityPromoOverrideDay("?vanityPromo=phase1", "example.com"), null);
});
