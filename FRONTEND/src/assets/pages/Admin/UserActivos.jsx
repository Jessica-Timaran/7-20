import React, { useEffect, useState } from 'react';
import LayoutPrincipal from '../../layouts/LayoutPrincipal';
import DataTable from '../../components/DataTable'; // Ajusta la ruta según tu estructura

const UserActivos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://tu-backend-url.com/api/usuarios');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  // Filtrar usuarios
  const filteredUsers = usuarios.filter((usuario) =>
    Object.values(usuario).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Configuración de columnas
  const columns = [
    { header: 'Nombre', accessor: 'nombre', span: 3, className: 'font-medium' },
    { header: 'Correo', accessor: 'correo', span: 3, className: 'font-medium' },
    {
      header: 'Fecha Creación',
      accessor: 'fecha_creacion',
      span: 2,
      render: (value) => new Date(value).toLocaleDateString(),
      className: 'text-gray-500',
    },
    {
      header: 'Estado',
      accessor: 'estado',
      span: 2,
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            value.toLowerCase() === 'activo'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      header: 'Rol',
      accessor: 'rol',
      span: 2,
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            value.toLowerCase() === 'admin'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  return (
    <LayoutPrincipal>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">Usuarios activos</h1>
            <input
              type="text"
              placeholder="Buscar usuarios..."
              className="px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Usar el componente reutilizable */}
          <DataTable
            columns={columns}
            data={filteredUsers}
            rowKey="id"
            getRowColor={(row, index) =>
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }
          />
        </div>
      </div>
    </LayoutPrincipal>
  );
};

export default UserActivos;
