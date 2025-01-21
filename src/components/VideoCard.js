import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="p-2 pr-0 mb-6 mt-0 w-96 -z-50 scroll-smooth">
      <a href="#" className="block">
        <img
          alt="thumbnails"
          src={thumbnails.medium.url}
          className="rounded-xl"
        />
        <div className="mt-2">
          <h3 className="font-bold text-lg text-wrap w-[20rem]">{title}</h3>
          <p className="text-gray-500 text-sm">{channelTitle}</p>
          <p className="text-xs text-gray-400">{statistics.viewCount} views</p>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
