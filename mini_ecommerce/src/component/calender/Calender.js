// components/Calendar.tsx
"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
  return (
    <div className="p-4 sm:p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="80vh" // High-fidelity sizing
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={[
            { title: "Design Review", start: new Date(), color: "#3b82f6" },
            {
              title: "Dinner with Team",
              start: "2025-12-25",
              color: "#10b981",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
