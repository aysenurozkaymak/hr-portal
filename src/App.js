import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Employees from "./pages/Employees";
import EmployeeDetail from "./pages/EmployeeDetail";
import Payroll from "./pages/Payroll";
import Leaves from "./pages/Leaves";
import Announcements from "./pages/Announcements";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

import "./App.css";

function App(){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className={`app-shell ${sidebarOpen ? "has-overlay" : ""}`}>
        {/* Mobilde karartma (sidebar açıkken) */}
        {sidebarOpen && <div className="overlay" onClick={()=>setSidebarOpen(false)} />}

        <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)} />
        <Navbar onMenu={()=>setSidebarOpen(v=>!v)} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
