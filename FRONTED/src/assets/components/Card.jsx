import React from "react";

const Card = ({ number, text, bgColor, hoverShadow, iconPath }) => {
  return (
    <div
      className={`group w-full rounded-lg p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] ${bgColor} ${hoverShadow}`}
    >
      <p className="text-white text-2xl">{number}</p>
      <p className="text-white text-sm">{text}</p>
      <svg
        xmlSpace="preserve"
        style={{ enableBackground: "new 0 0 512 512" }}
        viewBox="0 0 512 512"
        y="0"
        x="0"
        height="36"
        width="36"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"
      >
        <g>
          <path
            opacity="1"
            fill="#ffffff"
            d={iconPath}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Card;
