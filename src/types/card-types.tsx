export interface PricingPlan {
  title: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'default' | 'success';
  ctaLink: string;
}

export interface PricingCardProps extends PricingPlan {}

export interface PricingSectionProps {
  plans: PricingPlan[];
}
