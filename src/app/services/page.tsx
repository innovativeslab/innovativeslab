import Link from "next/link";
import { PageHeader, CtaBand } from "@/components/ui";
import { services } from "@/content/en/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Engineering Services",
  description: "App rescue, website and web application development, bug fixing, QA, backend and API work, e-commerce, maintenance and technical consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" intro="Practical engineering for businesses that need software to work. Each service has its own page with what is included and what you receive." />
      <section className="section">
        <div className="wrap">
          <ul className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="block h-full rounded-lg border border-line bg-panel p-7 transition-colors hover:border-link">
                  <h2 className="text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.summary}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-link">View {s.nav.toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
