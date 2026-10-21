/** 800w sibling of a built 1600w WebP, when the image plugin emitted both. */
export function responsiveSrcSet(src: string) {
  if (!src.includes("-1600.webp")) return undefined;
  const small = src.replace("-1600.webp", "-800.webp");
  return `${small} 800w, ${src} 1600w`;
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
