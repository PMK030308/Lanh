import { useEffect, useState } from "react";

export default function TypingName({ text = "Lan Anh", speed = 220 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, text, speed]);

  const done = count >= text.length;

  return (
    <h1 className="name">
      {text.substring(0, count)}
      {!done && <span className="caret">|</span>}
    </h1>
  );
}
