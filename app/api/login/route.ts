import { AUTH_COOKIE_KEY } from "../../contants";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// export async function POST(request: NextRequest) {
//   const { username, password } = await request.json();
//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });

//   const cookieStore = cookies();
//   const user = await response.json();

//   cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));

//   return Response.json({ username, password });
// }

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const user = await response.json();

  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));

  // Set up CORS headers
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  return new Response(JSON.stringify({ username, password }), {
    headers,
    status: 200,
  });
}
