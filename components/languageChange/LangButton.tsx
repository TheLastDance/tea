"use client";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";
import { NavigationProps } from "@/app/[locale]/interface";

const LangButton = ({ marginBottom }: NavigationProps) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChangeLang = async () => {
    const newLocale = locale === "en" ? "ge" : "en";
    changeLocale(newLocale);
  };
  return (
    <>
      <div>
        <button
          style={{ marginBottom: marginBottom }}
          onClick={handleChangeLang}
          className=" w-[100px]   border-[#111827] text-[#111827] dark:border-[#728a85] rounded-md cursor: pointer bg-green font-lg dark:text-[#ffffff] py-[6px] px-[12px] dark:hover:border-[#ffffff] dark:hover:text-[#ffffff] transition duration-200"
        >
          {locale === "en" ? "GE" : "EN"}
        </button>
      </div>
    </>
  );
};

export { LangButton };
