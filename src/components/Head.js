import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Heade = () => {
  const dispatch = useDispatch();

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" flex p-0  justify-between w-auto">
      <div className="flex col-span-1 pt-4 ml-6 ">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-5 cursor-pointer"
          alt="hamburger-icon"
          src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png"
        />
        {/* <a href="/"> */}
        <img
          className="h-24 ml-5 -mt-9"
          alt="Youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEXQdAa-3ljX26kSoD1zDIGZnVP6Wyy4wJg&s"
        />
        {/* </a> */}
      </div>
      <div className="w-1/2 flex  mt-1">
        <input
          placeholder="Search"
          className="border border-gray-500 w-full p-4 rounded-l-full h-10 text-lg mt-1"
          type="text"
        />
        <button className="border h-10 mt-1 w-14 border-gray-500 bg-gray-100 p-2 rounded-r-full ">
          <img
            className="  -mt-1 pb-1 px-1 pt-1"
            alt="search-icone"
            src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
          />
        </button>
      </div>
      <div className="col-span-1 mr-5">
        <img
          className="h-14 pt-2 "
          alt="user-logo"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        />
      </div>
    </div>
  );
};

export default Heade;
