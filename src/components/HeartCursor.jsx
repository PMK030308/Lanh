import { useEffect, useRef, useState } from "react";

let uid = 0;

// Thiết bị cảm ứng (không có chuột thật) → bỏ vệt tim để cuộn cho mượt
const HAS_HOVER =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Vệt trái tim nhỏ đi theo con trỏ chuột (chỉ trên máy tính)
export default function HeartCursor() {
  const [trail, setTrail] = useState([]);
  const last = useRef(0);

  useEffect(() => {
    if (!HAS_HOVER) return; // mobile: không làm gì cả
    const onMove = (e) => {
      const now = Date.now();
      if (now - last.current < 90) return; // giới hạn tần suất
      last.current = now;
      const item = {
        id: uid++,
        x: e.clientX,
        y: e.clientY,
        emoji: Math.random() > 0.5 ? "♡" : "✦",
      };
      // chỉ giữ tối đa vài cái gần nhất cho nhẹ
      setTrail((prev) => [...prev.slice(-10), item]);
      setTimeout(() => {
        setTrail((prev) => prev.filter((t) => t.id !== item.id));
      }, 850);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!HAS_HOVER) return null;

  return (
    <div className="heart-cursor">
      {trail.map((t) => (
        <span
          key={t.id}
          className="cursor-heart"
          style={{ left: t.x, top: t.y }}
        >
          {t.emoji}
        </span>
      ))}
    </div>
  );
}
