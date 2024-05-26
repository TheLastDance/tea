"use client";
import { socilaLinkData } from "../projectData";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";

import { SocialLinksProps } from "@/app/[locale]/interface";

const SocialLinks = ({
  justifyContent,
  marginTop,
  marginRight = "10px",
}: SocialLinksProps) => {
  return (
    <div>
      <p
        className="text-base text-white mb-3"
        style={{ fontFamily: "tbc-helvetica-light" }}
      ></p>
      <div
        className="flex items-center"
        style={{ justifyContent: justifyContent }}
      >
        {socilaLinkData.map((item) => (
          <div
            key={item.id}
            style={{ marginRight: marginRight, marginTop: marginTop }}
          >
            <Link href={item.address} target="_blank" rel="noreferrer">
              {item.link}
            </Link>
          </div>
        ))}
        <Link href="/profile">
          <BsPerson
            style={{ marginRight: marginRight, marginTop: marginTop }}
            className="link w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:hover:text-[#728a85]" />
        </Link>
      </div>
    </div>
  );
};

export { SocialLinks };
