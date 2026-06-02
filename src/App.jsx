import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import FloatingHearts from "./components/FloatingHearts.jsx";
import Sparkles from "./components/Sparkles.jsx";
import FallingPetals from "./components/FallingPetals.jsx";
import HeartCursor from "./components/HeartCursor.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import PageMenu from "./components/PageMenu.jsx";
import Icon from "./components/Icon.jsx";

import Cat from "./components/Cat.jsx";
import LanternRelease from "./components/LanternRelease.jsx";
import TypingName from "./components/TypingName.jsx";
import IntroEnvelope from "./components/IntroEnvelope.jsx";
import LoveLetter from "./components/LoveLetter.jsx";
import DayCounter from "./components/DayCounter.jsx";
import Reasons from "./components/Reasons.jsx";
import Diary from "./components/Diary.jsx";
import Notes from "./components/Notes.jsx";
import PhotoCarousel from "./components/PhotoCarousel.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Favorites from "./components/Favorites.jsx";
import Places from "./components/Places.jsx";
import Quiz from "./components/Quiz.jsx";
import WishJar from "./components/WishJar.jsx";
import CuteMeter from "./components/CuteMeter.jsx";
import OpenWhen from "./components/OpenWhen.jsx";
import Promises from "./components/Promises.jsx";
import MoodCheck from "./components/MoodCheck.jsx";
import Compliment from "./components/Compliment.jsx";
import HeartCatch from "./components/HeartCatch.jsx";
import QuoteCarousel from "./components/QuoteCarousel.jsx";
import LoveQuestion from "./components/LoveQuestion.jsx";

import { NAME, NICK, ME, SINCE_LABEL, SINCE_TEXT, POPUP_MESSAGES, PAGES } from "./data.js";
import { heartConfetti, sideConfetti } from "./lib/effects.js";
import "./App.css";

// Màn hình nhỏ → giảm số hạt hiệu ứng cho mượt
const IS_MOBILE = typeof window !== "undefined" && window.innerWidth < 600;

// Khối nội dung một trang, hiện ra khi cuộn tới. Số trang tự lấy theo PAGES.
function Section({ id, icon, title, subtitle, children }) {
  const pos = PAGES.findIndex((p) => p.id === id);
  const pageLabel = pos > 0 ? `Trang ${pos}` : null;
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      {pageLabel && <span className="page-tag">{pageLabel}</span>}
      {title && (
        <h2 className="section-title">
          {icon && <Icon name={icon} size={26} className="section-icon" />}
          {title}
        </h2>
      )}
      {subtitle && <p className="section-sub">{subtitle}</p>}
      {children}
    </motion.section>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState(
    `Chạm vào chú mèo để ${ME} kể Lanh nghe điều dễ thương nha`
  );
  const [fade, setFade] = useState(true);

  const showRandomMessage = () => {
    setFade(false);
    setTimeout(() => {
      setMessage(
        POPUP_MESSAGES[Math.floor(Math.random() * POPUP_MESSAGES.length)]
      );
      setFade(true);
    }, 300);
  };

  const handleCharClick = () => {
    heartConfetti();
    showRandomMessage();
  };

  // Vuốt 1 lần = qua đúng 1 trang (cho các trang vừa 1 màn hình).
  // Trang nội dung dài hơn màn hình thì cho cuộn đọc tự nhiên.
  useEffect(() => {
    if (!opened) return;

    const getSecs = () =>
      [
        document.getElementById("cover"),
        ...document.querySelectorAll(".section"),
      ].filter(Boolean);
    const topOf = (el) => el.getBoundingClientRect().top + window.scrollY;
    const nearest = () => {
      const ss = getSecs();
      const y = window.scrollY;
      let best = 0,
        bd = Infinity;
      ss.forEach((s, i) => {
        const d = Math.abs(topOf(s) - y);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      return best;
    };

    let locked = false;
    const goTo = (i) => {
      const ss = getSecs();
      i = Math.max(0, Math.min(ss.length - 1, i));
      locked = true;
      window.scrollTo({ top: topOf(ss[i]), behavior: "smooth" });
      setTimeout(() => {
        locked = false;
      }, 650);
    };

    const inUI = (t) => t.closest(".menu-drawer, .music-pop, input, textarea");
    const secOf = (t) => t.closest(".hero, .section");
    const fits = (sec) =>
      sec && sec.getBoundingClientRect().height <= window.innerHeight + 8;

    const onWheel = (e) => {
      if (inUI(e.target)) return;
      if (!fits(secOf(e.target))) return; // trang dài: cuộn tự nhiên
      e.preventDefault();
      if (locked) return;
      goTo(nearest() + (e.deltaY > 0 ? 1 : -1));
    };

    let engaged = false;
    let startY = 0;
    const onTouchStart = (e) => {
      if (inUI(e.target)) {
        engaged = false;
        return;
      }
      engaged = fits(secOf(e.target));
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (engaged) e.preventDefault(); // chặn cuộn trôi trên trang vừa màn hình
    };
    const onTouchEnd = (e) => {
      if (!engaged || locked) return;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dy) < 45) return;
      goTo(nearest() + (dy < 0 ? 1 : -1));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [opened]);

  return (
    <>
      {/* Hiệu ứng nền (ít hạt hơn trên mobile) */}
      <FallingPetals count={IS_MOBILE ? 9 : 18} />
      <FloatingHearts interval={IS_MOBILE ? 750 : 450} />
      <Sparkles count={IS_MOBILE ? 20 : 40} />
      <HeartCursor />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {!opened ? (
          <IntroEnvelope key="intro" onOpen={() => setOpened(true)} />
        ) : (
          <motion.main
            key="main"
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Menu lật trang */}
            <PageMenu />

            {/* TRANG BÌA */}
            <section id="cover" className="hero">
              <div className="card hero-card">
                <span className="cover-label">♡ Sổ tay nhỏ ♡</span>
                <Cat onClick={handleCharClick} />
                <TypingName text={NAME} />
                <p className="subtitle">Cuốn sổ tay đáng yêu của Lanh</p>
                <div className={`message ${fade ? "show" : "hide"}`}>
                  {message}
                </div>
                <QuoteCarousel />
                <span className="scroll-hint">
                  Lật trang nào <Icon name="arrowDown" size={18} />
                </span>
              </div>
            </section>

            {/* TRANG 1 — THẢ ĐÈN LỒNG ƯỚC */}
            <Section
              id="lantern"
              icon="lantern"
              title="Thả đèn lồng ước"
              subtitle="Viết điều ước rồi thả cho đèn bay lên trời sao nhé"
            >
              <LanternRelease />
            </Section>

            <Section id="intro" icon="pen" title="Lời mở đầu">
              <LoveLetter />
            </Section>

            <Section id="days" icon="clock" title={SINCE_LABEL} subtitle={SINCE_TEXT}>
              <DayCounter />
            </Section>

            <Section id="diary" icon="book" title="Nhật ký nho nhỏ">
              <Diary />
            </Section>

            <Section
              id="reasons"
              icon="heartFill"
              title="Vài lý do dễ thương"
              subtitle="Chạm vào trái tim để lật xem nhé"
            >
              <Reasons />
            </Section>

            <Section id="notes" icon="note" title="Mấy điều muốn nhắn Lanh">
              <Notes />
            </Section>

            <Section id="album" icon="camera" title="Album của Lanh">
              <PhotoCarousel />
            </Section>

            <Section
              id="wishlist"
              icon="checklist"
              title="Những điều muốn cùng làm"
              subtitle="Chạm để đánh dấu khi đã làm rồi"
            >
              <Wishlist />
            </Section>

            <Section
              id="favorites"
              icon="heartFill"
              title="Sở thích của Lanh"
              subtitle="Bấm gợi ý hoặc tự thêm — sổ tự nhớ giùm luôn"
            >
              <Favorites />
            </Section>

            <Section id="places" icon="map" title="Những nơi muốn cùng đi">
              <Places />
            </Section>

            <Section
              id="quiz"
              icon="question"
              title="Đố vui nho nhỏ"
              subtitle="Đáp án nào của Lanh cũng đúng hết á"
            >
              <Quiz />
            </Section>

            <Section
              id="wishjar"
              icon="jar"
              title="Hũ điều ước"
              subtitle="Mỗi lần chạm là một lời chúc cho Lanh"
            >
              <WishJar />
            </Section>

            <Section id="meter" icon="smile" title="Máy đo độ đáng yêu">
              <CuteMeter />
            </Section>

            <Section
              id="openwhen"
              icon="envelope"
              title="Mở ra khi…"
              subtitle="Chạm vào phong thư hợp với tâm trạng của Lanh"
            >
              <OpenWhen />
            </Section>

            <Section id="promises" icon="heartFill" title="Lời hứa của tớ">
              <Promises />
            </Section>

            <Section id="mood" icon="faceNeutral" title="Hôm nay Lanh thấy thế nào?">
              <MoodCheck />
            </Section>

            <Section id="compliment" icon="sparkle" title="Lời khen mỗi ngày">
              <Compliment />
            </Section>

            <Section
              id="heartcatch"
              icon="heart"
              title="Bắt trái tim"
              subtitle="Một trò chơi nhỏ cho Lanh thư giãn"
            >
              <HeartCatch />
            </Section>

            {/* CÂU HỎI */}
            <Section id="ask">
              <div className="card">
                <LoveQuestion />
              </div>
            </Section>

            {/* LỜI KẾT */}
            <Section id="end">
              <button className="btn big" onClick={sideConfetti}>
                <Icon name="gift" size={20} /> Bắn pháo hoa ăn mừng
              </button>
              <p className="footer-note">Viết bằng cả tấm lòng, gửi {NICK}</p>
              <p className="footer-sign">— {ME}</p>
            </Section>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
