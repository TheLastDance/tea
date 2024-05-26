import { Host } from "../apiUsers";

export async function handlerLoginUser(username: string, password: string) {
  try {
    const response = await fetch(Host + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Login failed:", error);
  }
}
