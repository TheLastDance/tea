import { UserAuthorization } from "../../../components/userLogIn/UserAuthorization";

export default async function LogIn() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-[20px] px-[30px]  bg-[#516b6d] ">
      <UserAuthorization />
    </div>
  );
}
