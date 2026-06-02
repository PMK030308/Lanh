import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { LANTERN_PLACEHOLDER, LANTERN_DEFAULT_WISH } from "../data.js";

const STORAGE = "lanh-lanterns";

// Một chiếc đèn lồng giấy (SVG)
function Lantern({ size = 80 }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 80 104" className="lantern-svg">
      <line x1="40" y1="2" x2="40" y2="12" stroke="#caa15a" strokeWidth="2" />
      <rect x="30" y="6" width="20" height="5" rx="2" fill="#caa15a" />
      <defs>
        <radialGradient id="lglow" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="55%" stopColor="#ffb15c" />
          <stop offset="100%" stopColor="#ff7a59" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="52" rx="30" ry="36" fill="url(#lglow)" />
      <path d="M16 52 H64" stroke="#e8923f" strokeWidth="1.5" opacity="0.6" />
      <path d="M20 34 H60M20 70 H60" stroke="#e8923f" strokeWidth="1.2" opacity="0.5" />
      <rect x="30" y="86" width="20" height="6" rx="3" fill="#caa15a" />
      <line x1="40" y1="92" x2="40" y2="102" stroke="#ff9ec4" strokeWidth="2" />
      <circle cx="40" cy="102" r="2.4" fill="#ff6f9c" />
    </svg>
  );
}

export default function LanternRelease() {
  const [wish, setWish] = useState("");
  const [flying, setFlying] = useState([]);
  const [count, setCount] = useState(0);
  const idRef = useRef(0);

  // Sao nền (tạo 1 lần)
  const stars = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 78,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
    []
  );

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE) || "[]");
      if (Array.isArray(s)) setCount(s.length);
    } catch {
      /* bỏ qua */
    }
  }, []);

  const release = () => {
    const text = wish.trim() || LANTERN_DEFAULT_WISH;
    const id = idRef.current++;
    setFlying((f) => [...f, { id, text }]);
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE) || "[]");
      s.push(text);
      localStorage.setItem(STORAGE, JSON.stringify(s));
      setCount(s.length);
    } catch {
      setCount((c) => c + 1);
    }
    setWish("");
  };

  const done = (id) => setFlying((f) => f.filter((x) => x.id !== id));

  return (
    <div className="lantern-wrap">
      <div className="lantern-scene">
        {/* Sao */}
        {stars.map((s) => (
          <span
            key={s.id}
            className="ln-star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        {/* Mặt trăng */}
        <div className="ln-moon" />

        {/* Đèn lồng trang trí bay nền */}
        <span className="amb-lantern amb1" />
        <span className="amb-lantern amb2" />
        <span className="amb-lantern amb3" />

        {/* Đèn lồng vừa thả bay lên */}
        <AnimatePresence>
          {flying.map((f) => (
            <motion.div
              key={f.id}
              className="fly-lantern"
              initial={{ y: 0, opacity: 0, x: 0 }}
              animate={{ y: -380, opacity: [0, 1, 1, 0], x: [0, 18, -12, 6] }}
              transition={{ duration: 6.5, ease: "easeOut" }}
              onAnimationComplete={() => done(f.id)}
            >
              <Lantern size={50} />
              <span className="fly-text">{f.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Đèn lồng chính ở dưới */}
        <motion.div
          className="main-lantern"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lantern size={88} />
        </motion.div>
      </div>

      <div className="lantern-controls">
        <input
          className="lantern-input"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder={LANTERN_PLACEHOLDER}
          maxLength={50}
          onKeyDown={(e) => e.key === "Enter" && release()}
        />
        <button className="btn lantern-btn" onClick={release}>
          <Icon name="lantern" size={18} /> Thả đèn
        </button>
      </div>

      <p className="lantern-count">
        Đã thả <b>{count}</b> điều ước cho Lanh ✨
      </p>
    </div>
  );
}
