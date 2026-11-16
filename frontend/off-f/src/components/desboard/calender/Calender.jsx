
import React, { useState } from "react";
import styles from "./calender.module.css";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getWeekDates = () => {
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay());

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  };

  const changeWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const weekDates = getWeekDates();
  return (
    <div className="calendar">
      <button className="calendar-arrow" onClick={() => changeWeek(-1)}>
        ‹
      </button>

      <div className="calendar-days">
        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${
              date.toDateString() === selectedDate.toDateString()
                ? "active"
                : ""
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <span>
              {date                 
                .toLocaleDateString("en-US", {
                  weekday: "short",
                })
                .toUpperCase()}
            </span>

            <p>{date.getDate()}</p>
          </div>
        ))}
      </div>

      <button className="calendar-next" onClick={() => changeWeek(1)}>
        ›
      </button>
    </div>
  );
}

export default Calender;
