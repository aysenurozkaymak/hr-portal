import React from "react";
import { useParams, Link } from "react-router-dom";
import { employees } from "../data/employees";
import "./EmployeeDetail.css";

export default function EmployeeDetail() {
  const { id } = useParams();
  const employee = employees.find((e) => e.id === Number(id));

  if (!employee) {
    return (
      <div className="container">
        <div className="card">
          <p>Çalışan bulunamadı.</p>
          <Link to="/employees" className="btn ghost">← Listeye dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <div className="page-title">👤 {employee.name}</div>
          <div className="page-sub">
            {employee.department} • {employee.position}
          </div>
        </div>
        <div className="toolbar">
          <Link to="/employees" className="btn ghost">← Liste</Link>
          <button className="btn">Düzenle</button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Kişisel Bilgiler</h3>
          <div className="detail-field"><b>Ad Soyad:</b> {employee.name}</div>
          <div className="detail-field"><b>Departman:</b> {employee.department}</div>
          <div className="detail-field"><b>Pozisyon:</b> {employee.position}</div>
          <div className="detail-field"><b>Email:</b> {employee.email}</div>
          <div className="detail-field"><b>Telefon:</b> {employee.phone ?? "—"}</div>
        </div>

        <div className="card">
          <h3>Durum</h3>
          <p><b>Durum:</b> Aktif</p>
          <p><b>İşe Başlama:</b> 2023-05-14</p>
          <p><b>Yöneticisi:</b> {employee.manager ?? "Tanımsız"}</p>
        </div>
      </div>

      <div className="grid" style={{ marginTop: 18 }}>
        <div className="card">
          <h3>Bordro Özeti</h3>
          <ul>
            <li>Ağustos 2025: Net 35.500 ₺</li>
            <li>Temmuz 2025: Net 35.000 ₺</li>
            <li>Haziran 2025: Net 34.700 ₺</li>
          </ul>
        </div>
        <div className="card">
          <h3>İzinler</h3>
          <ul>
            <li>01.09.2025 → 05.09.2025 (Yıllık İzin)</li>
            <li>10.09.2025 → 11.09.2025 (Mazeret)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
