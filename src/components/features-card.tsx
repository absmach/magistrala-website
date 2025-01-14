import Image from "next/image";

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
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-2/5 space-y-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="w-full md:w-2/5">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={225}
            className="object-cover rounded-lg w-full"
          />
        </div>
      </div>
  );
}
