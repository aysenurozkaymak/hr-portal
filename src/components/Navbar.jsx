import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onMenu }){
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Hamburger sadece mobilde görünür */}
        <button className="hamburger" onClick={onMenu} aria-label="Menüyü aç/kapat">
          ☰
        </button>
        <span className="brand">🏢 HR-Portal</span>
        <div className="links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/employees">Çalışanlar</Link>
          <Link to="/payroll">Bordro</Link>
          <Link to="/calendar">Takvim</Link>
          <Link to="/announcements">Duyurular</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/profile" className="pill">Profil</Link>
      </div>
    </nav>
  );
}
