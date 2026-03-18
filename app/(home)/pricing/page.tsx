"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// /pricing has no dedicated page — content lives at /#pricing.
// This redirect prevents the 404 that crawlers and users hit directly.
export default function PricingRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#pricing");
  }, [router]);
  return null;
}
