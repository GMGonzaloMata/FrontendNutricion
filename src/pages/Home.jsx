import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../components/Boton';
import imagenBienvenida from '../assets/galletita.webp';
import BarraNavegacion from '../components/BarraNavegacion'; // Importa el componente de la barra de navegación

const Home = () => {
  return (
    <div>
      {/* Agrega la barra de navegación aquí */}
      <BarraNavegacion />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-gray-100 p-8 md:p-10 rounded-md w-full md:max-w-lg text-center"> {/* Elimina la clase shadow-md */}
          <h1 className="select-none text-3xl md:text-4xl font-bold mb-4 pt-4 pb-10 text-gray-800">¡Bienvenido a la evaluación sensorial!</h1>
          <p className="select-none text-base md:text-lg text-gray-600 mb-8">
            La evaluación sensorial nos permite analizar cómo percibes los alimentos usando tus sentidos. Este proceso
            nos ayuda a mejorar la calidad, el sabor y la aceptación de nuestros productos. Tu feedback es esencial
            para desarrollar alimentos que no solo sean saludables, sino también deliciosos.
          </p>
          <img src={imagenBienvenida} alt="Galletita" className="select none rounded-md mx-auto mb-8 md:mb-12 w-full md:max-w-md h-auto" />
          <div className='pb-5'>
            <Link to="/formulario">
              <Boton>Comenzar Evaluación</Boton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
