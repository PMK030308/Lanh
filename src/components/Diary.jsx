import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { DIARY } from "../data.js";

// Nhật ký theo dòng thời gian, kiểu sổ tay
export default function Diary() {
  return (
    <div className="diary">
      {DIARY.map((d, i) => (
        <motion.div
          className="diary-item"
          key={i}
          initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="diary-dot">
            <Icon name={d.icon} size={20} />
          </div>
          <div className="diary-content">
            <span className="diary-date">{d.date}</span>
            <h4 className="diary-title">{d.title}</h4>
            <p className="diary-text">{d.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
