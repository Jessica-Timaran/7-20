import React, { useState } from "react";
import CardAdmin from "../../components/CardAdmin";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import GraficoBarras from "../../components/GraficoBarras";
import Button from "../../components/Button";
import ModalUser from "../../components/Modal/ModalUser"; // Importar el modal de registro

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal principal
  const [showUserModal, setShowUserModal] = useState(false); // Controla la visibilidad del modal de registro de usuario

  // Función para alternar la visibilidad del modal
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Función para alternar la visibilidad del modal de registro de usuario
  const toggleUserModal = () => {
    console.log('Botón de agregar usuario clickeado'); // Verifica si se hace clic
    setShowUserModal((prev) => {
      console.log('Estado previo de showUserModal:', prev);
      return !prev;
    });
  };
  

  // Función para cerrar el modal si se hace clic fuera del contenido
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };

  return (
    <LayoutPrincipal>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardAdmin
          icon="fas fa-wallet"
          title="Pedidos"
          subtitle="Total Earning"
          percentage="+10.80%"
          gradientBg="linear-gradient(135deg, #0F123F, #3A408F)"
          textColor="text-[#3A408F]"
        />
        <div onClick={toggleModal}>
          <CardAdmin
            icon="fas fa-users"
            title="Usuarios"
            subtitle="Active Users"
            percentage="+5.30%"
            gradientBg="linear-gradient(135deg, #0F123F, #3A408F)"
            textColor="text-[#3A408F]"
          />
        </div>

        <CardAdmin
          icon="fas fa-cogs"
          title="Ventas del Día"
          subtitle="In Progress"
          percentage="+8.50%"
          gradientBg="linear-gradient(135deg, #0F123F, #3A408F)"
          textColor="text-[#3A408F]"
        />
      </div>

      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
        <GraficoBarras />
      </div>

      {/* Modal principal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
          onClick={handleModalClick}
        >
          <div className="bg-white p-6 rounded-md shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={toggleModal}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-800">
              Usuarios
            </h2>
            <div className="flex gap-4 justify-center">
              <Button onClick={toggleUserModal}>Agregar Usuario</Button>
              <Button onClick={() => alert("Usuarios Activos")}>
                Usuarios Activos
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de registro de usuario */}
      {showUserModal && <ModalUser onClose={toggleUserModal} />}
    </LayoutPrincipal>
  );
};

export default Dashboard;
