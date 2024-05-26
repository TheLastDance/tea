import { ProductList } from "./ProductList";

import React from "react";

const ProductItemContainer = ({ productItems, filteredProducts }: any) => {
  return (
    <div className="w-4/5 mx-auto mt-[30px]">
      <div className="flex items-center flex-wrap justify-between">
        <ProductList
          filteredProducts={filteredProducts}
          productItems={productItems}
        />
      </div>
    </div>
  );
};

export { ProductItemContainer };
