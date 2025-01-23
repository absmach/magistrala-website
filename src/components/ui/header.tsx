import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/lib/constants';
import { getImageUrl } from '@/lib/getImageUrl';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center">
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
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8 items-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-blue-600">
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
            className="bg-blue-800 text-white hover:bg-blue-600 border-none px-4 py-2 rounded"
          >
            Try For Free
          </Button>
        </Link>
      </div>
    </header>
  );
}
