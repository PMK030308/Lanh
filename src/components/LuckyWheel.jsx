import { useState } from "react";
import Icon from "./Icon.jsx";
import { WHEEL_PRIZES } from "../data.js";
import { heartConfetti } from "../lib/effects.js";

const COLORS = [
  "#ff9ec4", "#c9a7eb", "#7ec8ff", "#86d99a",
  "#ffd24d", "#ff7a59", "#f5a3c7", "#9b6bd8",
];

export default function LuckyWheel() {
  const n = WHEEL_PRIZES.length;
  const seg = 360 / n;
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const gradient = `conic-gradient(${WHEEL_PRIZES.map(
    (_, i) => `${COLORS[i % COLORS.length]} ${i * seg}deg ${(i + 1) * seg}deg`
  ).join(",")})`;

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    const r = Math.floor(Math.random() * n);
    const base = Math.ceil(rotation / 360) * 360;
    const target = base + 5 * 360 + (360 - (r * seg + seg / 2));
    setRotation(target);
    setTimeout(() => {
      setResult(WHEEL_PRIZES[r]);
      setSpinning(false);
      heartConfetti();
    }, 4300);
  };

  return (
    <div className="wheel-wrap">
      <div className="wheel-stage">
        <span className="wheel-pointer" />
        <div
          className="wheel"
          style={{ background: gradient, transform: `rotate(${rotation}deg)` }}
        />
        <span className="wheel-hub">
          <Icon name="heartFill" size={22} />
        </span>
      </div>

      <button className="btn big" onClick={spin} disabled={spinning}>
        <Icon name="sparkle" size={18} /> {spinning ? "Đang quay…" : "Quay nào!"}
      </button>

      <p className="wheel-result">
        {result ? `🎉 ${result}` : "Bấm để xem hôm nay Lanh nhận được gì nhé"}
      </p>
    </div>
  );
}
