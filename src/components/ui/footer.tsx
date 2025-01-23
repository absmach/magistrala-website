import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getImageUrl } from '@/lib/getImageUrl';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src={getImageUrl('abstract-machines_logo_landscape-black.svg')}
              alt="Abstract Machines Logo"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold tracking-tight">Magistrala</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connecting devices, sharing data, and visualizing insights with
              our powerful IoT platform built for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#use-cases"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Use Cases
              </Link>
              <Link
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Contact & Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@abstractmachines.fr"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@abstractmachines.fr
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="w-fit px-0 hover:bg-transparent"
                asChild
              >
                <a
                  href="https://twitter.com/absmach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </Button>
              <Button
                variant="ghost"
                className="w-fit px-0 hover:bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/company/abstract-machines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="ghost"
                className="w-fit px-0 hover:bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/absmach/magistrala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Stay in the loop</p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-800 hover:bg-blue-600">Sign Up</Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Abstract Machines. All rights
              reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
