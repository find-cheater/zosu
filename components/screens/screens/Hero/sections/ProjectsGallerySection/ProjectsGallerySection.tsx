import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const ProjectsGallerySection = (): JSX.Element => {
  const projectTags = [
    { text: "Nano Banana", marginClass: "ml-[-184.00px]" },
    { text: "Nano Banana", marginClass: "ml-[-23.00px]" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "mr-[-23.00px]" },
    { text: "Nano Banana", marginClass: "mr-[-184.00px]" },
  ];

  const projectTagsRow2 = [
    { text: "Nano Banana", marginClass: "ml-[-103.50px]" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "mr-[-103.50px]" },
  ];

  const projectTagsRow3 = [
    { text: "Nano Banana", marginClass: "ml-[-184.00px]" },
    { text: "Nano Banana", marginClass: "ml-[-23.00px]" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "" },
    { text: "Nano Banana", marginClass: "mr-[-23.00px]" },
    { text: "Nano Banana", marginClass: "mr-[-184.00px]" },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-16 py-[72px] relative">
      <div className="relative self-stretch w-full h-[183px]">
        <div className="flex flex-col w-[586px] items-center justify-center gap-3 absolute top-6 left-[726px] overflow-hidden">
          <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {projectTags.map((tag, index) => (
              <Badge
                key={`tag-row1-${index}`}
                variant="outline"
                className={`inline-flex items-center justify-center gap-2 pl-2 pr-3 py-3 relative flex-[0_0_auto] ${tag.marginClass} rounded-[40px] border-[none] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(225,183,75,0.04)_0%,rgba(232,65,99,0.04)_30%,rgba(166,4,255,0.04)_62%,rgba(100,0,255,0.04)_84%,rgba(62,8,224,0.04)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[40px] before:[background:linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
              >
                <div className="relative w-7 h-7 rounded-[30px] bg-[url(/vuesax-outline-add-9.svg)] bg-cover bg-[50%_50%]" />
                <span className="relative flex items-center justify-center w-fit font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
                  {tag.text}
                </span>
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {projectTagsRow2.map((tag, index) => (
              <Badge
                key={`tag-row2-${index}`}
                variant="outline"
                className={`inline-flex items-center justify-center gap-2 pl-2 pr-3 py-3 relative flex-[0_0_auto] ${tag.marginClass} rounded-[40px] border-[none] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(225,183,75,0.04)_0%,rgba(232,65,99,0.04)_30%,rgba(166,4,255,0.04)_62%,rgba(100,0,255,0.04)_84%,rgba(62,8,224,0.04)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[40px] before:[background:linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
              >
                <div className="relative w-7 h-7 rounded-[30px] bg-[url(/vuesax-outline-add-9.svg)] bg-cover bg-[50%_50%]" />
                <span className="relative flex items-center justify-center w-fit font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
                  {tag.text}
                </span>
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {projectTagsRow3.map((tag, index) => (
              <Badge
                key={`tag-row3-${index}`}
                variant="outline"
                className={`inline-flex items-center justify-center gap-2 pl-2 pr-3 py-3 relative flex-[0_0_auto] ${tag.marginClass} rounded-[40px] border-[none] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(225,183,75,0.04)_0%,rgba(232,65,99,0.04)_30%,rgba(166,4,255,0.04)_62%,rgba(100,0,255,0.04)_84%,rgba(62,8,224,0.04)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[40px] before:[background:linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
              >
                <div className="relative w-7 h-7 rounded-[30px] bg-[url(/vuesax-outline-add-9.svg)] bg-cover bg-[50%_50%]" />
                <span className="relative flex items-center justify-center w-fit font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
                  {tag.text}
                </span>
              </Badge>
            ))}
          </div>

          <div className="flex w-[906px] items-center justify-center gap-[400px] absolute top-[calc(50.00%_-_160px)] left-[calc(50.00%_-_453px)]">
            <div className="relative w-60 h-80 bg-[#19192b] blur-[38.15px]" />
            <div className="relative w-60 h-80 bg-[#09091d] blur-[38.15px]" />
          </div>
        </div>

        <div className="flex-col w-[694px] h-[183px] items-start gap-3 absolute top-0 left-0 flex justify-center">
          <Tabs
            defaultValue="image"
            className="p-1.5 mt-[-1.00px] bg-[#ffffff1f] rounded-[46px] border border-solid border-[#0000000d] inline-flex items-center justify-center relative flex-[0_0_auto]"
          >
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger
                value="image"
                className="gap-2 px-4 py-1 bg-white rounded-[42px] inline-flex items-center justify-center relative flex-[0_0_auto] data-[state=active]:bg-white data-[state=inactive]:bg-transparent"
              >
                <span className="relative w-fit mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-[#191124] text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
                  IMAGE GEN MODEL
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="video"
                className="gap-2 px-4 py-1 rounded-[42px] inline-flex items-center justify-center relative flex-[0_0_auto] data-[state=active]:bg-white data-[state=inactive]:bg-transparent"
              >
                <span className="relative w-fit mt-[-1.00px] opacity-60 font-display-XS font-[number:var(--display-XS-font-weight)] text-white text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
                  VIDEO GEN MODEL
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="image" className="hidden" />
            <TabsContent value="video" className="hidden" />
          </Tabs>

          <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
            <h1 className="relative self-stretch mt-[-1.00px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] flex items-center justify-center [font-style:var(--display-XL-font-style)]">
              AI IMAGE GENERATORS
            </h1>

            <p className="relative self-stretch font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-300 text-[length:var(--body-XL-font-size)] tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
              With Vosu AI image generator, you can tap into our flagship video
              model and all top-tier video models in the industry, like:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
