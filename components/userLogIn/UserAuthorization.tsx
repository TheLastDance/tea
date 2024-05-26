"use client";

import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlerLoginUser } from "../../helper/userLogin";

import { useScopedI18n } from "../../locales/client";

const UserAuthorization = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // prevent default submisison and setting input values redirecting into main page
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerLoginUser(userName, password).then(() => {
      router.push("/");
    });
  };

  const scopedT = useScopedI18n("logIn");
  return (
    <>
      <p className="animate-pulse  text-[20px] mb-4 font-semibold text-[#0C1B31] dark:text-[#ffffff]  tracking-wide ">
        {scopedT("access")}
      </p>
      <form
        onSubmit={handleSubmit}
        className="py-[40px] px-[20px] border-2 border-[#0C1B31] dark:border-[#939898] bg-[#979f9f] bg-opacity-5 flex items-center flex-col rounded-md"
      >
        <FaCircleUser className="w-[60px] h-[60px] m-[15px] text-[#e1e6e1]" />
        <label className="flex flex-col items-center">
          <input
            className=" w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px] mb-[15px]"
            type="text"
            placeholder={scopedT("userName")}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          ></input>
        </label>
        <label className="flex flex-col items-center">
          <input
            type="password"
            className="w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            placeholder={scopedT("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <button
          className="w-full h-[40px] p-[10px] text-[#393a3a] bg-[#e1e6e1] mt-[10px] rounded-md text-lg text-center cursor-pointer font-bold flex items-center justify-center"
          type="submit"
        >
          {scopedT("logIn")}
        </button>
      </form>
    </>
  );
};

export { UserAuthorization };
