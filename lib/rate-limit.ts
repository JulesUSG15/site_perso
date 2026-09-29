// Rate-limit très simple, en mémoire. Suffit pour dissuader les envois répétés
// depuis un même conteneur. Pour un usage multi-instance, remplacer par Redis.

interface Bucket {
  count: number;
  reset: number;
}

const store = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;

export function checkRateLimit(key: string): {
  ok: boolean;
  retryAfterSec: number;
} {
  const now = Date.now();
  const bucket = store.get(key);
  if (!bucket || bucket.reset < now) {
    store.set(key, { count: 1, reset: now + WINDOW_MS });
    return { ok: true, retryAfterSec: 0 };
  }
  if (bucket.count >= MAX_REQUESTS) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.reset - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true, retryAfterSec: 0 };
}
