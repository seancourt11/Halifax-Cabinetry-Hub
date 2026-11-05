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

import { GoogleAnalytics } from "../components/google-analytics";
import appCss from "../styles.css?url";
import criticalCss from "../critical.css?raw";
import { GA_BOOTSTRAP_SCRIPT } from "../lib/ga4";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { isServiceAreaPath, organizationJsonLd } from "../lib/schema";
import { BRAND } from "../lib/site";

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
  head: ({ matches }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Custom Cabinetry and Millwork Nova Scotia | Hempston Home" },
      {
        name: "description",
        content:
          "Custom kitchen cabinets and millwork in Halifax, Nova Scotia. Hempston Home designs, builds and installs kitchens, vanities and built-ins. Book a consult.",
      },
      { name: "author", content: BRAND },
      { property: "og:site_name", content: BRAND },
      {
        property: "og:title",
        content: "Custom Cabinetry and Millwork Nova Scotia | Hempston Home",
      },
      {
        property: "og:description",
        content:
          "Custom kitchen cabinets and millwork in Halifax, Nova Scotia. Hempston Home designs, builds and installs kitchens, vanities and built-ins. Book a consult.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Custom Cabinetry and Millwork Nova Scotia | Hempston Home",
      },
      {
        name: "twitter:description",
        content:
          "Custom kitchen cabinets and millwork in Halifax, Nova Scotia. Hempston Home designs, builds and installs kitchens, vanities and built-ins. Book a consult.",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preload", href: appCss, as: "style" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          organizationJsonLd({
            includeOffices: !isServiceAreaPath(matches.at(-1)?.pathname ?? "/"),
          }),
        ),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap";

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        {/* media=print keeps this sheet from blocking first paint. The script
            flips it to all. An HTML onload attribute is required: React's
            onLoad is not present in the server HTML, so a cached sheet can
            finish before hydration and never switch. */}
        <link id="app-css" rel="stylesheet" href={appCss} media="print" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{var l=document.getElementById("app-css");if(!l)return;function go(){l.media="all"}if(l.sheet)go();else l.onload=go})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={appCss} />
        </noscript>
        {/* Non-render-blocking font CSS. The preload above starts the download. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{var h=${JSON.stringify(FONT_HREF)};var l=document.createElement("link");l.rel="stylesheet";l.href=h;l.media="print";l.onload=function(){this.media="all"};document.head.appendChild(l)})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={FONT_HREF} />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: GA_BOOTSTRAP_SCRIPT }} />
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
      <GoogleAnalytics />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main>
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}
