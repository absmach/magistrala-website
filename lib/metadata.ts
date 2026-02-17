import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? "Magistrala",
      description: override.description ?? undefined,
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/open-graph.png`,
          secureUrl: `${baseUrl}/open-graph.png`,
          alt: "Magistrala",
          type: "image/jpeg",
          width: 1200,
          height: 630,
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
          url: `${baseUrl}/open-graph.png`,
          secureUrl: `${baseUrl}/open-graph.png`,
          alt: "Magistrala — IoT Platform by Abstract Machines",
          type: "image/png",
          width: 1200,
          height: 630,
        },
      ],
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://magistrala.absmach.eu";
