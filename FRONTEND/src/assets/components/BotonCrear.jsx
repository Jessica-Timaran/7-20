import React from "react";

const BotonCrear = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#673ab7] text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
    >
      <i className="fas fa-plus text-white"></i>
      {text && <span>{text}</span>}
    </button>
  );
};

export default BotonCrear;
