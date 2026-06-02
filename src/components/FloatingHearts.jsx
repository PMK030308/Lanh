import { useEffect, useState } from "react";

const EMOJIS = ["💗", "💕", "🌸", "💖", "🦋", "✨"];
let uid = 0;

export default function FloatingHearts({ interval = 450 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const spawn = setInterval(() => {
      const dur = 6 + Math.random() * 6;
      const heart = {
        id: uid++,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        size: 16 + Math.random() * 24,
        dur,
      };
      setHearts((prev) => [...prev, heart]);
      // dọn dẹp sau khi bay xong
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, dur * 1000);
    }, interval);
    return () => clearInterval(spawn);
  }, [interval]);

  return (
    <div className="hearts-bg">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-float"
          style={{
            left: `${h.left}vw`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.dur}s`,
          }}
        >
          {h.emoji}
        </div>
      ))}
    </div>
  );
}
