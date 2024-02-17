import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { VIDEO_SEARCH_RESULTS_API } from "../utils/constants";
import VideoListShimmer from "./VideoListShimmer";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [video, setVideo] = useState(null);
  const handleSearch = async () => {
    const data = await fetch(
      VIDEO_SEARCH_RESULTS_API + searchParams.get("search_query")
    );
    const json = await data.json();
    setVideo(json?.items);
  };
  useEffect(() => {
    handleSearch();
    dispatch(openMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("search_query")]);
  if (video === null) return <VideoListShimmer />;
  return (
    <div className="w-1/2 p-4 px-2 mx-auto mt-16 flex justify-center flex-col">
      {video.map((item, index) => (
        <Link key={index} to={"/watch?v=" + item?.id?.videoId}>
          <VideoCard data={item} type={"Search"} />
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
