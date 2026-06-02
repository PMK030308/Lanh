import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { NICK } from "../data.js";
import { heartConfetti } from "../lib/effects.js";

// Máy đo độ đáng yêu — bấm để đo, kim luôn vượt 100%
export default function CuteMeter() {
  const [measured, setMeasured] = useState(false);

  const measure = () => {
    setMeasured(true);
    heartConfetti();
  };

  return (
    <div className="card meter-card">
      <h3 className="meter-title">
        Máy đo độ đáng yêu của {NICK}
      </h3>

      <div className="meter-bar">
        <motion.div
          className="meter-fill"
          initial={{ width: "8%" }}
          animate={{ width: measured ? "100%" : "8%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <span className="meter-value">{measured ? "100%+" : "??%"}</span>
      </div>

      <div className="meter-stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className={`meter-star ${measured ? "on" : ""}`}
            initial={{ scale: 0.6, opacity: 0.4 }}
            animate={
              measured
                ? { scale: 1, opacity: 1 }
                : { scale: 0.6, opacity: 0.4 }
            }
            transition={{ delay: measured ? i * 0.12 : 0 }}
          >
            <Icon name="star" size={26} />
          </motion.span>
        ))}
      </div>

      {!measured ? (
        <button className="btn" onClick={measure}>
          Bắt đầu đo
        </button>
      ) : (
        <motion.p
          className="meter-result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Máy báo lỗi vì đáng yêu vượt ngưỡng đo 🥰
        </motion.p>
      )}
    </div>
  );
}
