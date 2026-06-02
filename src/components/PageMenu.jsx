import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { PAGES } from "../data.js";

// Menu lật trang: nút mở → ngăn kéo liệt kê mọi trang, bấm để nhảy tới.
export default function PageMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("cover");

  // Theo dõi trang đang hiển thị để tô sáng trong menu
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    PAGES.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const idx = PAGES.findIndex((p) => p.id === active);

  return (
    <>
      {/* Nút mở menu */}
      <button
        className="menu-btn"
        onClick={() => setOpen(true)}
        aria-label="Mục lục"
        title="Mục lục các trang"
      >
        <Icon name="menu" size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="menu-drawer"
              initial={{ x: "-110%" }}
              animate={{ x: 0 }}
              exit={{ x: "-110%" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              <div className="menu-head">
                <span className="menu-title">
                  <Icon name="book" size={20} /> Mục lục
                </span>
                <button
                  className="menu-close"
                  onClick={() => setOpen(false)}
                  aria-label="Đóng"
                >
                  <Icon name="close" size={20} />
                </button>
              </div>

              <ul className="menu-list">
                {PAGES.map((p, i) => (
                  <li key={p.id}>
                    <button
                      className={`menu-item ${active === p.id ? "active" : ""}`}
                      onClick={() => goTo(p.id)}
                    >
                      <span className="menu-item-icon">
                        <Icon name={p.icon} size={20} />
                      </span>
                      <span className="menu-item-text">{p.title}</span>
                      <span className="menu-item-no">{i + 1}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Nút lật trang trước/sau */}
      <div className="flip-nav">
        <button
          className="flip-btn"
          disabled={idx <= 0}
          onClick={() => goTo(PAGES[Math.max(0, idx - 1)].id)}
          aria-label="Trang trước"
        >
          <Icon name="arrowLeft" size={20} />
        </button>
        <span className="flip-count">
          {idx + 1}/{PAGES.length}
        </span>
        <button
          className="flip-btn"
          disabled={idx >= PAGES.length - 1}
          onClick={() => goTo(PAGES[Math.min(PAGES.length - 1, idx + 1)].id)}
          aria-label="Trang sau"
        >
          <Icon name="arrowRight" size={20} />
        </button>
      </div>
    </>
  );
}
