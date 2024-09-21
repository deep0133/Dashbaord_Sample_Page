import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    gradient.addColorStop(0, "rgba(0, 0, 255, 0.4)"); // Starting color (top)
    gradient.addColorStop(1, "rgba(0, 0, 255, 0.01)"); // Ending color (bottom)

    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }, []);

  const labels = [
    "1d",
    "2d",
    "3d",
    "4d",
    "5d",
    "6d",
    "7d",
    "8d",
    "9d",
    "10d",
    "11d",
  ];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset",
        data: labels.map(() => Math.floor(Math.random() * 10)), // Random data points
        borderColor: "rgba(0, 0, 255, 1)", // Blue line
        backgroundColor: "rgba(0, 0, 255, 0.3)", // Will be replaced by gradient in useEffect
        tension: 0.4, // Smooth line
        borderWidth: 2, // Line thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend if needed
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines
        },
        display: false,
        min: 0, // Minimum value for y-axis
        max: 10, // Maximum value for y-axis
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};
