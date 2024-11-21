import React from "react";
import Card from "../../components/Card";
import Menu from "../../components/Menu"; // Importamos el Sidebar

const Pedidos = () => {
  const cards = [
    {
      number: "1",
      text: "Lorem",
      bgColor: "bg-[#673ab7]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_#2196f3]",
      iconPath:
        "M135.169 91.902c16.83 0 30.474-13.649 30.474-30.485 0-11.22-13.533-36.418-22.563-51.981-3.524-6.075-12.297-6.075-15.822 0-9.029 15.563-22.563 40.761-22.563 51.981 0 16.836 13.644 30.485 30.474 30.485zM256 91.902c16.83 0 30.474-13.649 30.474-30.485 0-11.22-13.533-36.418-22.563-51.981-3.524-6.075-12.297-6.075-15.822 0-9.029 15.563-22.563 40.761-22.563 51.981 0 16.836 13.643 30.485 30.474 30.485zM376.83 91.902c16.83 0 30.474-13.649 30.474-30.485 0-11.22-13.533-36.418-22.563-51.981-3.525-6.075-12.297-6.075-15.822 0-9.029 15.563-22.563 40.761-22.563 51.981 0 16.836 13.644 30.485 30.474 30.485z",
    },
    {
      number: "2",
      text: "Lorem",
      bgColor: "bg-[rgb(41,49,79)]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]",
      iconPath:
        "M202.667 0C117.333 0 32 10.667 32 85.333V288c0 41.173 33.493 74.667 74.667 74.667l-32 32v10.667h47.573l42.667-42.667h80.427L288 405.333h42.667v-10.667l-32-32c41.173 0 74.667-33.493 74.667-74.667V85.333C373.333 10.667 296.96 0 202.667 0zm-96 320c-17.707 0-32-14.293-32-32s14.293-32 32-32 32 14.293 32 32-14.294 32-32 32zm74.666-149.333H74.667V85.333h106.667v85.334zM298.667 320c-17.707 0-32-14.293-32-32s14.293-32 32-32 32 14.293 32 32-14.294 32-32 32zm32-149.333H224V85.333h106.667v85.334z",
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
              iconPath={card.iconPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
