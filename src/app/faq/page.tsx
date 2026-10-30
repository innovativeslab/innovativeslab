import { CtaBand, PageHeader } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/content/en/general";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Frequently Asked Questions", description: "Answers about fixing vibe-coded apps, working with existing code, pricing, timelines, confidentiality, ownership and support.", path: "/faq" });

export default function FaqPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHeader title="Frequently asked questions" />
      <section className="section"><div className="wrap max-w-4xl"><FaqList items={faqs} /></div></section>
      <CtaBand />
    </>
  );
}
