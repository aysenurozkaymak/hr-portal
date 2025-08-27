import React from "react";
import { payrolls } from "../data/payrolls";
import { employees } from "../data/employees";
import "./Payroll.css";
import "../pages/Employees.css"; // tablo stillerini yeniden kullan

export default function Payroll(){
  const findName = id => employees.find(e=>e.id===id)?.name ?? "Bilinmiyor";
  return (
    <div className="payroll">
      <h2>Bordro <span className="badge">Demo</span></h2>
      <div className="table-wrap">
        <table className="emp-table">
          <thead>
            <tr>
              <th>Çalışan</th><th>Ay</th><th>Brüt</th><th>Vergi</th><th>Net</th>
            </tr>
          </thead>
          <tbody>
            {payrolls.map(p=>(
              <tr key={p.id}>
                <td>{findName(p.employeeId)}</td>
                <td>{p.month}</td>
                <td>{p.gross.toLocaleString()} ₺</td>
                <td>{p.tax.toLocaleString()} ₺</td>
                <td><b>{p.net.toLocaleString()} ₺</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
