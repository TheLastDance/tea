"use client";
import { handleUpdateImg } from "../../app/[locale]/actions";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { useScopedI18n } from "@/locales/client";

export default function AvatarUpload() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const t = useScopedI18n("profile");

  return (
    <div className="w-full min-h-[100px] bg-[#cfe1d8] flex flex-col items-center mt-4 p-4 rounded-md dark:bg-[#527361]">
      <h1 className="text-black text-xl font-semibold dark:text-white">
        {t("picture")}
      </h1>
      <form
        className="flex flex-col items-center mt-4"
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(`/api/upload?filename=${file.name}`, {
            method: "POST",
            body: file,
          });

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
          await handleUpdateImg(newBlob);
        }}
      >
        <div className="flex items-center justify-between ">
          {" "}
          <label className="mr-[15px] w-[100px] relative bg-[#76a58b]  h-[40px] text-[#ffffff] flex items-center justify-center  rounded hover:bg-[#748f80] transition duration-300">
            {" "}
            {t("chooseFile")}
            <input
              name="file"
              ref={inputFileRef}
              type="file"
              required
              className=" absolute w-full h-full top-0 keft-0 mb-4 p-2 border border-white rounded file:mr-5 file:py-1 file:px-3 file:border-[1px]
                    file:text-xs file:font-small
                    file:bg-stone-50 file:text-stone-700
                    hover:file:cursor-pointer hover:file:bg-blue-50
                    hover:file:text-[#748f80] opacity-0"
            />
          </label>
          <button
            type="submit"
            className=" w-[120px] bg-[#76a58b] flex items-center justify-center text-white px-4 py-2 rounded hover:bg-[#748f80] transition duration-300"
          >
            {t("upload")}
          </button>
        </div>

        {blob && <></>}
      </form>
    </div>
  );
}
