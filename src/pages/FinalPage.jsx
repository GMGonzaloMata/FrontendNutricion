import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../components/Boton.jsx';
import BarraNavegacion from '../components/BarraNavegacion.jsx';

const FinalPage = () => {
  return (
  <div>
    <BarraNavegacion />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-gray-100 p-8 md:p-10 rounded-md w-full md:max-w-lg text-center"> {/* Elimina la clase shadow-md */}
    <h1 className="select-none text-3xl md:text-4xl font-bold mb-4 text-gray-800">¡Evaluación completada!</h1>
        <p className="select-none text-base md:text-lg text-gray-600 mb-8">
          Gracias por participar en nuestra evaluación sensorial. Tu feedback es muy valioso para nosotros y nos ayuda a mejorar continuamente.
          ¡Esperamos contar con tu participación en futuras evaluaciones!
        </p>
        <div className='pb-5'>
          <Link to="/">
            <Boton>
              Volver a Inicio
            </Boton>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FinalPage;
