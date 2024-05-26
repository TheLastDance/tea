import NewProduct from "@/components/newProductVercel/NewProduct";
import { getProducts } from "../../../../apiUsers";

export default async function ProductVercel() {
  const Product = await getProducts();

  return (
    <div className=" mt-[92px] w-full  bg-[#dad7cd]">
      <div className="flex items-center justify-center flex-wrap w-4/5 h-full mt-[50px] m-auto">
        {" "}
        <NewProduct product={Product} />
      </div>
    </div>
  );
}
