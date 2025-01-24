import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSectionData } from "@/lib/constants";
import { getImageUrl } from "@/lib/getImageUrl";

export function FAQSection() {
  const { sectionId, title, faqs } = faqSectionData;
  const faqImage = "student-in-the-classroom.svg";

  return (
    <section id={sectionId} className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        {/* FAQ card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img
              src={getImageUrl(faqImage)}
              alt="FAQs Illustration"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 space-y-6">
            <Accordion type="single" collapsible>
              {faqSectionData.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="font-semibold text-grey-600 text-md">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
