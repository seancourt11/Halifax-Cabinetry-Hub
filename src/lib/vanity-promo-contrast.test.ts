import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";

/** Banner background: oklch(0.96 0.012 85), which paints as #f5f1e9. */
const BANNER_BG = "#f5f1e9";

function srgbToLin(channel: number) {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = srgbToLin((n >> 16) & 255);
  const g = srgbToLin((n >> 8) & 255);
  const b = srgbToLin(n & 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(foreground: string, background: string) {
  const hi = Math.max(luminance(foreground), luminance(background));
  const lo = Math.min(luminance(foreground), luminance(background));
  return (hi + 0.05) / (lo + 0.05);
}

/** black at opacity, composited on an opaque background. */
function compositeBlack(background: string, alpha: number) {
  const n = Number.parseInt(background.slice(1), 16);
  const channel = (shift: number) => Math.round(((n >> shift) & 255) * (1 - alpha));
  return `#${[channel(16), channel(8), channel(0)].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

test("vanity promo 10px labels clear WCAG AA on the banner", () => {
  const source = fs.readFileSync(
    new URL("../components/vanity-promo-banner.tsx", import.meta.url),
    "utf8",
  );
  assert.equal(source.includes("text-black/45"), false);
  assert.equal(source.includes("text-black/55"), false);
  assert.equal(source.includes("oklch(0.96_0.012_85)"), true);
  const labels = source.match(/text-\[10px\][^"]*text-black\/(\d+)/g) ?? [];
  assert.equal(labels.length, 2);
  for (const label of labels) {
    const opacity = Number(label.slice(label.lastIndexOf("/") + 1)) / 100;
    const fg = compositeBlack(BANNER_BG, opacity);
    assert.ok(
      contrast(fg, BANNER_BG) >= 4.5,
      `${label} is ${contrast(fg, BANNER_BG).toFixed(2)}:1`,
    );
  }
});
