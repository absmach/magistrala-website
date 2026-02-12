import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCases } from "@/lib/use-cases-data";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Use Cases | Magistrala IoT Platform",
  description:
    "Discover how Magistrala powers IoT solutions across industries — from smart water metering to industrial gateway integration and smart city infrastructure.",
};

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#073763]/[0.04] to-transparent" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Use Cases
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            IoT solutions for the&nbsp;real&nbsp;world
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From factory floors to smart cities, Magistrala provides the
            infrastructure to connect, monitor, and automate at any scale.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/use-cases/${uc.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border/40 bg-card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#073763]/[0.06] hover:border-[#073763]/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center size-12 rounded-xl bg-[#073763]/[0.07] group-hover:bg-[#073763]/[0.12] transition-colors">
                  <uc.icon className="size-6 text-primary" />
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {uc.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  {uc.summary}
                </p>

                {/* Arrow */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Explore use case
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#073763]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#073763]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Don&rsquo;t see your use case?
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Magistrala is protocol-agnostic and infinitely extensible. Talk to
            our team about your specific requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-12 px-8 text-base font-semibold"
            >
              <a href="mailto:info@abstractmachines.dev">Contact us</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 h-12 px-8 text-base font-semibold"
            >
              <Link href="/docs">Browse documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
