import React, { useState, useEffect } from "react";

const Modal2 = ({ isOpen, onClose }) => {
  // Estado para las opciones de los checkboxes, con valores preseleccionados
  const [selectedOptions, setSelectedOptions] = useState({
    arroz: false,  // Preseleccionado
    maduro: false, // Preseleccionado
    ensalada: false, // Preseleccionado
  });

  // Estado para los selects, con valores preseleccionados
  const [selectedPrincipio, setSelectedPrincipio] = useState(""); // Preseleccionado
  const [selectedProteina, setSelectedProteina] = useState(""); // Preseleccionado

  // Manejar cambios en los checkboxes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(`${name} está ${checked ? "seleccionado" : "no seleccionado"}`);
  };

  // Manejar cambios en los selects
  const handleSelectChange = (event, setter) => {
    setter(event.target.value);
    console.log(`Seleccionado: ${event.target.value}`);
  };

  // Si el modal se cierra, restablecer los valores por defecto
  useEffect(() => {
    if (!isOpen) {
      setSelectedOptions({
        arroz: false,
        maduro: false,
        ensalada: false,
      });
      setSelectedPrincipio("");
      setSelectedProteina("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <form>
          {/* Checkboxes */}
          <div className="space-y-2">
            {["arroz", "maduro", "ensalada"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  name={option}
                  checked={selectedOptions[option]} // Estado controlado
                  className="mr-2"
                  onChange={handleCheckboxChange}
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>

          {/* Selects */}
          <div className="mt-4">
            <label className="block mb-2 font-medium">Principio</label>
            <select
              value={selectedPrincipio}
              onChange={(e) => handleSelectChange(e, setSelectedPrincipio)}
              className="w-full border rounded p-2"
            >
              <option value="" disabled>
                Seleccione un principio
              </option>
              <option value="Papa">Papa</option>
              <option value="Yuca">Yuca</option>
              <option value="Plátano">Plátano</option>
              <option value="Ninguno">Ninguno</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium">Proteína</label>
            <select
              value={selectedProteina}
              onChange={(e) => handleSelectChange(e, setSelectedProteina)}
              className="w-full border rounded p-2"
            >
              <option value="" disabled>
                Seleccione una proteína
              </option>
              <option value="Pollo">Pollo</option>
              <option value="Carne">Carne</option>
              <option value="Cerdo">Cerdo</option>
              <option value="Ninguno">Ninguno</option>
            </select>
          </div>

          {/* Botones */}
          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal2;
