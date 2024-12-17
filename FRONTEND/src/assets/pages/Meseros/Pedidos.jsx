import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";

const Pedidos = () => {
  const navigate = useNavigate();

  const cards = [
    { number: "Mesa 1", text: "Disponible", bgColor: "bg-[#673ab7]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_#2196f3]", iconClass: "fas fa-user" },
    { number: "Mesa 2", text: "Disponible", bgColor: "bg-[rgb(41,49,79)]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]", iconClass: "fas fa-cogs" },
    { number: "Mesa 3", text: "Disponible", bgColor: "bg-[#673ab7]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]", iconClass: "fas fa-check" },
    { number: "Mesa 4", text: "Disponible", bgColor: "bg-[#ff5722]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(0,150,136)]", iconClass: "fas fa-coffee" },
    { number: "Mesa 5", text: "Disponible", bgColor: "bg-[#2196f3]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(156,39,176)]", iconClass: "fas fa-utensils" },
    { number: "Mesa 6", text: "Disponible", bgColor: "bg-[#4caf50]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(255,193,7)]", iconClass: "fas fa-book" },
    { number: "Mesa 7", text: "Disponible", bgColor: "bg-[#9c27b0]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(233,30,99)]", iconClass: "fas fa-drumstick-bite" },
    { number: "Mesa 8", text: "Disponible", bgColor: "bg-[#00bcd4]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(103,58,183)]", iconClass: "fas fa-birthday-cake" },
    { number: "Mesa 9", text: "Disponible", bgColor: "bg-[#ffc107]", hoverShadow: "hover:shadow-[0_-8px_0px_0px_rgb(33,150,243)]", iconClass: "fas fa-ice-cream" },
  ];

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
      <div className="flex-1 p-6">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Crear Pedido</h1>
        <div className="grid grid-cols-3 gap-4 max-[500px]:grid-cols-1 px-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              number={card.number}
              text={card.text}
              bgColor={card.bgColor}
              hoverShadow={card.hoverShadow}
              iconClass={card.iconClass}
              onClick={() => handleCardClick(card.number)} // Enviar el número de la mesa
            />
          ))}
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default Pedidos;
