import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('${imageUrl}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent text-white">
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold text-opacity-100">{title}</CardTitle>
          <CardDescription className="text-sm font-medium mt-2 text-opacity-100">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
}
