import React, { useState } from 'react';

const CardMenu = ({ image, title, onAdd }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-80 h-56 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          filter: isHovered ? 'brightness(70%)' : 'brightness(100%)'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-5">
        <div className="transition-all duration-300 transform">
          <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300">
            {title}
          </h3>
          
          <button
            onClick={onAdd}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md 
                       hover:bg-[#673ab7] text-white rounded-full 
                       w-12 h-12 flex items-center justify-center 
                       transition-all duration-300 ease-in-out 
                       transform hover:scale-110 opacity-0 group-hover:opacity-100"
          >
            {/* SVG icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
