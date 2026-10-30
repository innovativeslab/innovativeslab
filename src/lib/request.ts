import { createHmac } from "node:crypto";

export function getClientIp(h: { get(name: string): string | null }): string {
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "unknown";
}

/** Store only a keyed hash of the IP (rate limiting + abuse review), never the raw address. */
export function hashIp(ip: string): string {
  const secret = process.env.AUTH_SECRET ?? "dev-only";
  return createHmac("sha256", secret).update(ip).digest("hex").slice(0, 32);
}
