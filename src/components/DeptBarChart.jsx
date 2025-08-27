import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { employees } from "../data/employees";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DeptBarChart(){
  const { labels, counts } = useMemo(()=>{
    const map = new Map();
    employees.forEach(e => map.set(e.department, (map.get(e.department)||0)+1));
    const labels = Array.from(map.keys());
    const counts = Array.from(map.values());
    return { labels, counts };
  },[]);

  const data = {
    labels,
    datasets: [{
      label: "Çalışan Sayısı",
      data: counts,
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { precision:0 } }
    }
  };

  return (
    <div style={{height: 320}}>
      <Bar data={data} options={options} />
    </div>
  );
}
