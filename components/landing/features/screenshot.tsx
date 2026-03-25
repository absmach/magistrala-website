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

  const secondary = images[1];

  // Portrait images (e.g. 250×400 dialog panels) should show at their natural
  // width — no stretching, no clipping. Landscape images fill a larger share.
  const isPortrait =
    secondary.width != null && secondary.height != null
      ? secondary.height > secondary.width
      : false;

  // Padding reserves space for the overlapping secondary image so it
  // doesn't bleed outside the stack's bounding box.
  // Portrait (e.g. 250×400 dialog): narrow overlay, needs more bottom padding.
  // Landscape (e.g. 900×600): wide overlay, balanced padding.
  const containerPadding = isPortrait
    ? "pb-[22%] pr-[6%]"
    : "pb-[12%] pr-[12%]";
  const secondaryWidth = isPortrait ? "w-[28%]" : "w-[55%]";

  return (
    <div className={`relative w-full ${containerPadding}`}>
      {/* Main image — always full column width */}
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

      {/* Secondary image — overlaps bottom-right corner of main image */}
      {secondary && (
        <div
          className={`absolute bottom-0 right-0 ${secondaryWidth} rounded-xl sm:rounded-2xl bg-card overflow-hidden drop-shadow-[0_16px_32px_rgba(0,0,0,0.2)]`}
        >
          <Image
            src={secondary.src}
            alt={secondary.alt}
            height={secondary.height ?? 600}
            width={secondary.width ?? 900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      )}

      {/* Third image — overlaps top-left corner if present */}
      {images[2] && (
        <div className="absolute top-0 left-0 w-[38%] rounded-xl sm:rounded-2xl bg-card overflow-hidden drop-shadow-[0_16px_32px_rgba(0,0,0,0.2)] -translate-x-[10%] -translate-y-[10%]">
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
