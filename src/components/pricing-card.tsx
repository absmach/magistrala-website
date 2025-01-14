import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PricingCardProps } from "@/types/card-types";

export function PricingCard({
  title,
  features,
  ctaText,
  ctaVariant,
  ctaLink,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col p-8 transition-all hover:bg-blue-50">
      <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>
      <ul className="flex-1 space-y-6 mb-8">
        {features.map((feature, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: This is needed for the constants
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
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
