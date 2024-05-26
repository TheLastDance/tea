"use client";

import { SearchForProduct } from "./SearchForProduct";
import { ProductItemContainer } from "./ProductItemContainer";
import { useState, useEffect } from "react";
import { ProductData } from "../../app/[locale]/interface";

const ProductContent: React.FC = () => {
  const [productItems, setProductItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);

  // fetches all products and sets loader to false
  useEffect(() => {
    async function getItem() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductItems(data.products);
    }
    getItem();
  }, []);

  return (
    <>
      <SearchForProduct
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        productItems={productItems}
      />
      <ProductItemContainer
        filteredProducts={filteredProducts}
        productItems={productItems}
      />
    </>
  );
};

export { ProductContent };
