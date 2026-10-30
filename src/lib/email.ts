type LeadEmail = {
  id: string;
  type: string;
  fullName: string;
  email: string;
  company?: string | null;
  country: string;
  service: string;
  description: string;
  siteUrl?: string | null;
  techStack?: string | null;
  budget?: string | null;
  timeline?: string | null;
  preferredTime?: string | null;
};

const clean = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 150);

/** Sends a plain-text notification through Resend's REST API. Returns false (never throws) on failure. */
export async function sendLeadNotification(lead: LeadEmail): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !to || !from) {
    console.warn("[email] Notification skipped: RESEND_API_KEY, EMAIL_FROM or LEAD_NOTIFY_EMAIL not set.");
    return false;
  }

  const lines = [
    `New ${lead.type.toLowerCase()} request (ref ${lead.id})`,
    "",
    `Name: ${lead.fullName}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || "-"}`,
    `Country/region: ${lead.country}`,
    `Service: ${lead.service}`,
    `Budget: ${lead.budget || "-"}`,
    `Timeline: ${lead.timeline || "-"}`,
    `Preferred time: ${lead.preferredTime || "-"}`,
    `URL: ${lead.siteUrl || "-"}`,
    `Stack: ${lead.techStack || "-"}`,
    "",
    "Description:",
    lead.description,
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: clean(`[Innovations Labs] ${lead.type}: ${lead.fullName} - ${lead.service}`),
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("[email] Resend responded with status", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] Send failed:", err instanceof Error ? err.message : "unknown error");
    return false;
  }
}
