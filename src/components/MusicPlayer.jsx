import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { useMusic } from "./MusicProvider.jsx";

// Nút nhạc nổi + popover chọn bài
export default function MusicPlayer() {
  const { tracks, index, playing, select, toggle, next, prev } = useMusic();
  const [open, setOpen] = useState(false);

  return (
    <div className="music-dock">
      <div className="music-row">
        <button
          className={`music-btn ${playing ? "spin" : "muted"}`}
          onClick={toggle}
          title={playing ? "Tạm dừng" : "Phát nhạc"}
          aria-label="Phát/Dừng nhạc"
        >
          <Icon name="music" size={24} />
        </button>
        <button
          className={`music-list-btn ${open ? "open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          title="Chọn bài"
          aria-label="Danh sách bài hát"
        >
          <Icon name="playlist" size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="music-pop"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="music-now">
              <span className="music-now-label">Đang phát</span>
              <span className="music-now-title">{tracks[index].title}</span>
            </div>

            <div className="music-controls">
              <button onClick={prev} aria-label="Bài trước">
                <Icon name="arrowLeft" size={18} />
              </button>
              <button className="mc-play" onClick={toggle} aria-label="Phát/Dừng">
                <Icon name={playing ? "music" : "music"} size={20} />
              </button>
              <button onClick={next} aria-label="Bài sau">
                <Icon name="arrowRight" size={18} />
              </button>
            </div>

            <ul className="music-tracks">
              {tracks.map((t, i) => (
                <li key={t.file}>
                  <button
                    className={`music-track ${i === index ? "current" : ""}`}
                    onClick={() => select(i)}
                  >
                    <span className="mt-icon">
                      <Icon
                        name={i === index && playing ? "music" : "playlist"}
                        size={16}
                      />
                    </span>
                    <span className="mt-title">{t.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
