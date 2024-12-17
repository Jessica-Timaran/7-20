import React from 'react';

const DataTable = ({ columns, data, rowKey, getRowColor }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-12 bg-purple-600 text-white font-semibold p-4">
      </div>
      {/* Rows */}
      <div className="divide-y divide-gray-200">
          <div className="text-center py-10 text-gray-500">
            
          </div>
      </div>
    </div>
  );
};
export default DataTable;