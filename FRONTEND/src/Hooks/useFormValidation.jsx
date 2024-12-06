import { useState } from "react";

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Validación del formulario
  const validate = () => {
    const newErrors = {};

    // Validación de campos vacíos
    if (!values.name?.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!values.email?.trim()) newErrors.email = "El correo es obligatorio.";
    if (!values.password?.trim())
      newErrors.password = "La contraseña es obligatoria.";

    // Validación del formato del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
      newErrors.email = "Por favor, ingrese un correo válido.";
    }

    // Validación de longitud de contraseña
    if (values.password && values.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  return {
    values,
    errors,
    handleChange,
    validate,
  };
};

export default useFormValidation;
