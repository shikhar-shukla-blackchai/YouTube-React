import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRendomName, makeRendomMessage } from "../utils/helper";

const LiveChate = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRendomName(),
          message: makeRendomMessage(28),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-[27rem] border border-gray-300 shadow-inner p-2 ml-3 h-[24rem] rounded-lg overflow-y-scroll flex flex-col-reverse scroll-smooth scrollbar-hide ">
        <div>
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-[27.5rem] p-2 ml-2 rounded-lg border"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shikhar Shukla",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="px-2 border-b-2 w-[21.5rem] z-10"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100 text-green-800">Send</button>
      </form>
    </>
  );
};

export default LiveChate;
