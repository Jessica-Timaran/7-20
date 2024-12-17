import React from 'react';

const DataTable = ({ columns, data, rowKey, getRowColor }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-12 bg-purple-600 text-white font-semibold p-4">
        {columns.map((col) => (
          <div
            key={col.accessor}
            className={`col-span-${col.span || 1} ${col.className || ''}`}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-200">
        {data.length > 0 ? (
          data.map((row, index) => (
            <div
              key={row[rowKey]}
              className={`grid grid-cols-12 items-center p-4 hover:bg-purple-50 transition-colors duration-200 ${
                getRowColor ? getRowColor(row, index) : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {columns.map((col) => (
                <div
                  key={col.accessor}
                  className={`col-span-${col.span || 1} ${col.className || ''}`}
                >
                  {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No hay datos disponibles.
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
