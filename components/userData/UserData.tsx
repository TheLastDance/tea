"use client";
// import React, { useState, useEffect } from "react";
// import { UserIcons } from "../userIcons/UserIcons";
// import type { Users } from "@/apiUsers";
// import { getUsers } from "@/apiUsers";

const UserData = () => {
  // const [retrieveUser, setRetrieveUser] = useState([]);

  // useEffect(() => {
  //   const intervalId = setInterval(async () => {
  //     const fetchedUsers = await getUsers();
  //     setRetrieveUser(fetchedUsers);
  //   }, 0);

  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <>
      <table className="w-4/5 border-2 border-[#e2e6e1] rounded-lg mt-[30px] mb-[30px]">
        <thead>
          <tr className="bg-[#e2e6e1] rounded-md">
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Name</th>
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Email</th>
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Age</th>
            <th className=" py-[15px] text-[18px] text-[#3b4039]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {retrieveUser.map((user: Users) => (
            <tr key={user.id} className="border-b border-[#e2e6e1]">
              <td className="pl-[70px] py-[15px] text-[18px] text-[#3b4039]">
                {user.name}
              </td>
              <td className=" py-[15px] text-[18px] text-[#3b4039]">
                {user.email}
              </td>
              <td className=" py-[15px] text-[18px] text-[#3b4039]">
                {user.age}
              </td>
              <td className=" py-[15px] flex items-center justify-center gap-4">
                <UserIcons users={user} id={user.id} />
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
};

export { UserData };
