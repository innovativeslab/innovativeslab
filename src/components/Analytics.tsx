"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_KEY, trackEvent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Cookie notice + consent-gated Google Analytics.
 * Nothing loads and no cookies are set until the visitor chooses "Accept analytics".
 * If NEXT_PUBLIC_GA_ID is not set, the banner is not shown because nothing non-essential is used.
 */
export function Analytics() {
  const [choice, setChoice] = useState<"granted" | "denied" | "unset" | "pending">("pending");

  useEffect(() => {
    try {
      const v = localStorage.getItem(CONSENT_KEY);
      setChoice(v === "granted" || v === "denied" ? v : "unset");
    } catch {
      setChoice("unset");
    }
  }, []);

  useEffect(() => {
    // Track CTA clicks (only fires when consent is granted).
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cta]");
      if (el?.dataset.cta) trackEvent("cta_click", { cta: el.dataset.cta.slice(0, 80) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  const save = (v: "granted" | "denied") => {
    try { localStorage.setItem(CONSENT_KEY, v); } catch { /* storage unavailable */ }
    setChoice(v);
  };

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {choice === "unset" && (
        <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-lg border border-line bg-raised p-5 shadow-2xl">
          <p className="text-sm text-fg">We would like to use analytics cookies to understand how the site is used. They stay off unless you accept. <a className="text-link underline" href="/cookie-policy">Cookie policy</a></p>
          <div className="mt-4 flex gap-3">
            <button type="button" onClick={() => save("granted")} className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover">Accept analytics</button>
            <button type="button" onClick={() => save("denied")} className="rounded-md border border-line px-4 py-2 text-sm font-semibold hover:border-link">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}
