import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { COMPLIMENTS } from "../data.js";

// Máy tạo lời khen — bấm để nhận lời khen ngẫu nhiên
export default function Compliment() {
  const [text, setText] = useState(null);
  const [n, setN] = useState(0);

  const give = () => {
    let next = text;
    // tránh trùng lời khen vừa hiện
    while (COMPLIMENTS.length > 1 && next === text) {
      next = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];
    }
    setText(next);
    setN((v) => v + 1);
  };

  return (
    <div className="card compliment-card">
      <Icon name="sparkle" size={40} className="compliment-icon" />

      <div className="compliment-area">
        <AnimatePresence mode="wait">
          <motion.p
            key={n}
            className="compliment-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {text || "Bấm nút để nhận một lời khen nhỏ cho Lanh nhé"}
          </motion.p>
        </AnimatePresence>
      </div>

      <button className="btn" onClick={give}>
        {text ? "Một lời nữa" : "Khen Lanh đi"}
      </button>
    </div>
  );
}
