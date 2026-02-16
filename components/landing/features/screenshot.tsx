import Image from "next/image";

export function ScreenshotStack({
  images,
}: {
  images: { src: string; alt: string; height?: number; width?: number }[];
}) {
  if (images.length === 1) {
    return (
      <div className="rounded-xl sm:rounded-2xl bg-card overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          height={images[0].height ?? 800}
          width={images[0].width ?? 1200}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full pb-10 pr-10 md:min-h-[45vh]">
      <div className="rounded-xl sm:rounded-2xl bg-card overflow-hidden drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          height={images[0].height ?? 800}
          width={images[0].width ?? 1200}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      {images[1] && (
        <div className="absolute -bottom-4 -right-4 max-w-3/5 sm:-bottom-6 sm:-right-6 max-sm:w-2/3 rounded-xl sm:rounded-2xl bg-card overflow-hidden drop-shadow-[0_16px_32px_rgba(0,0,0,0.2)] hidden sm:block">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            height={images[1].height ?? 600}
            width={images[1].width ?? 900}
            className=""
            loading="lazy"
          />
        </div>
      )}
      {images[2] && (
        <div className="absolute -top-4 -left-4 max-w-2/5 sm:-top-6 sm:-left-6 sm:max-w-1/2 rounded-xl sm:rounded-2xl bg-card overflow-hidden drop-shadow-[0_16px_32px_rgba(0,0,0,0.2)] hidden lg:block">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            height={images[2].height ?? 600}
            width={images[2].width ?? 900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
