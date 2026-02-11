import Image from "next/image";

const partners = [
  { name: "Target", src: "/partners/target.png", height: 50, width: 50 },
  { name: "Greennet", src: "/partners/greennet.png", height: 30, width: 150 },
  { name: "EU Commission", src: "/partners/eu.png", height: 50, width: 100 },
  {
    name: "Telefonica",
    src: "/partners/telefonica.png",
    height: 30,
    width: 150,
  },
  { name: "TU Eindhoven", src: "/partners/tue.png", height: 30, width: 150 },
  { name: "TNO", src: "/partners/tno.png", height: 36, width: 100 },
  { name: "PARC", src: "/partners/parc.png", height: 30, width: 100 },
  { name: "VTT", src: "/partners/vtt.png", height: 36, width: 100 },
  { name: "ETF", src: "/partners/etf.png", height: 50, width: 100 },
  { name: "Fujitsu", src: "/partners/fujitsu.png", height: 50, width: 100 },
];

export function PartnersMarquee() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-10">
      <div className="mx-auto max-w-6xl px-6 mb-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
