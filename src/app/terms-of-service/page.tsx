import { LegalDraftBanner, PageHeader, Prose } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({ title: "Terms of Service", description: "Terms governing use of the Innovations Labs website and how project engagements are agreed.", path: "/terms-of-service" });

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms of service" />
      <section className="section"><div className="wrap">
        {!site.legalReviewed && <LegalDraftBanner />}
        <Prose>
          <p>These terms govern your use of this website. [Legal entity name and jurisdiction: to be completed by the business owner.]</p>
          <h2>Use of the website</h2>
          <p>You agree to use the site lawfully and not to attempt to disrupt it, probe it for vulnerabilities without permission, or submit unlawful or misleading content through our forms.</p>
          <h2>Quotes and engagements</h2>
          <p>Information on this website is general and is not an offer. Project work is governed by a written proposal or agreement that sets out scope, price, timeline, ownership of deliverables, confidentiality and support terms. Submitting a form does not create a contract.</p>
          <h2>No guarantees of outcome</h2>
          <p>We cannot confirm that a project can be repaired or completed until we have assessed it.</p>
          <h2>Third-party names</h2>
          <p>Product and tool names mentioned on this site belong to their respective owners. Innovations Labs is not affiliated with them.</p>
          <h2>Liability and governing law</h2>
          <p>[Limitation of liability and governing law clauses: to be drafted with legal advice.]</p>
        </Prose>
      </div></section>
    </>
  );
}
