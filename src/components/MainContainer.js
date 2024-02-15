import React from "react";
import TrendingTags from "./TrendingTags";
import VideoListContainer from "./VideoListContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const currentSideBarState = useSelector((store) => store.app.isSideMenuOpen);
  return (
    <div
      className={currentSideBarState ? "w-11/12 ml-60 mt-20" : "w-full mx-auto"}
    >
      <TrendingTags />
      <VideoListContainer />
    </div>
  );
};

export default MainContainer;
