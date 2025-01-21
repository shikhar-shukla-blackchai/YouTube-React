import React from "react";

const ChatMessage = ({ name, message, timestamp }) => {
  return (
    <div className="chat-message flex items-center py-2 px-4 border-b border-gray-200">
      <img
        className="h-4 w-4 rounded-full mr-3"
        src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        alt="user-avatar"
      />
      <div className="flex-grow">
        <span className="font-semibold text-gray-700 text-sm">{name}</span>
        <span className="text-gray-500 text-xs ml-1">{timestamp}</span>
        <p className="text-gray-600 text-sm mt-1">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
