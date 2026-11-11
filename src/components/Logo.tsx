export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
      <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7" fill="none">
        <circle cx="7" cy="7" r="3.2" stroke="#2563EB" strokeWidth="2" />
        <circle cx="21" cy="21" r="3.2" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="21" cy="7" r="2" fill="#2563EB" />
        <path d="M9.8 8.6L18.4 19.4M10.2 7H19" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      </svg>
      Innovations Labs
    </span>
  );
}
