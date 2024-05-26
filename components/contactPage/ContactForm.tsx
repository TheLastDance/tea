"use client";
import { SocialLinks } from "../headerFooterContent/SocialLinks";
import { useScopedI18n } from "../../locales/client";
const ContactForm = () => {
  const scopedT = useScopedI18n("contact");
  return (
    <div className="w-full bg-[#e1e6e0] py-[50px] px-[30px] mb-[30px] flex flex-col items-center justify-center dark:bg-[#264653]">
      <h3 className="text-[28px] text-[#40443f] uppercase tracking-wider mb-[15px] dark:text-[#ffffff] md:text-[30px] lg-[32px]">
        {scopedT("leaveMessage")}
      </h3>
      <p className="text-[18px] text-center text-[#40443f] mb-[15px] tracking-widest dark:text-[#ffffff] md:text-[20] lg:text-[22px]">
        {scopedT("stuff")}
      </p>
      <form className="w-full flex flex-col items-center justify-center ">
        <label className="flex items-center flex-col justify-center lg:flex-row">
          <input
            className=" mt-[20px] mx-[20px] w-[250px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px] md:w-[300px] lg:w-[350px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="mt-[20px] w-[250px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px] md:w-[300px] lg:w-[350px]"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="flex items-center justify-center ml-[20px]">
          <input
            className="mt-[20px] w-[250px] mr-[18px] m-auto py-[7px] px-[10px] bg-[#f1f4f0] h-[140px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px] md:w-[300px] lg:w-[720px] lg:mr-[0]"
            type="text"
            placeholder="Write your message"
          />
        </label>
        <button className="uppercase text-[20px] text-[#40443f] mt-[30px] cursor-pointer py-[7px] px-[15px] border border-[#40443f] ">
          {scopedT("comment")}
        </button>
      </form>
      <SocialLinks marginTop="20px" />
    </div>
  );
};
export { ContactForm };
