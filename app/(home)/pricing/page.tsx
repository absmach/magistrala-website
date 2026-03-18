"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PricingRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#pricing");
  }, [router]);
  return null;
}
