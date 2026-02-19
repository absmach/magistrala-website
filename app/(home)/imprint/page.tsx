import { LegalLayout } from "@/components/landing/legal-layout";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  {
    title: {
      absolute: "Imprint | Abstract Machines",
    },
    description:
      "Legal Imprint and company information for Abstract Machines, the developers of Magistrala. Contact details and legal mentions.",
    keywords: [
      "Imprint",
      "Abstract Machines",
      "contact",
      "company information",
      "Paris",
      "IoT",
      "legal notice",
    ],
    openGraph: {
      url: "https://magistrala.absmach.eu/imprint/",
    },
  },
  "imprint",
);

export default function ImprintPage() {
  return (
    <LegalLayout
      title="Legal Notice / Mentions L&eacute;gales"
      subtitle="Pursuant to Article 6 of French Law n&deg;2004-575 of 21 June 2004 for Confidence in the Digital Economy (LCEN)."
    >
      <h2>1. Publisher</h2>
      <p>
        <strong>Company Name:</strong> Abstract Machines SAS (Absmach)
      </p>
      <p>
        <strong>Legal Form:</strong> Soci&eacute;t&eacute; par actions
        simplifi&eacute;e (SAS)
      </p>
      <p>
        <strong>RCS Number:</strong> 952 033 033
      </p>
      <p>
        <strong>VAT Number:</strong> FR71 952033033
      </p>
      <p>
        <strong>Registered Office:</strong> 141 Quai de Valmy, 75010 Paris,
        France
      </p>
      <p>
        <strong>Code NAF / APE:</strong> 6201Z (Programmation informatique)
      </p>
      <p>
        <strong>Publication Manager:</strong> Abstract Machines Legal Department
      </p>
      <p>
        <strong>Contact:</strong>{" "}
        <a href="mailto:legal@abstractmachines.dev">
          legal@abstractmachines.dev
        </a>
      </p>

      <h2>2. Website Hosting</h2>
      <p>
        <strong>GitHub Pages</strong> — GitHub, Inc.
      </p>
      <p>88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA</p>
      <p>
        <a
          href="https://pages.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pages.github.com
        </a>
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this site is the property of Abstract Machines SAS or its
        partners. Any reproduction, modification, or distribution without prior
        written consent is prohibited.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        While we strive to ensure the accuracy of all information, Abstract
        Machines assumes no responsibility for errors, omissions, or
        inaccuracies. Users access and use this website at their own risk.
      </p>

      <h2>5. External Links</h2>
      <p>
        This website may contain links to third-party websites. Abstract
        Machines is not responsible for their content or availability and
        disclaims all liability for any damage resulting from use of these
        sites.
      </p>

      <h2>6. Personal Data and Privacy</h2>
      <p>
        All personal data is handled in accordance with our{" "}
        <a href="/privacy">Privacy Policy</a> and the applicable data protection
        laws, including the GDPR and French Data Protection Act. You may contact
        us to access or modify your data via{" "}
        <a href="mailto:privacy@absmach.eu">privacy@absmach.eu</a>.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        This legal notice is governed by French law. Any dispute arising from
        the use of the site will fall under the exclusive jurisdiction of the
        courts of Paris, unless otherwise required by law.
      </p>

      <h2>8. Credits and Attribution</h2>
      <p>
        Design assets, images, and icons are either property of Abstract
        Machines or licensed from third parties under appropriate terms. Please
        refer to page footers or linked attributions where applicable.
      </p>
    </LegalLayout>
  );
}
