import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";
import { firebaseApp } from "./firebase";

let analyticsPromise: Promise<Analytics | null> | null = null;

function resolveAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (!analyticsPromise) {
    analyticsPromise = isSupported().then((supported) =>
      supported ? getAnalytics(firebaseApp) : null
    );
  }
  return analyticsPromise;
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  resolveAnalytics().then((analytics) => {
    if (analytics) logEvent(analytics, eventName, params);
  });
}
