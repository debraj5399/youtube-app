import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoListShimmer from "./VideoListShimmer";

const VideoListContainer = () => {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    getPopularVideos();
  }, []);
  const getPopularVideos = async () => {
    const data = await fetch(VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideo(json?.items);
  };
  if (video === null) return <VideoListShimmer />;

  return (
    <div className="flex flex-wrap w-full p-4 px-2">
      {video.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoListContainer;
