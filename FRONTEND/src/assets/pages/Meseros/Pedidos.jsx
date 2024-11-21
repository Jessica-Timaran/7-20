import React from "react";
import Card from "../../components/Card";
import Menu from "../../components/Menu"; // Importamos el Sidebar

const Pedidos = () => {
  const cards = [
    {
      number: "1",
      text: "Usuarios Activos",
      bgColor: "bg-[#673ab7]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_#2196f3]",
      iconClass: "fas fa-user", // Clases FontAwesome
    },
    {
      number: "2",
      text: "Proyectos en Curso",
      bgColor: "bg-[rgb(41,49,79)]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]",
      iconClass: "fas fa-cogs", // Clases FontAwesome
    },
    {
      number: "3",
      text: "Proyectos en Curso",
      bgColor: "bg-[#673ab7]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]",
      iconClass: "fas fa-cogs", // Clases FontAwesome
    },
  ];

  const menuItems = [
    { title: "Inicio", path: "/inicio" },
    { title: "Pedidos", path: "/pedidos" },
    { title: "Perfil", path: "/perfil" },
  ];

  const handleLogout = () => {
    console.log("Cerrando sesión...");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Menu menuItems={menuItems} onLogout={handleLogout} />

      {/* Contenido principal */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Pedidos</h1>
        <div className="grid grid-cols-2 w-[700px] gap-2 max-[500px]:grid-cols-1 px-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              number={card.number}
              text={card.text}
              bgColor={card.bgColor}
              hoverShadow={card.hoverShadow}
              iconClass={card.iconClass} // Prop iconClass
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
