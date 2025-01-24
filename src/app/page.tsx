import { Hero } from '@/components/hero';
import { PoweredBy } from '@/components/powered-by';
import { BenefitsSection } from '@/components/section-benefits';
import { FAQSection } from '@/components/section-faq';
import { FeaturesSection } from '@/components/section-features';
import { NextFeaturesSection } from '@/components/section-future-features';
import { UseCasesSection } from '@/components/usecase-tab';
import { heroData } from '@/lib/constants';

export default function Home() {
  return (
    <div className="min-h-screen constant mx-auto">
      {/* Hero Section */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        buttonText={heroData.buttonText}
        buttonLink={heroData.buttonLink}
        imageUrl={heroData.imageUrl}
      />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Future Features Section */}
      <NextFeaturesSection />

      {/* Use Cases Tabs */}
      <UseCasesSection />

      {/* Pricing Section*/}

      {/* <PricingSection plans={pricingData} /> */}

      {/* Coming Soon Banner Section */}
      {/* <ComingSoonBanner /> */}

      {/* Powered By Section */}
      <PoweredBy />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
