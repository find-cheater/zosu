import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const profileImages = [
  { src: "/image-3522.png", marginLeft: "ml-[-4.00px]" },
  { src: "/image-3519.png", marginLeft: "-ml-2" },
  { src: "/image-3523.png", marginLeft: "-ml-2" },
  { src: "/image-3520.png", marginLeft: "-ml-2" },
  { src: "/image-3515.png", marginLeft: "-ml-2" },
  { src: "/image-3518.png", marginLeft: "-ml-2" },
  { src: "/image-3521.png", marginLeft: "-ml-2" },
  { src: "/image-3516.png", marginLeft: "-ml-2" },
  { src: "/image-3512.png", marginLeft: "-ml-2" },
];

const tabItems = [
  { label: "CREATE", active: true },
  { label: "EDIT", active: false },
  { label: "WORKFLOW", active: false },
  { label: "COLLABORATION", active: false },
  { label: "SHARE", active: false },
];

const modelImages = [
  {
    src: "/image-28.png",
    className: "top-[226px] left-[26px] w-4 h-4 rounded-[2121px]",
  },
  {
    src: "/image-28.png",
    className: "top-[164px] left-[92px] w-4 h-4 rounded-[2121px]",
  },
  {
    src: "/image-28.png",
    className: "top-[102px] left-[184px] w-[30px] h-[30px] rounded-[121px]",
  },
  {
    src: "/image-26.png",
    className: "top-[33px] left-[392px] w-11 h-11 rounded-[1221px]",
  },
  {
    src: "/image-27.png",
    className: "top-[62px] left-[284px] w-[30px] h-[30px] rounded-[30px]",
  },
  {
    src: "/image-4.png",
    className: "top-px left-[calc(50.00%_-_41px)] w-20 h-20 rounded-[60px]",
  },
  {
    src: "/image-28.png",
    className: "top-[164px] left-[983px] w-4 h-4 rounded-[2222px]",
  },
  {
    src: "/image-27.png",
    className: "top-[62px] left-[783px] w-[30px] h-[30px] rounded-[30px]",
  },
  {
    src: "/image-28.png",
    className: "top-[102px] left-[881px] w-[30px] h-[30px] rounded-[121px]",
  },
  {
    src: "/image-26.png",
    className: "top-[33px] left-[667px] w-11 h-11 rounded-[1221px]",
  },
  {
    src: "/image-28.png",
    className: "top-[226px] left-[1052px] w-4 h-4 rounded-[2222px]",
  },
];

export const VideoShowcaseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff0a] rounded-[32px] overflow-hidden">
      <header className="flex flex-col items-center gap-6 px-16 py-14 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] font-display-s font-[number:var(--display-s-font-weight)] text-white text-[length:var(--display-s-font-size)] text-center tracking-[var(--display-s-letter-spacing)] leading-[var(--display-s-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--display-s-font-style)]">
          Trusted By Best Ai Creators And Companies
        </h2>

        <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            {profileImages.map((profile, index) => (
              <Avatar
                key={index}
                className={`relative w-14 h-14 mt-[-4.00px] mb-[-4.00px] ${profile.marginLeft} bg-white rounded-[117.33px] overflow-hidden border-4 border-solid border-[#1b1c25]`}
              >
                <AvatarImage
                  className="top-0 left-0 w-12 h-12 absolute object-cover"
                  alt="Profile"
                  src={profile.src}
                />
              </Avatar>
            ))}

            <div className="relative w-14 h-14 mt-[-4.00px] mb-[-4.00px] mr-[-4.00px] -ml-2 bg-[#32333c] rounded-[117.33px] overflow-hidden border-4 border-solid border-[#1b1c25]">
              <div className="absolute top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_18px)] h-[22px] flex items-center justify-center [font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
                +56
              </div>
            </div>
          </div>

          <img
            className="relative flex-1 grow h-[37px]"
            alt="Company"
            src="/company.svg"
          />
        </div>
      </header>

      <main className="flex flex-col w-[1440px] items-center justify-center gap-14 px-16 py-[72px] relative flex-[0_0_auto] rounded-[32px_32px_0px_0px] overflow-hidden bg-[linear-gradient(314deg,rgba(62,8,224,0.2)_0%,rgba(100,0,255,0.2)_8%,rgba(166,4,255,0.2)_38%,rgba(232,65,99,0.2)_70%,rgba(225,183,75,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.04)_100%)]">
        <img
          className="absolute top-0 left-[306px] w-[1134px] h-[1294px]"
          alt="Mask group"
          src="/mask-group-1.png"
        />

        <img
          className="absolute top-0 left-0 w-[1339px] h-[1294px]"
          alt="Mask group"
          src="/mask-group-2.png"
        />

        <div className="flex flex-col w-[694px] items-center gap-3 relative flex-[0_0_auto]">
          <Badge className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[34px] overflow-hidden border border-solid border-[#ffffff29]">
            <img
              className="relative w-6 h-6"
              alt="Frame"
              src="/frame-2147224331-2.svg"
            />

            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-primaryblue-50 text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
                HOW IT WORKS
              </span>
            </div>
          </Badge>

          <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative self-stretch mt-[-1.00px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] text-center tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] flex items-center justify-center [font-style:var(--display-XL-font-style)]">
              EASY AND USABLE
            </h3>

            <p className="relative self-stretch opacity-[0.88] font-body-XL font-[number:var(--body-XL-font-weight)] text-white text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
              From script to stunning visuals in minutes — no editing skills
              required.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <nav className="p-1.5 bg-[#ffffff1f] rounded-[46px] border border-solid border-[#0000000d] inline-flex items-center justify-center relative flex-[0_0_auto]">
            {tabItems.map((tab, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`gap-2 px-4 py-1 rounded-[42px] inline-flex items-center justify-center relative flex-[0_0_auto] h-auto ${
                  tab.active ? "bg-white" : ""
                }`}
              >
                <span
                  className={`relative w-fit mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)] ${
                    tab.active ? "text-[#191124]" : "opacity-60 text-white"
                  }`}
                >
                  {tab.label}
                </span>
              </Button>
            ))}
          </nav>

          <div className="relative self-stretch w-full h-[738px] rounded-[32px] border-2 border-solid border-[#ffffff3d] bg-[url(/frame-2147238611.svg)] bg-cover bg-[50%_50%]" />

          <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
            <Button className="inline-flex px-8 py-4 flex-[0_0_auto] bg-white overflow-hidden border-2 border-solid border-[#ffffff33] items-center justify-center gap-2 relative rounded-xl h-auto">
              <span className="relative flex items-center justify-center w-fit mt-[-2.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-800 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
                MAKE YOUR OWN VIDEO
              </span>
            </Button>

            <p className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-transparent text-lg leading-[18px]">
              <span className="text-[#ffffff99] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] font-body-l [font-style:var(--body-l-font-style)] font-[number:var(--body-l-font-weight)] text-[length:var(--body-l-font-size)]">
                Trusted By{" "}
              </span>

              <span className="font-[number:var(--body-l-font-weight)] text-white tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] font-body-l [font-style:var(--body-l-font-style)] text-[length:var(--body-l-font-size)]">
                100K
              </span>

              <span className="text-white tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] font-body-l [font-style:var(--body-l-font-style)] font-[number:var(--body-l-font-weight)] text-[length:var(--body-l-font-size)]">
                &nbsp;
              </span>

              <span className="text-[#ffffff99] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] font-body-l [font-style:var(--body-l-font-style)] font-[number:var(--body-l-font-weight)] text-[length:var(--body-l-font-size)]">
                Users
              </span>
            </p>
          </div>
        </div>
      </main>

      <section className="flex flex-col w-[1440px] items-center gap-14 px-0 py-[72px] relative flex-[0_0_auto]">
        <div className="flex-col w-[694px] items-center gap-3 relative flex-[0_0_auto] flex justify-center">
          <Badge className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-[#ffffff1f] rounded-[34px] overflow-hidden border border-solid border-[#ffffff29]">
            <img
              className="relative w-6 h-6"
              alt="Frame"
              src="/frame-2147224331-2.svg"
            />

            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-primaryblue-50 text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
                TOOL MODULE
              </span>
            </div>
          </Badge>

          <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative self-stretch mt-[-1.00px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] text-center tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] flex items-center justify-center [font-style:var(--display-XL-font-style)]">
              WE SUPPORT ALL BEST MODELS
            </h3>

            <p className="relative self-stretch font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-300 text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
              With Pollo AI video generator, you can tap into our flagship Pollo
              1.6 video model and all top-tier video models in the industry,
              like:
            </p>
          </div>
        </div>

        <div className="relative w-[1096px] h-[304px] overflow-hidden">
          <img
            className="absolute top-[46px] left-[calc(50.00%_-_538px)] w-[1074px] h-[215px]"
            alt="Ellipse"
            src="/ellipse-868.svg"
          />

          {modelImages.map((model, index) => (
            <img
              key={index}
              className={`${model.className} absolute object-cover`}
              alt="Model"
              src={model.src}
            />
          ))}

          <div className="inline-flex flex-col items-center gap-[23.98px] absolute top-[152px] left-[calc(50.00%_-_216px)]">
            <blockquote className="relative w-[431.7px] mt-[-1.00px] font-body-XL font-[number:var(--body-XL-font-weight)] text-white text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] [font-style:var(--body-XL-font-style)]">
              &quot;FlowSync has transformed how we work saving us 15+ hours per
              week. The best automation tool! It connects everything
              seamlessly&#34;
            </blockquote>

            <div className="inline-flex items-center gap-[12.99px] relative flex-[0_0_auto]">
              <Avatar className="relative w-10 h-10">
                <AvatarImage
                  className="object-cover"
                  alt="Rafid Anmon"
                  src="/rectangle-4571.svg"
                />
              </Avatar>

              <div className="flex flex-col w-[129.91px] items-start gap-0.5 relative">
                <span className="relative self-stretch mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)]">
                  RAFID ANMON
                </span>

                <span className="relative self-stretch opacity-60 font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
                  CEO, GrowthHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
