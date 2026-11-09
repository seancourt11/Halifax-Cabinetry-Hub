import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { novaScotiaHero, novaScotiaProjectPhotos, uniqueImages } from "@/data/seo-page-images";
import { insetPagePhotos, uniqueInsetPhotos } from "@/data/inset-page-photos";
import { vanityPieces } from "@/data/furniture-catalogue";
import { recentVanities } from "@/data/recent-vanities";

const BASE_URL = "https://www.hempstonhome.com";

type SitemapImage = { src: string; title: string; caption: string };

const pageImages: Record<string, SitemapImage[]> = {
  "/custom-kitchen-cabinets-nova-scotia": uniqueImages([
    novaScotiaHero,
    ...novaScotiaProjectPhotos,
  ]),
  "/inset-face-frame-cabinets": uniqueInsetPhotos(insetPagePhotos),
  "/products/vanities": [
    ...vanityPieces.map((piece) => ({
      src: piece.src,
      title: piece.title,
      caption: piece.caption,
    })),
    ...recentVanities.map((photo) => ({
      src: photo.src,
      title: photo.name,
      caption: photo.caption,
    })),
  ],
};

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const LASTMOD = "2026-10-21";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: LASTMOD },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/locations", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-halifax", changefreq: "monthly", priority: "0.9" },
          { path: "/custom-cabinetry-moncton", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-charlottetown", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-fredericton", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-saint-john", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-st-johns", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-toronto", changefreq: "monthly", priority: "0.9" },
          { path: "/custom-cabinetry-montreal", changefreq: "monthly", priority: "0.9" },
          { path: "/custom-cabinetry-vancouver", changefreq: "monthly", priority: "0.9" },
          { path: "/custom-cabinetry-calgary", changefreq: "monthly", priority: "0.9" },
          { path: "/custom-cabinetry-ottawa", changefreq: "monthly", priority: "0.9" },
          { path: "/custom-cabinetry-edmonton", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-winnipeg", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-quebec-city", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-hamilton", changefreq: "monthly", priority: "0.8" },
          { path: "/custom-cabinetry-kitchener", changefreq: "monthly", priority: "0.8" },
          { path: "/products/door-styles", changefreq: "monthly", priority: "0.8" },
          {
            path: "/products/vanities",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-11-06",
          },
          { path: "/products/cabinet-styles", changefreq: "monthly", priority: "0.8" },
          { path: "/products/colours-finishes", changefreq: "monthly", priority: "0.8" },
          { path: "/products/brands", changefreq: "monthly", priority: "0.7" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/projects", changefreq: "monthly", priority: "0.6" },
          { path: "/work-with-us", changefreq: "monthly", priority: "0.8" },
          { path: "/rush-custom-kitchen-cabinets", changefreq: "monthly", priority: "0.7" },
          {
            path: "/custom-kitchen-cabinets-nova-scotia",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-11-05",
          },
          {
            path: "/inset-face-frame-cabinets",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-11-05",
          },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${e.lastmod ?? LASTMOD}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            ...(pageImages[e.path] ?? []).map((image) =>
              [
                `    <image:image>`,
                `      <image:loc>${BASE_URL}${image.src}</image:loc>`,
                `      <image:title>${escapeXml(image.title)}</image:title>`,
                `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
                `    </image:image>`,
              ].join("\n"),
            ),
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
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
