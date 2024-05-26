import { useEffect, useState } from "react";

export interface Card {
  id: number;
  price: number;
  title: string;
  imgUrl: string;
  quantity: number;
  brand: string;
}

const useProductCart = () => {
  const [items, setItems] = useState<Card[]>([]);
  const [totalProductCount, setTotalProductCount] = useState<number | null>(
    null
  );

  useEffect(() => {
    // Retrieve the 'product' item from localStorage
    const products = window.localStorage.getItem("product");
    // If 'product' does not exist in localStorage, initialize it as an empty array
    if (products === null || products === undefined) {
      window.localStorage.setItem("product", JSON.stringify([]));
    } else {
      // If 'product' exists, parse the JSON string into an array of products
      const parsedProducts: Card[] = JSON.parse(products);
      // Update the state with the parsed products
      setItems(parsedProducts);
      // Calculate the total number of items in the cart by summing the quantities of each product
      setTotalProductCount(
        parsedProducts.reduce((total, product) => total + product.quantity, 0)
      );
    }
    // Event handler function to handle storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "product") {
        const parsedProducts: Card[] = JSON.parse(e.newValue || "[]");
        setItems(parsedProducts);
        setTotalProductCount(
          parsedProducts.reduce((total, product) => total + product.quantity, 0)
        );
      }
    };
    // Add the storage event listener to the window object
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Dispatch a custom event to notify other components about cart updates
  const dispatchCartEvent = () => {
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };
  // Update localStorage and state with new product list and dispatch custom event
  const updateLocalStorage = (products: Card[]) => {
    try {
      window.localStorage.setItem("product", JSON.stringify(products));
      setItems(products);
      setTotalProductCount(
        products.reduce((total, product) => total + product.quantity, 0)
      );
      dispatchCartEvent();
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };
  // function to add products to cart
  const addProductsToCart = (product: Card) => {
    const productItem = window.localStorage.getItem("product");
    let parsedProduct: Card[] = [];

    if (productItem) {
      parsedProduct = JSON.parse(productItem) as Card[];
    }

    let productExists = false;

    for (let item of parsedProduct) {
      if (item.id === product.id) {
        item.quantity += 1;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      parsedProduct.push({ ...product, quantity: 1 });
    }

    parsedProduct.sort((a, b) => a.id - b.id);
    updateLocalStorage(parsedProduct);
  };
  //function to increment products in cart
  const incrementProductQuantity = (productId: number) => {
    const updatedItems = items.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateLocalStorage(updatedItems);
  };

  // function to decrement number of products from cart
  const decrementProductQuantity = (productId: number) => {
    const updatedItems = items
      .map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateLocalStorage(updatedItems);
  };

  // clears product by id
  const removeProduct = (productId: number) => {
    const updatedItems = items.filter((item) => item.id !== productId);
    updateLocalStorage(updatedItems);
  };

  // cleares all products from cart
  const clearCart = () => {
    window.localStorage.removeItem("product");
    setItems([]);
    setTotalProductCount(0);
    dispatchCartEvent();
  };

  return {
    addProductsToCart,
    items,
    totalProductCount,
    incrementProductQuantity,
    decrementProductQuantity,
    clearCart,
    removeProduct,
  };
};

export default useProductCart;
