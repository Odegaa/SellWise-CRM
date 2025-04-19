import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend);

interface LeadsChartProps {
  labels: string[];
  data: number[];
}

const SecondBlock: React.FC<LeadsChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Количество лидов',
        data,
        backgroundColor: ['#36A2EB', '#926384', '#FFCE56', '#FBC0C0', '#9966FF'],
        borderColor: '#fff',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Диаграмма',
      },
    },
  };

  return (
    <section className="flex justify-center items-center gap-5 ">
      <div className="p-5 bg-white shadow-md w-[600px] ">
        <Pie options={options} data={chartData} />
      </div>
      <div className="p-5 bg-white shadow-md w-[600px] ">
        <Doughnut options={options} data={chartData} />
      </div>
    </section>
  );
};

export { SecondBlock };
