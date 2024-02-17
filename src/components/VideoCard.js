import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  const { medium, maxres } = thumbnails;
  function formatViewCount(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    } else {
      return viewCount.toString();
    }
  }
  return (
    <div className="p-2 mx-3 m-2 w-64 cursor-pointer">
      <img
        className="shadow-lg rounded-lg"
        alt="thumbnail"
        src={maxres ? maxres?.url : medium?.url}
      />
      <ul>
        <li className="font-semibold mt-2 line-clamp-2">{title}</li>
        <li className="text-gray-700 font-sans">{channelTitle}</li>
        <li>{formatViewCount(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
