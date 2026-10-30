import { CtaBand, PageHeader } from "@/components/ui";
import { processSteps } from "@/content/en/general";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Our Process", description: "How Innovations Labs works: from sharing your problem to a written scope, implementation, testing and handover.", path: "/process" });

export default function ProcessPage() {
  return (
    <>
      <PageHeader title="Our process" intro="A predictable sequence so you always know what is happening, what it costs and what you will receive." />
      <section className="section">
        <div className="wrap">
          <ol className="max-w-3xl space-y-0 border-l border-line">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative pb-10 pl-8 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-line bg-ink text-xs font-semibold text-link">{i + 1}</span>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
