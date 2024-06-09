import React from 'react';
import { useFormContext } from 'react-hook-form';

function Encuesta2({ pregunta, name }) {
  const { register } = useFormContext();

  return (
    <div className="flex justify-center items-center pt-9 w-full">
      <div className="select-none bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{pregunta}</h2>
        <label htmlFor="respuesta" className="block mb-2">
          Ingresa tu respuesta:
        </label>
        <input
          type="text"
          id="respuesta"
          {...register(name)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe tu respuesta aquí"
        />
      </div>
    </div>
  );
}

export default Encuesta2;
