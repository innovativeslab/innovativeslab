import { CtaBand, PageHeader } from "@/components/ui";
import { whyUs } from "@/content/en/general";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "About Us", description: "Innovations Labs is a human-led software engineering company helping clients worldwide fix, build and maintain software.", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Innovations Labs" intro="We are a software engineering company that solves technical problems for clients around the world." />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted">
            <p>Innovations Labs exists for people who have a technical problem and need a capable person to take responsibility for it: a prototype that will not behave in production, a site that is slow, a project a previous developer left unfinished.</p>
            <p>Our work is human-led. Engineers read the code, make the technical decisions, write and review the changes, and test the results. We communicate in plain language and we are honest about what is feasible, including when the answer is that something should be rebuilt.</p>
            <p>We work remotely with startups, founders, small businesses, agencies and established companies across many countries.</p>
          </div>
          <dl className="space-y-6">
            {whyUs.map((w) => (
              <div key={w.title} className="border-l-2 border-line pl-5">
                <dt className="font-display text-lg font-semibold">{w.title}</dt>
                <dd className="mt-1 text-muted">{w.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
