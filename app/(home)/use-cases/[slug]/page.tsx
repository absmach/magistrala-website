import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { getUseCaseBySlug, useCases } from "@/lib/use-cases-data";

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return {};
  return {
    title: `${uc.title} | Magistrala IoT Platform`,
    description: uc.summary,
  };
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  // Determine prev/next for navigation
  const idx = useCases.findIndex((u) => u.slug === uc.slug);
  const prev = idx > 0 ? useCases[idx - 1] : null;
  const next = idx < useCases.length - 1 ? useCases[idx + 1] : null;

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#073763]/5 to-transparent" />
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            All use cases
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div className="flex items-center justify-center size-14 rounded-2xl bg-[#073763]/8 shrink-0">
              <uc.icon className="size-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {uc.title}
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {uc.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#073763] hover:bg-[#0a4a82] h-12 px-8 text-base"
            >
              <a
                href="https://magistrala.abstractmachines.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live demo
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base"
            >
              <a href="mailto:info@abstractmachines.dev">Talk to an expert</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Challenges ───────── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {uc.challenges.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {uc.challenges.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {uc.challenges.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/40 bg-card p-6"
              >
                <div className="mb-4 flex items-center justify-center size-10 rounded-lg bg-destructive/10">
                  <item.icon className="size-5 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── How It Works ───────── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              How it works
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              From sensor to action
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {uc.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid gap-px sm:grid-cols-4 rounded-2xl overflow-hidden border border-border/40">
            {uc.howItWorks.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-card p-6 flex flex-col"
              >
                {/* Step number */}
                <span className="text-5xl font-black text-primary/8 absolute top-4 right-5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 relative">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative flex-1">
                  {step.desc}
                </p>
                {/* Connector arrow (not on last) */}
                {i < uc.howItWorks.steps.length - 1 && (
                  <ChevronRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 size-6 text-border z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Dashboard ───────── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {uc.dashboard.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              {uc.dashboard.subtitle}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl">
            <Image
              src={uc.dashboard.image}
              alt={uc.dashboard.alt}
              width={1400}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ───────── Key Applications ───────── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              {uc.applications.title}
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {uc.applications.subtitle}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {uc.applications.items.map((app) => (
              <div
                key={app.title}
                className="rounded-xl border border-border/40 bg-card p-6 transition-all hover:shadow-lg hover:shadow-[#073763]/4 hover:border-[#073763]/10"
              >
                <div className="mb-4 flex items-center justify-center size-10 rounded-lg bg-[#073763]/[0.07]">
                  <app.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Benefits ───────── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Benefits
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Why teams choose Magistrala for {uc.title.toLowerCase()}
              </h2>
            </div>

            <ul className="space-y-4">
              {uc.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-lg bg-card border border-border/40 p-4"
                >
                  <div className="flex items-center justify-center size-6 rounded-full bg-[#073763]/10 shrink-0 mt-0.5">
                    <Check className="size-3.5 text-primary" />
                  </div>
                  <span className="text-base text-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-20 md:py-24 bg-[#073763]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Deploy Magistrala in minutes with our free tier, or talk to our team
            about an enterprise solution tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-12 px-8 text-base font-semibold"
            >
              <a
                href="https://magistrala.abstractmachines.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Magistrala free
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 h-12 px-8 text-base font-semibold"
            >
              <a href="mailto:info@abstractmachines.dev">Contact sales</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Prev / Next navigation ───────── */}
      {(prev || next) && (
        <section className="py-12 border-t border-border/30">
          <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
            {prev ? (
              <Link
                href={`/use-cases/${prev.slug}`}
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
                href={`/use-cases/${next.slug}`}
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
