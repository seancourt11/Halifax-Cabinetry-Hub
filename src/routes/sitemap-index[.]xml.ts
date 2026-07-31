import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/schema";

/**
 * Sitemap index — references the per-topic sitemaps. Search engines follow
 * the child sitemaps below.
 */
export const Route = createFileRoute("/sitemap-index.xml")({
  server: {
    handlers: {
      GET: async () => {
        const sitemaps = [
          `${SITE_URL}/sitemap.xml`,
          `${SITE_URL}/sitemap-images.xml`,
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...sitemaps.map(
            (s) => `  <sitemap><loc>${s}</loc></sitemap>`,
          ),
          `</sitemapindex>`,
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
