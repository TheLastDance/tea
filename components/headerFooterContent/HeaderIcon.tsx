
import { NavigationProps } from "@/app/[locale]/interface";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
// import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import Cart from "./Cart";
import { getSession } from "@auth0/nextjs-auth0";
// import useProductCart from "@/hook";
// import { useState, useEffect } from "react";
// import { Card } from "@/hook";

const HeaderIcon: React.FC<NavigationProps> = async ({ alignItems }) => {
  // const { totalProductCount } = useProductCart();
  // const [count, setCount] = useState(totalProductCount);
  // const [num, setNum] = useState(true);

  // useEffect(() => {
  //   const updateCartCount = () => {
  //     const products = window.localStorage.getItem("product");
  //     if (products) {
  //       const parsedProducts = JSON.parse(products);
  //       const total = parsedProducts.reduce(
  //         (sum: number, product: Card) => sum + product.quantity,
  //         0
  //       );
  //       setCount(total);
  //       // Set num based on the new count
  //       if (total === 0) {
  //         setNum(false);
  //       } else {
  //         setNum(true); // Ensure to set true when count is greater than 0
  //       }
  //     } else {
  //       setNum(false); // Ensure to handle the case where products are not found
  //     }
  //   };

  // Initialize the cart count on component mount
  //   updateCartCount();

  //   const handleCartUpdate = () => {
  //     updateCartCount();
  //   };

  //   window.addEventListener("cartUpdated", handleCartUpdate);
  //   window.addEventListener("storage", handleCartUpdate);

  //   return () => {
  //     window.removeEventListener("cartUpdated", handleCartUpdate);
  //     window.removeEventListener("storage", handleCartUpdate);
  //   };
  // }, []);

  const session = await getSession();

  return (
    <div style={{ alignItems: alignItems }} className="hidden lg:flex">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="#">
          <CiSearch className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />
        </Link>
        {session?.user && <Link href="/profile">
          <BsPerson className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#728a85] dark:text-[#ffffff] dark:hover:text-[#728a85]" />
        </Link>}
        <Cart />
      </div>
    </div>
  );
};

export { HeaderIcon };
