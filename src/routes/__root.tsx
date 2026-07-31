import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hempston Home — Custom Cabinetry & Kitchen Design" },
      {
        name: "description",
        content:
          "Hempston Home designs and builds custom cabinetry, bespoke kitchens, vanities and built-in millwork — Halifax, Toronto, Long Beach + install coast to coast.",
      },
      { name: "author", content: "Hempston Home" },
      { property: "og:title", content: "Hempston Home — Custom Cabinetry & Kitchen Design" },
      {
        property: "og:description",
        content:
          "Custom cabinetry, bespoke kitchens, vanities and built-in millwork — designed and handcrafted by Hempston Home.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Hempston Home" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hempston Home — Custom Cabinetry & Kitchen Design" },
      {
        name: "twitter:description",
        content:
          "Custom cabinetry, bespoke kitchens, vanities and built-in millwork by Hempston Home.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://hempstonhome.com/#organization",
          name: "Hempston Home",
          alternateName: "Hempston",
          url: "/",
          logo: "/favicon.ico",
          description:
            "Custom cabinetry, bespoke kitchens, vanities and built-in millwork. Studios in Halifax, Toronto and Long Beach with install coast to coast.",
          foundingDate: "2015",
          slogan: "100% custom cabinetry, coast to coast.",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Nova Scotia" },
            { "@type": "AdministrativeArea", name: "Ontario" },
            { "@type": "Country", name: "Canada" },
            { "@type": "Country", name: "United States" },
          ],
          knowsAbout: [
            "Custom kitchen cabinetry",
            "Bespoke millwork",
            "Inset face-frame cabinetry",
            "Painted Shaker cabinets",
            "White oak cabinetry",
            "Butler's pantries",
            "Custom vanities",
            "Built-in millwork",
          ],
          sameAs: ["https://www.instagram.com/hempstonhome"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "info@hempstonhome.com",
            telephone: "+1-902-719-8497",
            areaServed: ["CA", "US"],
            availableLanguage: ["English"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://hempstonhome.com/#website",
          name: "Hempston Home",
          url: "/",
          publisher: { "@id": "https://hempstonhome.com/#organization" },
          inLanguage: "en",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
