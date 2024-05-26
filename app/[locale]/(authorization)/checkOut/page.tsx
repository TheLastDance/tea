import { getProducts, getUserCart } from "@/apiUsers";
import { DeleteAll } from "@/components/productButtons/DeleteAll";
import { SingleProductButtons } from "@/components/productButtons/SingleProductButtons";
import { SelectedProduct } from "../../interface";
import Image from "next/image";
import productImg from "../../../../public/assets/image/blogImages/blog3.webp";

export default async function NewCartProducts() {
  const cart = await getUserCart(46);
  const cartProductsArray = Object.entries(cart.products);

  const cartProducts = await getProducts();

  // Create a map of cart product IDs and their quantities
  const cartProductMap = new Map(cartProductsArray);

  // Filter and map the products to include the quantity
  const filteredProducts = cartProducts
    .filter((product: SelectedProduct) =>
      cartProductMap.has(product.id.toString())
    )
    .map((product: SelectedProduct) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
    }));

  return (
    <div className=" flex flex-col items-center justify-center  w-full bg-[#dad7cd] px-[20px] py-[20px] lg:justify-between lg:flex-row lg:items-start lg:px-[30px]">
      <div className="flex   flex-col mt-[150px]">
        <div className=" h-[50px] bg-[#999e97] dark:bg-[#264653] w-full flex items-center rounded-t-md">
          <p className="text-left text-[16px] text-[#ffffff] italic tracking-wider font-bold ml-[15px] ">
            Your cart
          </p>
        </div>
        <div className="w-full flex flex-col items-center lg:items-start">
          {" "}
          {filteredProducts.map((product: SelectedProduct) => (
            <div
              key={product.id}
              className=" border-2 border-[#999e97] dark:border-[#264653]  flex flex-col items-center  justify-center   mb-[15px] w-full lg:flex-row lg:justify-between"
            >
              <Image
                width={300}
                height={300}
                src={productImg}
                alt="bag"
                className="mb-[20px] lg:mb-[0]"
              />
              <div className="ml-[40px] text-[#264653] font-bold text-[12px] ">
                {" "}
                <p className="">{product.title}</p>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p>In Stock: {product.stock}</p>
                <p>Quantity:{product.quantity}</p>
                <SingleProductButtons id={product.id} />
              </div>
              <p className="flex flex-col items-center  text-[#264653] font-extrabold lg:mr-[20px] ">
                {" "}
                Total Price
                <span className="text-[#264653] font-extrabold ">
                  ${" "}
                  {(
                    (product.quantity || 0) * parseFloat(product.price)
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
          <DeleteAll />
        </div>
      </div>
      <div className="bg-[#999e97] dark:bg-[#264653] mt-[150px] px-[15px] py-[30px] flex flex-col items-center justify-center rounded-md lg:ml-[20px]">
        <h2 className="text-[18px] font-bold text-[#ffffff] uppercase mb-[10px]">
          Total Price{" "}
        </h2>
        <p className="text-[#ffffff] font-extrabold text-[16px] text-left underline mb-[15px]">
          {filteredProducts
            .reduce(
              (
                acc: number,
                product: { quantity: string | number; price: string | number }
              ) => {
                const quantity = parseFloat(product.quantity as string) || 0;
                const price = parseFloat(product.price as string) || 0;
                return acc + quantity * price;
              },
              0
            )
            .toFixed(2)}
        </p>
        <h3 className="text-[16px] font-bold text-[#ffffff] uppercase mb-2">
          Payment Methods
        </h3>
        <div className="flex items-center justify-evenly">
          {" "}
          <button className="bg-white text-[#264653] py-2 px-4 rounded-md w-[120px] mr-[15px] cursor-pointer hover:bg-[#9b2226] hover:text-[#ffffff] transition-all duration-200">
            Credit Card
          </button>
          <button className="bg-white text-[#264653] py-2 px-4 rounded-md w-[120px] mr-[15px] cursor-pointer hover:bg-[#9b2226] hover:text-[#ffffff] transition-all duration-200">
            PayPal
          </button>
          <button className="bg-white text-[#264653] py-2 px-4 rounded-md w-[120px] mr-[15px] cursor-pointer hover:bg-[#9b2226] hover:text-[#ffffff] transition-all duration-200">
            Crypto
          </button>
        </div>

        <button className="bg-[#9b2226] text-[#ffffff] py-2 px-4 rounded-md w-[150px] mt-[15px] cursor-pointer hover:bg-[#f5ebe0] hover:text-[#264653] transition-all duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
}
