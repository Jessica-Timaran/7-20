import React from "react";

const Menu = ({ menuItems, onLogout }) => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="border-b border-gray-700">
          <img 
          className="mx-auto w-20 h-24 md:w-24 md:h-32"
            src="/IMG/LogoSinFondo.png"
            alt="fondo">
          </img>
        </div>
        

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700"
                >
                  {item.icon && (
                    <item.icon className="w-6 h-6" aria-hidden="true" />
                  )}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-red-600 text-red-500 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m-6 0h19.5M4.5 12.75l1.5 9.75h12l1.5-9.75"
              />
            </svg>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
