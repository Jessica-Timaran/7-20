import React from "react";

const Modal3 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-bold mb-4">Selecciona tu opción</h2>

        {/* Opciones */}
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="presaOption"
              value="con_presa"
              className="form-radio text-blue-600"
            />
            <span>Con Presa</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="presaOption"
              value="sin_presa"
              className="form-radio text-blue-600"
            />
            <span>Sin Presa</span>
          </label>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
