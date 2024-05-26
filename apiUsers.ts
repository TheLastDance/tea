export const Host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://teona-chareqishvili-tbc.vercel.app";

export type Users = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export async function getUsers() {
  try {
    const response = await fetch(Host + "/api/get-user");
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const { users } = await response.json();
    return users.rows;
  } catch (error) {
    console.error("Failed to fetch users:", error);

    throw error;
  }
}

export async function createUser(name: string, email: string, age: number) {
  return await fetch(Host + "/api/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  const response = await fetch(`${Host}/api/delete-user/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return response.json();
}

export async function getUserById(
  id: number,
  name: string,
  email: string,
  age: number
) {
  try {
    const response = await fetch(`${Host}/api/edit-user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

// products - carts

// get products from database
export async function getProducts() {
  try {
    const response = await fetch(Host + "/api/get-product");
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const data = await response.json();

    const { users } = data;

    return users?.rows;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

// function to get product detail
export async function getProductDetail(id: string) {
  const response = await fetch(`${Host}/api/get-product/${id}`);
  const data = await response.json();
  const product = data.products?.rows ? data.products.rows[0] : null;
  return product;
}

export async function getUserCart(userId: number) {
  const response = await fetch(Host + `/api/get-cart/${userId}`, {
    cache: "no-store",
  });
  const carts = await response.json();

  const [cart] = carts.carts.rows;

  return cart;
}
