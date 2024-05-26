"use client";
import { useState } from "react";
import Modal from "../modal/Modal";
import AddUserForm from "./AddUSerForm";
import { useScopedI18n } from "../../locales/client";

const UserAddButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const scopedT = useScopedI18n("addUser");
  return (
    <>
      <button
        className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[200px] cursor-pointer  dark:bg-[#264653] dark:text-[#ffffff]"
        onClick={handleModal}
      >
        {scopedT("newUser")}
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddUserForm handleModalClose={handleModalClose} />
      </Modal>
    </>
  );
};
export { UserAddButton };
