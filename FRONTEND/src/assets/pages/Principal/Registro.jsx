import React from "react";
import Input from "../../components/Input";
import useFormValidation from "../../../Hooks/useRegisterUser";

const Registro = () => {
  const { values, errors, handleChange, validate } = useFormValidation({
    name: "",
    email: "",
    password: "",
    idrol: "1", // Valor inicial para Mesero (1)
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    const userData = {
      nombre: values.name,
      correo: values.email,
      contraseña: values.password,
      idrol: values.idrol, // Agregamos el rol aquí
    };

    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registro exitoso");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Hubo un problema con el registro.");
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row relative">
      <div className="hidden md:block w-full md:w-[55%] h-full relative">
        <img
          className="w-full h-full object-cover"
          src="/IMG/fondo.jpeg"
          alt="fondo"
        />
        <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white px-4 py-8">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <img
            className="mx-auto mb-4 w-20 h-24 md:w-24 md:h-32"
            src="./IMG/LogoSinFondo.png"
            alt="Logo"
          />

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6 md:mb-8">
            Crear Cuenta
          </h2>

          <form onSubmit={handleRegister} className="space-y-6 md:space-y-8">
            {/* Campo de nombre */}
            <div>
              <Input
                id="name"
                name="name"
                type="text"
                Text="Nombre"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Campo de correo */}
            <div>
              <Input
                id="email"
                name="email"
                type="email"
                Text="Correo"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Campo de contraseña */}
            <div>
              <Input
                id="password"
                name="password"
                type="password"
                Text="Contraseña"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Campo de rol */}
            <div>
              <label htmlFor="idrol" className="block text-sm font-medium text-gray-700">
                Rol
              </label>
              <select
                id="idrol"
                name="idrol"
                value={values.idrol}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Mesero</option>
                <option value="2">Administrador</option>
                <option value="3">Cocinera</option>
              </select>
              {errors.idrol && (
                <p className="text-red-500 text-sm mt-1">{errors.idrol}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-medium py-2 md:py-3 rounded-full hover:bg-blue-600 transition"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;



