import React from "react";
import { Badge } from "../../../../components/ui/badge";

const paginationDots = [
  { active: false },
  { active: true },
  { active: false },
  { active: false },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-0 py-[72px] relative">
      <div className="flex flex-col w-full max-w-[694px] items-center gap-3 relative">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 bg-[#ffffff1f] rounded-[34px] border-[#ffffff29] text-primaryblue-50 h-auto"
        >
          <img className="w-6 h-6" alt="Frame" src="/frame-2147224331-2.svg" />
          <span className="font-body-r font-[number:var(--body-r-font-weight)] text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
            Testimonials
          </span>
        </Badge>

        <div className="flex flex-col items-center gap-2 w-full">
          <h1 className="w-full font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] text-center tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] [font-style:var(--display-XL-font-style)]">
            UNLEASH AI - POWERED VIDEO CREATION
          </h1>

          <p className="w-full font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-300 text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] [font-style:var(--body-XL-font-style)]">
            From script to stunning visuals in minutes — no editing skills
            required.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 w-full">
        <img
          className="w-full max-w-[1440px] h-[353.04px] object-cover"
          alt="Mask group"
          src="/mask-group-3.png"
        />

        <div className="flex items-center gap-2">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded ${
                dot.active ? "bg-foundation-blueblue-50" : "bg-neutrals-900"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
