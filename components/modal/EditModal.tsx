import React from "react";
import { useScopedI18n } from "../../locales/client";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const EditModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const scopedT = useScopedI18n("editUser");
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded shadow-lg mt-[50px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="text-[#264653] mb-4" onClick={onClose}>
          {scopedT("close")}
        </button>
        {children}
      </div>
    </div>
  );
};

export default EditModal;
