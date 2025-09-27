import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const FeaturesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");

  const tabItems = [
    { value: "all", label: "ALL" },
    { value: "sci-fi", label: "SCI-FI & FUTURISTIC" },
    { value: "fantasy", label: "FANTASY & MYSTICAL" },
    { value: "action", label: "ACTION & ADVENTURE" },
    { value: "nature", label: "NATURE & ANIMALS" },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-14 px-16 py-[72px] relative bg-[#ffffff0a]">
      <header className="flex flex-col w-[694px] items-center gap-3 relative">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 bg-[#ffffff1f] rounded-[34px] border-[#ffffff29] text-primaryblue-50"
        >
          <img
            className="relative w-6 h-6"
            alt="Frame"
            src="/frame-2147224331-2.svg"
          />
          <span className="font-display-XS font-[number:var(--display-XS-font-weight)] text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)]">
            RESULT
          </span>
        </Badge>

        <div className="flex flex-col items-center gap-2 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] text-center tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] flex items-center justify-center [font-style:var(--display-XL-font-style)]">
            UNLEASH AI - POWERED VIDEO CREATION
          </h1>

          <p className="relative self-stretch font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-300 text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
            From script to stunning visuals in minutes — no editing skills
            required.
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="p-1.5 bg-[#ffffff1f] rounded-[46px] border border-solid border-[#0000000d] inline-flex items-center justify-center h-auto">
            {tabItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className={`gap-2 px-4 py-1 rounded-[42px] inline-flex items-center justify-center h-auto data-[state=active]:bg-white data-[state=active]:text-[#191124] data-[state=inactive]:bg-transparent data-[state=inactive]:text-white data-[state=inactive]:opacity-60 font-display-XS font-[number:var(--display-XS-font-weight)] text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)] whitespace-nowrap`}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <img
              className="relative self-stretch w-full"
              alt="Frame"
              src="/frame-2147238611-1.svg"
            />
          </TabsContent>
        </Tabs>

        <Button className="inline-flex px-8 py-4 h-auto overflow-hidden border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-center gap-2 rounded-xl hover:opacity-90 transition-opacity">
          <span className="relative flex items-center justify-center w-fit mt-[-2.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-0 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
            MAKE YOUR OWN VIDEO
          </span>
        </Button>
      </div>
    </section>
  );
};
