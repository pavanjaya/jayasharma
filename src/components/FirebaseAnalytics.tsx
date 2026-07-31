"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";
import { firebaseApp } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    isSupported().then((supported) => {
      if (supported) setAnalytics(getAnalytics(firebaseApp));
    });
  }, []);

  useEffect(() => {
    // Firebase's own initialization already logs the first page_view;
    // this only needs to fire on subsequent client-side route changes.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!analytics) return;
    logEvent(analytics, "page_view", {
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname, analytics]);

  return null;
}
