import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto"; // NÃO REMOVA !!!! sem isso da ruim XD

export default function LineChart({ chartData, chartOptions }) {
    return <Line data={chartData} options={chartOptions} />;
}