import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";

const Pedidos = () => {
  const navigate = useNavigate();

  const cards = [
    {
      number: "Mesa 1",
      text: "Disponible",
      bgColor: "bg-[#673ab7]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_#2196f3]",
      iconClass: "fas fa-user", // Clases FontAwesome
    },
    {
      number: "Mesa 2",
      text: "Disponible",
      bgColor: "bg-[rgb(41,49,79)]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]",
      iconClass: "fas fa-cogs", // Clases FontAwesome
    },
    {
      number: "Mesa 3",
      text: "Disponible",
      bgColor: "bg-[#673ab7]",
      hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]",
      iconClass: "fas fa-check", // Clases FontAwesome
    },
  ];

  const handleCardClick = () => {
    navigate("/menu");
  };

  return (
    <LayoutPrincipal>
      {/* Contenido principal */}
      <div className="flex-1 p-6">
        <h1 className=" mb-4 text-3xl font-bold text-gray-800">Crear Pedido</h1>
        <div className="grid grid-cols-2 w-[700px] gap-4 max-[500px]:grid-cols-1 px-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              number={card.number}
              text={card.text}
              bgColor={card.bgColor}
              hoverShadow={card.hoverShadow}
              iconClass={card.iconClass}
              onClick={handleCardClick} // Pasar evento onClick
            />
          ))}
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Pedidos;
