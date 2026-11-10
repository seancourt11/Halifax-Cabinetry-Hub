import { Link, useRouterState } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import {
  VANITY_PROMO_TIMING,
  vanityPromoOverrideDay,
  vanityPromoPhase,
  type VanityPromoPhase,
} from "@/lib/vanity-promo";

function firstHeaderValue(value: string | undefined) {
  return (value ?? "").split(",")[0]?.trim() ?? "";
}

const readRequestHost = createIsomorphicFn()
  .server(() => {
    try {
      return firstHeaderValue(getRequestHeader("x-forwarded-host") || getRequestHeader("host"));
    } catch {
      return "";
    }
  })
  .client(() => window.location.host);

export function useVanityPromoPhase(): VanityPromoPhase | null {
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  return vanityPromoPhase(new Date(), vanityPromoOverrideDay(searchStr ?? "", readRequestHost()));
}

const facts = [
  {
    label: "01",
    title: "In time for Christmas",
    body: VANITY_PROMO_TIMING,
  },
  {
    label: "02",
    title: "Any colour, any stain",
    body: "Every colour is fully custom, including Farrow & Ball and Benjamin Moore. Stains are custom too.",
  },
  {
    label: "03",
    title: "Natural oil finishes",
    body: "Rubio Monocoat, Osmo, and other natural oil finishes are available.",
  },
];

/** Full promotional header for the vanities page. Renders nothing after phase 2. */
export function VanityPromoBanner() {
  const phase = useVanityPromoPhase();
  if (!phase) return null;
  return (
    <section
      id="vanity-holiday-promo"
      className="border-b border-black/10 bg-[oklch(0.96_0.012_85)] text-black"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/70">
          Holiday promotion
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-5xl">
          Vanities, in time for Christmas
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
          A warm, considered gift for the home. The pieces on this page can be in production and
          finished on a holiday timeline.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-black/15 pt-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/70">
                {fact.label}
              </p>
              <p className="mt-3 font-display text-lg font-light uppercase tracking-[0.06em]">
                {fact.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{fact.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-6 border border-black/15 bg-white/70 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-light uppercase tracking-[0.05em]">
              {phase.discount}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{phase.note}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-[oklch(0.14_0_0)] px-6 py-4 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:bg-black"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
