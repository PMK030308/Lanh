import { useMemo } from "react";

export default function Sparkles({ count = 40 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    [count]
  );

  return (
    <div className="sparkles">
      {stars.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}vw`,
            top: `${s.top}vh`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
