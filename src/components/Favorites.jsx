import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { FAV_LIKES_SUGGEST, FAV_DISLIKES_SUGGEST } from "../data.js";

// Một danh sách lưu trong trình duyệt
function useStoredList(key) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "[]");
      if (Array.isArray(saved)) setItems(saved);
    } catch {
      /* bỏ qua */
    }
  }, [key]);

  const persist = (list) => {
    setItems(list);
    try {
      localStorage.setItem(key, JSON.stringify(list));
    } catch {
      /* bộ nhớ đầy thì thôi */
    }
  };

  const add = (text) => {
    const t = (text || "").trim();
    if (!t || items.includes(t)) return;
    persist([...items, t]);
  };
  const remove = (i) => persist(items.filter((_, j) => j !== i));

  return { items, add, remove };
}

function Panel({ title, icon, tone, list, suggestions }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    list.add(text);
    setText("");
  };

  const remaining = suggestions.filter((s) => !list.items.includes(s));

  return (
    <div className={`fav-panel ${tone}`}>
      <h4 className="fav-head">
        <Icon name={icon} size={22} /> {title}
      </h4>

      <ul className="fav-list">
        <AnimatePresence initial={false}>
          {list.items.length === 0 && (
            <li className="fav-empty">Chưa có gì, thêm bên dưới nhé</li>
          )}
          {list.items.map((it, i) => (
            <motion.li
              key={it}
              className="fav-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <span>{it}</span>
              <button
                className="fav-del"
                onClick={() => list.remove(i)}
                aria-label="Xoá"
              >
                <Icon name="close" size={13} />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <form className="fav-form" onSubmit={submit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tự thêm…"
          maxLength={40}
        />
        <button type="submit" className="fav-add" aria-label="Thêm">
          <Icon name="plus" size={18} />
        </button>
      </form>

      {remaining.length > 0 && (
        <div className="fav-suggest">
          {remaining.map((s) => (
            <button key={s} className="fav-chip" onClick={() => list.add(s)}>
              <Icon name="plus" size={12} /> {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Trang sở thích: điều Lanh thích / không thích, lưu lại được
export default function Favorites() {
  const likes = useStoredList("lanh-likes");
  const dislikes = useStoredList("lanh-dislikes");

  return (
    <div className="favorites">
      <Panel
        title="Lanh thích"
        icon="heartFill"
        tone="like"
        list={likes}
        suggestions={FAV_LIKES_SUGGEST}
      />
      <Panel
        title="Lanh không thích"
        icon="noEntry"
        tone="dislike"
        list={dislikes}
        suggestions={FAV_DISLIKES_SUGGEST}
      />
    </div>
  );
}
