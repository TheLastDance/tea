// import { Data } from "@/app/[locale]/interface";
import ProductItems from "./ProductItems";

const ProductList = ({ productItems, filteredProducts }: any) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : productItems;

  return (
    <>
      {productsToRender.map((item: any) => (
        <ProductItems
          key={item.id}
          title={item.title}
          brand={item.brand}
          category={item.category}
          discountPercentage={item.discountPercentage}
          price={item.price}
          rating={item.rating}
          imgUrl={item.images[0]}
          stock={item.stock}
          id={item.id}
        />
      ))}
    </>
  );
};

export { ProductList };
