import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
// import { getSession } from "@auth0/nextjs-auth0";

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { url, session } = body;

    if (!session?.user) {
      return new NextResponse(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });
    }

    const { sub } = session.user;

    if (!url) {
      return new NextResponse(
        JSON.stringify({ error: "No image URL provided" }),
        { status: 400 }
      );
    }

    await sql`UPDATE authousers SET img = ${url} WHERE id = ${sub}`;

    return new NextResponse(
      JSON.stringify({ message: "Image updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating image:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
