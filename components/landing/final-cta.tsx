import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#073763]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to get started?
        </h2>
        <p className="mt-4 text-xl text-white/70 max-w-xl mx-auto">
          Deploy Magistrala in minutes. Free tier available with no credit card required.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="h-12 px-7 text-base bg-white text-[#073763] hover:bg-white/90 rounded-lg font-semibold"
          >
            <Link href="https://cloud.magistrala.absmach.eu/" target="_blank">
              Start Free
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 px-7 text-base border-white/20 text-white hover:bg-white/10 rounded-lg"
          >
            <Link href="mailto:info@absmach.eu">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
