import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * Image sitemap — helps Google Images and AI multimodal crawlers surface
 * portfolio and product cabinetry photography with proper credits.
 * Doc: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 */
type ImageEntry = { pageUrl: string; images: { loc: string; caption?: string; title?: string }[] };

// A concise, high-signal set. Add more as pages and assets grow.
const entries: ImageEntry[] = [];

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
