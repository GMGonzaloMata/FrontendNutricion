import React from 'react';
import { useFormContext } from 'react-hook-form';

function Encuesta({ pregunta, name }) {
  const { register, watch } = useFormContext();
  const rating = watch(name, 0); // Default value of 0

  return (
    <div className="flex justify-center items-center pt-9 w-full">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 select-none">{pregunta}</h1>
        <div className="flex justify-between mb-6">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={starValue} className="flex flex-col items-center cursor-pointer select-none">
                <input
                  type="radio"
                  name={name}
                  value={starValue}
                  {...register(name)}
                  className="hidden"
                />
                <span className={`text-3xl ${starValue <= rating ? 'text-yellow-500' : 'text-gray-300'} select-none`}>
                  ★
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Encuesta;
