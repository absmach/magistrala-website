import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Package,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQSection } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { DashboardCarousel } from "@/components/solutions/dashboard-carousel";
import { Button } from "@/components/ui/button";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { getSolutionBySlug, solutions } from "@/lib/solutions-data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return createMetadata(
    {
      title: `${solution.title} Solution Pack`,
      description: solution.metaDescription,
      keywords: solution.keywords,
      openGraph: {
        url: `${baseUrl}/solutions/${slug}/`,
      },
    },
    `solutions/${slug}`,
  );
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const idx = solutions.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? solutions[idx - 1] : null;
  const next = idx < solutions.length - 1 ? solutions[idx + 1] : null;

  const cloudInstallUrl = `https://cloud.magistrala.absmach.eu?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=solution-${solution.slug}`;

  const SITE = baseUrl.toString();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `${SITE}/solutions/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: solution.title,
        item: `${SITE}/solutions/${slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            All solutions
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center justify-center size-14 rounded-2xl bg-primary/8 dark:bg-primary/20 shrink-0">
              <solution.icon className="size-7 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {solution.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 px-7 font-semibold">
                  <Link
                    href={cloudInstallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Package className="size-4 mr-2" />
                    Try on Magistrala Cloud
                  </Link>
                </Button>

                {solution.docsPath ? (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-7"
                  >
                    <Link href={solution.docsPath}>
                      <BookOpen className="size-4 mr-2" />
                      Read the docs
                    </Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-7"
                  >
                    <Link href="/contact">Talk to an expert</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                {solution.heroDetail}
              </p>

              {/* Why Magistrala */}
              <div className=" mb-10 rounded-xl border border-primary/15 bg-primary/4 dark:bg-primary/10 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="size-4 text-primary shrink-0" />
                  <p className="font-semibold text-primary uppercase tracking-widest">
                    Why Magistrala
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.whyMagistrala}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard Screenshots ─────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Platform dashboards
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              See it in action
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-lg">
              Purpose-built dashboards for every layer of your{" "}
              {solution.title.toLowerCase()} deployment — from live telemetry to
              compliance reports.
            </p>
          </div>
          <DashboardCarousel images={solution.dashboardScreenshots} />
        </div>
      </section>

      {/* ── Challenge ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-destructive/70 dark:text-red-400/80 mb-3">
              The challenge
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {solution.challenges.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {solution.challenges.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {solution.challenges.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card p-6"
              >
                <div className="mb-4 flex items-center justify-center size-10 rounded-lg bg-destructive/10">
                  <item.icon className="size-5 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How the System Works ─────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              How it works
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              From sensor to action
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {solution.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-border/40">
            {solution.howItWorks.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-card p-6 flex flex-col"
              >
                <span className="text-5xl font-black text-primary/8 dark:text-blue-400/10 absolute top-4 right-5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 relative">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative flex-1">
                  {step.desc}
                </p>
                {i < solution.howItWorks.steps.length - 1 && (
                  <ChevronRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 size-6 text-border z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Applications ─────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              {solution.applications.title}
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {solution.applications.subtitle}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solution.applications.items.map((app) => (
              <div
                key={app.title}
                className="rounded-xl border border-border/40 bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/4 hover:border-primary/10"
              >
                <div className="mb-4 flex items-center justify-center size-10 rounded-lg bg-primary/[0.07] dark:bg-primary/20">
                  <app.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {app.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Benefits
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Why teams choose Magistrala for {solution.title.toLowerCase()}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The solution pack removes the integration work — so your team
                can focus on outcomes, not infrastructure.
              </p>
            </div>

            <ul className="space-y-3">
              {solution.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-lg bg-card border border-border/40 p-4"
                >
                  <div className="flex items-center justify-center size-6 rounded-full bg-primary/10 shrink-0 mt-0.5">
                    <Check className="size-3.5 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQSection
        items={solution.faq}
        title={`${solution.title} — Frequently Asked Questions`}
        id={`faq-${solution.slug}`}
        withSchema
      />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="mx-auto lg:max-w-4xl max-sm:px-5 p-16 border rounded-4xl text-center bg-[#073763]">
          <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-white/10 mb-6 mx-auto">
            <Package className="size-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Try the {solution.title} Solution Pack
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-lg mx-auto">
            Preconfigured clients, channels, rules, dashboards, reports, and
            alarms — ready in minutes on Magistrala Cloud.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="h-12 px-7 text-base border-white/20 dark:bg-white dark:text-black hover:dark:bg-white/90 font-semibold rounded-xl"
            >
              <Link
                href={cloudInstallUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package className="size-4 mr-2" />
                Try on Magistrala Cloud
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-7 text-base border-white/20 dark:bg-white dark:text-black hover:dark:bg-white/90 font-semibold rounded-xl"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ───────────────────────────────────── */}
      {(prev || next) && (
        <section className="py-12 border-t border-border/30">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {prev ? (
              <Link
                href={`/solutions/${prev.slug}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground/70">
                    Previous
                  </span>
                  <span className="font-medium">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/solutions/${next.slug}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground/70">
                    Next
                  </span>
                  <span className="font-medium">{next.title}</span>
                </span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
