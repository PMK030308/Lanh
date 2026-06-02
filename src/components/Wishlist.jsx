import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { WISHLIST } from "../data.js";

// Danh sách điều muốn cùng làm — chạm để tích ✓
export default function Wishlist() {
  const [done, setDone] = useState(() => WISHLIST.map(() => false));

  const toggle = (i) =>
    setDone((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <ul className="wishlist">
      {WISHLIST.map((item, i) => (
        <motion.li
          key={i}
          className={`wish ${done[i] ? "checked" : ""}`}
          onClick={() => toggle(i)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="wish-box">
            {done[i] && <Icon name="check" size={16} />}
          </span>
          <Icon name={item.icon} size={22} className="wish-icon" />
          <span className="wish-text">{item.text}</span>
        </motion.li>
      ))}
    </ul>
  );
}
