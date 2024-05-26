import { Host } from "../apiUsers";

export const handleLogout = async () => {
  try {
    const res = await fetch(Host + "/api/logout", {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
