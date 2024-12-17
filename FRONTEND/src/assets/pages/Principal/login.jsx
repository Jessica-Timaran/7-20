import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Input from "../../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
  
    setLoading(true);
    setError(""); 
  
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: email,
          contraseña: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Guardar token y datos del usuario
        localStorage.setItem("token", data.token);
        localStorage.setItem("id_usuarios", data.user.idusuarios); 
        localStorage.setItem("role", data.user.idrol); // Guardar rol directamente
      
        // Redirigir según el rol
        switch (data.user.idrol) {
          case 1:
            navigate("/Pedidos");
            break;
          case 2:
            navigate("/Dashboard");
            break;
          case 3:
            navigate("/VerPedidos");
            break;
          default:
            navigate("/"); // Ruta predeterminada
        }
      
      
      } else {
        setError(data.error || "Error en el inicio de sesión.");
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
      console.error("Error al hacer la solicitud de login:", err);
    } finally {
      setLoading(false); 
    }
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
        <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
      </div>

      {/* Lado derecho */}
      <div className="flex-1 flex items-center justify-center bg-white px-4 py-8">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <img
            className="mx-auto mb-4 w-20 h-24 md:w-24 md:h-32"
            src="./IMG/LogoSinFondo.png"
            alt="Logo"
          />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6 md:mb-8">
            Iniciar Sesión
          </h2>

          <form className="space-y-6 md:space-y-8" onSubmit={handleLogin}>
            <Input
              id="email"
              type="email"
              Text="Correo"
              value={email}
              onChange={handleEmailChange}
            />

            <div className="relative">
              <Input
                id="password"
                type={passwordVisible ? "text" : "password"}
                Text="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
              >
                <i
                  className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-medium py-2 md:py-3 rounded-full hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Iniciar Sesión"}
            </button>
          </form>

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
