import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { useMusic } from "./MusicProvider.jsx";

// Danh sách bài hát — bấm để phát ngay, bài đang phát được tô sáng
export default function Playlist() {
  const { tracks, index, playing, select } = useMusic();

  return (
    <ul className="playlist">
      {tracks.map((s, i) => {
        const isCurrent = i === index;
        const isPlaying = isCurrent && playing;
        return (
          <motion.li
            key={s.file}
            className={`song ${isCurrent ? "current" : ""}`}
            onClick={() => select(i)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="song-no">{i + 1}</span>
            <span className={`song-icon ${isPlaying ? "playing" : ""}`}>
              <Icon name={isPlaying ? "music" : "playlist"} size={20} />
            </span>
            <span className="song-info">
              <span className="song-title">{s.title}</span>
              <span className="song-artist">
                {isPlaying ? "Đang phát…" : isCurrent ? "Tạm dừng" : "Chạm để phát"}
              </span>
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}
