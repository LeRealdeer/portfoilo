/**
 * GA4 event tracking helpers.
 *
 * The measurement ID lives only in `NEXT_PUBLIC_GA_ID` (set in Vercel) — it is
 * never hard-coded. `<GoogleAnalytics>` in the root layout loads `gtag.js` and
 * measures pageviews (including client-side route changes) automatically; this
 * module only adds custom interaction events.
 *
 * `trackEvent` is safe to call from anywhere: it no-ops on the server, before
 * `gtag` has loaded, and when no measurement ID is configured. It never throws
 * and never blocks navigation.
 */

/** The GA4 measurement ID, or `undefined` when analytics is not configured. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Custom events and the exact parameter shape each one accepts. */
export type AnalyticsEventMap = {
  /** A portfolio project was opened (internal navigation to its case study). */
  project_click: { project_name: string; destination_url: string };
  /** A project's live service / external link was opened. */
  project_link_click: { project_name: string; destination_url: string };
  /** A resume / CV link was opened. */
  resume_click: { destination_url: string };
  /** An email or contact link was opened. */
  contact_click: { contact_type: string; destination_url: string };
  /** The interface language was switched. */
  language_change: { from_language: string; to_language: string };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Send a GA4 event. Does nothing outside the browser or before `gtag.js` is
 * ready, so callers never have to guard.
 */
export function trackEvent<E extends AnalyticsEventName>(
  event: E,
  params: AnalyticsEventMap[E],
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    window.gtag("event", event, params);
  } catch {
    // Analytics must never break the UI.
  }
}
