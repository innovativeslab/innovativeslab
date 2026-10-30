export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-panel">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold">
            {f.q}
            <span aria-hidden="true" className="mt-1 text-link transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
