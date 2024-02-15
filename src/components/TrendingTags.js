import React from "react";
import TagButton from "./TagButton";

const TrendingTags = () => {
  const tagsList = [
    "All",
    "Trending",
    "Music",
    "Live",
    "News",
    "Gaming",
    "Cricket",
    "History",
    "Gadgets",
    "New to you",
    "Watched",
    "Recently Uploaded",
    "Comedy",
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap flex mx-6">
      {tagsList.map((item, index) => (
        <TagButton key={index} name={item} />
      ))}
    </div>
  );
};

export default TrendingTags;
