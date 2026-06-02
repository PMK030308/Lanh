import { useEffect, useState } from "react";
import { SINCE_DATE } from "../data.js";

function diff() {
  const ms = Date.now() - SINCE_DATE.getTime();
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
  };
}

export default function DayCounter() {
  const [t, setT] = useState(diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Ngày", value: t.days },
    { label: "Giờ", value: t.hours },
    { label: "Phút", value: t.minutes },
    { label: "Giây", value: t.seconds },
  ];

  return (
    <div className="counter">
      {items.map((it) => (
        <div className="counter-box" key={it.label}>
          <span className="counter-value">
            {String(it.value).padStart(2, "0")}
          </span>
          <span className="counter-label">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
