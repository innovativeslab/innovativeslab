import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckList, CtaBand } from "@/components/ui";
import { ExternalProjectLink } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProject, projects } from "@/content/en/portfolio";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.title}: ${p.category}`, description: p.summary, path: `/projects/${p.slug}` });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== p.slug);
  return (
    <>
      <header className="hero-glow border-b border-line bg-soft">
        <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <Link href="/projects" className="text-sm font-semibold text-brand hover:underline">All projects</Link>
            <p className="mt-6 text-sm font-semibold text-brand">{p.category}</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{p.title}</h1>
            <p className="lede mt-5">{p.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalProjectLink project={p} className="inline-flex items-center rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover" />
              <Link href="/request-quote" className="inline-flex items-center rounded-lg border border-edge bg-card px-5 py-3 font-semibold hover:border-brand hover:text-brand" data-cta={`project-${p.slug}: Start a similar project`}>Discuss a similar project</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-line shadow-lift"><ProjectVisual project={p} priority /></div>
        </div>
      </header>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">About the project</h2>
            <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
            {p.role && (<><h2 className="mt-10 text-2xl font-bold">Our role</h2><p className="mt-4 leading-relaxed text-muted">{p.role}</p></>)}
          </div>
          <div>
            <h2 className="text-2xl font-bold">Capabilities</h2>
            <div className="mt-5"><CheckList items={p.capabilities} /></div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-soft">
        <div className="wrap">
          <h2 className="text-2xl font-bold">More projects</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/projects/${o.slug}`} className="block h-full rounded-xl border border-line bg-card p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="font-display text-lg font-semibold">{o.title}</span>
                  <span className="mt-1 block text-sm text-muted">{o.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title={`Want something like ${p.title}?`} text="Tell us what you want to build or fix." button="Start a Project" />
    </>
  );
}
