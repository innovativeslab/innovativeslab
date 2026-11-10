import { CtaBand, PageHeader } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/en/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work: Projects and Case Studies",
  description: "Selected projects: FunnelBeam, TuneRegistry, MENT and Cheetay Food Delivery, spanning sales intelligence, music publishing, relationship intelligence and food delivery.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our work" intro="Selected projects across sales intelligence, music publishing, relationship intelligence and food delivery." />
      <section className="section">
        <div className="wrap">
          <ul className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (<li key={p.slug}><ProjectCard project={p} priority={i < 2} /></li>))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm text-muted">Project names and products belong to their respective owners. Illustrations are original graphics and not screenshots of the products.</p>
        </div>
      </section>
      <CtaBand title="Have a project like these in mind?" text="Tell us what you want to build or fix." button="Start a Project" />
    </>
  );
}
