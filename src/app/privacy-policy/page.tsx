import { LegalDraftBanner, PageHeader, Prose } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({ title: "Privacy Policy", description: "How Innovations Labs collects, uses and protects personal information submitted through this website.", path: "/privacy-policy" });

export default function Privacy() {
  return (
    <>
      <PageHeader title="Privacy policy" />
      <section className="section"><div className="wrap">
        {!site.legalReviewed && <LegalDraftBanner />}
        <Prose>
          <p>This policy explains how Innovations Labs handles personal information collected through this website. [Legal entity name, registered address and data controller contact: to be completed by the business owner.]</p>
          <h2>Information we collect</h2>
          <ul>
            <li>Details you submit in quote, consultation and contact forms: name, email, company, country or region, project description, optional URL, technology stack, budget and timeline.</li>
            <li>A keyed hash of your IP address and your browser user-agent, used for spam prevention and rate limiting. We do not store your raw IP address in our lead records.</li>
            <li>If you accept analytics cookies, usage data collected by Google Analytics.</li>
          </ul>
          <h2>How we use it</h2>
          <p>To respond to your request, prepare proposals, keep records of enquiries, and protect the site from abuse. We do not sell personal information.</p>
          <h2>Where it is stored and who processes it</h2>
          <p>Enquiries are stored in a managed database and notification emails are sent through an email provider. [List the actual providers and their regions before launch.]</p>
          <h2>Retention</h2>
          <p>[Retention period to be set by the business owner, for example deletion of unconverted enquiries after a defined period.]</p>
          <h2>Your rights</h2>
          <p>Depending on where you live, you may have rights to access, correct, delete or restrict use of your personal information, and to object to processing or withdraw consent. To exercise them, contact us{site.contactEmail ? <> at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></> : " using the contact page"}.</p>
          <h2>Changes</h2>
          <p>We may update this policy and will change the date below when we do. Last updated: [date to be set at launch].</p>
        </Prose>
      </div></section>
    </>
  );
}
