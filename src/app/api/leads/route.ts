import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { leadSchema } from "@/lib/validation";
import { allow } from "@/lib/rate-limit";
import { getClientIp, hashIp } from "@/lib/request";
import { sendLeadNotification } from "@/lib/email";

export const runtime = "nodejs";

const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

async function sendSlackLeadNotification(lead: {
  id: string;
  type: string;
  fullName: string;
  email: string;
  company: string | null;
  country: string;
  service: string;
  description: string;
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return false;

  // Only send to Slack's official incoming-webhook endpoint.
  if (!/^https:\/\/hooks\.slack\.com\/services\//.test(webhookUrl)) {
    console.error("[leads] SLACK_WEBHOOK_URL must be an official Slack webhook URL.");
    return false;
  }

  const message = [
    ":incoming_envelope: *New website inquiry*",
    `*Type:* ${lead.type}`,
    `*Name:* ${lead.fullName}`,
    `*Email:* ${lead.email}`,
    `*Company:* ${lead.company || "Not provided"}`,
    `*Country:* ${lead.country}`,
    `*Service:* ${lead.service}`,
    `*Message:* ${lead.description.slice(0, 2500)}`,
    `*Reference:* ${lead.id.slice(-8).toUpperCase()}`,
  ].join("\n");

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("[leads] Slack notification failed:", response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[leads] Slack notification error:", error instanceof Error ? error.message : "unknown");
    return false;
  }
}

export async function POST(req: Request) {
  try {
    // Same-origin check: browsers send Origin on cross-site POSTs.
    const origin = req.headers.get("origin");
    if (origin) {
      let originHost = "";
      try { originHost = new URL(origin).host; } catch { return json({ ok: false, message: "Request rejected." }, 403); }
      if (originHost !== req.headers.get("host")) return json({ ok: false, message: "Request rejected." }, 403);
    }

    const raw = await req.text();
    if (raw.length > 20_000) return json({ ok: false, message: "Your message is too long." }, 413);

    let body: unknown;
    try { body = JSON.parse(raw); } catch { return json({ ok: false, message: "Invalid request." }, 400); }

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return json({ ok: false, errors: parsed.error.flatten().fieldErrors }, 422);
    }
    const d = parsed.data;

    // Honeypot filled: pretend success so bots learn nothing. Nothing is stored.
    if (d.website_hp) return json({ ok: true, reference: "ok" });

    // Too fast to be a person filling in the form.
    if (Date.now() - d.startedAt < 3000) {
      return json({ ok: false, message: "Please review your details and submit again." }, 400);
    }

    const ipHash = hashIp(getClientIp(req.headers));
    const okHour = await allow(`lead:h:${ipHash}`, 5, 3600);
    const okDay = okHour && (await allow(`lead:d:${ipHash}`, 15, 86400));
    if (!okDay) {
      return json({ ok: false, message: "Too many requests from your connection. Please try again later." }, 429);
    }

    const lead = await prisma.lead.create({
      data: {
        type: d.type,
        fullName: d.fullName,
        email: d.email,
        company: d.company,
        country: d.country,
        service: d.service,
        description: d.description,
        siteUrl: d.siteUrl,
        techStack: d.techStack,
        budget: d.budget,
        timeline: d.timeline,
        preferredTime: d.preferredTime,
        consentAt: new Date(),
        ipHash,
        userAgent: (req.headers.get("user-agent") ?? "").slice(0, 300),
      },
    });

    // Notifications are best-effort: a delivery issue must never lose a saved lead.
    const [emailed, slacked] = await Promise.all([
      sendLeadNotification(lead),
      sendSlackLeadNotification(lead),
    ]);
    if (!emailed) console.warn(`[leads] Lead ${lead.id} saved but notification email was not sent.`);
    if (process.env.SLACK_WEBHOOK_URL && !slacked) {
      console.warn(`[leads] Lead ${lead.id} saved but Slack notification was not sent.`);
    }

    return json({ ok: true, reference: lead.id.slice(-8).toUpperCase() });
  } catch (err) {
    console.error("[leads] Unexpected error:", err instanceof Error ? err.message : "unknown");
    return json({ ok: false, message: "Something went wrong on our side. Please try again shortly." }, 500);
  }
}
