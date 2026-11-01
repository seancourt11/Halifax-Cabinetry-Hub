import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";

const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme: "light" | "dark";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

let turnstileLoader: Promise<void> | null = null;

function turnstileApi(): TurnstileApi | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { turnstile?: TurnstileApi }).turnstile;
}

function loadTurnstileScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (turnstileApi()) return Promise.resolve();
  if (turnstileLoader) return turnstileLoader;
  turnstileLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      turnstileLoader = null;
      reject(new Error("Turnstile failed to load"));
    };
    document.head.appendChild(script);
  });
  return turnstileLoader;
}

/**
 * Hidden honeypot, fill-time stamp, and Turnstile widget.
 * The widget renders only when the server reports both keys are configured.
 */
export function useFormProtection(theme: "light" | "dark") {
  const honeypotId = useId();
  const startedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const tokenRef = useRef("");
  const [siteKey, setSiteKey] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/contact", { headers: { accept: "application/json" } })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { turnstileSiteKey?: string | null } | null) => {
        if (cancelled) return;
        setSiteKey(data?.turnstileSiteKey?.trim() || null);
      })
      .catch(() => {
        if (!cancelled) setSiteKey(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;
    let renderedId: string | null = null;

    loadTurnstileScript()
      .then(() => {
        const api = turnstileApi();
        if (cancelled || !api || !containerRef.current) return;
        renderedId = api.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => {
            tokenRef.current = token;
          },
          "expired-callback": () => {
            tokenRef.current = "";
          },
          "error-callback": () => {
            tokenRef.current = "";
          },
        });
        widgetId.current = renderedId;
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      cancelled = true;
      const api = turnstileApi();
      if (renderedId && api) api.remove(renderedId);
      if (widgetId.current === renderedId) widgetId.current = null;
      tokenRef.current = "";
    };
  }, [siteKey, theme]);

  const appendTo = useCallback((body: FormData) => {
    body.set("company_website", honeypotRef.current?.value ?? "");
    body.set("formStartedAt", String(startedAt.current));
    const token = tokenRef.current.trim();
    if (token) body.set("cf-turnstile-response", token);
  }, []);

  const resetChallenge = useCallback(() => {
    tokenRef.current = "";
    const id = widgetId.current;
    const api = turnstileApi();
    if (id && api) api.reset(id);
  }, []);

  const fields: ReactNode = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor={honeypotId}>Company website</label>
        <input
          ref={honeypotRef}
          id={honeypotId}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      {siteKey ? <div ref={containerRef} /> : null}
    </>
  );

  return { fields, appendTo, resetChallenge };
}
