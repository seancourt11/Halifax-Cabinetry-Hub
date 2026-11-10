/** Built JPG/PNG derivative: hash-w1280h1436-s800h898.webp */
const PAIR = /-w(\d+)h(\d+)-s(\d+)h(\d+)\.(webp|avif)$/;
/** Single-size derivative, or the smaller sibling: hash-w800h898.webp */
const SINGLE = /-w(\d+)h(\d+)\.(webp|avif)$/;

/** Real pixel size from a built derivative filename. Catalogue -w1440.webp has width only. */
export function intrinsicSize(src: string): { width: number; height: number } | undefined {
  const pair = src.match(PAIR);
  if (pair) return { width: Number(pair[1]), height: Number(pair[2]) };
  const single = src.match(SINGLE);
  if (single) return { width: Number(single[1]), height: Number(single[2]) };
  return undefined;
}

/** Srcset descriptors use the pixel widths in the filename, not the resize cap. */
export function responsiveSrcSet(src: string) {
  const pair = src.match(PAIR);
  if (pair && pair[5] === "webp") {
    const fullW = Number(pair[1]);
    const smallW = Number(pair[3]);
    if (!(smallW > 0) || smallW >= fullW) return undefined;
    const small = src.replace(PAIR, `-w${pair[3]}h${pair[4]}.webp`);
    return `${small} ${smallW}w, ${src} ${fullW}w`;
  }
  const native = src.match(/-w(\d+)\.webp$/);
  if (native && Number(native[1]) > 800) {
    const small = src.replace(`-w${native[1]}.webp`, "-w800.webp");
    return `${small} 800w, ${src} ${native[1]}w`;
  }
  return undefined;
}

/** Same widths as the WebP set, with the AVIF files the image plugin emits. */
export function responsiveAvifSrcSet(src: string) {
  const webp = responsiveSrcSet(src);
  return webp?.replaceAll(".webp", ".avif");
}

/** Preload the hero only. Chrome selects the AVIF candidate; the img falls back to WebP. */
export function heroImagePreload(src: string) {
  const avif = responsiveAvifSrcSet(src);
  if (!avif) {
    return {
      rel: "preload" as const,
      as: "image" as const,
      href: src,
      fetchPriority: "high" as const,
    };
  }
  const href = avif.split(",")[0]?.trim().split(" ")[0] ?? src;
  return {
    rel: "preload" as const,
    as: "image" as const,
    href,
    imageSrcSet: avif,
    imageSizes: "100vw",
    type: "image/avif",
    fetchPriority: "high" as const,
  };
}
