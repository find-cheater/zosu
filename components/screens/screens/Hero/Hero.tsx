import React from "react";
import { AIModelsSection } from "./sections/AIModelsSection/AIModelsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { ProjectsGallerySection } from "./sections/ProjectsGallerySection/ProjectsGallerySection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { UserProfileSection } from "./sections/UserProfileSection";
import { VideoCreationSection } from "./sections/VideoCreationSection/VideoCreationSection";
import { VideoShowcaseSection } from "./sections/VideoShowcaseSection/VideoShowcaseSection";

export const Hero = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center relative bg-[linear-gradient(90deg,rgba(14,12,49,0.08)_0%,rgba(255,255,255,0.08)_53%,rgba(18,15,51,0.08)_100%),linear-gradient(180deg,rgba(225,183,75,0.04)_0%,rgba(232,65,99,0.04)_30%,rgba(166,4,255,0.04)_43%,rgba(0,0,0,0.04)_100%),linear-gradient(0deg,rgba(0,6,15,1)_0%,rgba(0,6,15,1)_100%)] w-full min-w-[1440px]">
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1440px] h-[1046px]"
        alt="Mask group"
        src="/mask-group.png"
      />

      <div className="flex flex-col w-full max-w-[1440px] items-start relative">
        <AIModelsSection />
        <VideoShowcaseSection />
        <MainContentSection />
        <ProjectsGallerySection />
        <FeaturesSection />
        <CallToActionSection />
        <VideoCreationSection />
        <TestimonialsSection />
        <UserProfileSection />
      </div>
    </main>
  );
};
