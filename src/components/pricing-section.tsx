import { PricingCard } from "./pricing-card";

interface PricingSectionProps {
  plans: Array<{
    title: string;
    features: string[];
    ctaText: string;
    ctaVariant: "default" | "success";
    ctaLink: string;
  }>;
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Pricing</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Choose the plan that best fits your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
