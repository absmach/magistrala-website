import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { featuresSectionData } from '@/lib/constants';
import type { PricingCardProps } from '@/types/card-types';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  plans: Array<{
    title: string;
    features: string[];
    ctaText: string;
    ctaVariant: 'default' | 'success';
    ctaLink: string;
  }>;
}

export interface PricingPlan {
  title: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'default' | 'success';
  ctaLink: string;
}

export function PricingCard({
  title,
  features,
  ctaText,
  ctaLink,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col p-8 transition-all hover:bg-blue-50">
      <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>
      <ul className="flex-1 space-y-6 mb-8">
        {features.map((feature) => (
          <li
            key={featuresSectionData.title}
            className="flex items-start gap-3"
          >
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 lg:text-lg">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="default"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base"
        asChild
      >
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </Card>
  );
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-5xl text-3xl font-bold mb-4 text-center text-blue-950">
          Pricing
        </h2>
        <p className="text-xl text-gray-700 mb-12 text-center lg:text-2xl">
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
