import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl p-16 border rounded-4xl text-center bg-[#073763]">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to get started?
        </h2>
        <p className="mt-4 text-xl text-white/70 max-w-xl mx-auto">
          Deploy Magistrala in minutes. Free tier available with no credit card
          required.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="h-12 px-7 text-base border-white/20 bg-white text-[#073763] hover:bg-white/70 font-semibold rounded-xl"
          >
            <Link href="https://cloud.magistrala.absmach.eu/" target="_blank">
              Start Free
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 px-7 text-base border-white/20 text-[#073763] hover:bg-white/70 rounded-xl"
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
