import { featuresSectionData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

interface ProductFeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export function ProductFeatureCard({
  title,
  description,
  imageUrl,
  reverse = false,
}: ProductFeatureCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-8 py-6 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="lg:text-4xl text-2xl text-blue-950 font-bold">
          {title}
        </h3>
        <p className="text-gray-700 text-lg lg:text-xl">{description}</p>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={getImageUrl(imageUrl)}
          alt={title}
          width={300}
          height={225}
          className="object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const { sectionId, title, subtitle, features } = featuresSectionData;

  return (
    <section id={sectionId} className="py-20 bg-blue-200">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-5xl text-3xl font-bold mb-4 text-center text-blue-950">
          {title}
        </h2>
        <p className="text-xl text-gray-700 mb-12 text-center lg:text-2xl">
          {subtitle}
        </p>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={feature.title} className="last:border-none pb-4">
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
  );
}
