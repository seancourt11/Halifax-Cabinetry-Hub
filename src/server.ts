import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

const CASE_STUDY_REDIRECTS: Record<string, string> = {
  "/case-studies/glen-haven": "/case-studies#glen-haven",
  "/case-studies/northwest-cove": "/case-studies#northwest-cove",
  "/case-studies/crombie-house": "/case-studies",
  "/case-studies/modern-drift": "/case-studies",
};

function redirectTo(location: string, status: 301 | 308) {
  return new Response(null, {
    status,
    headers: {
      Location: location,
      "Cache-Control": "public, max-age=31536000",
    },
  });
}

/** Edge-cache HTML. Browsers revalidate; the CDN may serve a fresh copy for a day. */
function withHtmlCache(response: Response): Response {
  const type = response.headers.get("content-type") ?? "";
  if (response.status !== 200 || !type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  headers.set(
    "CDN-Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800",
  );
  headers.set(
    "Vercel-CDN-Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800",
  );
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
        url.pathname = url.pathname.replace(/\/+$/, "");
        return redirectTo(url.toString(), 308);
      }
      const lowerPath = url.pathname.toLowerCase();
      const caseStudyTarget = CASE_STUDY_REDIRECTS[lowerPath];
      if (caseStudyTarget) {
        const target = new URL(caseStudyTarget, url.origin);
        target.search = url.search;
        return redirectTo(target.toString(), 301);
      }
      if (url.pathname !== lowerPath) {
        url.pathname = lowerPath;
        return redirectTo(url.toString(), 301);
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      if (request.method !== "GET" && request.method !== "HEAD") return normalized;
      if (url.pathname.startsWith("/api")) return normalized;
      return withHtmlCache(normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
