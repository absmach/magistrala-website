import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { useCases } from "@/lib/use-cases-data";

export const metadata = createMetadata({
  title: "Use Cases | Magistrala IoT Platform",
  description:
    "Discover how Magistrala powers IoT solutions across industries — from smart water metering to industrial gateway integration and smart city infrastructure.",
  keywords: [
    "IoT use cases",
    "Magistrala",
    "smart water metering",
    "industrial IoT",
    "smart city",
    "Abstract Machines",
  ],
  openGraph: {
    url: "https://magistrala.absmach.eu/use-cases/",
  },
});

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#073763]/4 to-transparent" />
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
          <div className="grid gap-8 lg:grid-cols-2">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/use-cases/${uc.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border/40 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#073763]/6 hover:border-[#073763]/20 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full aspect-16/10 overflow-hidden bg-muted">
                  <Image
                    src={uc.dashboard.image}
                    alt={uc.dashboard.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 inline-flex items-center justify-center size-12 rounded-xl bg-[#073763]/[0.07] group-hover:bg-[#073763]/12 transition-colors">
                      <uc.icon className="size-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground leading-tight">
                      {uc.title}
                    </h2>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-6">
                    {uc.summary}
                  </p>

                  {/* Arrow */}
                  <div className="inline-flex items-center gap-2 text-base font-semibold text-primary group-hover:gap-3 transition-all">
                    Explore use case
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-[#073763]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="mx-auto lg:max-w-4xl max-sm:px-5 p-16 border rounded-4xl text-center bg-[#073763]">
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
              variant="outline"
              className="h-12 px-7 text-base border-white/20 bg-white dark:bg-white text-primary hover:bg-white/70 font-semibold rounded-xl"
            >
              <a href="mailto:info@abstractmachines.dev">Contact us</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-7 text-base border-white/20 bg-white dark:bg-white text-primary hover:bg-white/70 rounded-xl"
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
