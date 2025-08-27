import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function PayrollTrendLine(){
  const labels = ["Mar", "Nis", "May", "Haz", "Tem", "Ağu"];
  const data = {
    labels,
    datasets: [{
      label: "Toplam Net Bordro (₺)",
      data: [420000, 435000, 447000, 455000, 468000, 472000],
      tension: 0.35
    }]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: { y: { beginAtZero: false } }
  };

  return (
    <div style={{height: 320}}>
      <Line data={data} options={options} />
    </div>
  );
}
