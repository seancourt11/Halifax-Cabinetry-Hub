import type { ImgHTMLAttributes } from "react";
import { useRenderedImageSchema } from "@/components/image-schema";
import { responsiveAvifSrcSet, responsiveSrcSet } from "@/lib/image-srcset";
import { getImageMeta } from "@/lib/image-registry";
import { SITE_URL } from "@/lib/site";

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string };

function absoluteUrl(src: string) {
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

/**
 * Responsive image. Phones get the 800w file and wide screens the 1600w file.
 * AVIF is offered first; WebP is the fallback src.
 * Width and height are the encoded file's real pixels.
 * fetchPriority="high" is the hero path and is never lazy-loaded.
 */
export function ResponsiveImg({
  src,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  width,
  height,
  loading,
  fetchPriority,
  alt,
  title,
  ...rest
}: Props) {
  const meta = getImageMeta(src);
  // Use the encoded file's real pixels so the attributes match the bytes.
  const w = meta?.width ?? width;
  const h = meta?.height ?? height;
  const high = fetchPriority === "high";
  const loadingAttr = high ? undefined : loading;
  const srcSet = responsiveSrcSet(src);
  const avif = responsiveAvifSrcSet(src);
  const usesPicture = Boolean(srcSet && avif);
  const servedPath = usesPicture && meta?.avif ? meta.avif : src;

  useRenderedImageSchema(
    alt
      ? {
          url: absoluteUrl(servedPath),
          caption: alt,
          name: typeof title === "string" ? title : undefined,
          width: meta?.width ?? (typeof w === "number" ? w : undefined),
          height: meta?.height ?? (typeof h === "number" ? h : undefined),
        }
      : null,
  );

  const img = (
    <img
      {...rest}
      src={src}
      alt={alt}
      title={title}
      width={w}
      height={h}
      fetchPriority={fetchPriority}
      {...(loadingAttr ? { loading: loadingAttr } : {})}
      {...(srcSet ? { srcSet, sizes } : {})}
      decoding={rest.decoding ?? "async"}
    />
  );

  if (!usesPicture || !avif || !srcSet) return img;

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      {img}
    </picture>
  );
}
