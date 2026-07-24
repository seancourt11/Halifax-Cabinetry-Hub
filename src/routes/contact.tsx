import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HalifaxLeadForm } from "@/components/halifax-lead-form";
import { StickyConsultationCTA } from "@/components/sticky-consultation-cta";
import { breadcrumbSchema, ORG_EMAIL, ORG_PHONE } from "@/lib/schema";

import ogImg from "@/assets/og/og-contact.jpg";

const PAGE_TITLE = "Book a Custom Cabinetry Consultation | Hempston Home";
const PAGE_DESC =
  "Free custom cabinetry consultation — kitchens, vanities & built-ins. Call (902) 719-8497 or email info@hempstonhome.com. Halifax · Toronto · Long Beach.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: ogImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: ogImg },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: PAGE_TITLE,
          url: "/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Hempston Home",
            email: ORG_EMAIL,
            telephone: ORG_PHONE,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: ORG_EMAIL,
              telephone: ORG_PHONE,
              areaServed: ["CA", "US"],
              availableLanguage: ["en"],
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Contact", item: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

const contactBlocks = [
  {
    icon: Phone,
    label: "Phone",
    value: "(902) 719-8497",
    href: "tel:+19027198497",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@hempstonhome.com",
    href: "mailto:info@hempstonhome.com",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Halifax · Toronto · Long Beach",
    href: undefined,
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.14 0 0)" }}>
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-white/10 bg-[oklch(0.14_0_0)] px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="tracked text-xs font-medium text-white/60">Get in touch</p>
        <h1 className="mt-6 font-display text-4xl font-semibold uppercase tracking-[0.18em] text-white sm:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Every Hempston project begins with a conversation. Tell us about your space and a
          designer will guide you from first sketch to final install.
        </p>

        {/* Contact info tiles */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {contactBlocks.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex h-full flex-col items-center justify-center border border-white/20 px-6 py-12 transition-colors hover:border-white/60">
                <Icon className="h-6 w-6 text-white/80" strokeWidth={1.2} />
                <p className="mt-6 tracked text-xs font-medium text-white/70">{label}</p>
                <p className="mt-3 font-display text-lg text-white">{value}</p>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* Form on light ground */}
      <section className="bg-background px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="tracked text-xs font-medium text-accent">Send an inquiry</p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.18em] text-foreground sm:text-4xl">
            Start Your Project
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Share a few details about your kitchen, bath, or built-in and we'll be in touch within
            one business day.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl" id="consultation">
          <HalifaxLeadForm />
        </div>
      </section>

      {/* Brand outro band */}
      <section className="border-t border-white/10 bg-[oklch(0.14_0_0)] px-5 py-24 text-center sm:px-8">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.22em] text-white sm:text-4xl">
          Hempston
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
          Bespoke cabinetry designed and built by hand. From heirloom kitchens to reeded oak
          vanities and full-height built-ins — every commission is fully custom, drawn to your
          measure and finished in the material and colour of your choosing.
        </p>
      </section>

      <StickyConsultationCTA />
      <SiteFooter />
    </div>
  );
}
