import { PageHeader } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { SERVICE_OPTIONS } from "@/lib/options";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Request a Quote", description: "Tell Innovations Labs what is broken or what you need built and receive a proposed scope and quote.", path: "/request-quote" });

export default function QuotePage({ searchParams }: { searchParams: { service?: string } }) {
  const requested = searchParams.service;
  const defaultService = SERVICE_OPTIONS.find((s) => s === requested);
  return (
    <>
      <PageHeader title="Request a quote" intro="Describe your project. An engineer reads every request and replies with questions or a proposed scope." />
      <section className="section"><div className="wrap max-w-3xl"><LeadForm variant="QUOTE" defaultService={defaultService} /></div></section>
    </>
  );
}
