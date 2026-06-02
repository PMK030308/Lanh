import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { NICK, ME } from "../data.js";
import { rainHearts, sideConfetti } from "../lib/effects.js";

// "Có yêu/quý Lan Anh không?" — nút Không né chuột, nút Có thì ăn mừng
export default function LoveQuestion() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [yes, setYes] = useState(false);
  const [dodges, setDodges] = useState(0);

  const dodge = (e) => {
    // tránh việc chạm vừa né vừa kích hoạt click trên mobile
    if (e) e.preventDefault();
    // phạm vi né nhỏ hơn trên màn hình hẹp để nút không văng ra ngoài
    const isMobile = window.innerWidth < 600;
    const rangeX = isMobile ? 120 : 260;
    const rangeY = isMobile ? 90 : 160;
    const x = (Math.random() - 0.5) * rangeX;
    const y = (Math.random() - 0.5) * rangeY;
    setPos({ x, y });
    setDodges((d) => d + 1);
  };

  const sayYes = () => {
    setYes(true);
    sideConfetti();
    rainHearts(2600);
  };

  if (yes) {
    return (
      <motion.div
        className="yes-result"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
      >
        <Icon name="heartFill" size={56} className="yes-emoji" />
        <h3>{ME} quý {NICK} nhiều thật nhiều!</h3>
        <p>Cảm ơn {NICK} vì đã đáng yêu như vậy 🌷</p>
      </motion.div>
    );
  }

  return (
    <div className="love-question">
      <Icon name="paw" size={40} className="lq-icon" />
      <h3>{NICK} có biết {ME} quý {NICK} nhiều lắm không?</h3>
      <div className="lq-buttons">
        <motion.button
          className="btn yes-btn"
          onClick={sayYes}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Có chứ
        </motion.button>

        <motion.button
          className="btn no-btn"
          onMouseEnter={dodge}
          onTouchStart={dodge}
          onClick={dodge}
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {dodges > 4 ? "Bắt được tớ đi 🙈" : "Không 😝"}
        </motion.button>
      </div>
    </div>
  );
}
