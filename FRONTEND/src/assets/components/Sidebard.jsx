import React from "react";

const Sidebar = () => {
  // Recuperar y parsear el rol del usuario
  const userRole = parseInt(localStorage.getItem("role"), 10);

  // Configuración de menús por rol
  const menuItemsByRole = {
    1: [ // Mesero
      { title: "Inicio", path: "/Inicio", icon: "fa-home" },
      { title: "Crear Pedidos", path: "/Crear_pedidos", icon: "fa-box" },
      { title: "Ver Pedidos", path: "/VerPedidos", icon: "fa-tag" },
      { title: "Editar Perfil", path: "/EditarPerfil", icon: "fa-user" },
      
    ],
    2: [ // Administrador
      { title: "Inicio", path: "/Inicio", icon: "fa-home" },
      { title: "Ver Pedidos", path: "/VerPedidos", icon: "fa-tag" },
      { title: "Estadísticas", path: "/estadisticas", icon: "fa-chart-bar" },
      { title: "Editar Perfil", path: "/EditarPerfil", icon: "fa-user" },
    ],
    3: [ // Cocinero
      { title: "Inicio", path: "/Inicio", icon: "fa-home" },
      { title: "Ver Pedidos", path: "/VerPedidos", icon: "fa-tag" },
      { title: "Editar Perfil", path: "/EditarPerfil", icon: "fa-user" },
    ],
  };

  // Obtener los elementos del menú según el rol
  const menuItems = menuItemsByRole[userRole] || [];

  if (!menuItems.length) {
    return (
      <div className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <p>Acceso no autorizado. Por favor, inicia sesión.</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-800 text-white">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="border-b border-gray-700 p-4">
          <img 
            src="/IMG/LogoSinFondo.png" 
            alt="Logo" 
            className="mx-auto w-20 h-24 md:w-24 md:h-32"
          />
        </div>

        {/* Items del menú */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700"
                >
                  <i className={`fa ${item.icon} w-6`} aria-hidden="true"></i>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
