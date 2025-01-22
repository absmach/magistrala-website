import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bannerIcons } from "@/lib/constants";

export function ComingSoonBanner() {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16 px-6 shadow-lg">
      <div
        className="absolute inset-0 -z-10 border-beam border-opacity-50"
        data-beam-width="6px"
        data-beam-gradient="linear-gradient(90deg, #4c6ef5, #c084fc)"
        data-beam-direction="to bottom right"
      />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold animate-pulse mb-4">
          {bannerIcons.title}
        </h2>
        <p className="text-lg mb-8">{bannerIcons.subtitle}</p>
        <Button className="bg-blue-950 text-white hover:bg-blue-600 transition-colors duration-300 mb-12">
          {bannerIcons.buttonText}
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bannerIcons.features.map((feature, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: This is needed for constants.ts
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4 transition-transform transform hover:scale-105"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-950">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-800">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
