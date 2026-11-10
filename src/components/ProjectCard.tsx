import Link from "next/link";
import type { Project } from "@/content/en/portfolio";
import { ProjectVisual } from "./ProjectVisual";

export function ExternalProjectLink({ project, className }: { project: Project; className: string }) {
  if (!project.url) return null;
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" data-cta={`project: View ${project.title}`} className={className}>
      View Project
      <span className="sr-only"> {project.title} (opens in a new tab)</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13L13 7M8 7h5v5" /></svg>
    </a>
  );
}

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const btn = "inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors";
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift">
      <ProjectVisual project={project} priority={priority} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-brand">{project.category}</p>
        <h3 className="mt-1.5 text-2xl font-semibold">
          <Link href={`/projects/${project.slug}`} className="hover:text-brand">{project.title}</Link>
        </h3>
        <p className="mt-3 text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} capabilities`}>
          {project.capabilities.map((c) => (
            <li key={c} className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-medium text-muted">{c}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {project.url ? (
            <>
              <ExternalProjectLink project={project} className={`${btn} bg-brand text-white hover:bg-brand-hover`} />
              <Link href={`/projects/${project.slug}`} className={`${btn} text-brand hover:bg-soft`}>Details</Link>
            </>
          ) : (
            <Link href={`/projects/${project.slug}`} className={`${btn} bg-brand text-white hover:bg-brand-hover`} data-cta={`project: Details ${project.title}`}>Project details</Link>
          )}
        </div>
      </div>
    </article>
  );
}
