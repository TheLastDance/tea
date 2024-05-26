"use client";
import { MdPhoneIphone } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { WiTime3 } from "react-icons/wi";
import { MdEmail } from "react-icons/md";
import { useScopedI18n } from "../../locales/client";
import banner from "../../public/assets/image/contact.jpg";
import Image from "next/image";

const ContactInformation = () => {
  const scopedT = useScopedI18n("contactInformation");
  return (
    <div>
      <Image className="w-full h-full mb-[20px]" src={banner} alt="contact" />
      <div className=" w-full flex flex-col items-center justify-center py-[50px] mx-auto mb-[50px] lg:w-4/5 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center mb-[25px]">
          <MdPhoneIphone className="contact-icon" />
          <p className="text-[24px] text-[#4c514c]">{scopedT("phone")}</p>
          <span className="text-[20px] text-[#4c514c] ">+01-3-8888-6868</span>
        </div>
        <div className="flex flex-col items-center justify-center mb-[25px]">
          <ImLocation className="contact-icon" />
          <p className="text-[24px] text-[#4c514c]">{scopedT("address")}</p>
          <span className="text-[20px] text-[#4c514c] ">
            Iris Watson, 283 Fusce Rd,NY
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mb-[25px]">
          <WiTime3 className="contact-icon" />
          <p className="text-[24px] text-[#4c514c]">{scopedT("time")}</p>
          <span className="text-[20px] text-[#4c514c] ">
            10:00 am to 23:00 pm
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mb-[25px]">
          <MdEmail className="contact-icon" />
          <p className="text-[24px] text-[#4c514c]">{scopedT("email")}</p>
          <span className="text-[20px] text-[#4c514c] ">
            info.colorlib@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export { ContactInformation };
