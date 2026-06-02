import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { NICK } from "../data.js";
import { heartConfetti } from "../lib/effects.js";

const GAME_TIME = 20; // giây
let hid = 0;

// Trò chơi: bắt những trái tim rơi xuống trong 20 giây
export default function HeartCatch() {
  const [playing, setPlaying] = useState(false);
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_TIME);
  const [hearts, setHearts] = useState([]);
  const timers = useRef([]);

  const clearAll = () => {
    timers.current.forEach((t) => clearInterval(t));
    timers.current = [];
  };

  const start = () => {
    setScore(0);
    setTime(GAME_TIME);
    setHearts([]);
    setOver(false);
    setPlaying(true);

    const spawn = setInterval(() => {
      const h = {
        id: hid++,
        left: 8 + Math.random() * 84,
        dur: 2.6 + Math.random() * 1.8,
      };
      setHearts((prev) => [...prev, h]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((x) => x.id !== h.id));
      }, h.dur * 1000);
    }, 650);

    const tick = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearAll();
          setPlaying(false);
          setOver(true);
          setHearts([]);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    timers.current = [spawn, tick];
  };

  const catchHeart = (id) => {
    setHearts((prev) => prev.filter((x) => x.id !== id));
    setScore((s) => s + 1);
  };

  useEffect(() => () => clearAll(), []);
  useEffect(() => {
    if (over && score > 0) heartConfetti();
  }, [over, score]);

  return (
    <div className="card hc-card">
      <div className="hc-hud">
        <span>
          <Icon name="heartFill" size={18} /> {score}
        </span>
        <span>{playing ? `⏱ ${time}s` : `${GAME_TIME}s`}</span>
      </div>

      <div className="hc-area">
        {hearts.map((h) => (
          <button
            key={h.id}
            className="hc-heart"
            style={{ left: `${h.left}%`, animationDuration: `${h.dur}s` }}
            onClick={() => catchHeart(h.id)}
            aria-label="Bắt tim"
          >
            <Icon name="heartFill" size={30} />
          </button>
        ))}

        {!playing && (
          <div className="hc-cover">
            {over ? (
              <>
                <p className="hc-result">
                  Lanh bắt được <b>{score}</b> trái tim 💞
                </p>
                <p className="hc-sub">
                  {score >= 12
                    ? "Siêu đỉnh luôn á!"
                    : score >= 6
                    ? "Giỏi ghê nha Lanh!"
                    : "Mỗi trái tim là một chút thương của tớ 🤍"}
                </p>
                <button className="btn" onClick={start}>
                  Chơi lại
                </button>
              </>
            ) : (
              <>
                <p className="hc-sub">
                  Chạm vào tim rơi để bắt cho {NICK} nhé!
                </p>
                <button className="btn" onClick={start}>
                  Bắt đầu
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
