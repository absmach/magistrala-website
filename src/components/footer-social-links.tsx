import { Button } from '@/components/ui/button';
import { footerData } from '@/lib/constants';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const icons = {
  Twitter,
  Linkedin,
  Github,
} as const;

export function FooterSocialLinks() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Connect With Us</h4>
      <div className="flex flex-col space-y-2">
        {footerData.socialLinks.map((link) => {
          const Icon = icons[link.icon as keyof typeof icons];
          return (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4 mr-2" />
              {link.platform}
            </a>
          );
        })}
      </div>
    </div>
  );
}
