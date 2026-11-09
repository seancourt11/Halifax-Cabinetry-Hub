import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";
import {
  RECENT_VANITY_INTRO,
  RECENT_VANITY_TITLE,
  recentVanities,
  recentVanityImageObjects,
} from "./recent-vanities.ts";

const ORDER = [
  "lilac-framed-double-vanity-black-marble-top.webp",
  "blue-painted-triple-sink-kids-vanity.webp",
  "natural-maple-six-drawer-double-vanity.webp",
  "white-oak-reeded-vanity-marble-top.webp",
  "dark-stained-oak-curved-vanity-marble-top.webp",
  "oak-multi-drawer-vanity-marble-top.webp",
  "lilac-reeded-vanity-black-marble-top.webp",
  "blue-stained-ash-vanity-drawers-chrome-pulls.webp",
  "white-oak-framed-panel-vanity-detail.webp",
  "floating-live-edge-wood-vanity-two-drawers.webp",
  "white-oak-vanity-side-slatted-shelf-in-shop.webp",
  "dovetail-drawer-box-in-shop.webp",
];

test("recent vanities stay in install-then-shop order with manifest sizes", () => {
  assert.deepEqual(
    recentVanities.map((photo) => photo.file),
    ORDER,
  );
  assert.equal(recentVanities.length % 1, 0);
  assert.equal(recentVanities.length % 2, 0);
  assert.equal(recentVanities.length % 3, 0);
  for (const photo of recentVanities) {
    assert.equal(photo.src, `/images/vanities/recent/${photo.file}`);
    assert.ok(photo.width > 0 && photo.height > 0);
    assert.match(photo.caption, /^[A-Z]/);
    assert.equal(photo.caption.includes("\u2014"), false);
    assert.equal(photo.alt.includes("\u2014"), false);
    assert.equal(/shipping|freight/i.test(photo.caption), false);
    const file = path.resolve("public/images/vanities/recent", photo.file);
    const stat = fs.statSync(file);
    assert.equal(stat.size, photo.bytes);
  }
});

test("section copy stays plain and does not invent a claim", () => {
  assert.equal(RECENT_VANITY_TITLE, "In the shop and recent vanities");
  assert.equal(
    RECENT_VANITY_INTRO,
    "A few vanities we built recently, and some in progress in our Halifax shop.",
  );
  assert.equal(RECENT_VANITY_INTRO.includes("\u2014"), false);
  assert.equal(/shipping|freight/i.test(RECENT_VANITY_INTRO), false);
});

test("image objects use the served file, caption, and alt description", () => {
  const items = recentVanityImageObjects("https://www.hempstonhome.com");
  assert.equal(items.length, 12);
  const first = items[0];
  assert.equal(
    first.url,
    "https://www.hempstonhome.com/images/vanities/recent/lilac-framed-double-vanity-black-marble-top.webp",
  );
  assert.equal(first.name, "Lilac framed double vanity");
  assert.equal(first.caption, "Lilac framed double vanity, installed");
  assert.equal(
    first.description,
    "Lilac framed double vanity with glass knobs and a black marble countertop",
  );
  assert.equal(first.width, 1600);
  assert.equal(first.height, 1600);
  const last = items[11];
  assert.equal(last.caption, "Dovetail drawer box, in the shop");
  assert.equal(last.width, 1200);
  assert.equal(last.height, 1600);
});
