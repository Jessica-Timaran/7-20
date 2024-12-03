import React from "react";

const CardAdmin = ({ icon, title, subtitle, percentage, gradientBg, textColor }) => {
  return (
    <div
      className="flex items-center p-4 rounded-lg shadow-lg bg-white "
      style={{ maxWidth: "300px" }}
    >
      {/* Icono con degradado */}
      <div
        className={`p-4 rounded-full flex items-center justify-center`}
        style={{
          minWidth: "60px",
          minHeight: "60px",
          background: gradientBg, // Fondo degradado
        }}
      >
        <i className={`${icon} text-white text-2xl`}></i>
      </div>

      {/* Contenido */}
      <div className="ml-4">
        <h4 className="text-gray-500 text-sm">{subtitle}</h4>
        <h2 className={`font-bold text-xl ${textColor}`}>{title}</h2>
        <p className="text-sm text-green-500 font-semibold">{percentage}</p>
      </div>
    </div>
  );
};

export default CardAdmin;
