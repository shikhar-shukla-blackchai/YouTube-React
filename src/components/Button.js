import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-gray-200 rounded-lg hover:bg-black hover:text-white px-3 text-sm py-1 whitespace-nowrap w-auto">
      <button>{name}</button>
    </div>
  );
};

export default Button;
