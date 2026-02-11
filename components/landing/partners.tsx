const partners = [
  { name: "Target", src: "/img/partners/target.png", height: 50 },
  { name: "Greennet", src: "/img/partners/greennet.png", height: 30 },
  { name: "EU Commission", src: "/img/partners/eu.png", height: 50 },
  { name: "Telefonica", src: "/img/partners/telefonica.png", height: 30 },
  { name: "TU Eindhoven", src: "/img/partners/tue.png", height: 30 },
  { name: "TNO", src: "/img/partners/tno.png", height: 36 },
  { name: "PARC", src: "/img/partners/parc.png", height: 30 },
  { name: "VTT", src: "/img/partners/vtt.png", height: 36 },
  { name: "ETF", src: "/img/partners/etf.png", height: 50 },
  { name: "Fujitsu", src: "/img/partners/fujitsu.png", height: 50 },
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
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.src}
                alt={partner.name}
                style={{ height: partner.height }}
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
