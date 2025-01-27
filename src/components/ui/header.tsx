'use client';

import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center jutsify-between px-1">
        {/* Logo Section */}
        <Link href="/" className="">
          <Image
            src={getImageUrl('abstract-machines_logo_landscape-black.svg')}
            alt="Logo"
            width={250}
            height={250}
            className="mr-6 xxs:w-50 xxs:h-50"
          />
        </Link>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 items-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className=" text-xl  hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button Section */}
        <div className=" hidden md:flex items-center gap-6">
          <Link href="#pricing">
            <Button
              variant="default"
              aria-label="Try for free"
              className="bg-blue-800 text-white hover:bg-blue-600 px-4 py-2 rounded"
            >
              Try For Free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden bg-blue-800 hover:bg-blue-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white bg-blue-800 hover:bg-blue-600" />
          ) : (
            <Menu className="h-6 w-6 text-white bg-blue-800 hover:bg-blue-600" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className={`md:hidden bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? 'translate-y-0 opacity-100 px-2'
              : 'translate-y-[-10px] opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#pricing">
                <Button
                  variant="default"
                  aria-label="Try for free"
                  className="bg-blue-800 text-white hover:bg-blue-600 px-4 py-4 rounded w-full mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try For Free
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
