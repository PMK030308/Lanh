import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { WISHES } from "../data.js";

// Hũ điều ước — chạm để rút một lời chúc ngẫu nhiên
export default function WishJar() {
  const [wish, setWish] = useState(null);
  const [n, setN] = useState(0);

  const draw = () => {
    const next = WISHES[Math.floor(Math.random() * WISHES.length)];
    setWish(next);
    setN((v) => v + 1);
  };

  return (
    <div className="wishjar">
      <motion.button
        className="jar-btn"
        onClick={draw}
        whileTap={{ scale: 0.92, rotate: -4 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Rút điều ước"
      >
        <Icon name="jar" size={84} />
      </motion.button>

      <div className="wish-slip-area">
        <AnimatePresence mode="wait">
          {wish ? (
            <motion.p
              key={n}
              className="wish-slip"
              initial={{ opacity: 0, y: 18, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {wish}
            </motion.p>
          ) : (
            <motion.span
              key="hint"
              className="wish-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Chạm vào hũ để rút một điều ước nhé
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
