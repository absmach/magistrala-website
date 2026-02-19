import type { Metadata } from "next/types";

export function createMetadata(
  override: Metadata,
  ogSlug = "magistrala",
): Metadata {
  const ogUrl = `${baseUrl}/og/${ogSlug}/image.webp`;
  return {
    ...override,
    openGraph: {
      title: override.title ?? "Magistrala",
      description: override.description ?? undefined,
      url: baseUrl,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: "Magistrala — Open Source IoT Platform for Cloud & Edge",
        },
      ],
      siteName: "Magistrala",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      site: "@absmach",
      creator: "@absmach",
      title: override.title ?? "Magistrala",
      description: override.description ?? undefined,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: "Magistrala — Open Source IoT Platform for Cloud & Edge",
        },
      ],
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu";
