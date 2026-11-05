import { createHash } from "node:crypto";
import fs from "node:fs";

/**
 * Bump when encode settings change. The public file name does not include this
 * value, so existing URLs stay put while the bytes are regenerated.
 */
export const IMAGE_PIPELINE_VERSION = "2";

export type PixelSize = { width: number; height: number };

export type EncodedDerivatives = {
  full: PixelSize;
  small: PixelSize;
};

type SharpFn = typeof import("sharp").default;

let sharpMod: SharpFn | undefined;

async function loadSharp() {
  if (!sharpMod) {
    sharpMod = (await import("sharp")).default;
  }
  return sharpMod;
}

export function sourceContentHash(file: string) {
  const bytes = fs.readFileSync(file);
  return createHash("sha1").update(IMAGE_PIPELINE_VERSION).update(bytes).digest("hex");
}

async function assertNoCameraMetadata(file: string) {
  const sharp = await loadSharp();
  const meta = await sharp(file).metadata();
  if (meta.exif || meta.xmp || meta.iptc) {
    throw new Error(`Camera metadata survived encoding: ${file}`);
  }
}

/**
 * Writes 800 and 1600 WebP and AVIF derivatives. Orientation is baked in, then
 * EXIF, GPS, XMP, and IPTC are left out. Sharp omits metadata unless
 * withMetadata() or keepExif() is called, and this pipeline calls neither.
 */
export async function encodeDerivatives(source: string, dir: string): Promise<EncodedDerivatives> {
  fs.mkdirSync(dir, { recursive: true });
  const sharp = await loadSharp();
  const inputOpts = { limitInputPixels: false, sequentialRead: true } as const;
  const fullWebp = `${dir}/1600.webp`;
  const smallWebp = `${dir}/800.webp`;
  const fullAvif = `${dir}/1600.avif`;
  const smallAvif = `${dir}/800.avif`;

  const pipeline = () => sharp(source, inputOpts).rotate();

  await pipeline()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 72, effort: 4 })
    .toFile(fullWebp);
  await pipeline()
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 64, effort: 4 })
    .toFile(smallWebp);
  await pipeline()
    .resize({ width: 1600, withoutEnlargement: true })
    .avif({ quality: 45, effort: 2 })
    .toFile(fullAvif);
  await pipeline()
    .resize({ width: 800, withoutEnlargement: true })
    .avif({ quality: 40, effort: 2 })
    .toFile(smallAvif);

  for (const file of [fullWebp, smallWebp, fullAvif, smallAvif]) {
    await assertNoCameraMetadata(file);
  }

  const fullMeta = await sharp(fullWebp).metadata();
  const smallMeta = await sharp(smallWebp).metadata();
  return {
    full: { width: fullMeta.width ?? 1600, height: fullMeta.height ?? 1000 },
    small: { width: smallMeta.width ?? 800, height: smallMeta.height ?? 500 },
  };
}
