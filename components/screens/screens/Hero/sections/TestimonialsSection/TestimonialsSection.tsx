import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  const faqData = [
    {
      id: "item-1",
      question: "What Services Do You Offer?",
      answer:
        "I offer UI/UX design, web development, and branding to craft stunning digital experiences.I offer UI/UX design, web development, and branding to craft stunning digital experiences.",
      defaultOpen: true,
    },
    {
      id: "item-2",
      question: "What Tools And Technologies Do You Use?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-3",
      question: "Can I See More Of Your Work?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-4",
      question: "Do You Offer Consultations?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-5",
      question: "What's Your Design Process Like?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-14 px-16 py-[72px] relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff0a]">
      <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
          <div className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <Badge className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[34px] overflow-hidden border border-solid border-[#ffffff29] h-auto">
              <img
                className="relative w-6 h-6"
                alt="Frame"
                src="/frame-2147224331-2.svg"
              />
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-r font-[number:var(--body-r-font-weight)] text-primaryblue-50 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
                  FAQ
                </div>
              </div>
            </Badge>

            <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative flex items-center justify-center w-[519.89px] mt-[-1.00px] mr-[-40.89px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] [font-style:var(--display-XL-font-style)]">
                FAQ&apos;S
              </h2>

              <p className="relative self-stretch font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-200 text-[length:var(--body-XL-font-size)] tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] [font-style:var(--body-XL-font-style)]">
                Find answers to common CaseConnect questions
              </p>
            </div>
          </div>

          <Button className="inline-flex px-8 py-4 flex-[0_0_auto] overflow-hidden border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-center gap-2 relative rounded-xl h-auto">
            <div className="relative flex items-center justify-center w-fit mt-[-2.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-0 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
              CONTACT US
            </div>
          </Button>
        </div>

        <div className="flex-col w-[793px] items-start gap-2 p-4 bg-[#ffffff0a] flex relative rounded-2xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff14] rounded-2xl border border-solid border-[#ffffff1f] mb-2 last:mb-0 data-[state=closed]:bg-[#ffffff05]"
              >
                <AccordionTrigger className="flex items-center justify-between p-5 relative self-stretch w-full flex-[0_0_auto] hover:no-underline [&[data-state=open]>div]:bg-[#ffffff1f] [&[data-state=closed]>div]:bg-[#ffffff14]">
                  <h3 className="relative w-fit font-display-s font-[number:var(--display-s-font-weight)] text-white text-[length:var(--display-s-font-size)] tracking-[var(--display-s-letter-spacing)] leading-[var(--display-s-line-height)] whitespace-nowrap [font-style:var(--display-s-font-style)]">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                {faq.answer && (
                  <AccordionContent className="px-5 pb-5">
                    <p className="relative w-[676px] [text-shadow:0px_4px_4px_#00000040] opacity-[0.72] font-body-l font-[number:var(--body-l-font-weight)] text-white text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)]">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
