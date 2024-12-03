import React from "react";

const CardMenu = ({ image, title, onAdd }) => {
  return (
    <div
      className="relative w-72 h-48 rounded-lg shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <button
          onClick={onAdd}
          className="mt-2 bg-[#22284F] hover:bg-gray-700 text-white text-xl rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i className="bx bx-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
