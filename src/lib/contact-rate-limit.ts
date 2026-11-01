import { getCache } from "@vercel/functions";
import { WEEK_MS, evaluateRateLimit } from "@/lib/contact-guard";

const memory = new Map<string, number[]>();
const CACHE_TTL_SECONDS = Math.floor(WEEK_MS / 1000);

function isTimestampList(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((stamp) => typeof stamp === "number");
}

function mergeTimestamps(left: number[], right: number[]): number[] {
  return Array.from(new Set([...left, ...right])).sort((a, b) => a - b);
}

/**
 * Light per-IP limit. Runtime Cache shares counts across instances in a region.
 * The in-memory copy covers local dev and a cache miss on the same instance.
 * A cache outage fails open so a real lead is not blocked.
 */
export async function consumeContactRateLimit(ip: string, now = Date.now()): Promise<boolean> {
  const key = `ip:${ip}`;
  const local = memory.get(ip) ?? [];
  let remote: number[] = [];
  let cache: ReturnType<typeof getCache> | null = null;

  try {
    cache = getCache({ namespace: "hempston-contact" });
    const cached = await cache.get(key);
    if (isTimestampList(cached)) remote = cached;
  } catch (error) {
    console.error("Contact rate limit read failed open:", error);
    return true;
  }

  const decision = evaluateRateLimit(mergeTimestamps(local, remote), now);
  memory.set(ip, decision.timestamps);

  if (cache) {
    try {
      await cache.set(key, decision.timestamps, {
        ttl: CACHE_TTL_SECONDS,
        name: "contact-rate-limit",
      });
    } catch (error) {
      console.error("Contact rate limit write failed:", error);
    }
  }

  return decision.allowed;
}
