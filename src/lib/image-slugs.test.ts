import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { responsiveAvifSrcSet, responsiveSrcSet } from "./image-srcset.ts";
import {
  assertAssetSlugs,
  assetSlug,
  derivativeFileName,
  hasExplicitSlug,
  isDescriptiveSlug,
  PROJECT_NAME_IN_SLUG,
  publicImagePath,
} from "./image-slugs.ts";

const root = path.resolve("src/assets");

function walk(dir: string, out: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      out.push(path.relative(root, full).split(path.sep).join("/"));
    }
  }
  return out;
}

const files = walk(root);

test("every source image has a unique keyword slug", () => {
  assert.ok(files.length > 100);
  const slugs = assertAssetSlugs(files);
  assert.equal(slugs.size, files.length);
});

test("opaque camera and catalogue names are overridden", () => {
  for (const rel of files) {
    const base = path.basename(rel);
    const opaque =
      /^(keep-|crombie-\d|nwc-CANDREWS|detail_\d|products-hero|inset_malibu|door_3_)/.test(base) ||
      rel.includes("IndianRd") ||
      base.startsWith("door_athena") ||
      base.startsWith("door_barcelona") ||
      base.startsWith("door_genoa");
    if (opaque) assert.equal(hasExplicitSlug(rel), true, rel);
  }
});

test("public names stay stable and are not hashes", () => {
  const slug = assetSlug("projects/gh-oak-island-painted-beams.jpg");
  assert.equal(slug, "oak-island-painted-kitchen-cabinetry-halifax");
  assert.equal(assetSlug("projects/gh-oak-island-painted-beams.jpg"), slug);
  const avif = derivativeFileName(slug, 1600, "avif");
  assert.equal(avif, "oak-island-painted-kitchen-cabinetry-halifax-1600.avif");
  assert.equal(PROJECT_NAME_IN_SLUG.test(slug), false);
  assert.equal(publicImagePath(avif), `/assets/img/${avif}`);
  assert.doesNotMatch(avif, /[0-9a-f]{12,}/);
  assert.equal(isDescriptiveSlug("6819d606962cab08"), false);
  assert.equal(isDescriptiveSlug("keep-01"), false);
});

test("srcset keeps the descriptive stem", () => {
  const src = publicImagePath(
    derivativeFileName(assetSlug("projects/moncton-built-ins-fireplace-wall.jpg"), 1600, "webp"),
  );
  const webp = responsiveSrcSet(src);
  const avif = responsiveAvifSrcSet(src);
  assert.ok(webp?.includes("dieppe-painted-shaker-built-ins-fireplace-surround-800.webp"));
  assert.ok(webp?.includes("dieppe-painted-shaker-built-ins-fireplace-surround-1600.webp"));
  assert.ok(avif?.includes("dieppe-painted-shaker-built-ins-fireplace-surround-1600.avif"));
  assert.doesNotMatch(avif ?? "", /[0-9a-f]{12,}/);
});
