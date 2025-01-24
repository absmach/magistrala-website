import { Button } from "@/components/ui/button";
import { getImageUrl } from "@/lib/getImageUrl";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";

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
    <section className="py-20 md:h-[90vh]">
      <div className="container mx-auto px-6 text-center grid grid-rows-1 md:grid-cols-2  space-y-2">
        <div className="text-center md:text-left space-y-8">
          <h2 className="text-7xl font-bold mb-4 text-blue-950">{title}</h2>
          <p className="text-xl text-gray-700">{subtitle}</p>
          <Button
            size="lg"
            variant="default"
            className="bg-blue-800 text-white hover:bg-blue-600 border-none px-4 py-2 rounded h-14 w-48 text-lg"
            asChild
          >
            <a href={buttonLink}>
              <span>{buttonText}</span>
              <ArrowRightCircleIcon className="w-5 h-5" />
            </a>
          </Button>
        </div>
        <div className="relative hidden md:block w-full h-64 md:h-96">
          <Image
            src={getImageUrl(imageUrl)}
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
