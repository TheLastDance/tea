"use client";
import aboutImg from "../../public/assets/image/home/about.jpg";
import Image from "next/image";
import { useScopedI18n } from "../../locales/client";

const AboutUs = () => {
  const scopedT = useScopedI18n("aboutUs");
  return (
    <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <div className="w-full h-[500px] lg:w-2/4">
        <Image className="w-full h-full" src={aboutImg} alt="plant" />
      </div>
      <div className="w-2/4 flex flex-col items-center justify-start p-[20px]">
        <h3 className="text-[#747775] text-[26px] underline mb-[15px]">
          {scopedT("about")}
        </h3>
        <p className="text-[#747775] w-[200px] tracking-widest italic text-[12px] lg:w-[300px] lg:text-[18px]">
          {scopedT("lorem")}
        </p>
      </div>
    </div>
  );
};

export { AboutUs };
