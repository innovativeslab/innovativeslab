import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink, CheckList, CtaBand, PageHeader } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { getService, services } from "@/content/en/services";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return buildMetadata({ title: s.title, description: s.seoDescription, path: `/services/${s.slug}` });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const related = s.related.map((r) => getService(r)).filter((x): x is NonNullable<typeof x> => !!x);
  const quoteHref = `/request-quote?service=${encodeURIComponent(s.title)}`;

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.seoDescription, provider: { "@type": "ProfessionalService", name: site.name, url: site.url }, areaServed: "Worldwide", url: `${site.url}/services/${s.slug}` }} />
      <PageHeader title={s.headline} intro={s.intro}>
        <ButtonLink href={quoteHref} cta={`service-${s.slug}: Request a quote`}>Request a quote</ButtonLink>
        <ButtonLink href="/book-consultation" variant="secondary" cta={`service-${s.slug}: Book a consultation`}>Book a consultation</ButtonLink>
      </PageHeader>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What is included</h2>
            <div className="mt-5"><CheckList items={s.includes} /></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What you can expect</h2>
            <div className="mt-5"><CheckList items={s.benefits} /></div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-panel/40">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What you receive</h2>
            <div className="mt-5"><CheckList items={s.deliverables} /></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Who this is for</h2>
            <div className="mt-5"><CheckList items={s.bestFor} /></div>
            {s.note && <p className="mt-8 rounded-md border border-line bg-panel p-4 text-sm text-muted">{s.note}</p>}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="wrap">
          <h2 className="text-2xl font-bold">Related services</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}`} className="block h-full rounded-lg border border-line bg-panel p-5 hover:border-link">
                  <span className="font-display text-lg font-semibold">{r.nav}</span>
                  <span className="mt-2 block text-sm text-muted">{r.summary}</span>
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
