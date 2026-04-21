import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";

export const metadata = createMetadata(
  {
    title: "Contact Us",
    description:
      "Get in touch with the Abstract Machines team. Questions about Magistrala IoT platform? We're here to help.",
    keywords: [
      "Contact",
      "Magistrala",
      "Abstract Machines",
      "IoT platform",
      "support",
      "sales",
    ],
    openGraph: {
      url: "https://magistrala.absmach.eu/contact/",
    },
  },
  "contact",
);

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Magistrala — Abstract Machines",
  url: "https://magistrala.absmach.eu/contact/",
  description:
    "Get in touch with the Abstract Machines team for Magistrala IoT platform sales, support, and enterprise enquiries.",
  mainEntity: {
    "@type": "Organization",
    name: "Abstract Machines",
    legalName: "Abstract Machines SAS",
    url: "https://absmach.eu",
    email: "info@absmach.eu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "141 Quai de Valmy",
      addressLocality: "Paris",
      postalCode: "75010",
      addressCountry: "FR",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactForm />
    </>
  );
}
