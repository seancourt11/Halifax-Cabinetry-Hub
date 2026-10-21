import type { ImgHTMLAttributes } from "react";
import { responsiveAvifSrcSet, responsiveSrcSet } from "@/lib/image-srcset";

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string };

/**
 * Responsive image. Phones get the 800w file and wide screens the 1600w file.
 * AVIF is offered first; WebP is the fallback src.
 */
export function ResponsiveImg({ src, sizes = "(min-width: 1024px) 50vw, 100vw", ...rest }: Props) {
  const srcSet = responsiveSrcSet(src);
  const avif = responsiveAvifSrcSet(src);
  if (!srcSet || !avif) {
    return <img src={src} decoding="async" {...rest} />;
  }
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <img src={src} srcSet={srcSet} sizes={sizes} decoding="async" {...rest} />
    </picture>
  );
}
