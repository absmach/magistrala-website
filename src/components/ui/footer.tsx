import { FooterCompanyInfo } from '../footer-company-info';
import { FooterCopyright } from '../footer-copyright';
import { FooterNewsletter } from '../footer-newsletter';
import { FooterQuickLinks } from '../footer-quick-links';
import { FooterSocialLinks } from '../footer-social-links';

export default function Footer() {
  return (
    <footer className="bg-blue-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row gap-8 justify-between mg-8">
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
