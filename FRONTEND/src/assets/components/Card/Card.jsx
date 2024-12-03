import React from "react";

const Card = ({ number, text, bgColor, hoverShadow, iconClass }) => {
  return (
    <div
      className={`group w-full rounded-lg p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] ${bgColor} ${hoverShadow}`}
    >
      {/* Número */}
      <p className="text-white text-2xl">{number}</p>

      {/* Texto */}
      <p className="text-white text-sm">{text}</p>

      {/* Ícono de FontAwesome */}
      <i
        className={`${iconClass} text-white absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition duration-300 text-3xl`}
      ></i>
    </div>
  );
};

export default Card;
