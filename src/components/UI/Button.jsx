import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type || "button"} className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-all mt-6">
      {props.children}
    </button>
  );
};

export default Button;
