import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`
        CREATE TABLE users (
          id SERIAL,
          name varchar(255),
          email varchar(255),
          age INTEGER
        );
      `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    console.error("Error creating table:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
