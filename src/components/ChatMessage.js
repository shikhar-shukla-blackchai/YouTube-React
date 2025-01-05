import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center py-2 w-full  ">
      <img
        className="h-9 pt-2 pl-4"
        alt="user-logo"
        src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
      />
      <span className="mt-1 font-bold text-[11px] text-gray-500 ml-2 text-nowrap">
        @{name}
      </span>
      <span className="mt-1 ml-3 text-sm text-[11px]">{message}</span>
    </div>
  );
};

export default ChatMessage;
