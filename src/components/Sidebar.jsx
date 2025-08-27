import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ open, onClose }){
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="s-logo">HR</div>
      <ul onClick={onClose}>
        <li><Link to="/dashboard">📊 Dashboard</Link></li>
        <li><Link to="/employees">👥 Çalışanlar</Link></li>
        <li><Link to="/payroll">💰 Bordro</Link></li>
        <li><Link to="/leaves">📅 İzinler</Link></li>
        <li><Link to="/calendar">🗓️ Takvim</Link></li>
        <li><Link to="/announcements">📢 Duyurular</Link></li>
        <li><Link to="/settings">⚙️ Ayarlar</Link></li>
        <li><Link to="/help">❓ Yardım</Link></li>
      </ul>
    </aside>
  );
}
