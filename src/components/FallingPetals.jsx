import { useMemo } from "react";

const PETALS = ["🌸", "🌷", "🍃", "💮"];

export default function FallingPetals({ count = 18 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        emoji: PETALS[i % PETALS.length],
        left: Math.random() * 100,
        size: 14 + Math.random() * 18,
        delay: Math.random() * 8,
        dur: 8 + Math.random() * 8,
        swayDur: 2 + Math.random() * 3,
      })),
    [count]
  );

  // Hai lớp: lớp ngoài rơi (translateY), lớp trong đung đưa (translateX)
  // — cả hai đều dùng transform nên không gây tính lại layout (mượt).
  return (
    <div className="petals">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}vw`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <span
            className="petal-inner"
            style={{
              fontSize: `${p.size}px`,
              animationDuration: `${p.swayDur}s`,
            }}
          >
            {p.emoji}
          </span>
        </span>
      ))}
    </div>
  );
}
