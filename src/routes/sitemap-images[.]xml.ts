import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/schema";
import homeHero from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import ogHalifax from "@/assets/og/og-halifax.jpg";
import ogAbout from "@/assets/og/og-about.jpg";
import ogServices from "@/assets/og/og-services.jpg";
import ogDoors from "@/assets/og/og-door-styles.jpg";
import ogCabinets from "@/assets/og/og-cabinet-styles.jpg";
import ogColours from "@/assets/og/og-colours-finishes.jpg";
import ogCase from "@/assets/og/og-case-studies.jpg";
import monctonHero from "@/assets/projects/moncton-built-ins-fireplace-wall.jpg";

/**
 * Image sitemap — key page images. Imports resolve to the built asset URLs.
 */
type ImageEntry = { pageUrl: string; images: { loc: string; caption?: string; title?: string }[] };

const entries: ImageEntry[] = [
  {
    pageUrl: `${SITE_URL}/`,
    images: [
      {
        loc: `${SITE_URL}${homeHero}`,
        title: "Custom cabinetry by Hempston Home",
        caption:
          "Glen Haven custom white painted kitchen cabinetry with a stained white oak island",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/custom-cabinetry-halifax`,
    images: [
      {
        loc: `${SITE_URL}${ogHalifax}`,
        title: "Custom kitchen cabinets in Halifax",
        caption: "Custom kitchen cabinetry for Halifax homes",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/about`,
    images: [
      {
        loc: `${SITE_URL}${ogAbout}`,
        title: "About Hempston Home",
        caption: "Halifax custom cabinet studio",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/services`,
    images: [
      {
        loc: `${SITE_URL}${ogServices}`,
        title: "Kitchen design and cabinetry services",
        caption: "Design, shop drawings and installation",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/products/door-styles`,
    images: [
      {
        loc: `${SITE_URL}${ogDoors}`,
        title: "Custom cabinet door styles",
        caption: "Shaker, slab, inset and reeded doors",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/products/cabinet-styles`,
    images: [
      {
        loc: `${SITE_URL}${ogCabinets}`,
        title: "Inset and frameless cabinets",
        caption: "Cabinet construction styles",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/products/colours-finishes`,
    images: [
      {
        loc: `${SITE_URL}${ogColours}`,
        title: "Cabinet paint colours and stains",
        caption: "Paint colours and wood stains",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/custom-cabinetry-moncton`,
    images: [
      {
        loc: `${SITE_URL}${monctonHero}`,
        title: "Built-ins and fireplace surround, Dieppe, NB",
        caption: "Custom painted built-in cabinets and fireplace surround for a home in Dieppe, NB",
      },
    ],
  },
  {
    pageUrl: `${SITE_URL}/case-studies`,
    images: [
      {
        loc: `${SITE_URL}${ogCase}`,
        title: "Custom kitchen projects",
        caption: "Kitchen and millwork projects",
      },
    ],
  },
];

export const Route = createFileRoute("/sitemap-images.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${e.pageUrl}</loc>`,
            ...e.images.map((i) =>
              [
                `    <image:image>`,
                `      <image:loc>${i.loc}</image:loc>`,
                i.caption ? `      <image:caption>${escapeXml(i.caption)}</image:caption>` : null,
                i.title ? `      <image:title>${escapeXml(i.title)}</image:title>` : null,
                `    </image:image>`,
              ]
                .filter(Boolean)
                .join("\n"),
            ),
            `  </url>`,
          ].join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
