import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { VisibleFaq } from "@/components/visible-faq";
import { ResponsiveImg } from "@/components/responsive-img";
import { heroImagePreload } from "@/lib/image-srcset";
import {
  breadcrumbSchema,
  faqPageSchema,
  imageObjectGraph,
  serviceSchema,
  SITE_URL,
} from "@/lib/schema";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { LabeledPhoto } from "@/components/labeled-photo";
import {
  imageObjectInputs,
  insetHero,
  insetNamedDoors,
  insetProfileIllustrations,
  insetProjectPhotos,
} from "@/data/seo-page-images";
import heroImg from "@/assets/door-gallery-2026/inset_malibu_school_house_white.png";

const PAGE_TITLE = "Inset Face-Frame Kitchen Cabinets in Canada | Hempston Home";
const PAGE_DESC =
  "Furniture-grade inset face-frame kitchens built in Halifax and installed across Canada and the U.S. Mortise-and-tenon frames, doors set flush, 8 to 14 weeks, kitchens from $25,000, 5-year warranty.";
const CANONICAL = `${SITE_URL}/inset-face-frame-cabinets`;
const ABSOLUTE_IMAGE = `${SITE_URL}${heroImg}`;

const H1 = "Who builds inset face-frame kitchens in Canada?";
const LEAD =
  "Hempston builds furniture-grade inset face-frame kitchens in Halifax and installs across Canada and the U.S. Mortise-and-tenon face frames, doors set flush in the frame, and a 5-year warranty.";

const faqs = [
  {
    q: H1,
    a: LEAD,
  },
  {
    q: "What does inset mean?",
    a: "Inset means the doors are set flush in the face frame.",
  },
  {
    q: "How do you build inset face-frame cabinets?",
    a: "We build mortise-and-tenon face frames and dovetail drawers. Finishes are conversion varnish, lacquer, or Rubio finishes.",
  },
  {
    q: "Which inset styles are on the cabinet styles page?",
    a: "Beaded and Shaker profiles, and raised-panel doors named Noto, Tracadie, Torquay, and La Gomera.",
  },
  {
    q: "Where are inset kitchens built, and what do they cost?",
    a: "They are built in Halifax and installed across Nova Scotia, across Canada from the Toronto-area studio, and in the U.S. from the Long Beach area. Most full kitchens take 8 to 14 weeks and typically run $25,000 to $75,000+, with a 5-year warranty.",
  },
];

const stylesOnPage = ["Beaded", "Shaker", "Noto", "Tracadie", "Torquay", "La Gomera"];

export const Route = createFileRoute("/inset-face-frame-cabinets")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "inset face-frame cabinets, inset face frame kitchens Canada, mortise-and-tenon face frames, custom inset cabinets Halifax",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: ABSOLUTE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ABSOLUTE_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }, heroImagePreload(heroImg)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Inset Face-Frame Cabinets", item: "/inset-face-frame-cabinets" },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqPageSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          imageObjectGraph(
            imageObjectInputs(
              [...insetProfileIllustrations, ...insetNamedDoors, ...insetProjectPhotos, insetHero],
              SITE_URL,
            ),
          ),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Inset Face-Frame Kitchen Cabinets",
            description: PAGE_DESC,
            url: CANONICAL,
            areaServed: [
              { "@type": "AdministrativeArea", name: "Nova Scotia" },
              { "@type": "City", name: "Toronto" },
              { "@type": "Country", name: "Canada" },
              { "@type": "City", name: "Long Beach" },
              { "@type": "Country", name: "United States" },
            ],
          }),
        ),
      },
    ],
  }),
  component: InsetFaceFramePage,
});

function InsetFaceFramePage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ResponsiveImg
            src={heroImg}
            sizes="100vw"
            alt="Inset raised-panel cabinet door set flush in a face frame"
            width={1600}
            height={2000}
            fetchPriority="high"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0_0)] via-[oklch(0.14_0_0)]/72 to-[oklch(0.14_0_0)]/20" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
          <nav
            aria-label="Breadcrumb"
            className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white">Inset face frame</span>
          </nav>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-6xl">
            {H1}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">{LEAD}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[oklch(0.14_0_0)] transition-colors hover:bg-transparent hover:text-white"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors hover:border-white"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
              What inset means
            </p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
              Doors set flush in the frame
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/75">
              Inset means the doors are set flush in the face frame. The frame is mortise-and-tenon.
              Drawers are dovetailed. Finishes are conversion varnish, lacquer, or Rubio finishes.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
              Styles on the cabinet styles page
            </p>
            <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
              Beaded, Shaker, and raised panel
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/75">
              Styles named on the cabinet styles page include beaded and Shaker profiles, and
              raised-panel doors named Noto, Tracadie, Torquay, and La Gomera.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {stylesOnPage.map((name) => (
                <li
                  key={name}
                  className="border border-black/15 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em]"
                >
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link to="/products/cabinet-styles" className="underline">
                Cabinet styles
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
            Face-frame profiles
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
            Door profiles
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {insetProfileIllustrations.map((photo) => (
              <LabeledPhoto
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                caption={photo.caption}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 25vw, 50vw"
                tone="dark"
                frameClassName="aspect-[3/4] overflow-hidden bg-white p-4 sm:p-6"
                imgClassName="h-full w-full object-contain"
              />
            ))}
          </div>
          <h2 className="mt-16 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
            Inset raised panel doors
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {insetNamedDoors.map((photo) => (
              <LabeledPhoto
                key={photo.title}
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                caption={photo.caption}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 25vw, 50vw"
                tone="dark"
                frameClassName="aspect-[3/4] overflow-hidden bg-white/[0.02]"
                imgClassName="h-full w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/60">
            Project photos
          </p>
          <h2 className="mt-5 font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
            Inset cabinetry
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {insetProjectPhotos.map((photo) => (
              <LabeledPhoto
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                caption={photo.caption}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 640px) 50vw, 100vw"
                frameClassName="overflow-hidden bg-neutral-100"
                imgClassName="aspect-[4/3] h-full w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
            Where we build and install
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-light uppercase tracking-[0.04em] sm:text-4xl">
            Built in Halifax, installed across Nova Scotia, Canada, and the U.S.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-white/75">
            <p>
              Kitchens are built in Halifax. Installation covers Nova Scotia, the rest of Canada
              from the Toronto-area studio, and the U.S. from the Long Beach area.
            </p>
            <p>
              Most full kitchens take 8 to 14 weeks and typically run $25,000 to $75,000+, with a
              5-year warranty.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[oklch(0.98_0_0)] py-20 text-[oklch(0.15_0_0)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Questions
          </h2>
          <VisibleFaq
            items={faqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light"
            answerClassName="mt-3 text-sm leading-relaxed text-black/70"
          />
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Talk with Hempston Home
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/75">
            Call{" "}
            <a href={PHONE_TEL} className="underline">
              {PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
