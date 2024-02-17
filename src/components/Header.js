import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSearch } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { openMenu, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_LOGO, YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const handleToggleSideMenu = () => {
    dispatch(toggleMenu());
  };
  const fetchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchResult(json[1]);
    dispatch(cacheResult({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResult(searchCache[searchQuery]);
      } else {
        fetchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  return (
    <div className="bg-white grid grid-flow-col z-20 w-full shadow-md fixed">
      <div className="flex p-4 col-span-1">
        <RxHamburgerMenu
          className="h-8 cursor-pointer"
          onClick={handleToggleSideMenu}
        />
        <Link to="/" onClick={() => dispatch(openMenu())}>
          <img
            className="h-6 mx-4 my-1 cursor-pointer "
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </Link>
      </div>
      <div className="col-span-10 mx-auto flex mt-2">
        <div className="h-10 m-auto">
          <input
            className="border border-gray-400 rounded-l-full p-1 w-96 px-5"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
        </div>
        <div className="h-10 m-auto">
          <button
            onKeyDownCapture={() =>
              navigate("/results?search_query=" + searchQuery)
            }
            onClick={() => navigate("/results?search_query=" + searchQuery)}
            className="border border-gray-400  rounded-r-full p-1 px-3 bg-gray-200"
          >
            <MdSearch size={24} />
          </button>
        </div>
        {showSearch && searchResult.length !== 0 && (
          <div className="fixed bg-white py-2 mt-12 px-5 w-96 shadow-lg rounded-lg">
            <ul>
              {searchResult.map((result) => (
                <li
                  onClick={() => navigate("/results?search_query=" + result)}
                  key={result}
                  className="flex w-full px-2 py-1"
                >
                  <MdSearch className="mt-1" size={20} />{" "}
                  <h2 className="px-2 ">{result}</h2>
                </li>
              ))}
            </ul>
          </div>
        )}
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
