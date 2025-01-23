import { getImageUrl } from '@/lib/getImageUrl';
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
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
