const rows = [
  { state: "Found", tone: "text-warn", text: "Sign-in returns a server error after deploy" },
  { state: "Traced", tone: "text-link", text: "Callback URL and environment variable mismatch" },
  { state: "Fixed", tone: "text-ok", text: "Configuration corrected, session handling cleaned up" },
  { state: "Tested", tone: "text-ok", text: "Sign-up, sign-in and sign-out checked in two browsers" },
];

export function HeroVisual() {
  return (
    <figure aria-label="Illustrative example of a rescue assessment" className="relative">
      <div className="rounded-xl border border-line bg-panel shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="font-display text-sm font-semibold">Rescue assessment</span>
          <span className="rounded border border-line px-2 py-0.5 text-xs text-muted">Illustrative example</span>
        </div>
        <ul className="divide-y divide-line">
          {rows.map((r, i) => (
            <li key={r.state} className="reveal flex items-start gap-4 px-4 py-4" style={{ animationDelay: `${i * 140}ms` }}>
              <span className={`w-16 shrink-0 text-sm font-semibold ${r.tone}`}>{r.state}</span>
              <span className="text-sm text-muted">{r.text}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-line px-4 py-3 text-xs text-muted">
          An engineer reviews each finding before and after the change.
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted">Sample of how findings are reported. Not a real client project.</figcaption>
    </figure>
  );
}
