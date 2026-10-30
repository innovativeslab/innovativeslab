import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "WON", "LOST"] as const;
const TYPES = ["QUOTE", "CONSULTATION", "CONTACT"] as const;

// Neutralise spreadsheet formula injection and quote every cell.
function cell(v: unknown): string {
  let s = v == null ? "" : v instanceof Date ? v.toISOString() : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET(req: Request) {
  if (!(await getSession())) return new NextResponse("Unauthorized", { status: 401 });
  const sp = new URL(req.url).searchParams;
  const q = (sp.get("q") ?? "").trim().slice(0, 100);
  const status = STATUSES.find((s) => s === sp.get("status"));
  const type = TYPES.find((t) => t === sp.get("type"));
  const where: Prisma.LeadWhereInput = {
    ...(status && { status }), ...(type && { type }),
    ...(q && { OR: [{ fullName: { contains: q, mode: "insensitive" } }, { email: { contains: q, mode: "insensitive" } }, { company: { contains: q, mode: "insensitive" } }, { description: { contains: q, mode: "insensitive" } }] }),
  };
  const leads = await prisma.lead.findMany({ where, orderBy: { createdAt: "desc" }, take: 5000 });
  const header = ["id", "received_utc", "type", "status", "name", "email", "company", "country", "service", "budget", "timeline", "url", "stack", "description"];
  const lines = [header.map(cell).join(",")];
  for (const l of leads) lines.push([l.id, l.createdAt, l.type, l.status, l.fullName, l.email, l.company, l.country, l.service, l.budget, l.timeline, l.siteUrl, l.techStack, l.description].map(cell).join(","));
  return new NextResponse(lines.join("\r\n"), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`, "Cache-Control": "no-store" } });
}
