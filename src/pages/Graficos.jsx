import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import BarraNavegacion from '../components/BarraNavegacion'; 
import Boton from '../components/Boton';
import { Link } from 'react-router-dom';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graficos = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/form-data');
        const data = response.data;

        // Calcula el promedio de cada categoría (excepto "crujiente" y "sensacion_granulado_arenoso")
        const categories = [
          { name: 'apariencia', label: 'Apariencia' },
          { name: 'aroma', label: 'Aroma' },
          { name: 'sabor', label: 'Sabor' },
          { name: 'textura_boca', label: 'Textura en Boca' },
          { name: 'textura_morder', label: 'Textura al Morder' },
          { name: 'estrellas_general', label: 'Estrellas General' },
          { name: 'volver_consumir', label: 'Volver a Consumir' }
        ];
        
        const averages = categories.map(category => {
          const sum = data.reduce((acc, item) => acc + item[category.name], 0);
          return sum / data.length;
        });

        const formattedData = {
          labels: categories.map(category => category.label),
          datasets: [
            {
              data: averages,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(199, 199, 199, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
            }
          ],
        };

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BarraNavegacion />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-gray-100 p-8 md:p-10 rounded-md w-full md:max-w-lg text-center">
          <h1 className="select-none text-3xl md:text-4xl font-bold mb-4 pt-4 pb-10 text-gray-800">Diagrama de barras</h1>
          {chartData ? (
            <Bar data={chartData} options={{ plugins: { legend: { display: false } } }} />
          ) : (
            <p>Cargando datos...</p>
          )}
          <Link to="/grafico2">
            <Boton>
              Ver Datos Detallados
            </Boton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Graficos;
