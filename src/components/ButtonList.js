import React, { useRef, useState } from "react";
import Button from "./Button";

// prettier-ignore
const list = [
  "All", "Podcasts", "Music", "Anime", "Gaming", "Roasts", "Food", "God Of War", "Color", "Code", "Global", "India",  "Car", "API", "Blockchain", "Comedy" ]

const ButtonList = () => {
  const containerRef = useRef(null);

  const [left, setLeft] = useState(true);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-[1080px]  py-1 cursor-pointer ">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-black rounded-full p-2 z-10 "
      >
        {left === true ? null : (
          <img
            alt="left-arrow"
            className="h-9 rounded-full p-2"
            onClick={() => setLeft(true)}
            src="https://cdn-icons-png.flaticon.com/128/9121/9121686.png"
          />
        )}
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-hidden space-x-2 scrollbar-hide mx-10"
      >
        {list.map((item, index) => (
          <Button name={item} key={index} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-black rounded-full p-1 z-10 "
      >
        {left === true ? (
          <img
            alt="right-arrow"
            className="h-10 rounded-full p-2"
            onClick={() => setLeft(false)}
            src="https://cdn-icons-png.flaticon.com/128/7893/7893857.png"
          />
        ) : null}
      </button>
    </div>
  );
};

export default ButtonList;
