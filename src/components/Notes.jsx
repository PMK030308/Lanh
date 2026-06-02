import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { NOTES } from "../data.js";

const ROTATES = [-3, 2, -2, 3, -1, 2];
const COLORS = ["#fff6a8", "#ffd6e8", "#d6f5d6", "#d6ecff", "#ffe2c2"];

// Giấy ghi chú dán tường
export default function Notes() {
  return (
    <div className="notes">
      {NOTES.map((n, i) => (
        <motion.div
          key={i}
          className="note"
          style={{
            background: COLORS[i % COLORS.length],
            rotate: `${ROTATES[i % ROTATES.length]}deg`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          <span className="note-tape" />
          <Icon name={n.icon} size={24} className="note-icon" />
          <span className="note-text">{n.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
