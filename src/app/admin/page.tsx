import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Leads", robots: { index: false, follow: false } };

const STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "WON", "LOST"] as const;
const TYPES = ["QUOTE", "CONSULTATION", "CONTACT"] as const;
const PAGE = 25;
const label = (s: string) => s.replace("_", " ").toLowerCase().replace(/^./, (c) => c.toUpperCase());

export default async function AdminHome({ searchParams }: { searchParams: { q?: string; status?: string; type?: string; page?: string } }) {
  await requireAdmin();
  const q = (searchParams.q ?? "").trim().slice(0, 100);
  const status = STATUSES.find((s) => s === searchParams.status);
  const type = TYPES.find((t) => t === searchParams.type);
  const page = Math.max(1, Number(searchParams.page) || 1);

  const where: Prisma.LeadWhereInput = {
    ...(status && { status }),
    ...(type && { type }),
    ...(q && { OR: [
      { fullName: { contains: q, mode: "insensitive" } },
      { email: { contains: q, mode: "insensitive" } },
      { company: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
    ] }),
  };

  const [leads, total, counts] = await Promise.all([
    prisma.lead.findMany({ where, orderBy: { createdAt: "desc" }, skip: (page - 1) * PAGE, take: PAGE }),
    prisma.lead.count({ where }),
    prisma.lead.groupBy({ by: ["status"], _count: true }),
  ]);
  const pages = Math.max(1, Math.ceil(total / PAGE));
  const qs = (p: number) => { const u = new URLSearchParams(); if (q) u.set("q", q); if (status) u.set("status", status); if (type) u.set("type", type); u.set("page", String(p)); return `/admin?${u}`; };
  const exportQs = new URLSearchParams(); if (q) exportQs.set("q", q); if (status) exportQs.set("status", status); if (type) exportQs.set("type", type);

  return (
    <div className="wrap py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Leads</h1>
        <div className="flex gap-3">
          <a className="rounded-md border border-line px-4 py-2 text-sm hover:border-link" href={`/admin/export?${exportQs}`}>Export CSV</a>
          <form action={logoutAction}><button className="rounded-md border border-line px-4 py-2 text-sm hover:border-link" type="submit">Sign out</button></form>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-3 text-sm">
        {STATUSES.map((s) => (
          <li key={s} className="rounded-md border border-line bg-panel px-3 py-1.5">{label(s)}: <strong>{counts.find((c) => c.status === s)?._count ?? 0}</strong></li>
        ))}
      </ul>

      <form method="get" className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto]">
        <div><label className="sr-only" htmlFor="q">Search leads</label><input id="q" name="q" defaultValue={q} placeholder="Search name, email, company, description" className="field" /></div>
        <div><label className="sr-only" htmlFor="status">Status</label><select id="status" name="status" defaultValue={status ?? ""} className="field"><option value="">All statuses</option>{STATUSES.map((s) => <option key={s} value={s}>{label(s)}</option>)}</select></div>
        <div><label className="sr-only" htmlFor="type">Type</label><select id="type" name="type" defaultValue={type ?? ""} className="field"><option value="">All types</option>{TYPES.map((t) => <option key={t} value={t}>{label(t)}</option>)}</select></div>
        <button className="rounded-md bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-hover" type="submit">Filter</button>
      </form>

      {leads.length === 0 ? (
        <p className="mt-10 rounded-lg border border-dashed border-line p-8 text-center text-muted">No leads match. New enquiries from the website forms will appear here.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-panel text-muted"><tr><th className="p-3">Received</th><th className="p-3">Name</th><th className="p-3">Type</th><th className="p-3">Service</th><th className="p-3">Country</th><th className="p-3">Status</th></tr></thead>
            <tbody className="divide-y divide-line">
              {leads.map((l) => (
                <tr key={l.id} className="hover:bg-panel/60">
                  <td className="whitespace-nowrap p-3 text-muted">{l.createdAt.toISOString().slice(0, 16).replace("T", " ")} UTC</td>
                  <td className="p-3"><Link className="font-semibold text-link underline" href={`/admin/leads/${l.id}`}>{l.fullName}</Link><div className="text-muted">{l.email}</div></td>
                  <td className="p-3">{label(l.type)}</td>
                  <td className="p-3">{l.service}</td>
                  <td className="p-3">{l.country}</td>
                  <td className="p-3">{label(l.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <nav aria-label="Pagination" className="mt-6 flex items-center justify-between text-sm text-muted">
        <span>{total} lead{total === 1 ? "" : "s"}. Page {page} of {pages}</span>
        <span className="flex gap-3">
          {page > 1 && <Link className="text-link underline" href={qs(page - 1)}>Previous</Link>}
          {page < pages && <Link className="text-link underline" href={qs(page + 1)}>Next</Link>}
        </span>
      </nav>
    </div>
  );
}
