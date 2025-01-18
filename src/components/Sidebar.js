import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="pl-3 text-nowrap -mt-4 bg-white fixed left-0 top-[4.7rem] h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hide scroll-smooth z-50">
      <ul className=" mt-3 w-full text-sm ">
        <li className="flex text-sm py-2 hover:bg-gray-300 hover:rounded-lg  cursor-pointer pl-2 pr-6">
          <Link to={"/"} className="flex">
            <img
              alt="Home"
              className="h-5 mr-5 "
              src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
            />{" "}
            Home
          </Link>
        </li>
        <li className="flex text-sm py-2 hover:bg-gray-300 hover:rounded-lg  cursor-pointer pl-2 pr-6 bg-green-400 rounded-lg">
          <Link to={"/demo"} className="flex">
            <img
              alt="Home"
              className="h-5 mr-5 "
              src="https://cdn-icons-png.flaticon.com/128/16126/16126516.png"
            />{" "}
            Demo
          </Link>
        </li>
        <li className="flex text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6">
          <img
            alt="Shorts"
            className="h-5 mr-5"
            src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
          />{" "}
          Shorts
        </li>
        <li className="flex text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6">
          <img
            alt="sub-logo"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png"
          />{" "}
          Subscriptions
        </li>
      </ul>
      <h1 className="text-2xl  border-t-2 pt-4 mx-2 mt-5">You </h1>
      <ul className="text-xl mt-3 w-full pt-2">
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex ">
          <img
            alt="History"
            className=" h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/3503/3503786.png"
          />{" "}
          History
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Playlist"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/9297/9297069.png"
          />{" "}
          Playlists
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Videos"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/2991/2991195.png"
          />{" "}
          Your videos
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Watch-later"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/15469/15469061.png"
          />{" "}
          Watch later
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          {" "}
          <img
            alt="Liked-videos"
            className="h-5 mr-5 "
            src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
          />
          Liked videos
        </li>
      </ul>
      <h1 className="text-2xl pt-3 border-t-2 mx-2 mt-5">Explore</h1>
      <ul className="text-xl w-full mt-3 pt-2">
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Trending"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/3390/3390990.png"
          />{" "}
          Trending
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Shopping"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/102/102665.png"
          />
          Shopping
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Music"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/461/461238.png"
          />
          Music
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Movies"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/860/860306.png"
          />
          Movies
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Live"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/2989/2989838.png"
          />
          Live
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Gaming"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/686/686589.png"
          />
          Gaming
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="News"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/3208/3208799.png"
          />
          News
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Sports"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/1152/1152912.png"
          />
          Sports
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Courses"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/6016/6016293.png"
          />
          Courses
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-3  flex">
          <img
            alt="Fashion & Beauty"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/828/828474.png"
          />
          Fashion & Beauty
        </li>
        <li className="text-sm py-2 hover:bg-gray-300 hover:rounded-lg cursor-pointer pl-2 pr-6 flex">
          <img
            alt="Podcasts"
            className="h-5 mr-5"
            src="https://cdn-icons-png.flaticon.com/128/5079/5079029.png"
          />
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
