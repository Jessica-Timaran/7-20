import React from "react";
import Menu from "../../components/Menu"; // Importamos el Sidebar
import BotonCrear from "../../components/BotonCrear";

const Inicio = () => {
  // Definimos las opciones del menú
  const menuItems = [
    { title: "Inicio", path: "/inicio" },
    { title: "Pedidos", path: "/pedidos" },
    { title: "Perfil", path: "/perfil" },
  ];

  // Función de cierre de sesión
  const handleLogout = () => {
    console.log("Cerrando sesión...");
  };

  // Función para manejar clic en el botón "Crear"
  const handleCrear = () => {
    console.log("Creando un nuevo pedido...");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Menu menuItems={menuItems} onLogout={handleLogout} />

      {/* Contenido principal */}
      <div className="flex flex-col items-start p-6 gap-4">
        <h1 className="text-2xl font-bold">Inicio</h1>
        {/* Botón Crear */}
        <BotonCrear onClick={handleCrear} text="Crear Pedido" />
      </div>
    </div>
  );
};

export default Inicio;
