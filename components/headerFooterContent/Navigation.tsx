"use client";
import { useScopedI18n } from "../../locales/client";
import Link from "next/link";
import { NavigationProps } from "../../app/[locale]/interface";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navigation: React.FC<NavigationProps> = ({
  flexDirection,
  alignItems,
  marginBottom,
  marginLeft,
  display,
  color,
  fontSize,
}) => {
  const { user } = useUser();
  const scopedT = useScopedI18n("navigation");
  return (
    <nav style={{ display: display }}>
      <ul
        className="flex items-center"
        style={{
          flexDirection: flexDirection,
          alignItems: alignItems,
        }}
      >
        <Link
          href="/"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#264653] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#728a85] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#728a85]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {scopedT("home")}
          </li>
        </Link>{" "}
        <Link
          href="/ProductVercel"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#264653] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#728a85] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#728a85]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {scopedT("product")}
          </li>
        </Link>
        <Link
          href="/blog"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#264653] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#728a85] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#728a85]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {scopedT("blog")}
          </li>
        </Link>
        <Link
          href="/contact"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#264653] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#728a85] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#728a85]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {scopedT("contact")}
          </li>
        </Link>
        {user ? (
          <Link
            href="/users"
            className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#264653] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#728a85] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#728a85]"
            style={{
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              color: color,
            }}
          >
            <li
              className="font-tbc-helvetica-bold"
              style={{ fontSize: fontSize }}
            >
              {scopedT("users")}
            </li>
          </Link>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export { Navigation };
