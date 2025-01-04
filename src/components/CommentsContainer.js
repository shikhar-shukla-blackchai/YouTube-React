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

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-2 border-b-2">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-semibold text-gray-700">@{name}</p>
        <p className="text-sm text-gray-600">{text}</p>
        <div className="mt-4 flex">
          <button className="cursor-pointer flex">
            <img
              className="h-5 mr-1"
              src="https://cdn-icons-png.flaticon.com/128/12344/12344936.png"
              alt="like"
            />
            99
          </button>
          <button className="ml-5">
            <img
              className="h-5"
              src="https://cdn-icons-png.flaticon.com/128/126/126504.png"
              alt="dislike"
            />
          </button>
          <span className="ml-20">Reply</span>
        </div>
      </div>
    </div>
  );
};

const CommenstList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className=" pl-2 border-l-2 py-2 " key={index}>
      <Comments data={comment} />
      <div className="pl-3 ">
        <CommenstList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="py-4">
      <h1 className="font-bold py-3 text-2xl">Comments:</h1>
      <CommenstList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
