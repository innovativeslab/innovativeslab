import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { leadSchema } from "@/lib/validation";
import { allow } from "@/lib/rate-limit";
import { getClientIp, hashIp } from "@/lib/request";
import { sendLeadNotification } from "@/lib/email";

export const runtime = "nodejs";

const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

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

    // Email failure must never lose the lead; it is already saved.
    const emailed = await sendLeadNotification(lead);
    if (!emailed) console.warn(`[leads] Lead ${lead.id} saved but notification email was not sent.`);

    return json({ ok: true, reference: lead.id.slice(-8).toUpperCase() });
  } catch (err) {
    console.error("[leads] Unexpected error:", err instanceof Error ? err.message : "unknown");
    return json({ ok: false, message: "Something went wrong on our side. Please try again shortly." }, 500);
  }
}
