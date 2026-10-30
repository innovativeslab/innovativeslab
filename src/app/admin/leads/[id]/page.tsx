import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { addNoteAction, deleteLeadAction, updateStatusAction } from "../../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Lead", robots: { index: false, follow: false } };

const STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "WON", "LOST"] as const;
const label = (s: string) => s.replace("_", " ").toLowerCase().replace(/^./, (c) => c.toUpperCase());

export default async function LeadPage({ params }: { params: { id: string } }) {
  await requireAdmin();
  const lead = await prisma.lead.findUnique({ where: { id: params.id }, include: { notes: { orderBy: { createdAt: "desc" } } } });
  if (!lead) notFound();

  const rows: [string, string | null][] = [
    ["Type", label(lead.type)], ["Email", lead.email], ["Company", lead.company], ["Country or region", lead.country],
    ["Service", lead.service], ["Budget", lead.budget], ["Timeline", lead.timeline], ["Preferred time", lead.preferredTime],
    ["URL", lead.siteUrl], ["Stack", lead.techStack], ["Received", lead.createdAt.toISOString()], ["Consent recorded", lead.consentAt.toISOString()],
  ];

  return (
    <div className="wrap max-w-4xl py-10">
      <Link href="/admin" className="text-sm text-link underline">Back to leads</Link>
      <h1 className="mt-4 text-3xl font-bold">{lead.fullName}</h1>

      <form action={updateStatusAction} className="mt-6 flex flex-wrap items-end gap-3">
        <input type="hidden" name="id" value={lead.id} />
        <div><label className="label" htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue={lead.status} className="field">{STATUSES.map((s) => <option key={s} value={s}>{label(s)}</option>)}</select></div>
        <button type="submit" className="rounded-md bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-hover">Update status</button>
      </form>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {rows.filter(([, v]) => v).map(([k, v]) => (<div key={k}><dt className="text-sm text-muted">{k}</dt><dd className="break-words">{v}</dd></div>))}
      </dl>

      <h2 className="mt-10 text-xl font-semibold">Description</h2>
      <p className="mt-2 whitespace-pre-wrap rounded-lg border border-line bg-panel p-5 text-muted">{lead.description}</p>

      <h2 className="mt-10 text-xl font-semibold">Internal notes</h2>
      <form action={addNoteAction} className="mt-3 space-y-3">
        <input type="hidden" name="id" value={lead.id} />
        <div><label className="sr-only" htmlFor="body">Add a note</label><textarea id="body" name="body" rows={3} required maxLength={3000} className="field" placeholder="Add a note" /></div>
        <button type="submit" className="rounded-md border border-line px-4 py-2 text-sm hover:border-link">Add note</button>
      </form>
      {lead.notes.length === 0 ? <p className="mt-4 text-sm text-muted">No notes yet.</p> : (
        <ul className="mt-4 space-y-3">{lead.notes.map((n) => (
          <li key={n.id} className="rounded-lg border border-line bg-panel p-4"><p className="whitespace-pre-wrap">{n.body}</p><p className="mt-2 text-xs text-muted">{n.author}, {n.createdAt.toISOString().slice(0, 16).replace("T", " ")} UTC</p></li>
        ))}</ul>
      )}

      <form action={deleteLeadAction} className="mt-14 border-t border-line pt-6">
        <input type="hidden" name="id" value={lead.id} />
        <button type="submit" className="rounded-md border border-bad/60 px-4 py-2 text-sm text-bad hover:bg-bad/10">Delete this lead permanently</button>
        <p className="mt-2 text-xs text-muted">Use to honour deletion requests and keep stored data to a minimum. This cannot be undone.</p>
      </form>
    </div>
  );
}
