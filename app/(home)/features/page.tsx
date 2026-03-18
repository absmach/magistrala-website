"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// /features has no dedicated page — content lives at /#features.
// This redirect prevents the 404 that crawlers and users hit directly.
export default function FeaturesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#features");
  }, [router]);
  return null;
}
