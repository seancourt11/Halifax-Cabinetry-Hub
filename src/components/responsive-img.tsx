import type { ImgHTMLAttributes } from "react";
import { intrinsicSize, responsiveAvifSrcSet, responsiveSrcSet } from "@/lib/image-srcset";

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string };

/**
 * Responsive image. AVIF is offered first; WebP is the fallback src.
 * When the built filename encodes pixel size, that size is the width and
 * height, so a stale width={1600} cannot disagree with the file.
 */
export function ResponsiveImg({
  src,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  width,
  height,
  ...rest
}: Props) {
  const intrinsic = intrinsicSize(src);
  const w = intrinsic?.width ?? width;
  const h = intrinsic?.height ?? height;
  const srcSet = responsiveSrcSet(src);
  const avif = responsiveAvifSrcSet(src);
  if (!srcSet || !avif) {
    return <img src={src} width={w} height={h} decoding="async" {...rest} />;
  }
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={w}
        height={h}
        decoding="async"
        {...rest}
      />
    </picture>
  );
}
