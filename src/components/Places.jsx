import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { PLACES } from "../data.js";

// Những nơi muốn cùng đi
export default function Places() {
  return (
    <div className="places">
      {PLACES.map((p, i) => (
        <motion.div
          key={i}
          className="place"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          whileHover={{ y: -4 }}
        >
          <span className="place-icon">
            <Icon name={p.icon} size={26} />
          </span>
          <span className="place-name">{p.name}</span>
          <span className="place-note">{p.note}</span>
        </motion.div>
      ))}
    </div>
  );
}
