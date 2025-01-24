import { footerData } from '@/lib/constants';
import Link from 'next/link';

export function FooterQuickLinks() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Quick Links</h4>
      <nav className="flex flex-col space-y-2">
        {footerData.quickLinks.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
