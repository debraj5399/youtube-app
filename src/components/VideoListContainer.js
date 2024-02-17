import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoListShimmer from "./VideoListShimmer";
import { useDispatch } from "react-redux";
import { cacheVideo } from "../utils/videoSlice";

const VideoListContainer = () => {
  const [video, setVideo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPopularVideos = async () => {
    try {
      const data = await fetch(VIDEOS_API);
      const json = await data.json();
      setVideo(json?.items);
      dispatch(cacheVideo(json?.items));
    } catch (error) {
      console.log(error);
    }
  };
  if (video === null) return <VideoListShimmer />;

  return (
    <div className="flex flex-wrap w-full p-4 px-2">
      {video.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCard data={item} type={"Browse"} />
        </Link>
      ))}
    </div>
  );
};

export default VideoListContainer;
