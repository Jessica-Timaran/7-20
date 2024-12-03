import React from "react";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";

const Inicio = () => {
  const handleCrear = () => {
    console.log("Creando un nuevo pedido...");
  };

  return (
    <LayoutPrincipal title="Inicio">
      <div className="flex flex-col items-center justify-center h-full">
        {/* Imagen */}
        <img 
          src="IMG/FondoAgregar.png" 
          alt="Imagen con opacidad" 
          className="w-80 h-64 object-cover opacity-20"
        />

        {/* Botón Crear */}
        <button
          onClick={handleCrear}
          className="mt-6 flex items-center gap-2 bg-[#22284F] text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-lg"
        >
          <i class="fa-solid fa-plus"></i>
          <span>Crear</span>
        </button>
      </div>
    </LayoutPrincipal>
  );
};

export default Inicio;
