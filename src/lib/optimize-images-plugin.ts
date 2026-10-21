import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

/**
 * Serves imported JPG/PNG assets as resized WebP (800 and 1600) so pages
 * do not ship multi-megabyte originals. Default export is the 1600w URL.
 * Import `file.jpg?w=800` for the mobile URL. The default import is 1600w.
 * WebP output does not keep EXIF or other metadata.
 */
const CACHE = path.resolve("node_modules/.cache/hempston-img");
let sharpMod: typeof import("sharp") | undefined;

async function loadSharp() {
  if (!sharpMod) {
    sharpMod = (await import("sharp")).default as unknown as typeof import("sharp");
  }
  return sharpMod;
}

type Built = { fullName: string; smallName: string; width: number; height: number };

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
  if (cached && fs.existsSync(path.join(CACHE, cached.fullName))) return cached;

  const dir = path.join(CACHE, key);
  fs.mkdirSync(dir, { recursive: true });
  const fullPath = path.join(dir, "1600.webp");
  const smallPath = path.join(dir, "800.webp");
  await acquire();
  const sharp = await loadSharp();
  try {
    if (!fs.existsSync(fullPath) || !fs.existsSync(smallPath)) {
      // rotate() bakes in orientation. WebP is written without EXIF, GPS, or ICC.
      const input = sharp(file, { limitInputPixels: false, sequentialRead: true }).rotate();
      await input
        .clone()
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 72, effort: 4 })
        .toFile(fullPath);
      await sharp(file, { limitInputPixels: false, sequentialRead: true })
        .rotate()
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 64, effort: 4 })
        .toFile(smallPath);
    }
    const meta = await sharp(fullPath).metadata();
    const result: Built = {
      fullName: `${key}-1600.webp`,
      smallName: `${key}-800.webp`,
      width: meta.width ?? 1600,
      height: meta.height ?? 1000,
    };
    fs.copyFileSync(fullPath, path.join(CACHE, result.fullName));
    fs.copyFileSync(smallPath, path.join(CACHE, result.smallName));
    built.set(key, result);
    return result;
  } finally {
    release();
  }
}

function isAssetImage(id: string) {
  const clean = id.split("?")[0];
  const query = id.includes("?") ? id.slice(id.indexOf("?") + 1) : "";
  if (!/\.(png|jpe?g)$/i.test(clean)) return false;
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
        for (const name of [img.fullName, img.smallName]) {
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
        for (const name of [img.fullName, img.smallName]) {
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
