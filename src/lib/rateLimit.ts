type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Best-effort in-memory rate limiter (per server instance).
 * Not distributed, but stops basic scripted abuse of the public form endpoints.
 */
export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}
