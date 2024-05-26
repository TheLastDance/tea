"use client";
import React from "react";
import { AddToCartButtonProps } from "../../app/[locale]/interface";
const AddProductToCart: React.FC<AddToCartButtonProps> = ({
  productId,
  handleAddToCart,
}) => {
  return (
    <>
      <button
        onClick={() => handleAddToCart(productId)}
        className="border border-[#b5b4b0] text-white  w-[150px] mt-[10px] px-[12px] py-[7px] bg-[#4f7760] rounded-md hover:bg-[#5f8973] transition-colors duration-300"
      >
        Add To cart
      </button>
    </>
  );
};

export { AddProductToCart };
