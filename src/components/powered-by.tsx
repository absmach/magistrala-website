import { poweredByPartners } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

export function PoweredBy() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-blue-950 font-semibold lg:text:3xl text-xl mb-8">
          POWERED BY
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-10">
          {poweredByPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-12 relative transition-transform duration-300 hover:scale-125"
            >
              <Image
                src={getImageUrl(partner.imageUrl)}
                alt={`${partner.name} logo`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
