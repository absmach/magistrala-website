import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/utils';
import { ArrowRightCircleIcon } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

export function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
}: HeroProps) {
  return (
    <section className="py-20 md:h-[95vh]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2  space-y-2">
        <div className="text-center md:text-left space-y-8">
          <h2 className="lg:text-7xl text-5xl font-bold mb-4 text-blue-950 tracking-tight">
            {title}
          </h2>
          <p className=" text-2xl text-gray-800">{subtitle}</p>
          <Button
            size="lg"
            variant="default"
            className="bg-blue-800 text-white hover:bg-blue-600 border-none px-4 py-2 rounded h-14 w-48 text-xl"
            asChild
          >
            <a href={buttonLink}>
              <span>{buttonText}</span>
              <ArrowRightCircleIcon className="w-7 h-7" />
            </a>
          </Button>
        </div>
        <div className="relative hidden md:block w-full">
          <Image
            src={getImageUrl(imageUrl)}
            alt="Hero Image"
            fill
            style={{ objectFit: 'fill' }}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
