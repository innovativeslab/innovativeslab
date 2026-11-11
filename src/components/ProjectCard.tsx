import Link from "next/link";
import type { Project } from "@/content/en/portfolio";
import { ProjectVisual } from "./ProjectVisual";

const btn = "inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors";
const primaryBtn = `${btn} bg-brand text-white hover:bg-brand-hover`;
const ghostBtn = `${btn} text-brand hover:bg-soft`;

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13L13 7M8 7h5v5" /></svg>
);

/** External link to the live product. Opens in a new tab with safe rel attributes. Renders nothing without a URL. */
export function ExternalProjectLink({ project, className }: { project: Project; className: string }) {
  if (!project.url) return null;
  const label = project.ctaLabel ?? "View Project";
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" data-cta={`project: ${label} ${project.title}`} className={className}>
      {label}
      <span className="sr-only"> {project.title} (opens in a new tab)</span>
      <ArrowIcon />
    </a>
  );
}

export function GitHubLink({ project, className }: { project: Project; className: string }) {
  if (!project.github) return null;
  return (
    <a href={project.github} target="_blank" rel="noopener noreferrer" data-cta={`project: GitHub ${project.title}`} className={className}>
      GitHub
      <span className="sr-only"> repository for {project.title} (opens in a new tab)</span>
      <ArrowIcon />
    </a>
  );
}

export function ProjectLinks({ project, size = "card" }: { project: Project; size?: "card" | "hero" }) {
  const p = size === "hero" ? "inline-flex items-center rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover" : primaryBtn;
  const g = size === "hero" ? "inline-flex items-center rounded-lg border border-edge bg-card px-5 py-3 font-semibold hover:border-brand hover:text-brand" : ghostBtn;
  return (
    <>
      {project.url ? (
        <>
          <ExternalProjectLink project={project} className={p} />
          <Link href={`/projects/${project.slug}`} className={g}>Details</Link>
        </>
      ) : (
        <Link href={`/projects/${project.slug}`} className={p} data-cta={`project: Details ${project.title}`}>Project details</Link>
      )}
      <GitHubLink project={project} className={g} />
    </>
  );
}

function Chips({ project }: { project: Project }) {
  return (
    <>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} capabilities`}>
        {project.capabilities.slice(0, 4).map((c) => (
          <li key={c} className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-medium text-muted">{c}</li>
        ))}
      </ul>
      {project.technologies && (
        <p className="mt-3 text-xs text-muted"><span className="font-semibold text-fg">Built with:</span> {project.technologies.join(", ")}</p>
      )}
    </>
  );
}

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift">
      <ProjectVisual project={project} priority={priority} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-brand">{project.category}</p>
        <h3 className="mt-1.5 text-2xl font-semibold">
          <Link href={`/projects/${project.slug}`} className="hover:text-brand">{project.title}</Link>
        </h3>
        <p className="mt-3 text-muted">{project.summary}</p>
        <Chips project={project} />
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6"><ProjectLinks project={project} /></div>
      </div>
    </article>
  );
}

/** Large card for the single featured project. */
export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-brand/20 bg-card shadow-lift lg:grid-cols-2">
      <ProjectVisual project={project} priority className="lg:aspect-auto lg:h-full lg:border-b-0 lg:border-r" />
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Featured product</span>
          {project.status && <span className="rounded-full border border-ok/40 bg-ok/10 px-3 py-1 text-xs font-semibold text-ok">{project.status}</span>}
        </div>
        <p className="mt-5 text-sm font-semibold text-brand">{project.category}</p>
        <h3 className="mt-1.5 text-3xl font-bold sm:text-4xl">
          <Link href={`/projects/${project.slug}`} className="hover:text-brand">{project.title}</Link>
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} capabilities`}>
          {project.capabilities.map((c) => (
            <li key={c} className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-medium text-muted">{c}</li>
          ))}
        </ul>
        {project.role && <p className="mt-5 text-sm text-muted"><span className="font-semibold text-fg">Role:</span> {project.role}</p>}
        <div className="mt-7 flex flex-wrap items-center gap-3"><ProjectLinks project={project} size="hero" /></div>
      </div>
    </article>
  );
}
