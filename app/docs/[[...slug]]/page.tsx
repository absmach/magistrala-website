import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { baseUrl } from "@/lib/metadata";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

function buildBreadcrumbSchema(slug: string[] | undefined, title: string) {
  const base = baseUrl.toString();
  const items: {
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: base },
    { "@type": "ListItem", position: 2, name: "Docs", item: `${base}/docs` },
  ];

  if (slug && slug.length > 1) {
    for (let i = 0; i < slug.length - 1; i++) {
      const segPath = `/docs/${slug.slice(0, i + 1).join("/")}`;
      const segName = slug[i]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      items.push({
        "@type": "ListItem",
        position: items.length + 1,
        name: segName,
        item: `${base}${segPath}`,
      });
    }
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: title,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const breadcrumb = buildBreadcrumbSchema(params.slug, page.data.title);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return [{ slug: [] }, ...source.generateParams()];
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const canonical = `${baseUrl}${page.url}`;
  return {
    title: page.data.title,
    description:
      page.data.description ??
      "Complete technical documentation for Magistrala — architecture, APIs, protocol support, CLI tools, and integration guides.",
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: getPageImage(page).url,
    },
  };
}
