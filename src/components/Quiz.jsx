import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { QUIZ } from "../data.js";
import { heartConfetti } from "../lib/effects.js";

// Đố vui nho nhỏ — chọn đáp án, đáp án nào cũng dễ thương
export default function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);

  const item = QUIZ[step];
  const done = step >= QUIZ.length;

  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === item.answer) heartConfetti();
  };

  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };

  if (done) {
    return (
      <div className="card quiz-card">
        <Icon name="smile" size={48} className="quiz-end-icon" />
        <h3>Lanh trả lời đáng yêu ghê 🥰</h3>
        <p>Mà thật ra đáp án nào của Lanh tớ cũng thích hết.</p>
        <button
          className="btn"
          onClick={() => {
            setStep(0);
            setPicked(null);
          }}
        >
          Chơi lại
        </button>
      </div>
    );
  }

  return (
    <div className="card quiz-card">
      <span className="quiz-step">
        Câu {step + 1}/{QUIZ.length}
      </span>
      <h3 className="quiz-q">{item.q}</h3>

      <div className="quiz-options">
        {item.options.map((opt, i) => {
          const isAnswer = i === item.answer;
          const cls =
            picked === null
              ? ""
              : isAnswer
              ? "correct"
              : i === picked
              ? "wrong"
              : "dim";
          return (
            <button
              key={i}
              className={`quiz-opt ${cls}`}
              onClick={() => choose(i)}
            >
              {opt}
              {picked !== null && isAnswer && (
                <Icon name="check" size={18} className="quiz-tick" />
              )}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <motion.div
          className="quiz-feedback"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>{item.yay}</p>
          <button className="btn" onClick={next}>
            {step + 1 < QUIZ.length ? "Câu tiếp theo" : "Xong rồi"}
          </button>
        </motion.div>
      )}
    </div>
  );
}
