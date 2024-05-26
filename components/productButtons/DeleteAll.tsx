"use client";
import { handleClearCart } from "../../app/[locale]/actions";

const DeleteAll = () => {
  return (
    <>
      <button
        onClick={() => handleClearCart()}
        className="w-[130px] px-[10px] py-[7px] border  border-[#999e97] bg-[#999e97] mb-[40px] dark:bg-[#264653] dark:border-[#264653] dark:text-[#ffffff] cursor-pointer rounded-md hover:bg-[#9b2226]"
      >
        Delete All{" "}
      </button>
    </>
  );
};

export { DeleteAll };
