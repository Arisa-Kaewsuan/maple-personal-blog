import React from "react";
import { RiUserLine } from "react-icons/ri";
import { SlReload } from "react-icons/sl";

const Header = () => {
  return (
    <>
      <div className="px-4 py-4 flex items-center gap-6 border-b">
        <div className="flex items-center">
          <RiUserLine />
          <span className="ml-2 text-lg font-medium">Profile</span>
        </div>

        <div className="flex items-center text-gray-500">
          <SlReload />
          <span className="ml-2 text-lg">Reset password</span>
        </div>
      </div>
    </>
  );
};

export default Header;
