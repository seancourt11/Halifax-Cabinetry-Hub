import assert from "node:assert/strict";
import { test } from "node:test";
import { intrinsicSize, responsiveAvifSrcSet, responsiveSrcSet } from "./image-srcset.ts";

const hero = "/assets/img/abe647848c02ee3e-w1280h1436-s800h898.webp";

test("jpg derivatives advertise the real pixel width, not the 1600 cap", () => {
  assert.equal(
    responsiveSrcSet(hero),
    "/assets/img/abe647848c02ee3e-w800h898.webp 800w, /assets/img/abe647848c02ee3e-w1280h1436-s800h898.webp 1280w",
  );
  assert.equal(
    responsiveAvifSrcSet(hero),
    "/assets/img/abe647848c02ee3e-w800h898.avif 800w, /assets/img/abe647848c02ee3e-w1280h1436-s800h898.avif 1280w",
  );
  assert.deepEqual(intrinsicSize(hero), { width: 1280, height: 1436 });
});

test("a portrait file keeps its real width in the descriptor", () => {
  const src = "/assets/img/4a51fa7ad6d1c8f5-w1068h1600-s800h1199.webp";
  const set = responsiveSrcSet(src);
  assert.equal(set?.endsWith("1068w"), true);
  assert.equal(set?.includes("1600w"), false);
  assert.equal(set?.includes("-w800h1199.webp 800w"), true);
  assert.deepEqual(intrinsicSize(src), { width: 1068, height: 1600 });
});

test("a file that did not need a smaller sibling has no srcset", () => {
  const src = "/assets/img/abc-w640h480.webp";
  assert.equal(responsiveSrcSet(src), undefined);
  assert.deepEqual(intrinsicSize(src), { width: 640, height: 480 });
});

test("the old -1600.webp name is not labeled 1600w", () => {
  assert.equal(responsiveSrcSet("/assets/img/abc-1600.webp"), undefined);
});

test("catalogue webp still pairs the real width with an 800 sibling", () => {
  const src = "/assets/img/abc-w1440.webp";
  assert.equal(
    responsiveSrcSet(src),
    "/assets/img/abc-w800.webp 800w, /assets/img/abc-w1440.webp 1440w",
  );
  assert.equal(intrinsicSize(src), undefined);
});
