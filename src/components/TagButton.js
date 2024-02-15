import React from "react";

const TagButton = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-300 p-1 my-3 mx-2 rounded-lg px-4 font-medium">
        {name}
      </button>
    </div>
  );
};

export default TagButton;
