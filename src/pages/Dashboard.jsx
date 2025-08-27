import React from "react";
import StatCard from "../components/StatCard";
import DeptBarChart from "../components/DeptBarChart";
import HeadcountDoughnut from "../components/HeadcountDoughnut";
import PayrollTrendLine from "../components/PayrollTrendLine";
import "./Dashboard.css";

export default function Dashboard(){
  return (
    <div className="container">
      <div className="page-header">
        <div>
          <div className="page-title">📊 Dashboard</div>
          <div className="page-sub">Genel durum ve özet istatistikler</div>
        </div>
        <div className="toolbar">
          <button className="btn">Rapor Al</button>
          <button className="btn ghost">Paylaş</button>
        </div>
      </div>

      <div className="grid grid-auto-4">
        <StatCard title="Toplam Çalışan" value="120" subtitle="+3 bu ay" />
        <StatCard title="Bugün İzinli" value="4" subtitle="2 onay bekliyor" />
        <StatCard title="Ortalama Maaş" value="32.000 ₺" subtitle="Son ay" />
        <StatCard title="Aktif Duyuru" value="3" />
      </div>

      <div className="grid-2" style={{marginTop:18}}>
        <div className="card">
          <h3>Departman Bazında Çalışan Sayısı</h3>
          <DeptBarChart />
        </div>
        <div className="card">
          <h3>Headcount Dağılımı</h3>
          <HeadcountDoughnut />
        </div>
      </div>

      <div className="card" style={{marginTop:18}}>
        <h3>Bordro Trend (Son 6 Ay)</h3>
        <PayrollTrendLine />
      </div>
    </div>
  );
}
