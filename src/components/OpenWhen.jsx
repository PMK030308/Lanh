import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { OPEN_WHEN } from "../data.js";

// "Mở ra khi…" — chạm vào phong thư để mở lời nhắn bên trong
export default function OpenWhen() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="openwhen-grid">
        {OPEN_WHEN.map((o, i) => (
          <motion.button
            key={i}
            className="ow-card"
            onClick={() => setActive(o)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="ow-env">
              <Icon name="envelope" size={30} />
            </span>
            <span className="ow-label">{o.label}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="ow-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="ow-letter"
              initial={{ scale: 0.7, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="ow-letter-icon">
                <Icon name={active.icon} size={36} />
              </span>
              <h4>Mở ra {active.label}</h4>
              <p>{active.message}</p>
              <button className="btn" onClick={() => setActive(null)}>
                Gấp thư lại
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
