import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import AvatarUpload from "./AvatarUpload";
import { Host } from "@/apiUsers";
import { getScopedI18n } from "@/locales/server";

export default async function UserProfile() {
  const session = await getSession();
  const t = await getScopedI18n("profile");

  const response = await fetch(`${Host}/api/get-updated-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ session }),
  });

  const data = await response.json();

  if (!session || !session.user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        No user session found.
      </div>
    );
  }

  const { user } = session;
  const [name, surname] = user.name.split(" ");

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <div className=" w-[250px] h-[250px]">
        <Image
          src={data.user.img}
          alt={user.name}
          width={250}
          height={250}
          className="object-cover rounded-full w-full h-full"
        />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {t("userInfo")}
      </h2>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-700">{t("name")}</h3>
        {user.given_name && user.family_name ? (
          <p className="text-gray-600">
            {name} {surname}
          </p>
        ) : (
          <p className="text-gray-600">{user.nickname}</p>
        )}
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-lg font-medium text-gray-700">{t("email")}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <AvatarUpload />
    </div>
  );
}
