"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { BUDGETS, SERVICE_OPTIONS, TIMELINES } from "@/lib/options";
import { trackEvent } from "@/lib/analytics";

type Variant = "QUOTE" | "CONSULTATION" | "CONTACT";
type FieldErrors = Record<string, string[] | undefined>;

export function LeadForm({ variant, defaultService }: { variant: Variant; defaultService?: string }) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");

  const isQuote = variant === "QUOTE";
  const isConsult = variant === "CONSULTATION";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "");
    const payload = {
      type: variant,
      fullName: get("fullName"),
      email: get("email"),
      company: get("company"),
      country: get("country"),
      service: variant === "CONTACT" ? "Not sure / other" : get("service"),
      description: get("description"),
      siteUrl: get("siteUrl"),
      techStack: get("techStack"),
      budget: get("budget") || undefined,
      timeline: get("timeline") || undefined,
      preferredTime: get("preferredTime"),
      consent: fd.get("consent") === "on",
      website_hp: get("website_hp"),
      startedAt: startedAt.current,
    };

    setStatus("sending");
    setErrors({});
    setMessage("");
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setReference(data.reference ?? "");
        setStatus("done");
        trackEvent(isConsult ? "consultation_request" : "generate_lead", { form: variant });
        return;
      }
      setErrors(data.errors ?? {});
      setMessage(data.message ?? "We could not send your request. Please check the highlighted fields and try again.");
      setStatus("error");
    } catch {
      setMessage("The request could not be sent. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-xl border border-ok/50 bg-ok/10 p-8">
        <h2 className="text-2xl font-bold">Request received</h2>
        <p className="mt-3 text-muted">Thank you. An engineer will review your message and reply by email. {reference && reference !== "ok" && <>Your reference is <strong className="text-fg">{reference}</strong>.</>}</p>
        <p className="mt-3 text-sm text-muted">If you do not hear from us, check your spam folder.</p>
      </div>
    );
  }

  const fe = (name: string) => errors[name]?.[0];
  const describe = (name: string, hint = false) => [hint ? `${name}-hint` : null, fe(name) ? `${name}-err` : null].filter(Boolean).join(" ") || undefined;
  const Err = ({ name }: { name: string }) => (fe(name) ? <p id={`${name}-err`} className="err">{fe(name)}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby={status === "error" ? "form-error" : undefined}>
      {status === "error" && (
        <div id="form-error" role="alert" className="rounded-md border border-bad/60 bg-bad/10 p-4 text-sm text-bad">{message}</div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" autoComplete="name" required className="field" aria-invalid={!!fe("fullName")} aria-describedby={describe("fullName")} />
          <Err name="fullName" />
        </div>
        <div>
          <label className="label" htmlFor="email">{isQuote || isConsult ? "Business email" : "Email"}</label>
          <input id="email" name="email" type="email" autoComplete="email" required className="field" aria-invalid={!!fe("email")} aria-describedby={describe("email")} />
          <Err name="email" />
        </div>
        <div>
          <label className="label" htmlFor="company">Company name <span className="text-muted">(optional)</span></label>
          <input id="company" name="company" autoComplete="organization" className="field" aria-invalid={!!fe("company")} aria-describedby={describe("company")} />
          <Err name="company" />
        </div>
        <div>
          <label className="label" htmlFor="country">Country or region</label>
          <input id="country" name="country" autoComplete="country-name" required className="field" aria-invalid={!!fe("country")} aria-describedby={describe("country")} />
          <Err name="country" />
        </div>
      </div>

      {variant !== "CONTACT" && (
        <div>
          <label className="label" htmlFor="service">Service required</label>
          <select id="service" name="service" required defaultValue={defaultService ?? ""} className="field" aria-invalid={!!fe("service")} aria-describedby={describe("service")}>
            <option value="" disabled>Choose a service</option>
            {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <Err name="service" />
        </div>
      )}

      <div>
        <label className="label" htmlFor="description">{variant === "CONTACT" ? "Your message" : "Project description"}</label>
        <textarea id="description" name="description" rows={6} required className="field" aria-invalid={!!fe("description")} aria-describedby={describe("description", true)} />
        <p id="description-hint" className="hint">What is broken or needed? Include error messages, what you expected and what happened.</p>
        <Err name="description" />
      </div>

      {isQuote && (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="siteUrl">Existing website or app URL <span className="text-muted">(optional)</span></label>
              <input id="siteUrl" name="siteUrl" type="text" inputMode="url" placeholder="https://" className="field" aria-invalid={!!fe("siteUrl")} aria-describedby={describe("siteUrl")} />
              <Err name="siteUrl" />
            </div>
            <div>
              <label className="label" htmlFor="techStack">Current technology stack <span className="text-muted">(optional)</span></label>
              <input id="techStack" name="techStack" placeholder="e.g. Lovable, React, Supabase" className="field" aria-invalid={!!fe("techStack")} aria-describedby={describe("techStack")} />
              <Err name="techStack" />
            </div>
            <div>
              <label className="label" htmlFor="budget">Budget range <span className="text-muted">(optional, USD)</span></label>
              <select id="budget" name="budget" defaultValue="" className="field">
                <option value="">Prefer not to say</option>
                {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="timeline">Desired timeline</label>
              <select id="timeline" name="timeline" defaultValue="" className="field" aria-describedby={describe("timeline")}>
                <option value="">Not sure yet</option>
                {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <p className="hint">File attachments are not collected through this form. If screenshots would help, mention it and we will arrange a secure way to share them.</p>
        </>
      )}

      {isConsult && (
        <div>
          <label className="label" htmlFor="preferredTime">Preferred days, times and time zone</label>
          <input id="preferredTime" name="preferredTime" placeholder="e.g. Weekdays after 14:00 GMT" className="field" aria-invalid={!!fe("preferredTime")} aria-describedby={describe("preferredTime")} />
          <Err name="preferredTime" />
        </div>
      )}

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website_hp">Leave this field empty</label>
        <input id="website_hp" name="website_hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-brand" aria-invalid={!!fe("consent")} aria-describedby={describe("consent")} />
          <label htmlFor="consent" className="text-sm text-muted">
            I agree that Innovations Labs may use these details to respond to my request, as described in the{" "}
            <Link className="text-link underline" href="/privacy-policy" target="_blank">privacy policy</Link>.
          </label>
        </div>
        <Err name="consent" />
      </div>

      <button type="submit" disabled={status === "sending"} className="rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-hover disabled:opacity-60">
        {status === "sending" ? "Sending..." : isConsult ? "Request consultation" : isQuote ? "Request quote" : "Send message"}
      </button>
    </form>
  );
}
