import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/placeholder-data';

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
