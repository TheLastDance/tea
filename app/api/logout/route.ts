import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../contants";

export async function POST() {
  cookies().delete(AUTH_COOKIE_KEY);

  return new Response(JSON.stringify({ message: "Logged out successfully" }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    status: 200,
  });
}
