import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { NICK } from "../data.js";

// Màn mở đầu: phong thư đáng yêu, bấm để mở
export default function IntroEnvelope({ onOpen }) {
  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="envelope"
        initial={{ y: 40, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
      >
        <div className="env-flap" />
        <div className="env-body">
          <div className="env-heart">
            <Icon name="heartFill" size={42} />
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="intro-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Có một cuốn sổ tay nhỏ gửi {NICK}…
      </motion.h2>
      <motion.p
        className="intro-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Bấm vào phong thư để mở 💕
      </motion.p>
    </motion.div>
  );
}
