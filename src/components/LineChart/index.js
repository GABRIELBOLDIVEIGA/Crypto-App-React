
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // NÃO REMOVA !!!! sem isso da ruim XD

export default function LineChart({ chartData, chartOptions }) {
    // const options = {
    //     maintainAspectRatio: false,
    //     responsive: true,

    //     plugins: {
    //         legend: {
    //             display: false,
    //         },
    //     },

    //     layout: {
    //         padding: {
    //             top: 0,
    //         },
    //     },

    //     scales: {
    //         x: {
    //             display: false,
    //             grid: {
    //                 display: false,
    //             },
    //         },
    //         y: {
    //             type: "logarithmic",
    //             display: false,
    //             grid: {
    //                 display: false,
    //             },
    //             // beginAtZero: true,
    //         },
    //     },
    //     elements: {
    //         line: {
    //             tension: 0.4,
    //         },
    //     },
    // };
    
    return <Line data={chartData} options={chartOptions} />;
}