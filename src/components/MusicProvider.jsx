import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TRACKS } from "../data.js";

const MusicContext = createContext(null);
export const useMusic = () => useContext(MusicContext);

// Ghép base URL (vd "/Lanh/") để nhạc chạy đúng cả khi deploy lên GitHub Pages
const srcOf = (file) => import.meta.env.BASE_URL + file;

// Quản lý một thẻ <audio> duy nhất cho cả trang.
// Tự phát bài đầu, hết bài tự sang bài kế, vòng lại từ đầu.
export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const playIndex = (i) => {
    const a = audioRef.current;
    if (!a) return;
    indexRef.current = i;
    setIndex(i);
    a.src = srcOf(TRACKS[i].file);
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  useEffect(() => {
    const a = new Audio(srcOf(TRACKS[0].file));
    a.volume = 0.5;
    audioRef.current = a;

    // Hết bài → sang bài kế (vòng tròn)
    const onEnded = () => playIndex((indexRef.current + 1) % TRACKS.length);
    a.addEventListener("ended", onEnded);

    const start = () =>
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    start();

    // Trình duyệt chặn tự phát → phát ngay khi chạm/bấm lần đầu
    const onFirst = () => {
      if (a.paused) start();
      removeFirst();
    };
    const removeFirst = () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
    window.addEventListener("pointerdown", onFirst);
    window.addEventListener("keydown", onFirst);

    return () => {
      a.pause();
      a.removeEventListener("ended", onEnded);
      removeFirst();
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {});
    else {
      a.pause();
      setPlaying(false);
    }
  };

  // Bấm một bài: đang phát bài đó thì tạm dừng/tiếp tục, khác thì đổi bài
  const select = (i) => {
    if (i === indexRef.current) toggle();
    else playIndex(i);
  };

  const next = () => playIndex((indexRef.current + 1) % TRACKS.length);
  const prev = () =>
    playIndex((indexRef.current - 1 + TRACKS.length) % TRACKS.length);

  return (
    <MusicContext.Provider
      value={{ tracks: TRACKS, index, playing, playIndex, select, toggle, next, prev }}
    >
      {children}
    </MusicContext.Provider>
  );
}
