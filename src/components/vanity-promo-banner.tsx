import { Link } from "@tanstack/react-router";
import { vanityPromoActive } from "@/lib/vanity-promo";

const facts = [
  {
    label: "01",
    title: "In time for Christmas",
    body: "Vanities are made in 2 to 4 weeks of production time, including a custom piece from a photo you send, ready to give as a Christmas gift.",
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

/** Full promotional header for the vanities page. Renders nothing after the end date. */
export function VanityPromoBanner() {
  if (!vanityPromoActive()) return null;
  return (
    <section className="border-b border-black/10 bg-[oklch(0.96_0.012_85)] text-black">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/55">
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
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/45">
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
              Up to 35% off every vanity on this page
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              The promotion runs through Friday, November 13, 2026. This 2 to 4 week production time
              applies to vanities, including a custom vanity designed from a photo you send.
            </p>
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
