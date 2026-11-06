import { ResponsiveImg } from "@/components/responsive-img";
import { SampleRequestLink } from "@/components/sample-request-link";
import type { CatalogueGroup } from "@/data/furniture-catalogue";

/** Desktop columns. A count of 3, 6, 9... uses 3. Even counts that are not multiples of 3 use 2. 5, 7, 11... use 3 with the last row centered. */
function desktopColumns(count: number): 2 | 3 {
  if (count % 3 === 0) return 3;
  if (count % 2 === 0) return 2;
  return 3;
}

export function CatalogueGroups({ groups }: { groups: CatalogueGroup[] }) {
  return (
    <>
      {groups.map((group) => {
        const columns = desktopColumns(group.pieces.length);
        const cardWidth =
          columns === 3
            ? "w-full shrink-0 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            : "w-full shrink-0 sm:w-[calc((100%-1.5rem)/2)]";
        const sizes =
          columns === 3
            ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            : "(min-width: 640px) 50vw, 100vw";
        return (
          <section
            key={group.id}
            id={group.id}
            className="border-t border-black/10 bg-[oklch(0.98_0_0)] text-black"
          >
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
                {group.eyebrow}
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-light uppercase leading-[1.05] tracking-[0.06em] sm:text-4xl">
                {group.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70">{group.intro}</p>
              <div className="mt-14 flex flex-wrap justify-center gap-6">
                {group.pieces.map((piece) => (
                  <figure key={piece.src} className={`${cardWidth} border border-black/10 bg-white`}>
                    <div className="aspect-[3/4] overflow-hidden bg-white p-4 sm:p-6">
                      <ResponsiveImg
                        src={piece.src}
                        alt={piece.alt}
                        title={piece.title}
                        width={piece.width}
                        height={piece.height}
                        loading="lazy"
                        sizes={sizes}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-black/10 p-5">
                      <p className="font-display text-sm font-light uppercase tracking-[0.12em] text-black">
                        {piece.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-black/65">{piece.caption}</p>
                      <div className="mt-4 border-t border-black/10 pt-3">
                        <SampleRequestLink
                          tone="light"
                          projectType={`${piece.title} enquiry`}
                          message={`I'm interested in the ${piece.title}.`}
                          label="Enquire about this piece"
                        />
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
