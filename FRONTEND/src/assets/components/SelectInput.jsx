import React, { useState } from "react";

const SelectInput = ({ label, id, name, value, onChange, options }) => {
  const [focused, setFocused] = useState(false);

  // Manejadores de eventos para detectar cuando el select tiene foco
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <div className="relative w-full mb-4">
      {/* Select desplegable */}
      <select
        id={id}
        name={name}
        value={value} // Valor controlado del select
        onChange={onChange} // Función que maneja el cambio de valor
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full px-4 py-2 border-2 border-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {/* Opciones del select */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Etiqueta flotante */}
      <label
        htmlFor={id}
        className={`absolute left-4 text-blue-800 text-sm px-1 transform transition-all duration-300 ${
          focused || value ? "-translate-y-6 text-xs" : "top-1/2 -translate-y-1/2 text-base"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default SelectInput;
