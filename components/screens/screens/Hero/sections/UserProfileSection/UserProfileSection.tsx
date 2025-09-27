import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const UserProfileSection = (): JSX.Element => {
  const navigationColumns = [
    {
      title: "NAVIGATION",
      links: ["Products", "Company", "Pricing", "Insights", "Insights"],
    },
    {
      title: "NAVIGATION",
      links: ["Products", "Company", "Pricing", "Insights", "Insights"],
    },
    {
      title: "COMPANY",
      links: ["Careers", "Contact", "FAQs", "FAQs", "FAQs"],
    },
    {
      title: "RESOURCES",
      links: ["Privacy Policy", "Changelog", "Terms & Conditions"],
    },
  ];

  const socialIcons = [
    {
      icon: FacebookIcon,
      alt: "FacebookIcon app symbol",
      src: "/facebook-app-symbol-1.svg",
    },
    { icon: TwitterIcon, alt: "Social icons", src: "/social-icons.svg" },
    { icon: LinkedinIcon, alt: "Linkedin", src: "/linkedin-1.svg" },
    { icon: InstagramIcon, alt: "Social icons", src: "/social-icons-1.svg" },
  ];

  return (
    <footer className="flex flex-col items-start gap-[72px] pt-[72px] pb-8 px-16 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff14]">
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-6 relative self-stretch flex-[0_0_auto]">
          <div className="relative w-[291px] h-[124px] mr-[-2.00px]">
            <div className="absolute top-px left-0 h-[124px] flex items-center justify-center [font-family:'Clash_Grotesk-Semibold',Helvetica] font-normal text-white text-[104px] text-center tracking-[-4.16px] leading-[123.8px] whitespace-nowrap">
              VOSU
            </div>

            <img
              className="absolute top-5 left-[266px] w-[23px] h-[23px]"
              alt="Trademark symbol"
              src="/trademark-symbol.svg"
            />
          </div>

          <div className="inline-flex items-center gap-[41px] pl-5 pr-2 py-2 relative flex-[0_0_auto] bg-[#ffffff0a] rounded-[52px] overflow-hidden">
            <div className="relative w-fit opacity-[0.72] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
              Subscribe our newsletter
            </div>

            <Button className="flex w-10 h-10 items-center justify-center gap-2 p-2.5 relative bg-generalwhite rounded-[42px] h-auto">
              <img
                className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px]"
                alt="Arrow right"
                src="/arrow-right.svg"
              />
            </Button>
          </div>
        </div>

        <nav className="inline-flex flex-col items-end gap-10 relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
            {navigationColumns.map((column, columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className={`${columnIndex < 2 ? "flex flex-col w-36 items-start gap-4 relative" : "inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"}`}
              >
                <div className="relative self-stretch mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutrals-50 text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)]">
                  {column.title}
                </div>

                <div
                  className={`${columnIndex < 2 ? "flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]" : "inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]"}`}
                >
                  {column.links.map((link, linkIndex) => (
                    <div
                      key={`link-${columnIndex}-${linkIndex}`}
                      className={`relative ${columnIndex < 2 ? "w-[136px]" : "w-[136px]"} ${linkIndex === 0 ? "mt-[-1.00px]" : ""} opacity-[0.72] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]`}
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-between px-0 py-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#303132]">
        <div className="relative w-fit mt-[-1.00px] font-body-r font-[number:var(--body-r-font-weight)] text-dark-shade30 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
          2025 ©VOSU.AI. All rights reserved.
        </div>

        <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
          {socialIcons.map((social, index) => (
            <img
              key={`social-${index}`}
              className="relative w-5 h-5"
              alt={social.alt}
              src={social.src}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
