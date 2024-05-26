"use client";

import { FooterNavigation } from "./FooterNavigation";
import { Subscribe } from "./Subscribe";

const Footer = () => {
  return (
    <footer className="w-full bg-[#e0e5e2]  flex flex-col items-center justify-center dark:bg-[#264653]">
      <Subscribe />
      <FooterNavigation />
    </footer>
  );
};

export { Footer };
