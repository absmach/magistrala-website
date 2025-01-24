import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getImageUrl } from '@/lib/getImageUrl';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterCompanyInfo } from '../footer-company-info';
import { FooterQuickLinks } from '../footer-quick-links';
import { FooterSocialLinks } from '../footer-social-links';
import { FooterNewsletter } from '../footer-newsletter';
import { FooterBottom } from '../footer-bottom';

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <FooterCompanyInfo />
          <FooterQuickLinks />
          <FooterSocialLinks />
          <FooterNewsletter />
        </div>

        {/* Footer Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}
