import { CtaBand, PageHeader } from "@/components/ui";
import { demoProjects } from "@/content/en/general";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Projects and Case Studies", description: "Demonstration project concepts showing how Innovations Labs approaches typical software problems. Client case studies will be added with permission.", path: "/projects" });

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects and case studies" intro="We have not yet published client case studies. When we have permission to share real work and verified outcomes, it will appear here." />
      <section className="section">
        <div className="wrap">
          <div role="note" className="mb-10 rounded-md border border-warn/50 bg-warn/10 p-4 text-warn">
            The projects below are demonstration concepts created to show our approach. They are not real client work and contain no real results.
          </div>
          <ul className="grid gap-6 lg:grid-cols-3">
            {demoProjects.map((p) => (
              <li key={p.title} className="flex flex-col rounded-lg border border-dashed border-line bg-panel p-7">
                <p className="w-fit rounded border border-warn/60 px-2 py-0.5 text-xs font-semibold text-warn">Demo concept, not client work</p>
                <h2 className="mt-4 text-2xl font-semibold">{p.title}</h2>
                <p className="mt-1 text-sm text-link">{p.stack}</p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div><dt className="font-semibold">The problem</dt><dd className="mt-1 text-muted">{p.problem}</dd></div>
                  <div><dt className="font-semibold">The approach</dt><dd className="mt-1 text-muted">{p.approach}</dd></div>
                  <div><dt className="font-semibold">What it shows</dt><dd className="mt-1 text-muted">{p.shows}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
