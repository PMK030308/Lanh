import { useEffect, useRef, useState } from "react";
import { LOVE_LETTER } from "../data.js";

// Lá thư đánh máy từng chữ, chỉ bắt đầu khi cuộn tới
export default function LoveLetter() {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || shown >= LOVE_LETTER.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 45);
    return () => clearTimeout(t);
  }, [started, shown]);

  return (
    <div className="letter-paper" ref={ref}>
      <div className="letter-pin">📌</div>
      <pre className="letter-text">
        {LOVE_LETTER.substring(0, shown)}
        {shown < LOVE_LETTER.length && <span className="caret">|</span>}
      </pre>
    </div>
  );
}
