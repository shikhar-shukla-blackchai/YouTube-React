import React from "react";

const commentData = [
  {
    name: "Shikhar shukla",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Shikhar shukla",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Shikhar shukla",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Shikhar shukla",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "Shikhar shukla",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [
                      {
                        name: "Shikhar shukla",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shikhar shukla",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Shikhar shukla",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Shikhar shukla",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
];

const Comment = ({ data, level = 0 }) => {
  const { name, text, replies } = data;
  const indentStyles = { marginLeft: level * 20 }; // 20px indent per level

  return (
    <div className="my-4" style={indentStyles}>
      <div className="flex items-start">
        <img
          className="w-8 h-8 rounded-full"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="user"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-800">@{name}</p>
          <p className="text-gray-600">{text}</p>
          <div className="mt-2 text-xs text-gray-500">
            {/* Display timestamp or other relevant metadata here */}
          </div>
          <div className="mt-2 flex items-center">
            <button className="text-blue-500 hover:underline">Reply</button>
            <span className="ml-2">|</span>
            <button className="text-gray-500 hover:underline">Like</button>
            <span className="ml-2">|</span>
            <button className="text-gray-500 hover:underline">Dislike</button>
          </div>
        </div>
      </div>
      {replies.length > 0 && (
        <div className="ml-7">
          {replies.map((reply, index) => (
            <Comment key={index} data={reply} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {commentData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
