import React from "react";
import { useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const handleToggleSideMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="bg-white grid grid-flow-col w-full shadow-lg fixed">
      <div className="flex p-4 col-span-1">
        <RxHamburgerMenu
          className="h-8 cursor-pointer"
          onClick={handleToggleSideMenu}
        />
        <img
          className="h-6 mx-4 my-1 cursor-pointer "
          alt="youtube-logo"
          src={YOUTUBE_LOGO}
        />
      </div>
      <div className="col-span-10 mx-auto flex mt-2">
        <div className="h-10 m-auto">
          <input
            className="border border-gray-400 rounded-l-full p-1 w-96 px-5"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="h-10 m-auto">
          <button className="border border-gray-400  rounded-r-full p-1 px-3 bg-gray-200">
            <MdSearch size={24} />
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-evenly">
        <RiVideoUploadLine className="h-8 my-4" size={25} />
        <IoIosNotifications className="h-8 my-4" size={25} />
        <CgProfile className="h-8 my-4" size={25} />
      </div>
    </div>
  );
};

export default Header;
