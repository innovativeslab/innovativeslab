import { ButtonLink, PageHeader } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({ title: "Book a Consultation", description: "Book a consultation with an Innovations Labs engineer using our online calendar, or send a consultation request.", path: "/book-consultation" });

export default function ConsultationPage() {
  return (
    <>
      <PageHeader title="Book a consultation" intro="Choose a time that works for you. Your meeting will be scheduled securely through Calendly." />
      <section className="section">
        <div className="wrap max-w-5xl space-y-10">
          <div className="overflow-hidden rounded-xl border border-line bg-panel">
            <div className="flex flex-col gap-3 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Schedule a meeting</h2>
                <p className="mt-2 text-muted">Select an available date and time below.</p>
              </div>
              <ButtonLink href={site.bookingUrl} cta="consultation: open Calendly in new tab" />
            </div>
            <iframe
              src={site.bookingUrl}
              title="Schedule a consultation with Innovations Labs using Calendly"
              width="100%"
              height="760"
              frameBorder="0"
              loading="lazy"
              className="w-full bg-white"
            />
          </div>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-xl font-semibold">Prefer to send a request?</h2>
            <LeadForm variant="CONSULTATION" />
          </div>
        </div>
      </section>
    </>
  );
}
