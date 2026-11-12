import { CtaBand, PageHeader } from "@/components/ui";
import { FeaturedProjectCard } from "@/components/ProjectCard";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { featuredProject, otherProjects, projects } from "@/content/en/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work: Products, Platforms and Case Studies",
  description: `Selected work including ${projects.slice(0, 4).map((p) => p.title).join(", ")} and more, across marketing, marketplaces, identity and data platforms.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our work" intro="Products and platforms across social media, sales intelligence, marketplaces, identity verification, music publishing and analytics." />
      <section className="section">
        <div className="wrap">
          {featuredProject && <FeaturedProjectCard project={featuredProject} />}
          <h2 className="mb-8 mt-16 text-2xl font-bold sm:text-3xl">All projects</h2>
          <PortfolioGrid projects={otherProjects} />
          <p className="mt-10 max-w-2xl text-sm text-muted">Project names and products belong to their respective owners. Illustrations are original graphics and not screenshots of the products.</p>
        </div>
      </section>
      <CtaBand title="Have a project like these in mind?" text="Tell us what you want to build or fix." button="Start a Project" />
    </>
  );
}
