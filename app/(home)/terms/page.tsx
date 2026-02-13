import type { Metadata } from "next";
import { LegalLayout } from "@/components/landing/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | Magistrala",
  description:
    "Read the Terms of Service for Magistrala, the open-source IoT platform by Abstract Machines.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Effective Date: August 6, 2025 — Last Updated: November 14, 2025"
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the Magistrala IoT Platform (&ldquo;Platform&rdquo; or
        &ldquo;Services&rdquo;), a software-as-a-service offering operated by
        Abstract Machines SAS (&ldquo;Abstract Machines,&rdquo;
        &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;).
      </p>
      <p>
        By creating an account, accessing, or using the Platform, you
        (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agree
        to be bound by these Terms and our Privacy Policy. If you do not agree
        to these Terms, you may not use our Services.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>&ldquo;Account&rdquo;</strong> means your registered account
          on the Platform.
        </li>
        <li>
          <strong>&ldquo;Customer&rdquo;</strong> means the company or
          individual who registers for an account to use the Platform.
        </li>
        <li>
          <strong>&ldquo;Customer Data&rdquo;</strong> means all data, content,
          and information uploaded, transmitted, or processed through the
          Platform by you.
        </li>
        <li>
          <strong>&ldquo;Documentation&rdquo;</strong> means the user guides,
          technical manuals, and API documentation provided by us.
        </li>
        <li>
          <strong>&ldquo;Intellectual Property Rights&rdquo;</strong> means all
          intellectual property rights including patents, copyrights,
          trademarks, and trade secrets.
        </li>
        <li>
          <strong>&ldquo;Platform&rdquo;</strong> means the Magistrala IoT
          Platform and all related services, software, and infrastructure.
        </li>
        <li>
          <strong>&ldquo;Services&rdquo;</strong> means the hosted Magistrala
          IoT Platform and associated features provided by Abstract Machines.
        </li>
        <li>
          <strong>&ldquo;Service Plan&rdquo;</strong> means either the Free
          Trial or Enterprise Plan offering.
        </li>
        <li>
          <strong>&ldquo;User&rdquo;</strong> means any person authorized by the
          Customer to access the Platform.
        </li>
      </ul>

      <h2>3. Account Registration</h2>
      <p>To create an Account and use the Platform, you must:</p>
      <ul>
        <li>
          Be at least 18 years old (or the legal age of majority in your
          jurisdiction);
        </li>
        <li>Have the legal capacity to enter into binding agreements;</li>
        <li>
          Provide accurate, current, and complete registration information;
        </li>
        <li>Maintain and update your account information;</li>
        <li>
          Maintain the confidentiality and security of your login credentials;
        </li>
        <li>
          Not share your account with others or allow unauthorized access.
        </li>
      </ul>
      <p>
        You are fully responsible for all activities that occur under your
        Account, whether authorized by you or not. You must immediately notify
        us of any unauthorized use of your Account or any other breach of
        security.
      </p>
      <p>
        We reserve the right to refuse registration or terminate Accounts at our
        sole discretion, particularly if we believe you have violated these
        Terms.
      </p>

      <h2>4. Access and License</h2>
      <p>
        Subject to your compliance with these Terms and payment of applicable
        fees (for Enterprise plans), Abstract Machines grants you a limited,
        non-exclusive, non-transferable, revocable license to access and use the
        Platform in accordance with your selected Service Plan and these Terms.
      </p>

      <h3>4.1 Permitted Use</h3>
      <p>
        You may use the Platform solely for your internal business purposes in
        accordance with the Documentation and your Service Plan limits.
      </p>

      <h3>4.2 Restrictions</h3>
      <p>You may not, and may not permit others to:</p>
      <ul>
        <li>
          Reverse engineer, decompile, disassemble, or attempt to derive the
          source code of the Platform;
        </li>
        <li>
          Copy, modify, adapt, alter, translate, or create derivative works of
          the Platform;
        </li>
        <li>
          Rent, lease, sublicense, distribute, transfer, or resell access to the
          Platform;
        </li>
        <li>
          Remove, alter, or obscure any proprietary notices on the Platform;
        </li>
        <li>
          Circumvent or attempt to circumvent usage limits, security controls,
          or access restrictions;
        </li>
        <li>Use the Platform to develop competing products or services;</li>
        <li>
          Access the Platform through automated means except through our
          official APIs;
        </li>
        <li>
          Interfere with or disrupt the Platform&rsquo;s operation or
          infrastructure.
        </li>
      </ul>

      <h3>4.3 API Usage</h3>
      <p>
        Use of our APIs is subject to rate limits and usage restrictions as
        specified in your Service Plan and our API Documentation.
      </p>

      <h2>5. Subscription and Payment</h2>

      <h3>5.1 Service Plans</h3>
      <p>We offer two service plans:</p>
      <ul>
        <li>
          <strong>Free Trial:</strong> Limited functionality primarily for
          testing and evaluation purposes
        </li>
        <li>
          <strong>Enterprise Plan:</strong> Custom solution with full features —
          contact us for pricing and terms
        </li>
      </ul>

      <h3>5.2 Free Trial</h3>
      <p>
        The free trial provides limited access to the Platform for testing
        purposes only. Free trial accounts may have restrictions on features,
        usage limits, and data retention.
      </p>

      <h3>5.3 Enterprise Plan</h3>
      <p>
        Enterprise plans are custom solutions tailored to your specific needs.
        Pricing, features, and terms are determined through direct consultation.
        Contact our sales team to discuss your requirements.
      </p>

      <h3>5.4 Payment Processing</h3>
      <p>
        For Enterprise plans, payment terms and methods will be specified in
        your custom agreement.
      </p>

      <h3>5.5 Billing and Fees</h3>
      <ul>
        <li>Free trial accounts incur no charges;</li>
        <li>Enterprise plan fees are determined in your custom agreement;</li>
        <li>
          All fees are exclusive of applicable taxes, which you are responsible
          for;
        </li>
        <li>
          Payment terms and refund policies are specified in your Enterprise
          agreement;
        </li>
        <li>
          We reserve the right to change pricing for new agreements with
          appropriate notice.
        </li>
      </ul>

      <h2>6. Service Levels</h2>
      <p>
        We strive to provide reliable service availability but make no
        guarantees regarding uptime or performance unless specified in a
        separate Service Level Agreement (SLA).
      </p>
      <ul>
        <li>
          <strong>Target Availability:</strong> We aim for 99.5% monthly uptime
          for paid plans;
        </li>
        <li>
          <strong>Maintenance:</strong> Planned maintenance windows are excluded
          from availability calculations;
        </li>
        <li>
          <strong>Force Majeure:</strong> Downtime due to circumstances beyond
          our reasonable control is excluded;
        </li>
        <li>
          <strong>Enterprise SLAs:</strong> Custom SLAs may be available for
          Enterprise customers under separate agreements.
        </li>
      </ul>

      <h2>7. Customer Data</h2>

      <h3>7.1 Data Ownership</h3>
      <p>
        You retain all rights, title, and interest in and to your Customer Data.
        We claim no ownership rights over your Customer Data.
      </p>

      <h3>7.2 Data Processing License</h3>
      <p>
        You grant us a limited license to access, use, store, and process your
        Customer Data solely as necessary to provide the Services, including:
      </p>
      <ul>
        <li>Storing and processing data through the Platform;</li>
        <li>Providing technical support when requested;</li>
        <li>Ensuring security and preventing abuse;</li>
        <li>Complying with legal obligations.</li>
      </ul>

      <h3>7.3 Data Security and Privacy</h3>
      <p>
        We implement appropriate technical and organizational measures to
        protect your Customer Data as described in our Privacy Policy. We will
        not access, use, or disclose your Customer Data except as permitted by
        these Terms or required by law.
      </p>

      <h3>7.4 Data Backup and Recovery</h3>
      <p>
        While we perform regular backups, you are responsible for maintaining
        your own backups of critical data. We are not liable for data loss.
      </p>

      <h2>8. Acceptable Use</h2>

      <h3>8.1 Prohibited Activities</h3>
      <p>You agree not to use the Platform to:</p>
      <ul>
        <li>
          Violate any applicable laws, regulations, or third-party rights;
        </li>
        <li>Send spam, unsolicited communications, or malicious content;</li>
        <li>Upload or transmit viruses, malware, or other harmful code;</li>
        <li>
          Attempt to gain unauthorized access to our systems or other
          users&rsquo; accounts;
        </li>
        <li>
          Interfere with or disrupt the Platform&rsquo;s operation or
          infrastructure;
        </li>
        <li>
          Use the Platform for cryptocurrency mining or similar
          resource-intensive activities;
        </li>
        <li>
          Engage in any activity that could harm our reputation or business;
        </li>
        <li>Violate the privacy or rights of others.</li>
      </ul>

      <h3>8.2 Content Standards</h3>
      <p>
        Any content you upload or transmit through the Platform must not be
        illegal, harmful, threatening, abusive, defamatory, or otherwise
        objectionable.
      </p>

      <h3>8.3 Enforcement</h3>
      <p>
        We reserve the right to investigate violations and take appropriate
        action, including suspending or terminating accounts, removing content,
        and cooperating with law enforcement.
      </p>

      <h2>9. Support</h2>

      <h3>9.1 Support Channels</h3>
      <p>
        We provide technical support through various channels including email,
        documentation, and community forums. Support availability and response
        times vary by Service Plan.
      </p>

      <h3>9.2 Support Scope</h3>
      <p>Our support covers:</p>
      <ul>
        <li>Platform functionality and technical issues;</li>
        <li>Account and billing questions;</li>
        <li>General usage guidance and best practices.</li>
      </ul>
      <p>
        Support does not include custom development, integration services, or
        troubleshooting of your applications unless separately agreed.
      </p>

      <h3>9.3 Enterprise Support</h3>
      <p>
        Enterprise customers may receive enhanced support including dedicated
        support contacts, faster response times, and custom SLAs under separate
        agreements.
      </p>

      <h2>10. Term and Termination</h2>

      <h3>10.1 Term</h3>
      <p>
        These Terms commence when you first access the Platform and continue
        until terminated in accordance with this section.
      </p>

      <h3>10.2 Termination by You</h3>
      <p>You may terminate these Terms at any time by:</p>
      <ul>
        <li>Discontinuing use of your free trial account;</li>
        <li>Terminating your Enterprise agreement according to its terms;</li>
        <li>Contacting our support team;</li>
        <li>Ceasing all use of the Platform.</li>
      </ul>

      <h3>10.3 Termination by Us</h3>
      <p>
        We may terminate or suspend your access immediately, without prior
        notice, if you:
      </p>
      <ul>
        <li>Violate these Terms or our Acceptable Use Policy;</li>
        <li>Fail to pay Enterprise plan fees when due;</li>
        <li>Engage in fraudulent or illegal activities;</li>
        <li>Pose a security risk to the Platform or other users.</li>
      </ul>

      <h3>10.4 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your access to the Platform will cease;</li>
        <li>
          Your Customer Data will be deleted according to our data retention
          policy;
        </li>
        <li>You remain liable for all fees incurred prior to termination;</li>
        <li>
          Sections that by their nature should survive will continue to apply.
        </li>
      </ul>

      <h2>11. Intellectual Property</h2>

      <h3>11.1 Our Intellectual Property</h3>
      <p>
        The Platform, including all software, content, trademarks, and other
        materials, is owned by Abstract Machines and protected by intellectual
        property laws. These Terms do not grant you any ownership rights in the
        Platform.
      </p>

      <h3>11.2 Your Intellectual Property</h3>
      <p>
        You retain ownership of your Customer Data and any intellectual property
        rights therein. You are responsible for ensuring you have the necessary
        rights to use and upload your Customer Data.
      </p>

      <h3>11.3 Feedback</h3>
      <p>
        Any feedback, suggestions, or ideas you provide about the Platform may
        be used by us without restriction or compensation to you.
      </p>

      <h3>11.4 Third-Party Content</h3>
      <p>
        The Platform may include third-party content or links to third-party
        services. We are not responsible for such third-party content.
      </p>

      <h2>12. Disclaimer and Limitation of Liability</h2>

      <h3>12.1 Disclaimer of Warranties</h3>
      <p>
        THE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
        IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
      </p>
      <ul>
        <li>
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT;
        </li>
        <li>THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE;</li>
        <li>THAT DEFECTS WILL BE CORRECTED;</li>
        <li>THAT THE PLATFORM WILL MEET YOUR REQUIREMENTS.</li>
      </ul>

      <h3>12.2 Limitation of Liability</h3>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
      <ul>
        <li>
          WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES;
        </li>
        <li>
          OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE 12
          MONTHS PRECEDING THE CLAIM;
        </li>
        <li>
          WE ARE NOT LIABLE FOR DATA LOSS, BUSINESS INTERRUPTION, OR LOST
          PROFITS;
        </li>
        <li>THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY.</li>
      </ul>

      <h3>12.3 Exceptions</h3>
      <p>
        Nothing in these Terms excludes or limits our liability for death or
        personal injury caused by negligence, fraud, or other liability that
        cannot be excluded by law.
      </p>

      <h2>13. Governing Law and Dispute Resolution</h2>

      <h3>13.1 Governing Law</h3>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        France, without regard to conflict of law principles.
      </p>

      <h3>13.2 Jurisdiction</h3>
      <p>
        Any disputes arising from these Terms shall be subject to the exclusive
        jurisdiction of the courts of Paris, France.
      </p>

      <h3>13.3 Dispute Resolution Process</h3>
      <p>
        Before initiating formal legal proceedings, we encourage you to contact
        us to seek a resolution. We will attempt to resolve disputes through
        good faith negotiations.
      </p>

      <h3>13.4 Class Action Waiver</h3>
      <p>
        To the extent permitted by law, you agree that disputes will be resolved
        on an individual basis and waive any right to participate in class
        action lawsuits.
      </p>

      <h2>14. Consumer Rights and Withdrawal</h2>

      <h3>14.1 EU Consumer Rights</h3>
      <p>
        If you are a consumer in the European Union, you have certain rights
        under EU consumer protection laws that cannot be waived by these Terms.
      </p>

      <h3>14.2 Right of Withdrawal</h3>
      <p>
        EU consumers have the right to withdraw from the contract within 14 days
        of subscription without giving any reason. However, if you begin using
        the Services during this period, you may lose this right of withdrawal.
      </p>

      <h3>14.3 Statutory Warranties</h3>
      <p>
        Nothing in these Terms affects your statutory rights as a consumer,
        including rights related to defective services or unfair contract terms.
      </p>

      <h2>15. Changes to Terms</h2>

      <h3>15.1 Modification Rights</h3>
      <p>
        We reserve the right to modify these Terms at any time. When we make
        changes, we will:
      </p>
      <ul>
        <li>
          Update the &ldquo;Last Updated&rdquo; date at the top of these Terms;
        </li>
        <li>Notify you via email or through the Platform;</li>
        <li>Provide at least 30 days&rsquo; notice for material changes.</li>
      </ul>

      <h3>15.2 Acceptance of Changes</h3>
      <p>
        Your continued use of the Platform after changes become effective
        constitutes acceptance of the modified Terms. If you do not agree to the
        changes, you must stop using the Platform and may terminate your
        account.
      </p>

      <h3>15.3 Previous Versions</h3>
      <p>
        Previous versions of these Terms are available upon request for your
        reference.
      </p>

      <h2>16. Contact Information</h2>

      <h3>16.1 Company Information</h3>
      <p>
        <strong>Abstract Machines SAS</strong>
        <br />
        141 Quai de Valmy
        <br />
        75010 Paris, France
      </p>

      <h3>16.2 Contact Methods</h3>
      <p>
        <strong>Legal Questions:</strong>{" "}
        <a href="mailto:legal@absmach.eu">legal@absmach.eu</a>
      </p>
      <p>
        <strong>General Support:</strong>{" "}
        <a href="mailto:support@absmach.eu">support@absmach.eu</a>
      </p>
      <p>
        <strong>Privacy Questions:</strong>{" "}
        <a href="mailto:privacy@absmach.eu">privacy@absmach.eu</a>
      </p>

      <h3>16.3 Response Times</h3>
      <p>
        We aim to respond to all inquiries within 2–3 business days. For urgent
        matters, please indicate the urgency in your subject line.
      </p>
    </LegalLayout>
  );
}
