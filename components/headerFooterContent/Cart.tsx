import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { getUserCart } from "@/apiUsers";
import type { Cart } from "@/app/[locale]/interface";

export default async function Cart() {
  const cart: Cart = await getUserCart(46);
  const num = Object.values(cart.products);
  const finalNum = num.reduce((a, b) => a + b, 0);

  return (
    <>
      <Link href="/checkOut">
        <div className="relative">
          {" "}
          <IoCartOutline className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />{" "}
          {finalNum <= 0 ? (
            " "
          ) : (
            <span className=" absolute top-[-9px] left-[19px]  font-bold text-[12px] text-white  w-[22px] h-[22px] rounded-full bg-[#780000] flex items-center justify-center">
              {finalNum}
            </span>
          )}
        </div>
      </Link>
    </>
  );
}
