"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 container mx-auto">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="divide-y divide-border/60">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 text-left p-2"
                >
                  <span className="text-xl font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-muted-foreground leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
