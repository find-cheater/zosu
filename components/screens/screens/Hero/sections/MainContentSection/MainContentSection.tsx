import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    number: "01",
    title: "Image To Video",
    description:
      "Transform any image into a moving video with animations, transitions, and effects—great for ads, reels, or brand storytelling.",
    isHighlighted: true,
    hasVideo: true,
  },
  {
    number: "02",
    title: "Video To Video",
    description:
      "Upload an existing video and reimagine it with new styles, filters, or AI-driven edits while keeping the original flow intact.",
    isHighlighted: false,
    hasVideo: false,
  },
  {
    number: "03",
    title: "Image To Image",
    description:
      "Upgrade your images with AI—enhance quality, change styles, or explore new creative directions.",
    isHighlighted: false,
    hasVideo: false,
  },
  {
    number: "04",
    title: "Video Avatar",
    description:
      "Create UGC videos by choosing an avatar, typing your script, and letting AI handle the rest. Ideal for tutorials or promos.",
    isHighlighted: false,
    hasVideo: false,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-14 px-16 py-[72px] relative">
      <div className="flex flex-col w-[694px] items-center gap-3 relative flex-[0_0_auto]">
        <Badge className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[34px] overflow-hidden border border-solid border-[#ffffff29] hover:bg-[#ffffff1f]">
          <img
            className="relative w-6 h-6"
            alt="Frame"
            src="/frame-2147224331-2.svg"
          />
          <span className="relative w-fit mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-primaryblue-50 text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
            FEATURES
          </span>
        </Badge>

        <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] text-center tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] flex items-center justify-center [font-style:var(--display-XL-font-style)]">
            UNLEASH AI-POWERED VIDEO CREATION
          </h1>

          <p className="relative self-stretch font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-300 text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
            From script to stunning visuals in minutes — no editing skills
            required.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto] mr-[-272.00px]">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className={`flex items-end gap-6 p-6 relative flex-[0_0_auto] rounded-2xl overflow-hidden border-[none] ${
                card.isHighlighted
                  ? "bg-[linear-gradient(270deg,rgba(225,183,75,0.16)_0%,rgba(232,65,99,0.16)_30%,rgba(166,4,255,0.16)_62%,rgba(100,0,255,0.16)_84%,rgba(62,8,224,0.16)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-2xl before:[background:linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                  : "bg-[#ffffff0a] border border-solid border-[#ffffff29]"
              } ${card.isHighlighted ? "w-auto" : "w-[281px]"}`}
            >
              <CardContent
                className={`flex ${card.isHighlighted ? "w-[290px]" : "flex-1"} items-start justify-between relative self-stretch p-0`}
              >
                <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
                  <div
                    className={`${card.isHighlighted ? "self-stretch" : "w-fit whitespace-nowrap"} relative mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-medium text-white text-2xl tracking-[-0.96px] leading-[33.6px]`}
                  >
                    {card.number}
                  </div>

                  <div
                    className={`flex flex-col ${card.isHighlighted ? "h-[167px]" : card.number === "03" ? "h-[172px]" : ""} items-start gap-2 relative self-stretch w-full ${card.isHighlighted ? "" : "flex-[0_0_auto]"}`}
                  >
                    <h3 className="relative self-stretch mt-[-1.00px] font-display-s font-[number:var(--display-s-font-weight)] text-white text-[length:var(--display-s-font-size)] tracking-[var(--display-s-letter-spacing)] leading-[var(--display-s-line-height)] [font-style:var(--display-s-font-style)]">
                      {card.title}
                    </h3>

                    <p
                      className={`relative self-stretch opacity-[0.72] font-body-l font-[number:var(--body-l-font-weight)] ${card.isHighlighted ? "text-white" : "text-[#d9d9d9]"} text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)]`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>

              {card.hasVideo && (
                <div className="relative w-[343px] h-[343px] rounded-xl overflow-hidden [background:url(../frame-2147238748.png)_50%_50%_/_cover]">
                  <Button className="flex w-14 h-14 items-center justify-center gap-[8.06px] relative top-[calc(50.00%_-_28px)] left-[calc(50.00%_-_28px)] bg-[#ffffff4c] rounded-[100px] border-[none] backdrop-blur-[6.93px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.93px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[100px] before:[background:linear-gradient(159deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#ffffff4c] h-auto p-0">
                    <img
                      className="relative w-[20.92px] h-[23.69px]"
                      alt="Polygon"
                      src="/polygon-1.svg"
                    />
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <Button className="inline-flex px-8 py-4 flex-[0_0_auto] overflow-hidden border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-center gap-2 relative rounded-xl hover:bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] h-auto">
        <span className="relative flex items-center justify-center w-fit mt-[-2.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-0 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
          JOIN NOW
        </span>
      </Button>
    </section>
  );
};
