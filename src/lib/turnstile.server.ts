import { TURNSTILE_REJECT_MESSAGE, turnstileConfig } from "@/lib/contact-guard";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

let warnedPartialConfig = false;

export function warnIfTurnstileMisconfigured(): void {
  const config = turnstileConfig();
  if (!config.misconfigured || warnedPartialConfig) return;
  warnedPartialConfig = true;
  console.error(
    "Turnstile is partially configured. Set both TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY. Verification is skipped so real leads are not blocked.",
  );
}

export async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const config = turnstileConfig();
  if (!config.enabled) return true;
  if (!token.trim()) return false;

  const body = new URLSearchParams();
  body.set("secret", config.secretKey);
  body.set("response", token.trim());
  if (ip) body.set("remoteip", ip);

  try {
    const response = await fetch(SITEVERIFY_URL, { method: "POST", body });
    if (!response.ok) {
      console.error("Turnstile siteverify HTTP", response.status);
      return false;
    }
    const payload = (await response.json()) as { success?: boolean };
    return payload.success === true;
  } catch (error) {
    console.error("Turnstile siteverify request failed:", error);
    return false;
  }
}

export { TURNSTILE_REJECT_MESSAGE };
