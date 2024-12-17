import React, { useState } from "react";
import CardMenu from "./../../components/Card/CardMenu";
import Modal1 from "../../components/Modal/Modal1";
import Modal2 from "../../components/Modal/Modal2";
import Modal3 from "../../components/Modal/Modal3";

const ModalMenu = ({ isOpen, onClose }) => {
  const [isModal1Open, setIsModal1Open] = useState(false); // Estado para Modal1
  const [isModal2Open, setIsModal2Open] = useState(false); // Estado para Modal2
  const [isModal3Open, setIsModal3Open] = useState(false); // Estado para Modal3

  const handleOpenModal1 = () => setIsModal1Open(true); // Abre Modal1
  const handleOpenModal2 = () => setIsModal2Open(true); // Abre Modal2
  const handleOpenModal3 = () => setIsModal3Open(true); // Abre Modal3

  const handleCloseModal1 = () => setIsModal1Open(false); // Cierra Modal1
  const handleCloseModal2 = () => setIsModal2Open(false); // Cierra Modal2
  const handleCloseModal3 = () => setIsModal3Open(false); // Cierra Modal3

  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        {/* Tarjetas del menú */}
        <div className="flex-col space-y-6 h-auto gap-6 justify-center items-start mt-6">
          <CardMenu
            image="IMG/AlmuerzoCompleto.jpg"
            title="Completo"
            onAdd={handleOpenModal1} // Abre Modal1
          />
          <CardMenu
            image="IMG/AlmuerzoCompleto.jpg"
            title="Bandeja"
            onAdd={handleOpenModal2} // Abre Modal2
          />
          <CardMenu
            image="IMG/AlmuerzoCompleto.jpg"
            title="Sancocho"
            onAdd={handleOpenModal3} // Abre Modal3
          />
        </div>

        {/* Botones */}
        <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            </div>

        {/* Modales */}
        <Modal1 isOpen={isModal1Open} onClose={handleCloseModal1} />
        <Modal2 isOpen={isModal2Open} onClose={handleCloseModal2} />
        <Modal3 isOpen={isModal3Open} onClose={handleCloseModal3} />
      </div>
    </div>
  );
};

export default ModalMenu;
