import React, { useState } from "react";

const Input = ({ type, Text, id, value, onChange, name }) => {
  const [focused, setFocused] = useState(false);

  // Manejadores de eventos para detectar cuando el input tiene foco
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
      {/* Input */}
      <input
        id={id}
        type={type}
        name={name}
        required
        value={value}  // El valor controlado del input
        onChange={onChange}  // La función que maneja el cambio de valor
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full px-4 py-2 border-2 border-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Etiqueta flotante */}
      <label
        htmlFor={id}
        className={`absolute left-4 text-blue-800 text-sm px-1 transform transition-all duration-300 ${
          focused || value ? "-translate-y-6 text-xs" : "top-1/2 -translate-y-1/2 text-base"
        }`}
      >
        {Text}
      </label>
    </div>
  );
};

export default Input;
