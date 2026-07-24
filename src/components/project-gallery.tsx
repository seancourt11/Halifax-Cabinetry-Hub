import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/project-galleries";

type Props = {
  images: GalleryImage[];
  eyebrow?: string;
  title?: string;
  credit?: string;
};

export function ProjectGallery({
  images,
  eyebrow = "Project gallery",
  title = "More from this project",
  credit = "Photography: Janet Kimber · Design: 31 Westgate Design Studio",
}: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section className="border-t border-white/10 bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{eyebrow}</span>
          <h2 className="font-serif text-3xl md:text-5xl">{title}</h2>
          <p className="text-xs text-white/40">{credit}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={img.url}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-900"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full border border-white/20 p-2 text-white hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={images[active].url}
            alt={images[active].alt}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full border border-white/20 p-2 text-white hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
