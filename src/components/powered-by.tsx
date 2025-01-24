import { getImageUrl } from '@/lib/getImageUrl';
import Image from 'next/image';

export function PoweredBy() {
  const partners = [
    {
      name: 'Next.js',
      imageUrl: 'next.svg',
      width: 40,
      height: 40,
      link: 'https://nextjs.org',
    },
    {
      name: 'Go',
      imageUrl: 'go.svg',
      width: 40,
      height: 40,
      link: 'https://golang.org',
    },
    {
      name: 'ShadCN',
      imageUrl: 'shadcn.svg',
      width: 40,
      height: 40,
      link: 'https://ui.shadcn.com/',
    },
    {
      name: 'Abstract Machines',
      imageUrl: 'abstract-machines_logo_square-black.svg',
      width: 40,
      height: 40,
      link: 'https://github.com/absmach',
    },
    {
      name: 'Stripe',
      imageUrl: 'stripe.svg',
      width: 40,
      height: 40,
      link: 'https://stripe.com',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-blue-950 font-semibold lg:text:3xl text-xl mb-8">
          POWERED BY
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-12 relative grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
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
