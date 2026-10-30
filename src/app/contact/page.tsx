import { PageHeader } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({ title: "Contact Us", description: "Get in touch with Innovations Labs about a project, a problem or a question.", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" intro="Send a message and we will reply by email.">
        {site.contactEmail && <p className="text-muted">Email: <a className="text-link underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>}
      </PageHeader>
      <section className="section"><div className="wrap max-w-3xl"><LeadForm variant="CONTACT" /></div></section>
    </>
  );
}
