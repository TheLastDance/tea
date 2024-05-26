import { IoClose } from "react-icons/io5";
import { SocialLinks } from "./SocialLinks";
import { Navigation } from "./Navigation";

const MobileMenu = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen bg-gray-800 p-8 flex items-start justify-start flex-col z-10">
      <div
        className="w-9 h-9 cursor-pointer mb-8"
        onClick={() => setOpen(false)}
      >
        <IoClose className="w-full h-full text-gray-200" />
      </div>
      <div>
        <Navigation
          flexDirection="column"
          alignItems="flex-start"
          marginBottom="20px"
          color="#FFFFFF"
          fontSize="25px"
        />
      </div>
      <SocialLinks justifyContent="flex-start" />
    </div>
  );
};

export { MobileMenu };
