import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="p-2 pr-0 mb-6 mt-0 w-96 ">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="rounded-xl"
      />
      <ul>
        <li className="font-bold py-2 w-72">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
