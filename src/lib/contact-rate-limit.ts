import { getCache } from "@vercel/functions";
import {
  DAY_MS,
  MAX_SUBMITS_PER_DAY,
  MAX_SUBMITS_PER_WEEK,
  WEEK_MS,
  readTimestamps,
} from "@/lib/contact-guard";

const memory = new Map<string, number[]>();
const CACHE_TTL_SECONDS = Math.floor(WEEK_MS / 1000);
const SLOT_COUNT = MAX_SUBMITS_PER_WEEK;

/**
 * One cache entry per recent submission. A stale read can miss a slot, but it
 * cannot replace the other slots with a shorter list.
 */
function slotKey(ip: string, slot: number) {
  return `ip:${ip}:slot:${slot}`;
}

function freshStamps(stamps: number[], now: number) {
  return stamps.filter((stamp) => now - stamp < WEEK_MS && stamp <= now);
}

export async function consumeContactRateLimit(ip: string, now = Date.now()): Promise<boolean> {
  const local = freshStamps(memory.get(ip) ?? [], now);
  let cache: ReturnType<typeof getCache> | null = null;
  const slotStamps: Array<number | null> = [];

  try {
    cache = getCache({ namespace: "hempston-contact" });
    const stored = await Promise.all(
      Array.from({ length: SLOT_COUNT }, (_, slot) => cache!.get(slotKey(ip, slot))),
    );
    for (const value of stored) {
      const [stamp] = freshStamps(readTimestamps(value), now);
      slotStamps.push(stamp ?? null);
    }
  } catch (error) {
    console.error("Contact rate limit read failed open:", error);
    return true;
  }

  const remote = slotStamps.filter((stamp): stamp is number => stamp !== null);
  const known = freshStamps(Array.from(new Set([...local, ...remote])), now);
  const dayCount = known.filter((stamp) => now - stamp < DAY_MS).length;
  const allowed = dayCount < MAX_SUBMITS_PER_DAY && known.length < MAX_SUBMITS_PER_WEEK;
  memory.set(ip, freshStamps([...known, now], now).slice(-20));

  if (cache) {
    const emptySlot = slotStamps.findIndex((stamp) => stamp === null);
    const oldestSlot =
      emptySlot >= 0
        ? emptySlot
        : slotStamps.reduce<number>((oldest, stamp, index, all) => {
            const oldestStamp = all[oldest] ?? Number.POSITIVE_INFINITY;
            return (stamp ?? Number.POSITIVE_INFINITY) < oldestStamp ? index : oldest;
          }, 0);
    try {
      const key = slotKey(ip, oldestSlot);
      await cache.set(key, { stamps: [now] }, { ttl: CACHE_TTL_SECONDS, name: key });
      const readBack = readTimestamps(await cache.get(slotKey(ip, oldestSlot))).length;
      console.info(
        `Contact rate slots=${remote.length} allowed=${allowed} wrote=${oldestSlot} readBack=${readBack}`,
      );
    } catch (error) {
      console.error("Contact rate limit write failed:", error);
    }
  }

  return allowed;
}
