import React, { useState } from "react";

const Modal1 = ({ isOpen, onClose }) => {
  const [selectedPrincipio, setSelectedPrincipio] = useState("");
  const [selectedProteina, setSelectedProteina] = useState("");

  const handleCheckboxChange = (event) => {
    console.log(`${event.target.name} está ${event.target.checked ? "seleccionado" : "no seleccionado"}`);
  };

  const handleSelectChange = (event, setter) => {
    setter(event.target.value);
    console.log(`Seleccionado: ${event.target.value}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <form>
          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="sancocho"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Sancocho
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="arroz"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Arroz
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="maduro"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Maduro
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="ensalada"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Ensalada
            </label>
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
              <option value="Plátano">Ninguno</option>
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
              <option value="Plátano">Ninguno</option>
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

export default Modal1;
