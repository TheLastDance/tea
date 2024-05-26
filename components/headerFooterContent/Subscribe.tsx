"use client";
import { useScopedI18n } from "../../locales/client";

const Subscribe = () => {
  const scopedT = useScopedI18n("footer");

  return (
    <div className="w-full bg-[#e0e5e2] py-[70px] px-[60px] flex flex-col items-center justify-center dark:bg-[#264653]">
      <h3 className="text-[18px] uppercase text-[#4a4f4a] mb-[15px] mt-[30px] tracking-wider text-center lg:text-[24px] dark:text-[#ffffff] ">
        {" "}
        {scopedT("subscribe")}
      </h3>
      <p className="text-[16px] text-center uppercase text-[#4a4f4a] mb-[15px] tracking-wider lg:text-[20px] dark:text-[#ffffff]">
        {" "}
        {scopedT("sale")}
      </p>
      <div className="flex flex-col items-center justify-center">
        <label>
          <input
            className="w-[250px] py-[7px] rounded-md px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px] lg:w-[350px]"
            type="email"
            placeholder={scopedT("email")}
          />
        </label>
        <button className="mt-[20px] uppercase text-[#8a8d8a] tracking-widest bg-transparent border border-[#8a8d8a] cursor-pointer py-[8px] px-[15px] dark:text-[#ffffff]">
          {scopedT("button")}
        </button>
      </div>
    </div>
  );
};

export { Subscribe };
