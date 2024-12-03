import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, CategoryScale, LinearScale } from "chart.js";
import 'chartjs-plugin-gradient'; // Asegúrate de importar el plugin

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

const GraficoBarras = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Ganancias Totales",
        data: [],
        backgroundColor: [], // Se dejará vacío aquí para el gradiente
        borderRadius: 8,
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({});

  // Datos simulados en lugar de obtenerlos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando una respuesta de API
        const data = [
          { mes: "Enero", valor: 500 },
          { mes: "Febrero", valor: 1500 },
          { mes: "Marzo", valor: 2000 },
          { mes: "Abril", valor: 1200 },
          { mes: "Mayo", valor: 1800 },
        ];

        const labels = data.map((item) => item.mes); // ["Enero", "Febrero", "Marzo", ...]
        const values = data.map((item) => item.valor); // [500, 1500, 2000, ...]

        // Configuración del gradiente para las barras
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Ganancias Totales",
              data: values,
              // Crear el gradiente para las barras
              backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, "#0F123F"); // Color al principio
                gradient.addColorStop(1, "#3A408F"); // Color al final
                return gradient;
              },
              borderRadius: 8,
            },
          ],
        });

        setChartOptions({
          responsive: true,
          maintainAspectRatio: false, // Asegura que el gráfico se adapte al tamaño del contenedor
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `$${context.raw}`; // Agregar el prefijo "$"
                },
              },
            },
            legend: { display: false }, // Oculta la leyenda
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              ticks: {
                callback: function (value) {
                  return `$${value}`; // Mostrar valores con "$"
                },
              },
            },
          },
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Accounting</h2>
      {/* Agregar un contenedor con altura dinámica */}
      <div style={{ position: 'relative', height: 'auto' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default GraficoBarras;
