import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useRegisterUser from "../../../Hooks/useRegisterUser";

const ModalUser = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    rol: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const { registerUser, loading, error } = useRegisterUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    })); // Limpia los errores al escribir
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.correo) {
      newErrors.correo = "El correo es obligatorio.";
    } else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.correo)) {
        newErrors.correo = "Ingrese un correo válido.";
      }
    }

    if (!formData.contraseña) {
      newErrors.contraseña = "La contraseña es obligatoria.";
    } else {
      const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      if (!passwordPattern.test(formData.contraseña)) {
        newErrors.contraseña =
          "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.";
      }
    }

    if (!formData.rol) {
      newErrors.rol = "Seleccione un rol.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    const payload = { ...formData, idrol: formData.rol }; // Mapear `rol` a `idrol`
  
    try {
      const response = await registerUser(payload); // Enviar el objeto actualizado
      if (response) {
        onClose(); // Cierra el modal
      } else {
        alert("No se pudo registrar al usuario.");
      }
    } catch (err) {
      console.error("Error al registrar el usuario:", err);
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96 h-auto">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-800">
          Registrar Usuario
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              Text="Nombre"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>
          <div>
            <Input
              type="email"
              Text="Correo"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && (
              <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
            )}
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              Text="Contraseña"
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <i className="fas fa-eye-slash text-base"></i>
              ) : (
                <i className="fas fa-eye text-base"></i>
              )}
            </button>
            {errors.contraseña && (
              <p className="text-red-500 text-sm mt-1">{errors.contraseña}</p>
            )}
          </div>
          <div className="relative w-full mb-4">
            <label
              htmlFor="rol"
              className="text-blue-800 text-sm block mb-1"
            >
              Rol
            </label>
            <select
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Seleccione un rol</option>
              <option value="1">Mesero</option>
              <option value="2">Administrador</option>
              <option value="3">Cocinero</option>
            </select>
            {errors.rol && (
              <p className="text-red-500 text-sm mt-1">{errors.rol}</p>
            )}
          </div>
          <div className="flex gap-4 justify-center">
            <Button type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrar"}
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ModalUser;
