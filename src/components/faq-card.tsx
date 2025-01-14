import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQCardProps {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function FAQCard({ title, faqs }: FAQCardProps) {
  return (
    <div className="overflow-hidden bg-amber-50 shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-bold tracking-tight mb-4">{title}</h3>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey:
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
