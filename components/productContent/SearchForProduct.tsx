"use client";

import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useScopedI18n } from "../../locales/client";
import { SearchForProductProps } from "../../app/[locale]/interface";

// debounce function which sets and clears timeout
type FunctionType = (...args: any[]) => any;

const debounce = (func: FunctionType, delay: number): FunctionType => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeout as ReturnType<typeof setTimeout>);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const SearchForProduct = ({
  productItems,
  filteredProducts,
  setFilteredProducts,
}: SearchForProductProps) => {
  const scopedT = useScopedI18n("search");
  const [search, setSearch] = useState("");

  // function get input value and calls new function with the new value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    debouncedFilterProducts(value);
  };

  /* calls debounce function which wraps final result for filtered items 
  and delays its execution for some ms */
  const debouncedFilterProducts = debounce((value) => {
    filterByCategory(value);
  }, 300);

  //function to filter the data form productData according the category
  const filterByCategory = (value: string | number) => {
    if (value !== "") {
      const stringValue = value.toString().toLowerCase();

      const filtered = productItems.filter((product) =>
        product.category.toLowerCase().includes(stringValue)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // function passed to button to sort for filtered products price low-high
  const handleFilter = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="search-wrapper">
      <div style={{ width: "200px" }}>
        {" "}
        {filteredProducts.length > 0 && (
          <span className="item-number">
            {filteredProducts.length} {scopedT("available")}
          </span>
        )}
      </div>

      <div className="flex items-center">
        <label className="flex items-center relative">
          <input
            className=" w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[47px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px] rounded-tl-[6px] rounded-bl-[6px] "
            type="search"
            placeholder={scopedT("searchCategory")}
            value={search}
            onChange={handleChange}
          />
          <ImSearch className="absolute top-4 right-2 text-[#546e6d]" />
        </label>
        <button
          className="bg-[#546e6d] h-[45px] w-[130px] p-[7px] cursor-pointer text-white font-lg rounded-tr-lg rounded-br-lg"
          onClick={handleFilter}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export { SearchForProduct };
