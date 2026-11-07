import { ResponsiveImg } from "@/components/responsive-img";
import { RECENT_VANITY_INTRO, RECENT_VANITY_TITLE, recentVanities } from "@/data/recent-vanities";

/**
 * 12 photos. Column counts are 1, 2 and 3, and 12 divides by each,
 * so the grid ends on a full row at every breakpoint.
 */
export function RecentVanitiesGallery() {
  return (
    <section
      aria-labelledby="recent-vanities-heading"
      className="border-t border-black/10 bg-[oklch(0.98_0_0)] text-black"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
          Recent work
        </p>
        <h2
          id="recent-vanities-heading"
          className="mt-5 max-w-3xl font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] sm:text-4xl"
        >
          {RECENT_VANITY_TITLE}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70">
          {RECENT_VANITY_INTRO}
        </p>
        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {recentVanities.map((photo) => (
            <li key={photo.file}>
              <figure>
                <div className="aspect-square overflow-hidden bg-[oklch(0.94_0_0)]">
                  <ResponsiveImg
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-black/70">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
