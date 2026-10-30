import { LegalDraftBanner, PageHeader, Prose } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({ title: "Cookie Policy", description: "Which cookies and similar technologies the Innovations Labs website uses, and how to control them.", path: "/cookie-policy" });

export default function Cookies() {
  return (
    <>
      <PageHeader title="Cookie policy" />
      <section className="section"><div className="wrap">
        {!site.legalReviewed && <LegalDraftBanner />}
        <Prose>
          <h2>Essential storage</h2>
          <p>The site stores your cookie choice in your browser (local storage). Administrators signing in to the staff area receive a secure session cookie. Visitors do not receive this cookie.</p>
          <h2>Analytics (optional)</h2>
          <p>If analytics is enabled on this site, Google Analytics cookies are set only after you click &quot;Accept analytics&quot;. If you decline, or make no choice, no analytics scripts are loaded.</p>
          <h2>Changing your choice</h2>
          <p>Clear this site&apos;s stored data in your browser settings and the cookie notice will appear again.</p>
        </Prose>
      </div></section>
    </>
  );
}
