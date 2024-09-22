import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true, // Solid grid lines for y-axis
      },
      display: true,
      ticks: {
        callback: function (value) {
          const times = [
            "12 AM",
            "1 AM",
            "2 AM",
            "3 AM",
            "4 AM",
            "5 AM",
            "6 AM",
            "7 AM",
            "8 AM",
            "9 AM",
            "10 AM",
            "11 AM",
            "12 PM",
            "1 PM",
            "2 PM",
            "3 PM",
            "4 PM",
            "5 PM",
            "6 PM",
            "7 PM",
          ];
          return times[value]; // Correctly map values
        },
        stepSize: 1,
        min: 7,
        max: 19,
      },
    },
  },
  barThickness: 14, // Set bar thickness
};

const labels = [
  "01 Sept",
  "02 Sept",
  "03 Sept",
  "04 Sept",
  "05 Sept",
  "06 Sept",
  "07 Sept",
  "08 Sept",
  "09 Sept",
];

export const data = {
  labels,
  datasets: [
    {
      data: [2, 8, 5, 3, 7, 12, 6, 10, 4], // Adjust your dataset accordingly
      backgroundColor: "#3b82f6",
    },
  ],
};
