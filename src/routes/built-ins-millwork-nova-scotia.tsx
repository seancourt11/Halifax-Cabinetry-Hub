import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { VisibleFaq } from "@/components/visible-faq";
import { ResponsiveImg } from "@/components/responsive-img";
import { heroImagePreload } from "@/lib/image-srcset";
import { breadcrumbSchema, faqPageSchema, serviceSchema, SITE_URL } from "@/lib/schema";
import { LEAD_TIME_LABEL, PHONE_DISPLAY, PHONE_TEL, VANITY_PRICE_LABEL } from "@/lib/site";
import heroImg from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg";
import pantryImg from "@/assets/projects/gh-butler-pantry-glass.jpg";
import entryImg from "@/assets/projects/dba-kent-pantry.jpg";
import laundryImg from "@/assets/projects/md-laundry-cabinetry.jpg";

const PAGE_TITLE = "Built-ins and Millwork Nova Scotia | Hempston Home";
const PAGE_DESC =
  "Custom built-ins and millwork in Nova Scotia, from pantries and fireplace walls to mudrooms. Hempston Home designs, builds and installs. Book a consult.";
const PATH = "/built-ins-millwork-nova-scotia";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const faqs = [
  {
    q: "What built-ins does Hempston make?",
    a: "The published work includes fireplace built-ins, butler's pantries, entry and mudroom cabinetry, and laundry cabinetry. The studio also takes on libraries, media units and other built-in millwork a house needs. Each one is drawn to the room.",
  },
  {
    q: "How much do built-ins cost?",
    a: `Vanities and built-ins usually run ${VANITY_PRICE_LABEL}. A full custom kitchen typically runs from $25,000 to $75,000. The quote is itemised in writing after a design consultation.`,
  },
  {
    q: "How long do built-ins take?",
    a: `Standard projects take ${LEAD_TIME_LABEL} from the first consultation to installation. We confirm the timeline in writing before any deposit.`,
  },
  {
    q: "Where are the built-ins made?",
    a: "They are built at the Bayne St shop in Halifax, then installed by our own team. The Dieppe fireplace wall was photographed finished, before delivery.",
  },
];

const photos = [
  {
    src: heroImg,
    alt: "Painted Shaker built-in cabinets and open shelves on both sides of a fireplace in Dieppe, New Brunswick",
    caption: "Dieppe, NB. Painted Shaker fireplace built-ins, photographed before delivery.",
  },
  {
    src: pantryImg,
    alt: "Butler's pantry with glass-front upper cabinets",
    caption: "Glass-front butler's pantry from the Hempston photo library.",
  },
  {
    src: entryImg,
    alt: "Painted entry built-ins with a bench and integrated storage",
    caption: "Painted entry built-ins. This photograph is from House on Kent.",
  },
  {
    src: laundryImg,
    alt: "Laundry room with full-height painted cabinetry",
    caption: "Laundry cabinetry from the Hempston photo library.",
  },
];

export const Route = createFileRoute("/built-ins-millwork-nova-scotia")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: ABSOLUTE_URL },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [{ rel: "canonical", href: ABSOLUTE_URL }, heroImagePreload(heroImg)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Built-ins and millwork in Nova Scotia",
            description: PAGE_DESC,
            url: ABSOLUTE_URL,
            areaServed: [{ "@type": "AdministrativeArea", name: "Nova Scotia" }],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Built-ins and millwork in Nova Scotia", item: PATH },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }),
  component: BuiltInsPage,
});

function BuiltInsPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0_0)] text-white">
      <SiteHeader />
      <section className="relative">
        <ResponsiveImg
          src={heroImg}
          alt="Painted built-in cabinets and a fireplace surround for a home in Dieppe, New Brunswick"
          width={1600}
          height={1200}
          fetchPriority="high"
          sizes="100vw"
          className="h-[68vh] min-h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8">
            <nav
              aria-label="Breadcrumb"
              className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/80"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Built-ins and millwork</span>
            </nav>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-light uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl">
              Built-ins and Millwork in Nova Scotia
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90">
              Fireplace walls, pantries, mudrooms and other built-in millwork, designed and built
              with the same shop that makes our kitchens.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm leading-relaxed text-white/90 sm:px-8">
        <p>
          Hempston Home builds cabinetry that is not only a kitchen. The work we publish includes a
          fireplace wall of painted built-ins in Dieppe, New Brunswick, glass-front butler's
          pantries, painted entry cabinetry, and laundry rooms. The about page also lists libraries,
          media units, wet bars and mudrooms as rooms the studio takes on.
        </p>
        <p>
          The Dieppe piece is the clearest published example. Painted white cabinets sit on both
          sides of a fireplace mantel, with Shaker doors, drawers and open upper shelving. It was
          photographed finished, before it left for delivery. The note is also on the{" "}
          <Link to="/projects" className="underline">
            projects
          </Link>{" "}
          page.
        </p>
        <p>
          Vanities and built-ins usually run {VANITY_PRICE_LABEL}. Standard projects take{" "}
          {LEAD_TIME_LABEL}. Cabinetry is built in Canada at the Halifax shop, and our own team
          installs it. Call {PHONE_DISPLAY} to talk through a room.
        </p>
        <p>
          Nova Scotia kitchens with designer stories, including pantries at Glen Haven and House on
          Kent, are written up under{" "}
          <Link to="/case-studies" className="underline">
            case studies
          </Link>
          . Bathroom vanities have their own page for{" "}
          <Link to="/custom-bathroom-vanities-halifax" className="underline">
            Halifax
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 sm:grid-cols-2 sm:px-8">
        {photos.map((photo) => (
          <figure key={photo.caption}>
            <ResponsiveImg
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={900}
              loading="lazy"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-white/80">{photo.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-light uppercase tracking-[0.06em]">
            Built-in questions
          </h2>
          <VisibleFaq
            items={faqs}
            className="mt-8"
            questionClassName="font-display text-lg font-light text-white"
            answerClassName="mt-3 text-sm leading-relaxed text-white/85"
          />
          <p className="mt-8 text-sm">
            <a href={PHONE_TEL} className="underline">
              Call {PHONE_DISPLAY}
            </a>
            {" · "}
            <Link to="/custom-cabinetry-halifax" className="underline">
              Halifax shop
            </Link>
          </p>
        </div>
      </section>
      <SiteFooter />
      <StickyConsultationCTA />
    </div>
  );
}
