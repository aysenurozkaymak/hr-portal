import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { employees } from "../data/employees";
import "./Employees.css";

export default function Employees() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");

  const list = useMemo(() => {
    return employees.filter(
      (e) =>
        (e.name.toLowerCase().includes(q.toLowerCase()) ||
          e.email.toLowerCase().includes(q.toLowerCase())) &&
        (dept ? e.department === dept : true)
    );
  }, [q, dept]);

  const departments = Array.from(new Set(employees.map((e) => e.department)));

  return (
    <div className="container">
      <h2>Çalışanlar</h2>

      <div className="filterbar">
        <input
          className="input"
          placeholder="Ara: ad / email"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select
          className="input"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        >
          <option value="">Departman (tümü)</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="table-wrap">
        <table className="emp-table">
          <thead>
            <tr>
              <th>Ad Soyad</th>
              <th>Departman</th>
              <th>Pozisyon</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {list.map((emp) => (
              <tr key={emp.id}>
                <td>
                  <Link to={`/employees/${emp.id}`}>{emp.name}</Link>
                </td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
