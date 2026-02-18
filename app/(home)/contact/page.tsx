import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";

export const metadata = createMetadata({
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
});

export default function ContactPage() {
  return <ContactForm />;
}
