import React from "react";
import CardAdmin from "../../components/CardAdmin";
import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import GraficoBarras from "../../components/GraficoBarras"; // Importa el componente aquí

const Dashboard = () => {
  return (
    <LayoutPrincipal>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardAdmin
          icon="fas fa-wallet"
          title="Pedidos"
          subtitle="Total Earning"
          percentage="+10.80%"
          gradientBg="linear-gradient(135deg, #0F123F, #3A408F)" // Degradado para el fondo
          textColor="text-[#3A408F]"
        />
        <CardAdmin
          icon="fas fa-users"
          title="Usuarios Activos"
          subtitle="Active Users"
          percentage="+5.30%"
          gradientBg="linear-gradient(135deg, #0F123F, #3A408F)" // Degradado para el fondo
          textColor="text-[#3A408F]"
        />
        <CardAdmin
          icon="fas fa-cogs"
          title="Ventas del Día"
          subtitle="In Progress"
          percentage="+8.50%"
          gradientBg="linear-gradient(135deg, #0F123F, #3A408F)" // Degradado para el fondo
          textColor="text-[#3A408F]"
        />
      </div>
      
      {/* Agrega el componente GraficoBarras aquí */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
        <GraficoBarras /> {/* El gráfico se renderiza aquí */}
      </div>
    </LayoutPrincipal>
  );
};

export default Dashboard;
