"use client";

import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { deleteUserId } from "../../app/[locale]/actions";
import { useState } from "react";
import EditModal from "../modal/EditModal";
import { updateUserAction } from "../../app/[locale]/actions";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "../../locales/client";

export interface UserData {
  name: string;
  email: string;
  age: number;
}

const UserIcons = ({ id, users }: { id: number; users: UserData }) => {
  const handleDelete = async () => {
    try {
      deleteUserId(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const scopedT = useScopedI18n("addUser");
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const [user, setUser] = useState<UserData>(users);
  const router = useRouter();

  const handleModalEditOpen = () => {
    setModalEditOpen(true);
  };
  const handleModalEditClose = () => {
    setModalEditOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUserAction(id, user);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
    router.refresh();
    handleModalEditClose();
  };
  const handleChange = (
    field: keyof UserData,
    value: string | number | boolean
  ) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center">
      <TiUserDelete className="user-icon" onClick={handleDelete} />
      <FaUserEdit className="user-icon" onClick={handleModalEditOpen} />
      <EditModal isOpen={isModalEditOpen} onClose={handleModalEditClose}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center py-[20px] px-[30px]"
        >
          <input
            className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            id="name"
            type="text"
            placeholder={scopedT("name")}
            value={user.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            id="email"
            type="text"
            placeholder={scopedT("email")}
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            id="age"
            type="number"
            placeholder={scopedT("age")}
            value={user?.age?.toString() || ""}
            onChange={(e) => handleChange("age", parseInt(e.target.value))}
          />
          <button
            type="submit"
            className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[150px] cursor-pointer"
          >
            {scopedT("save")}
          </button>
        </form>
      </EditModal>
    </div>
  );
};

export { UserIcons };
