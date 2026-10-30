import { CtaBand, PageHeader } from "@/components/ui";
import { industries } from "@/content/en/general";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Industries We Serve", description: "Innovations Labs works with startups, SaaS teams, small businesses, agencies, e-commerce brands and established companies worldwide.", path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <PageHeader title="Industries we serve" intro="Our work is defined by the problem more than the sector. These are the kinds of organisations we are set up to help." />
      <section className="section">
        <div className="wrap">
          <dl className="grid gap-x-12 gap-y-9 md:grid-cols-2">
            {industries.map((i) => (
              <div key={i.title} className="border-l-2 border-line pl-5">
                <dt className="font-display text-xl font-semibold">{i.title}</dt>
                <dd className="mt-2 text-muted">{i.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
