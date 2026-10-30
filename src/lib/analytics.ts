"use client";

export const CONSENT_KEY = "il-consent-v1";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function hasAnalyticsConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

/** Sends an event only if the visitor accepted analytics AND GA is loaded. Otherwise a no-op. */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;
  (window as GtagWindow).gtag?.("event", name, params ?? {});
}
