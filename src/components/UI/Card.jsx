import React from "react";

const Card = (props) => {
  return (
    <div
      className={`max-w-2xl mx-auto p-6 bg-gray-300 shadow-lg rounded-lg ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
