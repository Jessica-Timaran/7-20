import React, { useState, useEffect, useRef } from "react";

const CardVerPedido = ({ number, text, bgColor, hoverShadow, iconClass }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Referencia para el menú

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    console.log(option); // Maneja las acciones aquí
    closeMenu();
  };

  return (
    <div
      className={`group w-full rounded-lg p-5 transition relative duration-300 cursor-pointer ${bgColor} ${hoverShadow}`}
    >
      {/* Número */}
      <p className="text-white text-2xl">{number}</p>

      {/* Texto */}
      <p className="text-white text-sm">{text}</p>

      {/* Ícono */}
      <i
        className={`${iconClass} text-white absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition duration-300 text-3xl`}
      ></i>

      {/* Botón de menú */}
      <button
        className="absolute top-2 right-2 text-white text-lg z-10"
        onClick={toggleMenu}
      >
        ⋮
      </button>

      {/* Menú desplegable */}
      {showMenu && (
        <div
          ref={menuRef} // Añadimos la referencia al menú
          className="absolute bg-white shadow-lg rounded-lg p-2 z-20"
          style={{
            top: "40px", // Ajusta la posición desde el botón
            right: "0", // Alinea al borde derecho
          }}
        >
          <ul>
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleOptionClick("Ver")}
            >
              Ver
            </li>
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleOptionClick("Editar")}
            >
              Editar
            </li>
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleOptionClick("Eliminar")}
            >
              Eliminar
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardVerPedido;
