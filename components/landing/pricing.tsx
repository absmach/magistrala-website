import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "For individuals and small teams getting started",
    cta: "Sign Up Free",
    ctaHref: "https://cloud.magistrala.absmach.eu/register",
    featured: false,
    features: [
      "10 users",
      "10 clients",
      "10 channels",
      "10 groups",
      "10,000 messages/month",
      "Community support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale production deployments",
    cta: "Contact Sales",
    ctaHref: "/contact",
    featured: true,
    features: [
      "Multitenant support",
      "Unlimited users",
      "Custom dashboards",
      "Unlimited clients",
      "Unlimited channels",
      "Unlimited groups",
      "Unlimited messages",
      "Premium SLA support",
      "Dedicated infrastructure",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Pricing
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Start free, scale as you grow
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            No credit card required. Upgrade when you need to.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border bg-card p-8 flex flex-col",
                plan.featured
                  ? "border-[#073763]/30 shadow-xl shadow-[#073763]/6 ring-1 ring-[#073763]/10"
                  : "border-border/40",
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-8 inline-flex items-center rounded-full bg-[#073763] px-3.5 py-1 text-xs font-medium text-white">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="w-full h-12 text-base rounded-xl "
              >
                <Link
                  href={plan.ctaHref}
                  target={
                    plan.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
