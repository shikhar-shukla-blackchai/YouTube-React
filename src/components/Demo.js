import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkThem, setIsDarkThem] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);
  // const prime = findNthPrime(text);

  return (
    <div>
      <h1 className="text-3xl font-bold p-5 m-5 border-b-4 ml-44 mt-20 ">
        {" "}
        Let State[] useRef() useMemo()
      </h1>
      <div
        className={
          "w-72 h-64 m-4 p-2 border border-gray-600 ml-44 " +
          (isDarkThem && " bg-gray-900 text-white")
        }
      >
        <div>
          <button
            className="bg-green-200 rounded-lg  text-green-700"
            onClick={() => {
              setIsDarkThem(!isDarkThem);
            }}
          >
            toggle
          </button>
        </div>
        <div>
          <input
            className={"border border-black" + (isDarkThem && " text-black")}
            type="number"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <h1 className="mt-4 font-bold text-wl">nth prime: {prime}</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
