import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { safePageLocation, trackGaEvent, trackPageView } from "@/lib/ga4";

function trackContactClick(event: MouseEvent) {
  if (event.button === 2) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement)) return;
  const href = (anchor.getAttribute("href") ?? "").trim().toLowerCase();
  const pageLocation = safePageLocation();
  if (!pageLocation) return;
  if (href.startsWith("tel:")) {
    trackGaEvent("phone_click", { page_location: pageLocation });
  } else if (href.startsWith("mailto:")) {
    trackGaEvent("email_click", { page_location: pageLocation });
  }
}

export function GoogleAnalytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });

  useEffect(() => {
    trackPageView();
  }, [pathname, searchStr]);

  useEffect(() => {
    document.addEventListener("click", trackContactClick, { passive: true });
    document.addEventListener("auxclick", trackContactClick, { passive: true });
    return () => {
      document.removeEventListener("click", trackContactClick);
      document.removeEventListener("auxclick", trackContactClick);
    };
  }, []);

  return null;
}
