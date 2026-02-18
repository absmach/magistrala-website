import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-[#073763]/3 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-[#073763]/2 blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative mx-auto max-w-350 px-6">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#073763]/10 bg-[#073763]/4 px-4 py-1.5 text-sm text-primary mb-8">
              <span className="inline-block size-1.5 rounded-full bg-[#073763] animate-pulse-subtle" />
              Open Source IoT Platform
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.08]">
              Magistrala —
              <br />
              <span className="text-primary">Open Source IoT Platform </span>
              <br />
              for Cloud & Edge
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-xl leading-relaxed">
              Scalable, secure IoT platform for industrial, enterprise, and
              consumer applications
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-12 px-7 text-base bg-[#073763] hover:bg-[#0a4a82] text-white rounded-xl"
              >
                <Link
                  href="https://cloud.magistrala.absmach.eu?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=contact-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Magistrala
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-7 text-base border-[#073763]/20 text-primary hover:bg-[#073763]/4 rounded-xl"
              >
                <Link href="/docs">
                  <BookOpen className="mr-2 size-4" />
                  View Documentation
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-border/60 bg-card shadow-xl shadow-black/3 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500" />
                  <div className="size-3 rounded-full bg-yellow-400" />
                  <div className="size-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  cloud.magistrala.absmach.eu
                </span>
              </div>
              <Image
                src="/screenshots/dashboard-2.png"
                alt="Magistrala Dashboard"
                className="w-full"
                width={1920}
                height={1080}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/5 rounded-xl border border-border/60 bg-card shadow-lg shadow-black/5 overflow-hidden hidden md:block">
              <Image
                src="/screenshots/dashboard-1.png"
                alt="Magistrala Analytics"
                className="w-full"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
