import { prisma } from "./db";

/**
 * DB-backed fixed-window limiter so it works across serverless instances.
 * Returns true if the action is allowed. Not perfectly atomic under heavy concurrency,
 * which is acceptable for low-volume lead forms.
 */
export async function allow(key: string, limit: number, windowSeconds: number): Promise<boolean> {
  const since = new Date(Date.now() - windowSeconds * 1000);
  const count = await prisma.rateLimitEvent.count({ where: { key, createdAt: { gte: since } } });
  if (count >= limit) return false;
  await prisma.rateLimitEvent.create({ data: { key } });
  if (Math.random() < 0.02) {
    prisma.rateLimitEvent
      .deleteMany({ where: { createdAt: { lt: new Date(Date.now() - 24 * 3600 * 1000) } } })
      .catch(() => undefined);
  }
  return true;
}
