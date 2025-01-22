import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  featuresData,
  benefitsData,
  futureFeaturesData,
  useCasesData,
  pricingData,
  faqData,
  heroData,
} from "@/lib/constants";
import { ProductBenefitsCard } from "@/components/benefits-card";
import { ProductFeatureCard } from "@/components/features-card";
import { ProductFutureFeatureCard } from "@/components/future-features-card";
import { PricingSection } from "@/components/pricing-section";
import { FAQCard } from "@/components/faq-card";
import { Hero } from "@/components/hero";
import { UseCasesTabs } from "@/components/usecase-tab";
import { PoweredBy } from "@/components/powered-by";
import { ComingSoonBanner } from "@/components/coming-soonbanner";

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
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl text-blue-950 font-bold mb-4">
            Why Choose Magistrala?
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Empower your production ecosystem with tools designed to simplify,
            secure, and scale your operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <ProductBenefitsCard
                // biome-ignore lint/suspicious/noArrayIndexKey: This is needed for the constants
                key={index}
                title={benefit.title}
                description={benefit.description}
                imageUrl={benefit.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <PoweredBy />

      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-200">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">
            Explore Our Features
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Discover tools that make your development journey seamless and
            scalable.
          </p>

          <div className="space-y-12">
            {featuresData.map((feature, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="border-b last:border-none pb-6"
              >
                <ProductFeatureCard
                  title={feature.title}
                  description={feature.description}
                  reverse={index % 2 !== 0}
                  imageUrl={feature.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features Section */}
      <section id="next-features" className="py-20 bg-blue-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Thats not all!</h2>
          <p className="text-lg text-gray-700 mb-12">
            We have a range of exciting new updates still on the drawing board
            to look forward to!
          </p>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureFeaturesData.map((futureFeature, index) => (
              <ProductFutureFeatureCard
                // biome-ignore lint/suspicious/noArrayIndexKey: This is needed for the constants
                key={index}
                title={futureFeature.title}
                description={futureFeature.description}
                imageUrl={futureFeature.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section id="use-cases" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Here are some real world solutions that Magistrala has aided in
            fruition
          </p>
          <UseCasesTabs useCases={useCasesData} />
        </div>
      </section>

      {/* Pricing Section*/}

      {/* <PricingSection plans={pricingData} /> */}

      {/* Coming Soon Banner Section */}
      <ComingSoonBanner />

      {/* FAQ Section */}
      <section id="faq" className=" bg-gray-100 py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faqCategory, index) => (
              <FAQCard
                // biome-ignore lint/suspicious/noArrayIndexKey:
                key={index}
                title={faqCategory.title}
                faqs={faqCategory.faqs}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
