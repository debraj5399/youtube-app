import React from "react";
import { useSelector } from "react-redux";
import {
  MdHome,
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { PiUserSquare, PiYoutubeLogo } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { GrLike } from "react-icons/gr";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isSideMenuOpen = useSelector((store) => store.app.isSideMenuOpen);
  if (!isSideMenuOpen) return;
  return (
    <div className="p-3 shadow-lg h-full w-56 fixed mt-20">
      <ul>
        <Link to={"/"}>
          <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
            <MdHome size={22} /> <div className="ml-3">Home</div>
          </li>
        </Link>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <SiYoutubeshorts size={16} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Shorts</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <MdOutlineSubscriptions size={16} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Subscriptions</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <SiYoutubemusic size={16} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Youtube Music</div>
        </li>
      </ul>
      <h2 className="font-bold mt-5">You</h2>
      <ul>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <PiUserSquare size={18} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Your Channel</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <MdHistory size={18} className="mt-1 ml-1" />{" "}
          <div className="ml-3">History</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <PiYoutubeLogo size={18} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Your Videos</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <MdOutlineWatchLater size={18} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Watch Later</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <LiaDownloadSolid size={18} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Downloads</div>
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1 flex">
          <GrLike size={16} className="mt-1 ml-1" />{" "}
          <div className="ml-3">Liked Videos</div>
        </li>
      </ul>
      <h2 className="font-bold mt-5">Subscriptions</h2>
      <ul>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Home
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Shorts
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Subcriptions
        </li>
      </ul>
      <h2 className="font-bold mt-5">Explore</h2>
      <ul>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Trending
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Shopping
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Music
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Movies
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Learning
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Gaming
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Podcasts
        </li>
        <li className="font-light hover:bg-gray-200 rounded-lg cursor-pointer p-1">
          Fashion & Beauty
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
