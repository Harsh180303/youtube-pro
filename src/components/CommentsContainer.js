import React from "react";

const CommentsData = [
  {
    name: "Harsh Chourasiya",
    text: "This is actually a very nice movie. I jsut loved it ♥",
    replies: [],
  },
  {
    name: "Harsh Chourasiya",
    text: "This is actually a very nice movie. I jsut loved it ♥",
    replies: [
      {
        name: "Harsh Chourasiya",
        text: "This is actually a very nice movie. I jsut loved it ♥",
        replies: [],
      },
      {
        name: "Harsh Chourasiya",
        text: "This is actually a very nice movie. I jsut loved it ♥",
        replies: [
          {
            name: "Harsh Chourasiya",
            text: "This is actually a very nice movie. I jsut loved it ♥",
            replies: [
              {
                name: "Harsh Chourasiya",
                text: "This is actually a very nice movie. I jsut loved it ♥",
                replies: [
                  {
                    name: "Harsh Chourasiya",
                    text: "This is actually a very nice movie. I jsut loved it ♥",
                    replies: [
                      {
                        name: "Harsh Chourasiya",
                        text: "This is actually a very nice movie. I jsut loved it ♥",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Harsh Chourasiya",
                    text: "This is actually a very nice movie. I jsut loved it ♥",
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
  {
    name: "Harsh Chourasiya",
    text: "This is actually a very nice movie. I jsut loved it ♥",
    replies: [],
  },
  {
    name: "Harsh Chourasiya",
    text: "This is actually a very nice movie. I jsut loved it ♥",
    replies: [],
  },
  {
    name: "Harsh Chourasiya",
    text: "This is actually a very nice movie. I jsut loved it ♥",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-baseline gap-x-2 bg-gray-200 p-2 rounded-lg my-2">
      <i className="fa-solid fa-user"></i>
      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="px-5 py-4">
      <h1 className="text-2xl font-bold mb-2">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
