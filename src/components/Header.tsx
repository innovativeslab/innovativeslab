import Link from "next/link";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/services/vibe-coded-project-rescue", label: "App rescue" },
  { href: "/process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" aria-label="Innovations Labs home"><Logo /></Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-fg">{l.label}</Link>
          ))}
          <Link href="/request-quote" data-cta="header: Request a quote" className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover">Request a quote</Link>
        </nav>
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
