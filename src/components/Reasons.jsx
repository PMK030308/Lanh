import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { REASONS } from "../data.js";

// Thẻ lật: mặt trước là trái tim, bấm/chạm để lật ra lý do
export default function Reasons() {
  return (
    <div className="reasons-grid">
      {REASONS.map((r, i) => (
        <FlipCard key={i} reason={r} index={i} />
      ))}
    </div>
  );
}

function FlipCard({ reason, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      {/* Bấm/chạm để lật, rê chuột cũng lật (trên máy tính) */}
      <motion.div
        className="flip-inner"
        onClick={() => setFlipped((f) => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flip-front">
          <Icon name="heartFill" size={34} className="flip-heart" />
          <span className="flip-tip">Chạm để mở</span>
        </div>
        <div className="flip-back">
          <Icon name={reason.icon} size={26} className="flip-icon" />
          <span className="flip-reason">{reason.text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
