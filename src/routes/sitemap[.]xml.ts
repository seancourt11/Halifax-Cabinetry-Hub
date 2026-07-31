import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.hempstonhome.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
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
          { path: "/products/cabinet-styles", changefreq: "monthly", priority: "0.8" },
          { path: "/products/colours-finishes", changefreq: "monthly", priority: "0.8" },
          { path: "/products/brands", changefreq: "monthly", priority: "0.7" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/work-with-us", changefreq: "monthly", priority: "0.8" },
          { path: "/rush-custom-kitchen-cabinets", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
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
