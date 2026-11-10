import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

/**
 * Serves imported JPG/PNG assets as resized WebP and AVIF.
 * The resize caps are 800 and 1600, and `withoutEnlargement` keeps smaller
 * originals at their real size. Public filenames use those pixel sizes
 * (`hash-w1280h1436-s800h898.webp`), not the cap. Default export is the
 * larger WebP. Import `file.jpg?w=800` for the smaller WebP.
 * Native WebP masters (the vanity and furniture renders) keep their original
 * pixels as the large source and stay named `-w{width}`. Only the 800w file
 * and the AVIF siblings are derived. Nothing is upscaled or sharpened.
 * AVIF files use the same hash and the same pixel size as the WebP.
 * Output does not keep EXIF, GPS, or other metadata.
 */
const CACHE = path.resolve("node_modules/.cache/hempston-img");
type SharpFactory = typeof import("sharp").default;
let sharpMod: SharpFactory | undefined;

async function loadSharp() {
  if (!sharpMod) {
    sharpMod = (await import("sharp")).default;
  }
  return sharpMod;
}

type Built = {
  fullName: string;
  smallName: string;
  fullAvifName: string;
  smallAvifName: string;
  width: number;
  height: number;
};

function assetNames(img: Built) {
  return [img.fullName, img.smallName, img.fullAvifName, img.smallAvifName];
}

const built = new Map<string, Built>();
const emitted = new Set<string>();

let active = 0;
const waiters: (() => void)[] = [];
const MAX = 2;

function acquire() {
  if (active < MAX) {
    active += 1;
    return Promise.resolve();
  }
  return new Promise<void>((resolve) => waiters.push(resolve));
}

function release() {
  const next = waiters.shift();
  if (next) next();
  else active -= 1;
}

async function ensure(file: string): Promise<Built> {
  const stat = fs.statSync(file);
  const key = createHash("sha1")
    .update(file)
    .update(String(stat.mtimeMs))
    .update(String(stat.size))
    .digest("hex")
    .slice(0, 16);
  const cached = built.get(key);
  if (
    cached &&
    fs.existsSync(path.join(CACHE, cached.fullName)) &&
    fs.existsSync(path.join(CACHE, cached.fullAvifName))
  ) {
    return cached;
  }

  const dir = path.join(CACHE, key);
  fs.mkdirSync(dir, { recursive: true });
  const fullPath = path.join(dir, "1600.webp");
  const smallPath = path.join(dir, "800.webp");
  const fullAvifPath = path.join(dir, "1600.avif");
  const smallAvifPath = path.join(dir, "800.avif");
  await acquire();
  try {
    const sharp = await loadSharp();
    const inputOpts = { limitInputPixels: false, sequentialRead: true } as const;
    if (/\.webp$/i.test(file)) {
      const metaIn = await sharp(file, inputOpts).metadata();
      const width = metaIn.width ?? 0;
      const height = metaIn.height ?? 0;
      if (width < 1 || height < 1) throw new Error(`Missing dimensions: ${file}`);
      const fullOut = path.join(dir, "full.webp");
      const smallOut = path.join(dir, "800.webp");
      const fullAvifOut = path.join(dir, "full.avif");
      const smallAvifOut = path.join(dir, "800.avif");
      if (!fs.existsSync(fullOut)) fs.copyFileSync(file, fullOut);
      if (!fs.existsSync(smallOut)) {
        await sharp(file, inputOpts)
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 64, effort: 4 })
          .toFile(smallOut);
      }
      if (!fs.existsSync(fullAvifOut)) {
        await sharp(file, inputOpts).avif({ quality: 45, effort: 2 }).toFile(fullAvifOut);
      }
      if (!fs.existsSync(smallAvifOut)) {
        await sharp(file, inputOpts)
          .resize({ width: 800, withoutEnlargement: true })
          .avif({ quality: 40, effort: 2 })
          .toFile(smallAvifOut);
      }
      const smallMeta = await sharp(smallOut).metadata();
      const smallWidth = smallMeta.width ?? 0;
      if (smallWidth < 1) throw new Error(`Missing small dimensions: ${file}`);
      // Srcset labels a -w800 sibling as 800w. Publish that name only when it is 800px.
      if (width > 800 && smallWidth !== 800) {
        throw new Error(`800w sibling of ${file} is ${smallWidth}px wide`);
      }
      const smallIsFull = smallWidth === width;
      const smallStem = smallIsFull ? `${key}-w${width}` : `${key}-w${smallWidth}`;
      const result: Built = {
        fullName: `${key}-w${width}.webp`,
        smallName: `${smallStem}.webp`,
        fullAvifName: `${key}-w${width}.avif`,
        smallAvifName: `${smallStem}.avif`,
        width,
        height,
      };
      const outputs: Record<string, string> = {
        [result.fullName]: fullOut,
        [result.smallName]: smallIsFull ? fullOut : smallOut,
        [result.fullAvifName]: fullAvifOut,
        [result.smallAvifName]: smallIsFull ? fullAvifOut : smallAvifOut,
      };
      for (const name of assetNames(result)) {
        fs.copyFileSync(outputs[name], path.join(CACHE, name));
      }
      built.set(key, result);
      return result;
    }
    if (!fs.existsSync(fullPath) || !fs.existsSync(smallPath)) {
      // rotate() bakes in orientation. Output is written without EXIF, GPS, or ICC.
      await sharp(file, inputOpts)
        .rotate()
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 72, effort: 4 })
        .toFile(fullPath);
      await sharp(file, inputOpts)
        .rotate()
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 64, effort: 4 })
        .toFile(smallPath);
    }
    if (!fs.existsSync(fullAvifPath) || !fs.existsSync(smallAvifPath)) {
      await sharp(file, inputOpts)
        .rotate()
        .resize({ width: 1600, withoutEnlargement: true })
        .avif({ quality: 45, effort: 2 })
        .toFile(fullAvifPath);
      await sharp(file, inputOpts)
        .rotate()
        .resize({ width: 800, withoutEnlargement: true })
        .avif({ quality: 40, effort: 2 })
        .toFile(smallAvifPath);
    }
    const fullMeta = await sharp(fullPath).metadata();
    const smallMeta = await sharp(smallPath).metadata();
    const fullW = fullMeta.width ?? 0;
    const fullH = fullMeta.height ?? 0;
    const smallW = smallMeta.width ?? 0;
    const smallH = smallMeta.height ?? 0;
    if (fullW < 1 || fullH < 1 || smallW < 1 || smallH < 1) {
      throw new Error(`Missing dimensions: ${file}`);
    }
    const fullAvifMeta = await sharp(fullAvifPath).metadata();
    const smallAvifMeta = await sharp(smallAvifPath).metadata();
    if (
      fullAvifMeta.width !== fullW ||
      fullAvifMeta.height !== fullH ||
      smallAvifMeta.width !== smallW ||
      smallAvifMeta.height !== smallH
    ) {
      throw new Error(`AVIF dimensions do not match WebP: ${file}`);
    }
    const sameSize = fullW === smallW && fullH === smallH;
    const fullBase = sameSize
      ? `${key}-w${fullW}h${fullH}`
      : `${key}-w${fullW}h${fullH}-s${smallW}h${smallH}`;
    const smallBase = `${key}-w${smallW}h${smallH}`;
    const result: Built = {
      fullName: `${fullBase}.webp`,
      smallName: sameSize ? `${fullBase}.webp` : `${smallBase}.webp`,
      fullAvifName: `${fullBase}.avif`,
      smallAvifName: sameSize ? `${fullBase}.avif` : `${smallBase}.avif`,
      width: fullW,
      height: fullH,
    };
    const outputs: Record<string, string> = {
      [result.fullName]: fullPath,
      [result.smallName]: sameSize ? fullPath : smallPath,
      [result.fullAvifName]: fullAvifPath,
      [result.smallAvifName]: sameSize ? fullAvifPath : smallAvifPath,
    };
    for (const name of assetNames(result)) {
      fs.copyFileSync(outputs[name], path.join(CACHE, name));
    }
    built.set(key, result);
    return result;
  } finally {
    release();
  }
}

function isAssetImage(id: string) {
  const clean = id.split("?")[0];
  const query = id.includes("?") ? id.slice(id.indexOf("?") + 1) : "";
  if (!/\.(png|jpe?g|webp)$/i.test(clean)) return false;
  if (query && query !== "w=800") return false;
  if (clean.includes(`${path.sep}node_modules${path.sep}`)) return false;
  return clean.includes(`${path.sep}src${path.sep}assets${path.sep}`);
}

export function optimizeImagesPlugin(): Plugin {
  return {
    name: "hempston-optimize-images",
    enforce: "pre",
    async load(id) {
      if (!isAssetImage(id)) return null;
      const file = id.split("?")[0];
      const smallOnly = id.endsWith("?w=800");
      const img = await ensure(file);
      const command = this.environment?.config?.command;
      const serve = command === "serve";

      if (serve) {
        const pub = path.resolve("public/opt");
        fs.mkdirSync(pub, { recursive: true });
        for (const name of assetNames(img)) {
          const dest = path.join(pub, name);
          if (!fs.existsSync(dest)) fs.copyFileSync(path.join(CACHE, name), dest);
        }
        const fullUrl = `/opt/${img.fullName}`;
        const smallUrl = `/opt/${img.smallName}`;
        const url = smallOnly ? smallUrl : fullUrl;
        return `export default ${JSON.stringify(url)};`;
      }

      // Stable public URLs. Rollup's file URL in the SSR bundle is a file:// path,
      // which would ship broken image srcs in the HTML. The client build emits the
      // files at these exact paths.
      const envName = this.environment?.name ?? "";
      const isServer = envName === "ssr" || envName.includes("ssr");
      if (!isServer) {
        for (const name of assetNames(img)) {
          if (emitted.has(name)) continue;
          emitted.add(name);
          this.emitFile({
            type: "asset",
            fileName: `assets/img/${name}`,
            source: fs.readFileSync(path.join(CACHE, name)),
          });
        }
      }
      const url = `/assets/img/${smallOnly ? img.smallName : img.fullName}`;
      return `export default ${JSON.stringify(url)};`;
    },
  };
}
