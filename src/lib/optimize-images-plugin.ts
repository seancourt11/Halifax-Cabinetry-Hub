import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { encodeDerivatives, sourceContentHash, type PixelSize } from "./image-encode";
import { assertAssetSlugs, assetSlug, derivativeFileName, publicImagePath } from "./image-slugs";

/**
 * Serves imported JPG/PNG assets as resized WebP and AVIF (800 and 1600).
 * The default export is the 1600w WebP URL. Import `file.jpg?w=800` for the
 * 800w WebP URL. Public names are keyword slugs (`glen-haven-oak-island-painted-beam-kitchen-cabinetry-1600.avif`),
 * not a hash of the path or mtime. Output does not keep EXIF, GPS, or other metadata.
 *
 * Old hashed URLs are not redirected. The previous name mixed the absolute
 * path with mtime, so those URLs cannot be reproduced from the repo.
 */
const CACHE = path.resolve("node_modules/.cache/hempston-img");
const PUBLIC_DIR = path.resolve("public/assets/img");

type Built = {
  slug: string;
  fullName: string;
  smallName: string;
  fullAvifName: string;
  smallAvifName: string;
  full: PixelSize;
  small: PixelSize;
};

type Stamp = {
  hash: string;
  full: PixelSize;
  small: PixelSize;
};

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

function namesFor(slug: string) {
  return {
    fullName: derivativeFileName(slug, 1600, "webp"),
    smallName: derivativeFileName(slug, 800, "webp"),
    fullAvifName: derivativeFileName(slug, 1600, "avif"),
    smallAvifName: derivativeFileName(slug, 800, "avif"),
  };
}

function assetNames(img: Built) {
  return [img.fullName, img.smallName, img.fullAvifName, img.smallAvifName];
}

function cacheDir(hash: string) {
  return path.join(CACHE, "by-hash", hash);
}

function stampPath(slug: string) {
  return path.join(CACHE, "stamps", `${slug}.json`);
}

function readStamp(slug: string): Stamp | null {
  try {
    return JSON.parse(fs.readFileSync(stampPath(slug), "utf8")) as Stamp;
  } catch {
    return null;
  }
}

function filesReady(hash: string) {
  const dir = cacheDir(hash);
  return ["1600.webp", "800.webp", "1600.avif", "800.avif"].every((name) =>
    fs.existsSync(path.join(dir, name)),
  );
}

function fromCache(img: Built, hash: string, which: string) {
  const kind = which.endsWith("-1600.webp")
    ? "1600.webp"
    : which.endsWith("-800.webp")
      ? "800.webp"
      : which.endsWith("-1600.avif")
        ? "1600.avif"
        : "800.avif";
  return path.join(cacheDir(hash), kind);
}

async function ensure(file: string): Promise<{ img: Built; hash: string }> {
  const rel = path.relative(path.resolve("src/assets"), file).split(path.sep).join("/");
  const slug = assetSlug(rel);
  const names = namesFor(slug);
  const hash = sourceContentHash(file);
  const cached = built.get(slug);
  if (cached && filesReady(hash)) return { img: cached, hash };

  const stamp = readStamp(slug);
  if (stamp?.hash === hash && filesReady(hash)) {
    const img: Built = { slug, ...names, full: stamp.full, small: stamp.small };
    built.set(slug, img);
    return { img, hash };
  }

  await acquire();
  try {
    const again = readStamp(slug);
    if (again?.hash === hash && filesReady(hash)) {
      const img: Built = { slug, ...names, full: again.full, small: again.small };
      built.set(slug, img);
      return { img, hash };
    }
    const encoded = await encodeDerivatives(file, cacheDir(hash));
    const stampBody: Stamp = { hash, full: encoded.full, small: encoded.small };
    fs.mkdirSync(path.dirname(stampPath(slug)), { recursive: true });
    fs.writeFileSync(stampPath(slug), JSON.stringify(stampBody));
    const img: Built = { slug, ...names, full: encoded.full, small: encoded.small };
    built.set(slug, img);
    return { img, hash };
  } finally {
    release();
  }
}

function moduleSource(url: string, width: number, height: number, avif: string) {
  return [
    `import { registerImage } from "@/lib/image-registry";`,
    `registerImage(${JSON.stringify(url)}, ${JSON.stringify({ width, height, avif })});`,
    `export default ${JSON.stringify(url)};`,
  ].join("\n");
}

function copyPublic(img: Built, hash: string) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  for (const name of assetNames(img)) {
    fs.copyFileSync(fromCache(img, hash, name), path.join(PUBLIC_DIR, name));
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

function walkAssets(dir: string, out: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkAssets(full, out);
    else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

export function optimizeImagesPlugin(): Plugin {
  return {
    name: "hempston-optimize-images",
    enforce: "pre",
    buildStart() {
      const root = path.resolve("src/assets");
      const rels = walkAssets(root).map((file) =>
        path.relative(root, file).split(path.sep).join("/"),
      );
      assertAssetSlugs(rels);
    },
    async load(id) {
      if (!isAssetImage(id)) return null;
      const file = id.split("?")[0];
      const smallOnly = id.endsWith("?w=800");
      const { img, hash } = await ensure(file);
      const command = this.environment?.config?.command;
      const serve = command === "serve";

      if (serve) {
        copyPublic(img, hash);
      }

      const envName = this.environment?.name ?? "";
      const isServer = envName === "ssr" || envName.includes("ssr");
      if (!serve && !isServer) {
        for (const name of assetNames(img)) {
          if (emitted.has(name)) continue;
          emitted.add(name);
          this.emitFile({
            type: "asset",
            fileName: `assets/img/${name}`,
            source: fs.readFileSync(fromCache(img, hash, name)),
          });
        }
      }

      const width = smallOnly ? img.small.width : img.full.width;
      const height = smallOnly ? img.small.height : img.full.height;
      const fileName = smallOnly ? img.smallName : img.fullName;
      const avifName = smallOnly ? img.smallAvifName : img.fullAvifName;
      const url = publicImagePath(fileName);
      return moduleSource(url, width, height, publicImagePath(avifName));
    },
  };
}
