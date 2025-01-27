import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/lib/constants';

export function FAQSection() {
  return (
    <section id="faq" className=" bg-gray-100 py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-5xl text-3xl font-bold text-center mb-12">
          FAQs
        </h2>
        <div className="overflow-hidden bg-amber-50 shadow-md rounded-lg p-6">
          {faqData.map((faqCategory, index) => (
            <div key={faqCategory.title} className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                {faqCategory.title}
              </h3>
              <Accordion type="single" collapsible>
                {faqCategory.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${index}-${faqIndex}`}
                  >
                    <AccordionTrigger className="text-lg font-bold text-black mb-2">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
