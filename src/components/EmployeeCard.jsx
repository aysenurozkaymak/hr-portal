import React from "react";

export default function EmployeeCard({ name, department }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h4>{name}</h4>
      <p>{department}</p>
    </div>
  );
}
