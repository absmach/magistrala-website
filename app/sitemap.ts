import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { source } from "@/lib/source";
import { useCases } from "@/lib/use-cases-data";

const DOMAIN =
  process.env.NEXT_PUBLIC_SITE_URL || "https://magistrala.absmach.eu";

export const dynamic = "force-static";

type SitemapEntry = MetadataRoute.Sitemap[number];

function getPriority(route: string): number {
  if (route === "" || route === "/") return 1.0;
  if (route.startsWith("/use-cases")) return 0.8;
  if (route.startsWith("/docs")) return 0.7;
  if (["/contact", "/pricing", "/features"].includes(route)) return 0.6;
  if (["/terms", "/privacy", "/imprint"].includes(route)) return 0.3;
  return 0.5;
}

function getChangefreq(route: string): SitemapEntry["changeFrequency"] {
  if (route === "" || route === "/") return "weekly";
  if (route.startsWith("/docs")) return "weekly";
  if (route.startsWith("/use-cases")) return "monthly";
  if (["/terms", "/privacy", "/imprint"].includes(route)) return "yearly";
  return "monthly";
}

function collectPages(dir: string, route = ""): MetadataRoute.Sitemap {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("[")) return [];
      const segment = entry.name.startsWith("(")
        ? route
        : `${route}/${entry.name}`;
      return collectPages(fullPath, segment);
    }

    if (entry.name !== "page.tsx") return [];

    return [
      {
        url: DOMAIN + (route || "/"),
        lastModified: fs.statSync(fullPath).mtime,
        priority: getPriority(route),
        changeFrequency: getChangefreq(route),
      },
    ];
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = collectPages(path.join(process.cwd(), "app"));

  for (const uc of useCases) {
    pages.push({
      url: `${DOMAIN}/use-cases/${uc.slug}/`,
      priority: 0.8,
      changeFrequency: "monthly",
    });
  }

  for (const page of source.getPages()) {
    pages.push({
      url: `${DOMAIN}${page.url}`,
      priority: 0.7,
      changeFrequency: "weekly",
    });
  }

  return pages;
}
