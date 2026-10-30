import { ButtonLink, PageHeader } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({ title: "Book a Consultation", description: "Request a consultation with an Innovations Labs engineer to discuss your project.", path: "/book-consultation" });

export default function ConsultationPage() {
  return (
    <>
      <PageHeader title="Book a consultation" intro="A conversation with an engineer about your project, your options and what a sensible next step looks like." />
      <section className="section">
        <div className="wrap max-w-3xl space-y-10">
          {site.bookingUrl && (
            <div className="rounded-lg border border-line bg-panel p-6">
              <h2 className="text-xl font-semibold">Pick a time directly</h2>
              <p className="mt-2 text-muted">Choose an available slot in our calendar.</p>
              <div className="mt-5"><ButtonLink href={site.bookingUrl} cta="consultation: open calendar">Open calendar</ButtonLink></div>
            </div>
          )}
          <div>
            <h2 className="mb-6 text-xl font-semibold">{site.bookingUrl ? "Or request a time by form" : "Request a consultation"}</h2>
            <LeadForm variant="CONSULTATION" />
          </div>
        </div>
      </section>
    </>
  );
}
