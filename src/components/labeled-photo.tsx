import { ResponsiveImg } from "@/components/responsive-img";

type Props = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  sizes: string;
  frameClassName: string;
  imgClassName: string;
  tone?: "light" | "dark";
};

/** Below-the-fold photo with the same sizing pattern as the existing galleries. */
export function LabeledPhoto({
  src,
  alt,
  title,
  caption,
  width,
  height,
  sizes,
  frameClassName,
  imgClassName,
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <figure
      className={dark ? "border border-white/10 bg-black/40" : "border border-black/10 bg-white"}
    >
      <div className={frameClassName}>
        <ResponsiveImg
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          loading="lazy"
          sizes={sizes}
          className={imgClassName}
        />
      </div>
      <figcaption
        className={dark ? "border-t border-white/10 p-4" : "border-t border-black/10 p-4"}
      >
        <p
          className={
            dark
              ? "font-display text-sm font-light uppercase tracking-[0.14em] text-white"
              : "font-display text-sm font-light uppercase tracking-[0.14em] text-black"
          }
        >
          {title}
        </p>
        <p
          className={
            dark
              ? "mt-2 text-sm leading-relaxed text-white/70"
              : "mt-2 text-sm leading-relaxed text-black/70"
          }
        >
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}
