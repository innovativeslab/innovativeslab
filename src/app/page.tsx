import Link from "next/link";
import { ButtonLink, CtaBand, SectionHead } from "@/components/ui";
import { HeroVisual } from "@/components/HeroVisual";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/content/en/services";
import { projects } from "@/content/en/portfolio";
import { faqs, problems, processSteps, trustPoints, whyUs } from "@/content/en/general";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Human-led software engineering and app rescue",
  description: "Innovations Labs helps businesses worldwide fix broken apps, rescue vibe-coded projects and build reliable websites and web applications.",
  path: "/",
});

// Only capabilities we list in our services. Add to this list when a new service is added.
const capabilities = [
  { area: "Frontend", items: ["React", "Next.js", "TypeScript", "Responsive and accessible interfaces"] },
  { area: "Backend and APIs", items: ["REST APIs", "Third-party integrations", "Authentication", "Payment integrations"] },
  { area: "Data", items: ["Database design", "PostgreSQL", "Migrations", "Data validation"] },
  { area: "Quality", items: ["Functional and regression testing", "Cross-browser testing", "Bug reproduction", "Pre-launch checks"] },
  { area: "Delivery and support", items: ["Deployment", "Security patching", "Monitoring", "Ongoing maintenance"] },
];

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, url: site.url, description: "Software engineering, app rescue, bug fixing and web development for clients worldwide.", areaServed: "Worldwide" }} />

      <section className="hero-glow border-b border-line">
        <div className="wrap grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">Your Technical Problems. Our Expertise. Real Solutions.</h1>
            <p className="lede mt-6">From broken vibe-coded apps to custom websites and complex software challenges, Innovations Labs helps businesses worldwide turn technical roadblocks into reliable digital products.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/request-quote" cta="hero: Discuss Your Project">Discuss Your Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary" cta="hero: Explore Our Services">Explore Our Services</ButtonLink>
            </div>
            <p className="mt-8 text-sm text-muted">Human-led engineering. Clear scope. Worldwide remote collaboration.</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-x-6">
            <SectionHead title="Selected projects" intro="Platforms across sales intelligence, music publishing, relationship intelligence and food delivery." />
            <div className="mb-10"><ButtonLink href="/projects" variant="secondary" cta="home: View all projects">View all projects</ButtonLink></div>
          </div>
          <ul className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (<li key={p.slug}><ProjectCard project={p} priority={i < 2} /></li>))}
          </ul>
        </div>
      </section>

      <section className="section border-y border-line bg-soft">
        <div className="wrap">
          <SectionHead title="Services" intro="Pick the one that fits, or start with an assessment if you are not sure." />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="block h-full rounded-xl border border-line bg-card p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift">
                  <h3 className="text-xl font-semibold">{s.nav}</h3>
                  <p className="mt-2 text-muted">{s.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more<span className="sr-only"> about {s.nav.toLowerCase()}</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Technical capabilities" intro="The technologies and disciplines our services are built on." />
          <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((c) => (
              <div key={c.area} className="bg-card p-6">
                <dt className="font-display text-lg font-semibold">{c.area}</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5 text-sm text-muted">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section border-y border-line bg-soft">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Built something with Lovable, Bolt, Replit or Cursor that is not quite working?</h2>
            <p className="lede mt-5">Submit your existing project for a technical assessment. An engineer reviews the code, tells you what is wrong and what it would take to fix and finish it, then debugs and completes the work if you choose to go ahead.</p>
            <p className="mt-4 text-sm text-muted">We do not promise every project can be rescued before we have seen it.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/request-quote" cta="rescue: Submit your project">Submit your project</ButtonLink>
              <ButtonLink href="/services/vibe-coded-project-rescue" variant="secondary" cta="rescue: How rescue works">How rescue works</ButtonLink>
            </div>
          </div>
          <ul className="grid content-center gap-3 sm:grid-cols-2">
            {["Debugging broken apps", "Authentication and database fixes", "API and integration repairs", "Deployment and hosting problems", "Completing unfinished features", "Production-readiness review"].map((i) => (
              <li key={i} className="rounded-lg border border-line bg-card px-4 py-3 text-fg shadow-card">{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Sound familiar?" intro="These are the situations clients usually arrive with, and how we approach each one." />
          <div className="divide-y divide-line rounded-xl border border-line bg-card shadow-card">
            {problems.map((p) => (
              <div key={p.problem} className="grid gap-2 p-6 md:grid-cols-2 md:gap-10">
                <p className="font-display text-xl font-semibold">{p.problem}</p>
                <p className="text-muted">{p.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-soft">
        <div className="wrap">
          <SectionHead title="How we work" intro="Six steps, in this order, on every project." />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-line bg-card p-6 shadow-card">
                <span className="font-display text-sm font-semibold text-brand">Step {i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHead title="What working with us looks like" intro="No inflated claims. These are the commitments we build every project around." />
            <dl className="space-y-6">
              {trustPoints.map((t) => (
                <div key={t.title} className="border-l-2 border-brand/30 pl-5">
                  <dt className="font-display text-lg font-semibold">{t.title}</dt>
                  <dd className="mt-1 text-muted">{t.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHead title="Why choose Innovations Labs" />
            <dl className="space-y-6">
              {whyUs.map((w) => (
                <div key={w.title} className="border-l-2 border-cyan/60 pl-5">
                  <dt className="font-display text-lg font-semibold">{w.title}</dt>
                  <dd className="mt-1 text-muted">{w.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-soft">
        <div className="wrap">
          <SectionHead title="Frequently asked questions" />
          <FaqList items={faqs} />
          <div className="mt-6"><Link className="font-semibold text-brand underline" href="/faq">See all questions</Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
