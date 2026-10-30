"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="rounded-md border border-line px-3 py-2 text-sm font-medium"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="absolute inset-x-0 top-16 border-b border-line bg-ink px-5 py-4">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base text-fg hover:bg-panel">{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/request-quote" onClick={() => setOpen(false)} data-cta="mobile: Request a quote" className="mt-2 block rounded-md bg-brand px-3 py-3 text-center font-semibold text-white">Request a quote</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
