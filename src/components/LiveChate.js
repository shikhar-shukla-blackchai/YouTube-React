import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      <div className="live-chat flex flex-col h-[24.5rem] w-[28.5rem] bg-gray-100 rounded-lg overflow-y-scroll scroll-smooth  ml-5">
        <div className="chat-messages flex flex-col p-4">
          {/* Removed flex-col-reverse to display new comments at the bottom */}
          {ChatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <div className="chat-input flex items-center p-2 bg-gray-200 rounded-b-lg w-[28.5rem] ml-5 -mt-5 z-10 absolute">
        <img
          className="h-8 w-8 rounded-full mr-2"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="user-avatar"
        />
        <input
          type="text"
          className="flex-grow px-2 py-1 text-gray-700 focus:outline-none bg-transparent"
          placeholder="Type a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="ml-2 py-1 px-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
          disabled={!liveMessage}
          onClick={() => {
            dispatch(addMessage({ name: "You", message: liveMessage }));
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
