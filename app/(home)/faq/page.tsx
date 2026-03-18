"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// /faq has no dedicated page — content lives at /#faq.
// This redirect prevents the 404 that crawlers and users hit directly.
export default function FAQRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#faq");
  }, [router]);
  return null;
}
