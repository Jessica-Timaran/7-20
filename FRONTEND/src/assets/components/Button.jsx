import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-[#673ab7] font-semibold rounded-md border-2 border-[#673ab7] transition duration-300 ease-in-out hover:bg-[#3A408F] hover:text-white hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#673ab7] focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
