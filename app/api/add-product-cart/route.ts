import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

type Products = {
  [key: string]: number;
};

export async function PUT(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();

    // Fetch existing cart  from the vercel
    const result = await sql`
      SELECT products FROM carts
      WHERE user_id = ${Number(userId)}
    `;

    let products: Products = {};

    if (result.rowCount > 0) {
      products = result.rows[0].products || {};
    }

    if (typeof products === "string") {
      products = JSON.parse(products);
    }

    // Update the quantity if the product already exists in the cart
    if (products[productId]) {
      products[productId] += quantity;
    } else {
      // Add the new product to the cart
      products[productId] = quantity;
    }

    // Update the cart on  vercel
    const updatedCart = await sql`
      UPDATE carts
      SET products = ${JSON.stringify(products)}::jsonb
      WHERE user_id = ${Number(userId)}
      RETURNING *
    `;

    return NextResponse.json({ updatedCart }, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
