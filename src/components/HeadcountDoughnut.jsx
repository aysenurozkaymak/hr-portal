import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { employees } from "../data/employees";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HeadcountDoughnut(){
  const { labels, counts } = useMemo(()=>{
    const map = new Map();
    employees.forEach(e => map.set(e.department, (map.get(e.department)||0)+1));
    return { labels: Array.from(map.keys()), counts: Array.from(map.values()) };
  },[]);

  const data = {
    labels,
    datasets: [{
      label: "Dağılım",
      data: counts
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } }
  };

  return (
    <div style={{height: 260}}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
