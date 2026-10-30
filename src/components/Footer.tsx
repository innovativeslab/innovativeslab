import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/content/en/services";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted">{site.tagline}</p>
          {site.contactEmail && (
            <p className="mt-4 text-sm"><a className="text-link underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
          )}
          {site.socials.length > 0 && (
            <ul className="mt-3 flex gap-4 text-sm">
              {site.socials.map((s) => (
                <li key={s.label}><a className="text-link underline" href={s.href} rel="noopener noreferrer" target="_blank">{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>
        <nav aria-label="Services" className="md:col-span-2">
          <h2 className="text-sm font-semibold text-fg">Services</h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}><Link className="hover:text-fg" href={`/services/${s.slug}`}>{s.nav}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h2 className="text-sm font-semibold text-fg">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[["/industries", "Industries we serve"], ["/process", "Our process"], ["/projects", "Projects"], ["/about", "About us"], ["/contact", "Contact us"], ["/book-consultation", "Book a consultation"], ["/faq", "FAQ"]].map(([h, l]) => (
              <li key={h}><Link className="hover:text-fg" href={h!}>{l}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Innovations Labs. All rights reserved.</p>
          <ul className="flex gap-5">
            <li><Link className="hover:text-fg" href="/privacy-policy">Privacy</Link></li>
            <li><Link className="hover:text-fg" href="/terms-of-service">Terms</Link></li>
            <li><Link className="hover:text-fg" href="/cookie-policy">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
