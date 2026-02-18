import { LegalLayout } from "@/components/landing/legal-layout";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Magistrala IoT Platform. Learn how Abstract Machines collects, uses, and protects your data.",
  keywords: [
    "Privacy Policy",
    "data protection",
    "Magistrala",
    "Abstract Machines",
    "GDPR",
    "IoT privacy",
    "data security",
  ],
  openGraph: {
    url: "https://magistrala.absmach.eu/privacy/",
  },
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Effective Date: August 6, 2025"
    >
      <p>
        This Privacy Policy explains how Abstract Machines SAS
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
        uses, and protects your personal data when you use the Magistrala SaaS
        platform (&ldquo;Platform&rdquo;).
      </p>
      <p>
        We are committed to complying with the General Data Protection
        Regulation (GDPR) and other applicable privacy laws.
      </p>

      <h2>1. Who We Are</h2>
      <p>
        Abstract Machines SAS is a French company with its registered office at
        141 Quai de Valmy, 75010 Paris, France. As the data controller under the
        General Data Protection Regulation (GDPR) and French Data Protection Act
        (Loi Informatique et Libert&eacute;s), we determine the purposes and
        means of processing your personal data in connection with our Magistrala
        IoT platform and related services.
      </p>

      <h2>2. What Data We Collect</h2>
      <p>We collect and process the following categories of personal data:</p>

      <h3>2.1 Account and Identity Data</h3>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Company name and business information</li>
        <li>Phone number (if provided)</li>
        <li>Profile picture (if uploaded)</li>
        <li>Account preferences and settings</li>
      </ul>

      <h3>2.2 Authentication and Security Data</h3>
      <ul>
        <li>Username and encrypted passwords</li>
        <li>API keys and access tokens</li>
        <li>Login timestamps and session data</li>
      </ul>

      <h3>2.3 Technical and Usage Data</h3>
      <ul>
        <li>IP addresses and geolocation data</li>
        <li>Device information (browser type, operating system, device ID)</li>
        <li>Platform usage statistics and analytics</li>
        <li>API calls, requests, and response times</li>
        <li>Error logs and debugging information</li>
        <li>Feature usage patterns and user interactions</li>
      </ul>

      <h3>2.4 Commercial and Billing Data</h3>
      <ul>
        <li>Subscription plans and billing history</li>
        <li>Invoicing details and tax information</li>
        <li>Purchase history and transaction records</li>
      </ul>

      <h3>2.5 Communication Data</h3>
      <ul>
        <li>Support tickets and correspondence</li>
        <li>Email communications and responses</li>
        <li>Chat logs and support interactions</li>
        <li>Feedback, surveys, and testimonials</li>
        <li>Marketing communication preferences</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We process your personal data for the following purposes:</p>

      <h3>3.1 Service Provision and Platform Operations</h3>
      <ul>
        <li>Create and manage user accounts</li>
        <li>Authenticate users and maintain security</li>
        <li>Provide access to the Magistrala IoT platform</li>
        <li>Process and route IoT device data</li>
        <li>Maintain platform infrastructure and databases</li>
        <li>Monitor system performance and availability</li>
        <li>Backup and disaster recovery operations</li>
      </ul>

      <h3>3.2 Customer Support and Communication</h3>
      <ul>
        <li>Respond to support requests and technical issues</li>
        <li>Provide customer service and assistance</li>
        <li>Send service-related notifications and updates</li>
        <li>Communicate about account changes or security issues</li>
        <li>Conduct user training and onboarding</li>
      </ul>

      <h3>3.3 Billing and Financial Management</h3>
      <ul>
        <li>Manage subscription plans and billing cycles</li>
        <li>Generate invoices and billing statements</li>
        <li>Maintain financial records for accounting purposes</li>
        <li>Comply with tax and regulatory requirements</li>
      </ul>

      <h3>3.4 Platform Improvement and Analytics</h3>
      <ul>
        <li>Analyze usage patterns and user behavior</li>
        <li>Improve platform features and functionality</li>
        <li>Conduct performance optimization</li>
        <li>Develop new services and capabilities</li>
        <li>Generate anonymized statistics and reports</li>
      </ul>

      <h3>3.5 Security and Fraud Prevention</h3>
      <ul>
        <li>Detect and prevent unauthorized access</li>
        <li>Monitor for suspicious activities</li>
        <li>Investigate security incidents</li>
        <li>Implement access controls and authentication</li>
        <li>Maintain audit logs and compliance records</li>
      </ul>

      <h3>3.6 Legal Compliance and Regulatory Requirements</h3>
      <ul>
        <li>Comply with applicable laws and regulations</li>
        <li>Respond to legal requests and court orders</li>
        <li>Maintain records for regulatory audits</li>
        <li>Report incidents as required by law</li>
        <li>Protect our legal rights and interests</li>
      </ul>

      <h3>3.7 Marketing and Business Development (with consent)</h3>
      <ul>
        <li>Send promotional materials and newsletters</li>
        <li>Conduct market research and surveys</li>
        <li>Organize events and webinars</li>
        <li>Develop case studies and testimonials</li>
      </ul>

      <h2>4. Legal Bases for Processing</h2>
      <p>
        Under GDPR Article 6, we process your personal data based on the
        following legal grounds:
      </p>

      <h3>4.1 Contractual Necessity (Article 6(1)(b))</h3>
      <p>
        Processing is necessary for the performance of our contract with you,
        including:
      </p>
      <ul>
        <li>Account creation and management</li>
        <li>Platform access and service delivery</li>
        <li>Payment processing and billing</li>
        <li>Customer support and technical assistance</li>
        <li>Service-related communications</li>
      </ul>

      <h3>4.2 Legitimate Interests (Article 6(1)(f))</h3>
      <p>
        Processing is necessary for our legitimate business interests, which
        include:
      </p>
      <ul>
        <li>Platform security and fraud prevention</li>
        <li>Service improvement and optimization</li>
        <li>Business analytics and reporting</li>
        <li>Network and information security</li>
        <li>Internal administration and record-keeping</li>
        <li>Protecting our legal rights and interests</li>
      </ul>
      <p>
        <em>
          We have conducted a legitimate interest assessment (LIA) to ensure our
          interests do not override your fundamental rights and freedoms.
        </em>
      </p>

      <h3>4.3 Legal Obligation (Article 6(1)(c))</h3>
      <p>
        Processing is necessary to comply with legal obligations, including:
      </p>
      <ul>
        <li>Tax and accounting requirements</li>
        <li>Regulatory compliance (financial services, data protection)</li>
        <li>Court orders and legal proceedings</li>
        <li>
          Anti-money laundering (AML) and know-your-customer (KYC) requirements
        </li>
        <li>Data breach notification obligations</li>
      </ul>

      <h3>4.4 Consent (Article 6(1)(a))</h3>
      <p>Where we have obtained your explicit consent for:</p>
      <ul>
        <li>Marketing communications and newsletters</li>
        <li>Non-essential cookies (PostHog, Google Analytics)</li>
        <li>Testimonials and case studies</li>
        <li>Market research and surveys</li>
      </ul>
      <p>
        <em>
          You may withdraw your consent at any time without affecting the
          lawfulness of processing based on consent before its withdrawal.
        </em>
      </p>

      <h2>5. Cookies and Similar Technologies</h2>
      <p>We use cookies and similar technologies to enhance your experience:</p>

      <h3>5.1 Essential Cookies (No consent required)</h3>
      <ul>
        <li>Session cookies for authentication and security</li>
        <li>Login state management</li>
        <li>Security tokens and CSRF protection</li>
      </ul>

      <h3>5.2 Analytics Cookies (Consent required)</h3>
      <ul>
        <li>
          PostHog for website usage analytics, user behavior analytics and
          product insights.
        </li>
        <li>Performance monitoring and optimization</li>
      </ul>

      <p>
        <strong>Cookie Management:</strong> You can manage your cookie
        preferences through your browser settings or our cookie consent banner.
      </p>

      <h2>6. Data Sharing and Recipients</h2>
      <p>
        We do not sell your personal data. We may share data with the following
        categories of recipients:
      </p>

      <h3>6.1 Service Providers and Processors</h3>
      <ul>
        <li>Payment processing</li>
        <li>Analytics</li>
        <li>Email services</li>
      </ul>

      <h3>6.2 Legal and Regulatory Requirements</h3>
      <ul>
        <li>Law enforcement agencies when required by law</li>
        <li>Regulatory bodies for compliance purposes</li>
        <li>Tax authorities for reporting obligations</li>
        <li>Data protection authorities in case of investigations</li>
      </ul>

      <h3>6.3 Data Processing Agreements</h3>
      <p>
        All third-party processors are bound by GDPR-compliant data processing
        agreements with strict security and confidentiality requirements.
      </p>

      <h2>7. Data Transfers Outside the EU</h2>
      <p>We ensure protection through:</p>
      <ul>
        <li>European Commission adequacy decisions</li>
        <li>Standard Contractual Clauses (SCCs)</li>
        <li>Additional safeguards</li>
      </ul>

      <h2>8. Data Retention</h2>
      <p>
        We retain your personal data for as long as your account is active and
        for a limited period thereafter to comply with legal and operational
        obligations. Data may be anonymized for analytics.
      </p>

      <h2>9. Customer Rights Under GDPR</h2>
      <p>You have rights to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion</li>
        <li>Restrict processing</li>
        <li>Data portability</li>
        <li>Object to processing</li>
        <li>Withdraw consent</li>
        <li>Lodge complaints with CNIL (www.cnil.fr)</li>
      </ul>
      <p>
        Contact: <a href="mailto:privacy@absmach.eu">privacy@absmach.eu</a>
      </p>

      <h2>10. Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your data, including encryption, access control, and regular
        security reviews.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        via email or through the Platform when significant changes occur.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:privacy@absmach.eu">privacy@absmach.eu</a>
      </p>
      <p>
        <strong>Address:</strong>
        <br />
        Abstract Machines SAS
        <br />
        141 Quai de Valmy
        <br />
        75010 Paris, France
      </p>
      <p>
        <strong>French Data Protection Authority (CNIL):</strong>
        <br />
        www.cnil.fr | +33 1 53 73 22 22
      </p>
    </LegalLayout>
  );
}
