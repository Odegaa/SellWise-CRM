import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LeadsChartProps {
  labels: string[];
  data: number[];
}

const Graphics: React.FC<LeadsChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Количество лидов',
        data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Динамика лидов',
      },
    },
  };

  return (
    <section className="p-5 flex justify-center items-center gap-5 max-w-full">
      <div className="p-5 bg-white shadow-md w-[600px]">
        <Bar options={options} data={chartData} />
      </div>
      <div className="p-5 bg-white shadow-md w-[600px]">
        <Line options={options} data={chartData} />
      </div>
    </section>
  );
};

export { Graphics };
