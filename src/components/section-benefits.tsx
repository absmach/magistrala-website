import { benefitsSectionData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ProductBenefitsCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export function ProductBenefitsCard({
  title,
  description,
  imageUrl,
}: ProductBenefitsCardProps) {
  return (
    <Card className="relative overflow-hidden h-[28rem] w-full group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110 group-hover:delay-100"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('${getImageUrl(
            imageUrl ?? '',
          )}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent text-white">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-opacity-100">
            {title}
          </CardTitle>
          <CardDescription className="text-md font-medium text-white mt-2 text-opacity-70">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}

export function BenefitsSection() {
  const { sectionId, title, subtitle, benefits } = benefitsSectionData;

  return (
    <section id={sectionId} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl text-blue-950 xxs:text-2xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-700 mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ProductBenefitsCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              imageUrl={benefit.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
