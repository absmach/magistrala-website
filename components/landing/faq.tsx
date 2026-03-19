import { FAQAccordionItem } from "./faq-item";

export interface FAQItem {
  question: string;
  answer: string;
}

// Homepage FAQ data. Also mirrored in the FAQPage JSON-LD in app/(home)/page.tsx.
export const homepageFaqs: FAQItem[] = [
  {
    question: "Is Magistrala cloud-hosted or self-hosted?",
    answer:
      "Both. You can use our fully managed cloud platform or run your own instance using the open-source version. With Docker and Kubernetes support, self-hosted deployments are straightforward and production-ready.",
  },
  {
    question: "Can I use Magistrala as an open-source project?",
    answer:
      "Yes. Magistrala is released under the Apache 2.0 license, allowing both personal and commercial use. You can modify, extend, and redistribute the platform freely. The project is maintained by Abstract Machines and an active developer community.",
  },
  {
    question: "What happens when I exceed message or client limits?",
    answer:
      "The platform will gracefully reject excess messages or block new connections depending on your plan. You can upgrade instantly and new resources are applied dynamically without downtime.",
  },
  {
    question: "Is role-based access control (RBAC) supported?",
    answer:
      "Magistrala implements fine-grained RBAC with permissions at user, group, domain, client, and channel scope. It integrates with Google Zanzibar-like backends such as SpiceDB, and policies are evaluated securely at runtime.",
  },
  {
    question: "What message brokers are supported?",
    answer:
      "Magistrala integrates with NATS, Kafka, and RabbitMQ as central brokers. It also supports pluggable MQTT brokers via mProxy, plus WebSocket and HTTP protocols. Both TLS and mTLS are fully supported.",
  },
  {
    question: "Can I integrate with external MQTT brokers?",
    answer:
      "Yes. Magistrala supports integration with external MQTT brokers using protocol adapters and bridge configurations, with token-based authentication and fine-grained access control. Compatible with Mosquitto, EMQX, and others.",
  },
];

export interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  id?: string;
  withSchema?: boolean;
}

export function FAQSection({
  items = homepageFaqs,
  title = "Frequently asked questions",
  id = "faq",
  withSchema = false,
}: FAQSectionProps) {
  const schema = withSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <section id={id} className="py-24 container mx-auto">
      {schema && (
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="divide-y divide-border/60">
          {items.map((faq) => (
            <FAQAccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
