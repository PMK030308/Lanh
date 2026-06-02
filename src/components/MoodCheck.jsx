import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { MOODS } from "../data.js";
import { heartConfetti } from "../lib/effects.js";

// Hôm nay Lanh thấy thế nào? — chọn tâm trạng, nhận lời nhắn
export default function MoodCheck() {
  const [picked, setPicked] = useState(null);

  const choose = (m) => {
    setPicked(m);
    heartConfetti();
  };

  return (
    <div className="card mood-card">
      <div className="mood-row">
        {MOODS.map((m, i) => (
          <button
            key={i}
            className={`mood-btn ${picked?.label === m.label ? "on" : ""}`}
            onClick={() => choose(m)}
          >
            <Icon name={m.icon} size={30} />
            <span>{m.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {picked && (
          <motion.p
            key={picked.label}
            className="mood-reply"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {picked.reply}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
