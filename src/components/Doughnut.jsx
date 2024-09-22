import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export const data = {
  labels: ["Impression Delivered", "Remaining Impression"],
  datasets: [
    {
      label: "Impressions",
      data: [20000, 40000], // 20k delivered, 40k remaining
      backgroundColor: [
        "rgba(54, 162, 235, 1)", // Blue for delivered impressions
        "rgba(211, 211, 211, 1)", // Light gray for remaining impressions
      ],
      borderWidth: 0, // Remove borders for a clean look
    },
  ],
};

// You can also add options to display the percentage in the center:

export const options = {
  cutout: "75%", // Makes the doughnut inner circle larger
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: {
      display: false, // Hides the legend
    },
    datalabels: {
      display: true,
      color: "blue", // The color of the text in the center
      font: {
        size: 36,
        weight: "bold",
      },
      formatter: function (value, context) {
        let total = context.chart.data.datasets[0].data.reduce(
          (acc, val) => acc + val,
          0
        );
        let percentage = Math.round((value / total) * 100);
        if (context.dataIndex === 0) {
          return percentage + "%"; // Shows the percentage for "Impression Delivered"
        } else {
          return ""; // Hides text for the "Remaining Impression"
        }
      },
    },
  },
};
const centerDoughnutPlugin = {
  id: "annotateDoughnutCenter",
  beforeDraw: (chart) => {
    if (chart.config.type === "doughnut") {
      let width = chart.width;
      let height = chart.height;
      let ctx = chart.ctx;

      ctx.restore();
      let fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      let text = "30%";
      let textX = Math.round((width - ctx.measureText(text).width) / 2);
      let textY = height / 1.87;

      console.log("text x: ", textX);
      console.log("text y: ", textY);

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  },
};

// Register Donut Plugin
ChartJS.register(centerDoughnutPlugin);
