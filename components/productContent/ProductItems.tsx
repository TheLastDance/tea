"use client";
import useProductCart from "@/hook";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "../../app/[locale]/interface";
import { useState } from "react";
// import { getProducts } from "../../apiUsers";

export default async function ProductItems({
  imgUrl,
  title,
  brand,
  category,
  discountPercentage,
  price,
  rating,
  stock,
  id,
}: ProductCard) {
  const { addProductsToCart } = useProductCart();
  const [product] = useState({
    id,
    imgUrl,
    brand,
    title,
    price,
    quantity: 1,
  });

  const handleAddToCart = () => {
    addProductsToCart(product);
  };

  // const ProductVercel = await getProducts();

  return (
    <>
      {/* <div>
        {ProductVercel?.map((product: any) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))}
      </div> */}
      <div className="item-wrapper flex flex-col items-center justify-center border border-gray-300 shadow transition-shadow  cursor-pointer  rounded p-2 mb-2 hover:shadow-lg">
        <div className="product-img">
          <Image
            className="object-fill"
            src={imgUrl}
            alt="product"
            width={100}
            height={100}
          />
          <div className="add-cart">
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>
          <span>Rating-{rating}</span>
        </div>
        <div>
          <p className="font-medium text green-950 font-tbc-helbetica-bold">
            {title}
          </p>
          <p className="font-base text green-950 font-tbc-helbetica-bold">
            {brand} / {category}
          </p>
          <p className="text-[#ff1f1f] font-[18px] font-tbc-helbetica-bold">
            {price}$
          </p>
          <p className="text-[#678E6C] text-base font-tbc-helvetica-bold">
            {discountPercentage}%
          </p>
          <p className="product-description">{stock} left in stock</p>
          <Link href={`/product/${id}`}>view details</Link>
        </div>
      </div>
    </>
  );
}
