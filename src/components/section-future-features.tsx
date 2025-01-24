import { nextFeaturesSectionData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ProductFutureFeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ProductFutureFeatureCard({
  title,
  description,
  imageUrl,
}: ProductFutureFeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={getImageUrl(imageUrl)}
        alt={title}
        width={400}
        height={200}
        className="object-cover w-full h-60"
      />
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-blue-950">
          {title}
        </CardTitle>
        <CardDescription className="lg:text-lg text-md text-muted-foreground mt-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function NextFeaturesSection() {
  const { sectionId, title, subtitle, features } = nextFeaturesSectionData;

  return (
    <section id={sectionId} className="py-20 bg-blue-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="lg:text-4xl text-2xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-700 mb-12">{subtitle}</p>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ProductFutureFeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
