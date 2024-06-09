import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Encuesta from '../components/Encuesta.jsx';
import Encuesta2 from '../components/Encuesta2.jsx';
import Encuesta3 from '../components/Encuesta3.jsx';
import Encuesta4 from '../components/Encuesta4.jsx';
import Boton from '../components/Boton.jsx';
import BarraNavegacion from '../components/BarraNavegacion.jsx';

const Formulario = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('Datos del formulario:', data);
    try {
      const response = await axios.post('http://localhost:3000/api/form-data', data);
      console.log('Respuesta del servidor:', response.data);
      navigate('/final');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#f3f4f6' }}>
      <BarraNavegacion />
      <div className="flex flex-col items-center space-y-4 w-full px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 select-none pt-8">Evaluación Sensorial Detallada</h2>
        <p className="text-sm text-gray-400 mb-4 select-none">Por favor, evalúa los siguientes aspectos del producto:</p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-md">
            <Encuesta pregunta="¿Como calificarías la apariencia de la galletita?" name="apariencia" />
            <Encuesta pregunta="¿Como calificarías el aroma de la galletita?" name="aroma" />
            <Encuesta pregunta="¿Como calificarías el sabor de la galletita?" name="sabor" />
            <Encuesta pregunta="¿Cómo calificarías la textura al morder la galletita?" name="textura_morder" />
            <Encuesta pregunta="¿Como calificarías la textura en boca de la galletita?" name="textura_boca" />
            <Encuesta2 pregunta="¿Qué sensaciones experimentas en la boca al comer la galletita? (por ejemplo, sensación de sequedad, cremosidad, etc.)" name="sensaciones" />
            <Encuesta2 pregunta="¿Observas alguna irregularidad en su aspecto? (por ejemplo, quemaduras, desprendimientos, etc)" name="aspecto_irregularidad" />
            <Encuesta3 pregunta="¿Hay alguna sensación de granulado o arenoso?" name="sensacion_granulado_arenoso" />
            <Encuesta2 pregunta="¿Qué aroma percibes al oler la galletita? (por ejemplo, vainilla, chocolate, rancio, etc)" name="aroma_percibe" />
            <Encuesta4 pregunta="¿La galletita tiene un sabor predominante?" name="sabor_predominante" />
            <Encuesta4 pregunta="¿La textura de la galletita es crujiente?" name="crujiente" />
            <Encuesta pregunta="¿Qué tanto te gustó el producto en general?" name="estrellas_general" />
            <Encuesta pregunta="¿Qué tanto volverías a consumir este producto?" name="volver_consumir" />
            <div className="pb-4 pt-4 flex justify-center w-full">
              <Boton type="submit" className="w-full md:w-auto">Enviar Evaluación</Boton>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Formulario;
