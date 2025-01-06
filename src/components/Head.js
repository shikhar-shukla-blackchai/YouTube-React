import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { casheResults } from "../utils/searchSlice";

const Heade = () => {
  const [searchQuary, setSearchQuary] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuary]) {
        setSuggestion(searchCache[searchQuary]);
      } else getSearchSuggestion();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuary]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuary);
    const json = await data.json();

    setSuggestion(json[1]);

    dispatch(
      casheResults({
        [searchQuary]: json[1],
      })
    );
  };

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" flex p-0  justify-between w-full fixed z-40 bg-white h-[4.5rem]">
      <div className="flex col-span-1 pt-4 ml-6 ">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-5 cursor-pointer"
          alt="hamburger-icon"
          src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png"
        />
        <a href="/">
          <img
            className="h-24 ml-5 -mt-9"
            alt="Youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEXQdAa-3ljX26kSoD1zDIGZnVP6Wyy4wJg&s"
          />
        </a>
      </div>
      <div className="w-1/2 ">
        <div className=" flex mt-1 mr-0">
          <input
            placeholder="Search"
            className="border border-gray-500 w-full p-4 rounded-l-full h-10 text-lg mt-1 "
            type="text"
            value={searchQuary}
            onChange={(e) => setSearchQuary(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border h-10 mt-1 w-14 border-gray-500 bg-gray-100 p-2 rounded-r-full ml-0">
            <img
              className="  -mt-1 pb-1 px-1 pt-1"
              alt="search-icone"
              src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
            />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white w-[39rem] shadow-lg rounded-lg border border-gray-200 ">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className=" py-2 px-3 rounded-md hover:bg-gray-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
