import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { QUOTES } from "../data.js";

// Câu nói lãng mạn tự xoay vòng
export default function QuoteCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % QUOTES.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="quote-box">
      <Icon name="quote" size={20} className="quote-mark" />
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          className="quote"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5 }}
        >
          {QUOTES[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
