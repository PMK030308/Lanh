import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

export default function Cat({ onClick }) {
  const [blink, setBlink] = useState(false);
  const leftPupil = useRef(null);
  const rightPupil = useRef(null);

  // Chớp mắt tự động
  useEffect(() => {
    const id = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // Mắt nhìn theo chuột
  useEffect(() => {
    // chỉ theo chuột trên máy tính (mobile cuộn sẽ mượt hơn)
    const hasHover =
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    let raf = 0;
    const onMove = (e) => {
      if (raf) return; // gộp vào 1 khung hình cho nhẹ
      raf = requestAnimationFrame(() => {
        raf = 0;
        [leftPupil.current, rightPupil.current].forEach((p) => {
          if (!p) return;
          const rect = p.getBoundingClientRect();
          const dx = (e.clientX - rect.left) / window.innerWidth - 0.5;
          const dy = (e.clientY - rect.top) / window.innerHeight - 0.5;
          p.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`;
        });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`cat ${blink ? "blink" : ""}`} onClick={onClick}>
      <div className="cat-ears">
        <div className="ear left" />
        <div className="ear right" />
      </div>
      <div className="cat-face">
        <div className="eyes">
          <div className="eye left">
            <span className="pupil" ref={leftPupil} />
          </div>
          <div className="eye right">
            <span className="pupil" ref={rightPupil} />
          </div>
        </div>
        <div className="blush left" />
        <div className="blush right" />
        <div className="nose" />
        <div className="mouth" />
        <div className="whiskers">
          <span /><span /><span />
          <span /><span /><span />
        </div>
      </div>
      <div className="cat-heart">
        <Icon name="heartFill" size={26} />
      </div>
    </div>
  );
}
