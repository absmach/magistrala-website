"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FAQRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#faq");
  }, [router]);
  return null;
}
