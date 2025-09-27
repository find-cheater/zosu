import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";
import { Textarea } from "../../../../components/ui/textarea";

const navigationItems = [
  { label: "All Features" },
  { label: "Blog" },
  { label: "Pricing" },
  { label: "About Us" },
];

const textToImageModels = [
  { name: "GPT-5", icon: "/vuesax-outline-add-19.svg" },
  { name: "Nano Banana", icon: "/vuesax-outline-add-15.svg" },
  { name: "Mid-Journey", icon: "/image-28.png" },
];

const imageToVideoModels = [
  { name: "Stable-diffusion", icon: "/vuesax-outline-add-19.svg" },
  { name: "MiniMax", icon: "/vuesax-outline-add-15.svg" },
  { name: "VO3", icon: "/image-28.png" },
];

const previewImages = [
  {
    src: "/frame-2147238742.png",
    model: "GPT-5",
    icon: "/vuesax-outline-add-19.svg",
    position: "top-0 left-[433px]",
  },
  {
    src: "/frame-2147238729.png",
    model: "Nano Banana",
    icon: "/vuesax-outline-add-15.svg",
    position: "top-[166px] left-[433px]",
  },
  {
    src: "/frame-2147238743.png",
    model: "Mid-Journey",
    icon: "/image-28.png",
    position: "top-[331px] left-[433px]",
  },
  {
    src: "/frame-2147238766.png",
    model: "GPT-5",
    icon: "/vuesax-outline-add-19.svg",
    position: "top-0 left-[1169px]",
  },
  {
    src: "/frame-2147238767.png",
    model: "Nano Banana",
    icon: "/vuesax-outline-add-15.svg",
    position: "top-[166px] left-[1169px]",
  },
  {
    src: "/frame-2147238768.png",
    model: "Mid-Journey",
    icon: "/image-28.png",
    position: "top-[331px] left-[1169px]",
  },
];

export const AIModelsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-14 pt-0 pb-14 px-0 relative">
      <div className="flex flex-col items-center gap-10 relative w-full">
        <header className="flex h-24 items-center justify-between px-16 py-6 relative w-full backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(153,153,153,0)_100%)]">
          <div className="relative w-[263px] h-[38px]">
            <div className="relative top-[calc(50.00%_-_14px)] w-36 h-7">
              <img
                className="absolute w-[80.19%] h-[69.44%] top-[15.52%] left-[19.81%]"
                alt="Group"
                src="/group.png"
              />
              <img
                className="absolute w-[16.38%] h-[100.00%] top-0 left-0"
                alt="Rectangle"
                src="/rectangle.png"
              />
            </div>
          </div>

          <nav className="inline-flex items-center gap-8 absolute top-[37px] left-[calc(50.00%_-_162px)]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap"
              >
                {item.label}
              </div>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 relative">
            <Button className="h-12 px-5 py-[13px] bg-[#ffffff0a] border border-solid border-[#ffffff33] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] rounded-xl font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)] hover:bg-[#ffffff14]">
              LOGIN
            </Button>

            <Button className="h-12 px-5 py-[13px] border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-xl font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)] hover:opacity-90">
              GET STARTED NOW
            </Button>
          </div>
        </header>

        <div className="flex flex-col w-full max-w-[1312px] items-start gap-[72px] relative">
          <div className="relative w-full h-[298px]">
            <div className="flex w-[274px] items-center gap-4 absolute top-[276px] right-0.5">
              <div className="relative w-fit mt-[-1.00px] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
                Default Mode
              </div>

              <Switch className="relative w-[35.31px] h-5 rounded-[30.94px] overflow-hidden shadow-[0px_0.62px_1.25px_#0000000a,inset_0px_0px_2.5px_#00000005,inset_0px_0px_0px_0.16px_#0000000f,inset_0px_0.62px_1.25px_#0000000a,inset_0px_0.31px_0.31px_#0000000a] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(189,206,255,1)_0%,rgba(189,206,255,1)_100%)]" />

              <div className="relative w-fit mt-[-1.00px] mr-[-1.54px] opacity-[0.72] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
                Workflow mode
              </div>
            </div>

            <div className="flex flex-col w-[887px] items-start gap-3 absolute top-[125px] left-[222px]">
              <h1 className="relative w-fit mt-[-2.00px] ml-[-1.00px] mr-[-4.00px] [-webkit-text-stroke:1px_#ffffff] opacity-[0.72] font-display-XXL font-[number:var(--display-XXL-font-weight)] text-white text-[length:var(--display-XXL-font-size)] tracking-[var(--display-XXL-letter-spacing)] leading-[var(--display-XXL-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--display-XXL-font-style)]">
                AI VIDEOS IN SECONDS
              </h1>

              <p className="relative w-fit opacity-[0.88] font-body-XL font-[number:var(--body-XL-font-weight)] text-white text-[length:var(--body-XL-font-size)] tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
                Turn your ideas into stunning videos in seconds.
                <br />
                No cameras, no crews—just AI bringing your vision to life.
              </p>
            </div>

            <h1 className="absolute -top-px -left-px w-[585px] h-[105px] [-webkit-text-stroke:1px_#ffffff] opacity-[0.72] font-display-XXL font-[number:var(--display-XXL-font-weight)] text-white text-[length:var(--display-XXL-font-size)] tracking-[var(--display-XXL-letter-spacing)] leading-[var(--display-XXL-line-height)] flex items-center justify-center [font-style:var(--display-XXL-font-style)]">
              CREATE BEST
            </h1>
          </div>

          <div className="relative w-full h-[470px] overflow-hidden">
            <Card className="flex flex-col w-72 h-[470px] items-start justify-center gap-3 p-4 absolute top-[calc(50.00%_-_235px)] left-0 bg-[#ffffff1f] rounded-2xl overflow-hidden border-0">
              <CardContent className="p-0 w-full space-y-3">
                <div className="flex items-center justify-between relative w-full">
                  <div className="inline-flex items-center gap-2 relative">
                    <img
                      className="relative w-8 h-8"
                      alt="Frame"
                      src="/frame-2147224331.svg"
                    />
                    <div className="relative w-fit font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--display-XS-font-style)]">
                      TEXT TO IMAGE
                    </div>
                  </div>
                  <div className="relative w-fit opacity-[0.88] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--body-r-font-style)]">
                    32 Sec
                  </div>
                </div>

                <img
                  className="relative w-full h-px object-cover"
                  alt="Line"
                  src="/line-226.svg"
                />

                <div className="flex flex-col items-start gap-1 relative w-full">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Grotesk-Semibold',Helvetica] font-normal text-white text-[13px] tracking-[-0.39px] leading-[18.2px] whitespace-nowrap flex items-center justify-center">
                    CREATIVE INSTRUCTION
                  </div>
                  <Textarea
                    className="p-3 relative w-full bg-[#ffffff14] rounded-xl border border-solid border-[#ffffff1f] opacity-80 [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] resize-none"
                    defaultValue="A futuristic city at sunset, glowing with neon lights. Flying cars stream across the sky. People walk with AI companions, blending into life."
                    rows={4}
                  />
                </div>

                <div className="items-center justify-between flex p-3 relative w-full bg-[#ffffff14] rounded-xl border border-solid border-[#ffffff1f]">
                  <div className="inline-flex items-center gap-2 relative">
                    <div className="flex w-[87px] items-center justify-between relative">
                      <img
                        className="relative w-5 h-5"
                        alt="Arrow all direction"
                        src="/arrow-all-direction.svg"
                      />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
                        3:4 Ratio
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className="relative w-4 h-4 text-white" />
                </div>

                <div className="flex flex-col items-start gap-1 relative w-full">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Grotesk-Semibold',Helvetica] font-normal text-white text-[13px] tracking-[-0.39px] leading-[18.2px] whitespace-nowrap flex items-center justify-center">
                    MODEL
                  </div>
                  <div className="flex-wrap items-center gap-[8px_8px] flex p-3 relative w-full bg-[#ffffff14] rounded-xl border border-solid border-[#ffffff1f]">
                    {textToImageModels.map((model, index) => (
                      <Badge
                        key={index}
                        className="inline-flex items-center justify-center gap-1 p-1 relative bg-[#ffffff1f] rounded-[40px] border border-solid hover:bg-[#ffffff2f]"
                      >
                        <div
                          className={`relative w-4 h-4 ${model.name === "Mid-Journey" ? "rounded-[121px] [background:url(..//image-28.png)_50%_50%_/_cover]" : `rounded-[30px] bg-[url(${model.icon})] bg-cover bg-[50%_50%]`}`}
                        />
                        <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-xs tracking-[-0.36px] leading-[16.8px] whitespace-nowrap">
                          {model.name}
                        </div>
                        <img
                          className="relative w-4 h-4"
                          alt="Vuesax outline add"
                          src="/vuesax-outline-add-4.svg"
                        />
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="flex h-9 px-4 py-2 w-full bg-white overflow-hidden items-center justify-center gap-2 relative rounded-xl font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-800 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)] hover:bg-gray-100">
                  GENERATE
                  <img
                    className="relative w-4 h-4"
                    alt="Generate"
                    src="/generate.svg"
                  />
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col w-72 h-[408px] items-start justify-center gap-3 p-4 absolute top-[calc(50.00%_-_204px)] left-[728px] bg-[#ffffff1f] rounded-2xl overflow-hidden border-0">
              <CardContent className="p-0 w-full space-y-3">
                <div className="justify-between relative w-full flex items-center">
                  <div className="inline-flex items-center gap-2 relative">
                    <img
                      className="relative w-8 h-8"
                      alt="Frame"
                      src="/frame-2147224331-1.svg"
                    />
                    <div className="relative w-fit font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--display-XS-font-style)]">
                      IMAGE TO VIDEO
                    </div>
                  </div>
                  <div className="relative w-fit opacity-[0.88] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap flex items-center justify-center [font-style:var(--body-r-font-style)]">
                    32 Sec
                  </div>
                </div>

                <img
                  className="relative w-full h-px object-cover"
                  alt="Line"
                  src="/line-226.svg"
                />

                <div className="flex flex-col items-start gap-1 relative w-full">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Grotesk-Semibold',Helvetica] font-normal text-white text-[13px] tracking-[-0.39px] leading-[18.2px] whitespace-nowrap flex items-center justify-center">
                    CREATIVE INSTRUCTION
                  </div>
                  <Textarea
                    className="h-[134px] p-3 relative w-full bg-[#ffffff14] rounded-xl border border-solid border-[#ffffff1f] opacity-80 [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] resize-none overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]"
                    defaultValue="A futuristic city at sunset, glowing neon lights reflecting on glass skyscrapers. Flying cars stream smoothly across the sky with dynamic motion trails. Streets below are alive with people walking alongside AI companions, their movements natural and interactive. Neon billboards flicker and pulse. The camera slowly pans forward, creating a cinematic depth with layers of traffic, pedestrians, and glowing cityscapes."
                    rows={6}
                  />
                </div>

                <div className="flex flex-col items-start gap-1 relative w-full">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Grotesk-Semibold',Helvetica] font-normal text-white text-[13px] tracking-[-0.39px] leading-[18.2px] whitespace-nowrap flex items-center justify-center">
                    MODEL
                  </div>
                  <div className="flex-wrap items-center gap-[8px_8px] flex p-3 relative w-full bg-[#ffffff14] rounded-xl border border-solid border-[#ffffff1f]">
                    {imageToVideoModels.map((model, index) => (
                      <Badge
                        key={index}
                        className="inline-flex items-center justify-center gap-1 p-1 relative bg-[#ffffff1f] rounded-[40px] border border-solid hover:bg-[#ffffff2f]"
                      >
                        <div
                          className={`relative w-4 h-4 ${model.name === "VO3" ? "rounded-[121px] [background:url(..//image-28.png)_50%_50%_/_cover]" : `rounded-[30px] bg-[url(${model.icon})] bg-cover bg-[50%_50%]`}`}
                        />
                        <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-xs tracking-[-0.36px] leading-[16.8px] whitespace-nowrap">
                          {model.name}
                        </div>
                        <img
                          className="relative w-4 h-4"
                          alt="Vuesax outline add"
                          src="/vuesax-outline-add-4.svg"
                        />
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="flex h-9 px-4 py-2 w-full bg-white overflow-hidden items-center justify-center gap-2 relative rounded-xl font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-800 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)] hover:bg-gray-100">
                  GENERATE
                  <img
                    className="relative w-4 h-4"
                    alt="Generate"
                    src="/generate.svg"
                  />
                </Button>
              </CardContent>
            </Card>

            {previewImages.map((image, index) => (
              <div
                key={index}
                className={`absolute ${image.position} w-[143px] h-[139px] flex items-end justify-center rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#ffffff52] [background:url(../${image.src})_50%_50%_/_cover]`}
              >
                <Badge className="inline-flex mb-3 h-[25px] relative items-center justify-center gap-1 pl-1 pr-2 py-1 bg-[#ffffff1f] rounded-[40px] border border-solid backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
                  <div
                    className={`relative w-4 h-4 ${image.model === "Mid-Journey" ? "rounded-[121px] [background:url(..//image-28.png)_50%_50%_/_cover]" : `rounded-[30px] bg-[url(${image.icon})] bg-cover bg-[50%_50%]`}`}
                  />
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-xs tracking-[-0.36px] leading-[16.8px] whitespace-nowrap">
                    {image.model}
                  </div>
                </Badge>
              </div>
            ))}

            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-[174px]"
              alt="Connector"
              src="/-connector.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-4"
              alt="Connector"
              src="/-connector-1.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-[174px]"
              alt="Connector"
              src="/-connector-2.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-[174px]"
              alt="Connector"
              src="/-connector-3.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-4"
              alt="Connector"
              src="/-connector-4.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-[174px]"
              alt="Connector"
              src="/-connector-5.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-[174px]"
              alt="Connector"
              src="/-connector-6.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-4"
              alt="Connector"
              src="/-connector-7.png"
            />
            <img
              className="absolute top-[-506px] -left-16 w-[99px] h-[174px]"
              alt="Connector"
              src="/-connector-8.png"
            />
            <img
              className="absolute top-[62px] left-[295px] w-[130px] h-[182px]"
              alt="Connector"
              src="/-connector-9.png"
            />
            <img
              className="absolute top-[226px] left-[295px] w-[130px] h-[18px]"
              alt="Connector"
              src="/-connector-10.png"
            />
            <img
              className="absolute top-[226px] left-[295px] w-[130px] h-[182px]"
              alt="Connector"
              src="/-connector-11.png"
            />
            <img
              className="absolute top-[226px] left-[583px] w-[139px] h-[18px]"
              alt="Connector"
              src="/-connector-12.png"
            />
            <img
              className="absolute top-[60px] left-[583px] w-[139px] h-[182px]"
              alt="Connector"
              src="/-connector-13.png"
            />
            <img
              className="absolute top-[228px] left-[583px] w-[139px] h-[182px]"
              alt="Connector"
              src="/-connector-14.png"
            />
            <img
              className="absolute top-[226px] left-[1023px] w-[139px] h-[182px]"
              alt="Connector"
              src="/-connector-15.png"
            />
            <img
              className="absolute top-[226px] left-[1023px] w-[139px] h-[18px]"
              alt="Connector"
              src="/-connector-16.png"
            />
            <img
              className="absolute top-[62px] left-[1023px] w-[139px] h-[182px]"
              alt="Connector"
              src="/-connector-17.png"
            />
          </div>
        </div>
      </div>

      <Button className="inline-flex h-12 px-5 py-[13px] overflow-hidden border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-center gap-2 relative rounded-xl font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)] hover:opacity-90">
        GET STARTED NOW
      </Button>
    </section>
  );
};
