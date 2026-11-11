"use client";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectGroups, type Project, type ProjectGroup } from "@/content/en/portfolio";

/** Filterable project grid. Without JavaScript every project is shown. */
export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectGroup | "All">("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.group === active);
  const count = (g: ProjectGroup | "All") => (g === "All" ? projects.length : projects.filter((p) => p.group === g).length);
  const tabs: (ProjectGroup | "All")[] = ["All", ...projectGroups.filter((g) => count(g) > 0)];

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const on = t === active;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${on ? "border-brand bg-brand text-white" : "border-edge bg-card text-fg hover:border-brand hover:text-brand"}`}
            >
              {t} <span className={on ? "text-blue-100" : "text-muted"}>({count(t)})</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" role="status" aria-live="polite">Showing {shown.length} project{shown.length === 1 ? "" : "s"}</p>
      <ul className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((p) => (<li key={p.slug}><ProjectCard project={p} /></li>))}
      </ul>
    </div>
  );
}
