import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/lib/constants';
import { getImageUrl } from '@/lib/getImageUrl';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center flex-wrap gap-4 sm:gap-0 sm:flex-nowrap">
        {/* Logo Section */}
        <Link href="/" className="flex items-center flex-none">
          <Image
            src={getImageUrl('abstract-machines_logo_landscape-black.svg')}
            alt="Logo"
            width={200}
            height={200}
            className="mr-2"
          />
        </Link>

        {/* Navigation Section */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex justify-center space-x-8 items-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button Section */}
        <Link href="#pricing" className="flex-none">
          <Button
            variant="default"
            aria-label="Try for free"
            className="bg-blue-800 text-white hover:bg-blue-600 border-none px-4 py-2 rounded"
          >
            Try For Free
          </Button>
        </Link>
      </div>
    </header>
  );
}
