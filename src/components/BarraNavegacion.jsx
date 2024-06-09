import React from 'react';
import { ChartBarIcon } from '@heroicons/react/outline'; // Usa `outline` o `solid` según corresponda a tu necesidad

const BarraNavegacion = () => {
  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Icono de estadísticas */}
          <ChartBarIcon className="text-white h-8 w-8 mr-2" /> {/* Tamaño y estilo del ícono */}
      </div>
    </nav>
  );
};

export default BarraNavegacion;
