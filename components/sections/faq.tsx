import { FadeIn } from "@/components/fade-in";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faq } from "@/lib/site-config";

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-paper py-10 md:py-14 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-[880px] mx-auto">
        <FadeIn className="mb-6 pb-4 border-b border-rule">
          <div className="text-[11px] font-bold text-sky-brand uppercase tracking-[0.12em] mb-3">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-tight text-ink">
            Questions, answered.
          </h2>
        </FadeIn>
        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className={i === 0 ? "border-t border-rule" : ""}
              >
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
