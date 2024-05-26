import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  // Extract ID from the URL path
  const idStr = request.nextUrl.pathname.replace("/api/delete-user/", "");
  const id = parseInt(idStr, 10); // Ensure it's converted to an integer

  try {
    // Validate if the ID is a number and greater than zero
    if (isNaN(id) || id <= 0) throw new Error("Valid ID is required");

    // Delete the user with the specified ID
    await sql`DELETE FROM users WHERE id = ${id};`;
  } catch (error: any) {
    console.error("Error:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }

  // Fetch all remaining users
  const users = await sql`SELECT * FROM users;`;

  // Return the updated user list
  return NextResponse.json({ users }, { status: 200 });
}
