import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { PROMISES } from "../data.js";

// Lời hứa của tớ
export default function Promises() {
  return (
    <ul className="promises">
      {PROMISES.map((p, i) => (
        <motion.li
          key={i}
          className="promise"
          initial={{ opacity: 0, x: i % 2 ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
        >
          <span className="promise-icon">
            <Icon name={p.icon} size={22} />
          </span>
          <span className="promise-text">{p.text}</span>
        </motion.li>
      ))}
    </ul>
  );
}
