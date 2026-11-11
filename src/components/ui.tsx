import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href, children, variant = "primary", cta,
}: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "inverse" | "inverse-outline"; cta?: string }) {
  const base = "inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-sm hover:bg-brand-hover"
      : variant === "inverse"
        ? "bg-white text-brand-deep hover:bg-soft"
        : variant === "inverse-outline"
          ? "border border-white/70 text-white hover:bg-white/10"
          : "border border-edge bg-card text-fg hover:border-brand hover:text-brand";
  return (
    <Link href={href} className={`${base} ${styles}`} data-cta={cta ?? String(children)}>
      {children}
    </Link>
  );
}

export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="hero-glow border-b border-line bg-soft">
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

type Action = { label: string; href: string };

export function CtaBand({
  title = "Let's Get Your Project Working.",
  text = "Tell us what's broken, what needs building, or where you need technical support.",
  button = "Start Your Project",
  href = "/request-quote",
  secondary = { label: "Book a Consultation", href: "/book-consultation" },
}: { title?: string; text?: string; button?: string; href?: string; secondary?: Action | null }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-deep p-8 text-white sm:p-14">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-50">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={href} variant="inverse" cta={`cta-band: ${button}`}>{button}</ButtonLink>
              {secondary && <ButtonLink href={secondary.href} variant="inverse-outline" cta={`cta-band: ${secondary.label}`}>{secondary.label}</ButtonLink>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Compact in-page call to action, placed directly after a content section. */
export function SectionCta({ title, text, primary, secondary }: { title: string; text?: string; primary: Action; secondary?: Action }) {
  return (
    <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand/20 bg-gradient-to-r from-blue-50 to-white p-6 sm:flex-row sm:items-center sm:p-8">
      <div className="max-w-xl">
        <p className="font-display text-xl font-semibold sm:text-2xl">{title}</p>
        {text && <p className="mt-1 text-muted">{text}</p>}
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <ButtonLink href={primary.href} cta={`section-cta: ${primary.label}`}>{primary.label}</ButtonLink>
        {secondary && <ButtonLink href={secondary.href} variant="secondary" cta={`section-cta: ${secondary.label}`}>{secondary.label}</ButtonLink>}
      </div>
    </div>
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
