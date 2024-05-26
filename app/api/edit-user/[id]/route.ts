import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  // Extract the user id
  const id = request.nextUrl.pathname.replace("/api/edit-user/", "");

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }
  // get user data
  const { name, email, age } = await request.json();

  if (!name || !email || isNaN(Number(age))) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    await sql`
      UPDATE users
      SET name = ${name}, email = ${email}, age = ${Number(age)}
      WHERE id = ${Number(id)};
    `;

    const users = await sql`SELECT * FROM users;`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
