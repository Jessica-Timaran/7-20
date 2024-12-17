import React, { useState } from "react";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import ModalMenu from "../../components/Modal/ModalMenu";
import Boton from "../../components/Boton/Boton";
import DataTable from "../../components/DataTable";

const Menu = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false); // Estado para ModalMenu
  const handleOpenModalMenu = () => setIsModalMenuOpen(true); // Abre ModalMenu
  const handleCloseModalMenu = () => setIsModalMenuOpen(false); // Cierra ModalMenu

  const handleCardClick = async (mesa) => {
    try {
      // Obtener el id_usuarios desde el almacenamiento local
      const id_usuarios = localStorage.getItem("id_usuarios"); // Asegúrate de que este ID se haya guardado correctamente.
  
      if (!id_usuarios) {
        alert("ID de usuario no disponible. Inicia sesión nuevamente.");
        return;
      }
  
      const response = await fetch("http://localhost:4000/api/mesero/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mesa,
          cantidad: 1, // Puedes personalizar esta cantidad según el pedido real
          plato: "Plato Inicial",
          valor_unitario: 0, // Reemplaza con el valor correspondiente
          valor_total: 0, // Reemplaza con el cálculo correspondiente
          id_usuarios, // Utilizar el ID del usuario obtenido dinámicamente
        }),
      });
  
      if (response.ok) {
        alert(`Pedido registrado para la ${mesa}`);
        navigate("/menu");
      } else {
        console.error("Error al guardar el pedido");
        alert("Hubo un problema al registrar el pedido");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("No se pudo conectar con el servidor");
    }
  };


  return (
    <LayoutPrincipal>
      {/* Título de la vista */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-gray-800">Pedidos</h1>
        <p className="text-gray-600 mt-2">
          Selecciona una de las opciones para continuar
        </p>
        <div className="flex items-center gap-10 mt-5">
          <Boton onClick={handleOpenModalMenu} />
          {/* Selects */}
          <div>
            <label className="font-medium"> Mesa </label>
            <select className="px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 p-2">
              <option value=""> Seleccione Mesa </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
              <option value="6"> 6 </option>
              <option value="7"> 7 </option>
              <option value="8"> 8 </option>
              <option value="9"> 9 </option>
            </select>
          </div>
        </div>

        <div className="p-4">
          {/* Tabla  */}
          <DataTable />
        </div>
      </div>

      {/* ModalMenu */}
      <ModalMenu isOpen={isModalMenuOpen} onClose={handleCloseModalMenu} />
    </LayoutPrincipal>
  );
};
// onAdd={handleOpenModalMenu} // Abre ModalMenu
export default Menu;
