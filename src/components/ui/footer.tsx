import { FooterCompanyInfo } from '../footer-company-info';
import { FooterCopyright } from '../footer-copyright';
import { FooterNewsletter } from '../footer-newsletter';
import { FooterQuickLinks } from '../footer-quick-links';
import { FooterSocialLinks } from '../footer-social-links';

export default function Footer() {
  return (
    <footer className="bg-blue-200 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <FooterCompanyInfo />
          <FooterQuickLinks />
          <FooterSocialLinks />
          <FooterNewsletter />
        </div>

        {/* Footer Bottom */}
        <FooterCopyright />
      </div>
    </footer>
  );
}
