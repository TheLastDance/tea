"use client";

// import { useRouter } from "next/navigation";
// import { handleLogout } from "@/helper/userLogOut";
import { HiOutlineLogout } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
import { Claims } from '@auth0/nextjs-auth0';

const LogOutButton = ({ session }: { session: Claims | undefined }) => {
  // const router = useRouter();
  const user = session;

  // const handleClick = async () => {
  //   await handleLogout();
  //   localStorage.removeItem("theme");
  //   router.push("/logIn");
  // };

  return (
    <div>
      {user ? (
        <a href="/api/auth/logout"><HiOutlineLogout
          className="w-[20px] h-[20px] text-[#264653] cursor-pointer dark:text-[#ffffff] "
        /></a>
      ) : (
        <a href="/api/auth/login">
          <IoLogIn
            className="w-[20px] h-[20px] text-[#264653] cursor-pointer dark:text-[#ffffff] "
          />
        </a>
      )}
    </div>
  );
};
export { LogOutButton };
