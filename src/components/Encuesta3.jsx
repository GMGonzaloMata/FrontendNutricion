import React from 'react';
import { useFormContext } from 'react-hook-form';

function EncuestaTextura({ pregunta, name }) {
  const { register, watch } = useFormContext();
  const selectedOption = watch(name, "0"); // Default value of "0"

  return (
    <div className="flex justify-center items-center pt-9 w-full">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 select-none">{pregunta}</h1>
        <div className="flex justify-between mb-6">
          <label className="flex flex-col items-center cursor-pointer select-none">
            <input
              type="radio"
              name={name}
              value="1"
              {...register(name)}
              className="hidden"
            />
            <span className={`text-xl ${selectedOption === "1" ? 'text-blue-500' : 'text-gray-300'} select-none`}>
              Arenoso
            </span>
          </label>
          <label className="flex flex-col items-center cursor-pointer select-none">
            <input
              type="radio"
              name={name}
              value="2"
              {...register(name)}
              className="hidden"
            />
            <span className={`text-xl ${selectedOption === "2" ? 'text-blue-500' : 'text-gray-300'} select-none`}>
              Granulado
            </span>
          </label>
          <label className="flex flex-col items-center cursor-pointer select-none">
            <input
              type="radio"
              name={name}
              value="0"
              {...register(name)}
              className="hidden"
            />
            <span className={`text-xl ${selectedOption === "0" ? 'text-blue-500' : 'text-gray-300'} select-none`}>
              Ninguna
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default EncuestaTextura;
