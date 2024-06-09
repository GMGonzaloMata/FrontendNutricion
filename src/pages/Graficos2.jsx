import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarraNavegacion from '../components/BarraNavegacion';
import Boton from '../components/Boton';
import { Link } from 'react-router-dom';

const Graficos2 = () => {
  const [formData, setFormData] = useState([]);
  const [granuladoArenosoCounts, setGranuladoArenosoCounts] = useState({ Arenoso: 0, Granulado: 0, Ninguno: 0 });
  const [saborPredominanteCounts, setSaborPredominanteCounts] = useState({ Sí: 0, No: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/form-data');
        const data = response.data;

        const granuladoArenoso = { Arenoso: 0, Granulado: 0, Ninguno: 0 };
        const saborPredominante = { Sí: 0, No: 0 };

        data.forEach(item => {
          if (item.sensacion_granulado_arenoso === 2) granuladoArenoso.Arenoso += 1;
          if (item.sensacion_granulado_arenoso === 1) granuladoArenoso.Granulado += 1;
          if (item.sensacion_granulado_arenoso === 0) granuladoArenoso.Ninguno += 1;
          if (item.sabor_predominante === "1") saborPredominante.Sí += 1;
          if (item.sabor_predominante === "2") saborPredominante.No += 1;
        });

        setFormData(data);
        setGranuladoArenosoCounts(granuladoArenoso);
        setSaborPredominanteCounts(saborPredominante);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BarraNavegacion />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 md:p-10 rounded-md w-full md:max-w-2xl text-center shadow-md">
          <h1 className="select-none text-3xl md:text-4xl font-bold mb-6 text-gray-800">Datos Recopilados</h1>
          {formData.length > 0 ? (
            <>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200">Sensaciones</th>
                      <th className="py-2 px-4 border-b border-gray-200">Aspecto Irregularidad</th>
                      <th className="py-2 px-4 border-b border-gray-200">Sensación Granulado Arenoso</th>
                      <th className="py-2 px-4 border-b border-gray-200">Aroma Percibido</th>
                      <th className="py-2 px-4 border-b border-gray-200">Sabor Predominante</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b border-gray-200">{item.sensaciones}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{item.aspecto_irregularidad}</td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {item.sensacion_granulado_arenoso === 2 ? 'Arenoso' : item.sensacion_granulado_arenoso === 1 ? 'Granulado' : 'Ninguno'}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">{item.aroma_percibe}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{item.sabor_predominante === "1" ? 'Sí' : 'No'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Resumen de Respuestas</h2>
                <div className="flex flex-col md:flex-row justify-around">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Sensación Granulado Arenoso</h3>
                    <p>Arenoso: {granuladoArenosoCounts.Arenoso}</p>
                    <p>Granulado: {granuladoArenosoCounts.Granulado}</p>
                    <p>Ninguno: {granuladoArenosoCounts.Ninguno}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sabor Predominante</h3>
                    <p>Sí: {saborPredominanteCounts.Sí}</p>
                    <p>No: {saborPredominanteCounts.No}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Cargando datos...</p>
          )}
          <Link to="/grafico">
            <Boton className="w-full md:w-auto">
              Ver Gráfico de Barras
            </Boton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Graficos2;
