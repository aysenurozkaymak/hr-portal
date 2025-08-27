import React from "react";
import { Calendar as RBCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import tr from "date-fns/locale/tr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { leaves } from "../data/leaves";
import { employees } from "../data/employees";


const locales = { "tr-TR": tr };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = leaves.map((l) => {
  const emp = employees.find((e) => e.id === l.employeeId);
  return {
    title: `${emp?.name ?? "Çalışan"} • ${l.type}`,
    start: new Date(l.start),
    end: new Date(l.end),
  };
});

export default function Calendar() {
  const upcoming = leaves.slice(0, 5);

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <div className="page-title">🗓️ Takvim</div>
          <div className="page-sub">İzinler ve etkinlikler takvimi</div>
        </div>
        <div className="toolbar">
          <button className="btn">+ İzin Talebi Oluştur</button>
          <button className="btn ghost">Toplantı Ekle</button>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <RBCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 540 }}
            views={["month", "week", "day", "agenda"]}
            popup
            culture="tr-TR"
          />
        </div>

        <div className="grid" style={{ alignSelf: "start" }}>
          <div className="card">
            <h3>Yaklaşan İzinler</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {upcoming.map((u) => {
                const emp = employees.find((e) => e.id === u.employeeId);
                return (
                  <li key={u.id} style={{ margin: "10px 0" }}>
                    <b>{emp?.name}</b> — {u.type}
                    <div style={{ color: "var(--muted)", fontSize: 13 }}>
                      {u.start} → {u.end}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="card">
            <h3>Hızlı İşlemler</h3>
            <div className="toolbar" style={{ marginTop: 8 }}>
              <button className="btn">İzin Planla</button>
              <button className="btn ghost">Excel'e Aktar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
