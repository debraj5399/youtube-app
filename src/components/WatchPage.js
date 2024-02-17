import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import VideoCard from "./VideoCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const currentSideBarState = useSelector((store) => store.app.isSideMenuOpen);
  const cachedVideo = useSelector((store) => store.video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={
        currentSideBarState
          ? "w-11/12 ml-60 mt-20 flex"
          : "w-full mx-auto mt-14 flex"
      }
    >
      <iframe
        className="rounded-lg m-4 p-4 w-3/4"
        height={650}
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="mt-4">
        {cachedVideo &&
          cachedVideo.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard data={video} type={"Browse"} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default WatchPage;
