import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href, children, variant = "primary", cta,
}: { href: string; children: ReactNode; variant?: "primary" | "secondary"; cta?: string }) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold transition-colors";
  const styles = variant === "primary"
    ? "bg-brand text-white hover:bg-brand-hover"
    : "border border-line text-fg hover:border-link hover:text-link";
  return (
    <Link href={href} className={`${base} ${styles}`} data-cta={cta ?? String(children)}>
      {children}
    </Link>
  );
}

export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="border-b border-line bg-panel/40">
      <div className="wrap py-14 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        {intro && <p className="lede mt-5">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}

export function SectionHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {intro && <p className="lede mt-4">{intro}</p>}
    </div>
  );
}

export function CtaBand({ title = "Let's Get Your Project Working.", text = "Tell us what's broken, what needs building, or where you need technical support.", button = "Start Your Project", href = "/request-quote" }: { title?: string; text?: string; button?: string; href?: string }) {
  return (
    <section className="section border-t border-line">
      <div className="wrap">
        <div className="rounded-xl border border-line bg-gradient-to-br from-raised to-panel p-8 sm:p-12">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="lede mt-4">{text}</p>
          <div className="mt-8"><ButtonLink href={href} cta={`cta-band: ${button}`}>{button}</ButtonLink></div>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-muted">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-link" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10.5l4 4 8-9" /></svg>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-5 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-fg [&_a]:text-link [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">{children}</div>;
}

export function LegalDraftBanner() {
  return (
    <div role="note" className="mb-8 rounded-md border border-warn/50 bg-warn/10 p-4 text-sm text-warn">
      Draft template. This page has not yet been reviewed by a lawyer and must be reviewed and completed before launch.
    </div>
  );
}
