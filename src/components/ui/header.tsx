'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navigationLinks } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <Link href="/" className="pl-0">
          <Image
            src={
              getImageUrl('abstract-machines_logo_landscape-black.svg') ||
              '/placeholder.svg'
            }
            alt="Logo"
            width={250}
            height={250}
            className="xxs:w-50 xxs:h-50"
          />
        </Link>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 items-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xl hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button Section */}
        <div className="hidden md:flex items-center gap-6">
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
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              className="md:hidden bg-blue-800 hover:bg-blue-600 ml-auto"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle className="hidden">Menu</SheetTitle>
            </SheetHeader>
            <Separator className="my-4 mt-8" />
            <nav className="flex flex-col gap-4 mt-8">
              <ul className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block text-xl text-gray-600 hover:text-blue-600 transition-colors text-center"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <Separator className="my-4" />
                <li className="pt-4">
                  <Link href="#pricing">
                    <Button
                      variant="default"
                      aria-label="Try for free"
                      className="bg-blue-800 text-white hover:bg-blue-600 px-4 py-4 rounded w-full text-lg"
                    >
                      Try For Free
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
