import Image from "next/image";

export function ScreenshotStack({
  images,
  alt,
}: {
  images: { src: string; alt: string }[];
  alt: string;
}) {
  if (images.length === 1) {
    return (
      <div className="rounded-xl border border-border/60 bg-card shadow-xl overflow-hidden h-full w-full">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          height={100}
          width={100}
          objectFit="cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div className="rounded-xl border border-border/60 bg-card shadow-xl overflow-hidden">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          height={100}
          width={100}
          objectFit="cover"
          className="w-full"
          loading="lazy"
        />
      </div>
      {images[1] && (
        <div className="absolute -bottom-6 -right-6 w-3/5 rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden hidden md:block">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            height={100}
            width={100}
            objectFit="cover"
            className="w-full"
            loading="lazy"
          />
        </div>
      )}
      {images[2] && (
        <div className="absolute -top-4 -left-4 w-2/5 rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden hidden lg:block">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            height={100}
            width={100}
            objectFit="cover"
            className="w-full"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
