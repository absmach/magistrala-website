import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocAttribution } from "@/components/docs/doc-attribution";
import { resolveAuthors } from "@/lib/authors";
import { baseUrl, createMetadata } from "@/lib/metadata";
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
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Docs", item: `${base}/docs/` },
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

  const pageSlug = slug ? slug.join("/") : "";
  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: title,
    item: `${base}/docs/${pageSlug ? `${pageSlug}/` : ""}`,
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
  const authors = resolveAuthors(page.data.authors);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocAttribution authors={authors} lastModified={page.data.lastModified} />
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
  const pageImage = getPageImage(page);
  return createMetadata(
    {
      title: page.data.title,
      description:
        page.data.description ??
        "Complete technical documentation for Magistrala — architecture, APIs, protocol support, CLI tools, and integration guides.",
      alternates: { canonical },
      openGraph: {
        url: canonical,
        images: [
          {
            url: pageImage.url,
            width: 1200,
            height: 630,
            alt: page.data.title,
          },
        ],
      },
    },
    `docs/${params.slug?.join("/") ?? ""}`,
  );
}
