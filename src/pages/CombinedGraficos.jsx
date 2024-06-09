import React from 'react';
import Graficos from './Graficos';
import Graficos2 from './Graficos2';
import BarraNavegacion from '../components/BarraNavegacion';
import Boton from '../components/Boton';
import { Link } from 'react-router-dom';

const CombinedGraficos = () => {
  return (
    <div>
      <BarraNavegacion />
      <div className="grid grid-cols-1 gap-6 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Graficos />
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <Graficos2 />
        </div>
        <Link to="/">
          <Boton>
            Volver a Inicio
          </Boton>
        </Link>
      </div>
    </div>
  );
};

export default CombinedGraficos;
