import React, { useState } from "react";
import Input from "../../components/Input";

const Login = () => {
  // Crear estado para los inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para controlar visibilidad de contraseña

  // Funciones de cambio para los inputs
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row relative">
      {/* Lado izquierdo con imagen de fondo */}
      <div className="hidden md:block w-full md:w-[55%] h-full relative">
        <img
          className="w-full h-full object-cover"
          src="/IMG/fondo.jpeg"
          alt="fondo"
        />
        {/* Overlay rojo transparente */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
      </div>

      {/* Lado derecho */}
      <div className="flex-1 flex items-center justify-center bg-white px-4 py-8">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          {/* Logo reducido */}
          <img
            className="mx-auto mb-4 w-20 h-20 md:w-24 md:h-32" 
            src="./IMG/LogoSinFondo.png"
            alt="Logo"
          />
          
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6 md:mb-8">
            Iniciar Sesión
          </h2>

          {/* Formulario */}
          <form className="space-y-6 md:space-y-8">
            {/* Campo de correo */}
            <Input
              id="email"
              type="email"
              Text="Correo"
              value={email}
              onChange={handleEmailChange}
            />

            {/* Campo de contraseña con ícono */}
            <div className="relative">
              <Input
                id="password"
                type={passwordVisible ? "text" : "password"} // Cambia el tipo de input según el estado
                Text="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
              {/* Ícono de ojo */}
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
              >
                <i
                  className={`fas ${
                    passwordVisible ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>

            {/* Botón de inicio de sesión */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-medium py-2 md:py-3 rounded-full hover:bg-blue-600 transition"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Enlace adicional */}
          <div className="text-center mt-4 md:mt-6">
            <a href="#" className="text-xs md:text-sm text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
