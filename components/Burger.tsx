"use client"
import { useState } from "react"
import { MobileMenu } from "./headerFooterContent/MobileMenu";

export default function Burger() {
  const [open, setOpen] = useState(false);

  const handleCheck = () => {
    setOpen(true);
  };



  return (
    <>
      <span
        className="w-7 h-7 text-[#264653] cursor-pointer lg:hidden"
        onClick={handleCheck}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="text-[#264653] dark:text-[#fff]" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </span>
      {open && <MobileMenu setOpen={setOpen} />}
    </>
  )
}
