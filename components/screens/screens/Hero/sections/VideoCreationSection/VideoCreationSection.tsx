import React from "react";
import { Button } from "../../../../components/ui/button";

export const VideoCreationSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center px-[282px] py-[72px] relative bg-[linear-gradient(136deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.32)_51%,rgba(0,0,0,0)_100%),linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%)]">
      <div className="flex flex-col w-[685px] items-start gap-14 relative">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] mr-[-18.20px]">
          <h1 className="relative flex items-center justify-center w-[703.2px] mt-[-1.00px] opacity-[0.72] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] [font-style:var(--display-XL-font-style)]">
            MAKE STUDIO–QUALITY VIDEOS IN MINUTES
          </h1>

          <p className="relative w-fit opacity-[0.88] font-body-XL font-[number:var(--body-XL-font-weight)] text-white text-[length:var(--body-XL-font-size)] tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] whitespace-nowrap [font-style:var(--body-XL-font-style)]">
            Make your first AI video in 5 minutes and change content creation
            forever.
          </p>
        </div>

        <Button className="inline-flex px-6 py-4 flex-[0_0_auto] bg-white items-center justify-center gap-2 relative rounded-xl h-auto hover:bg-white/90">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-800 text-[length:var(--display-XS-font-size)] text-right tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
            GET 14 DAYS FREE TRIAL
          </span>
        </Button>
      </div>

      <img
        className="absolute top-[calc(50.00%_-_212px)] left-[170px] w-[854px] h-[424px]"
        alt="Background pattern"
        src="/background-pattern.svg"
      />

      <img
        className="absolute top-[calc(50.00%_-_212px)] right-0 w-[479px] h-[424px] object-cover"
        alt="File"
        src="/file--3--1.png"
      />
    </section>
  );
};
