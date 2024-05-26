"use client";

import { SearchForProduct } from "../../../../components/productContent/SearchForProduct";
import { ProductItemContainer } from "../../../../components/productContent/ProductItemContainer";
import { useState, useEffect } from "react";
import { ProductData } from "../../interface";

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
    <div className="w-full mt-[150px]">
      <SearchForProduct
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        productItems={productItems}
      />
      <ProductItemContainer
        filteredProducts={filteredProducts}
        productItems={productItems}
      />
    </div>
  );
};

export default ProductContent;
