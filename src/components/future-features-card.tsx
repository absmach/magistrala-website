import { getImageUrl } from '@/lib/getImageUrl';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { nextFeaturesSectionData } from "@/lib/constants";

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
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-2">
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
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-12">{subtitle}</p>

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
