"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FeaturesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#features");
  }, [router]);
  return null;
}
