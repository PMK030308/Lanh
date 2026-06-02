import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { PLACEHOLDER_PHOTOS } from "../data.js";

// Tự động nạp mọi ảnh đặt sẵn trong thư mục src/photos
const modules = import.meta.glob(
  "../photos/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}",
  { eager: true }
);

const STORAGE_KEY = "lanh-album";

function buildFolderPhotos() {
  return Object.entries(modules).map(([path, mod]) => {
    const file = path.split("/").pop() || "";
    return { src: mod.default, caption: file.replace(/\.[^.]+$/, ""), kind: "folder" };
  });
}

// Nén ảnh xuống ~1100px cho nhẹ rồi trả về dataURL
function resizeImage(file, max = 1100) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > max || height > max) {
          if (width > height) {
            height = Math.round((height * max) / width);
            width = max;
          } else {
            width = Math.round((width * max) / height);
            height = max;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function PhotoCarousel() {
  const folderPhotos = useMemo(buildFolderPhotos, []);
  const [uploaded, setUploaded] = useState([]);
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // Nạp ảnh đã lưu từ trình duyệt
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(saved)) setUploaded(saved);
    } catch {
      /* bỏ qua */
    }
  }, []);

  const save = (list) => {
    setUploaded(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      setError("");
    } catch {
      setError("Bộ nhớ trình duyệt đã đầy — thử xoá bớt ảnh cũ nhé.");
    }
  };

  const photos = [
    ...folderPhotos,
    ...uploaded.map((u) => ({ ...u, kind: "upload" })),
  ];
  const hasReal = photos.length > 0;
  const list = hasReal ? photos : PLACEHOLDER_PHOTOS;
  const photo = list[Math.min(idx, list.length - 1)] || list[0];

  const go = (d) => {
    setDir(d);
    setIdx((i) => (i + d + list.length) % list.length);
  };

  const onPick = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setBusy(true);
    try {
      const added = [];
      for (const f of files) {
        if (!f.type.startsWith("image/")) continue;
        const src = await resizeImage(f);
        added.push({ src, caption: f.name.replace(/\.[^.]+$/, "") });
      }
      const next = [...uploaded, ...added];
      save(next);
      setIdx(folderPhotos.length + next.length - 1); // nhảy tới ảnh mới
    } catch {
      setError("Không đọc được ảnh này, thử ảnh khác nha.");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const removeCurrent = () => {
    if (photo.kind !== "upload") return;
    const uploadIndex = idx - folderPhotos.length;
    const next = uploaded.filter((_, i) => i !== uploadIndex);
    save(next);
    setIdx((i) => Math.max(0, i - 1));
  };

  return (
    <div className="carousel">
      <button className="nav-btn" onClick={() => go(-1)} aria-label="Trước">
        <Icon name="arrowLeft" size={22} />
      </button>

      <div className="polaroid-stage">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            className="polaroid"
            custom={dir}
            initial={{ opacity: 0, x: dir * 70 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            exit={{ opacity: 0, x: dir * -70 }}
            transition={{ duration: 0.3 }}
          >
            {hasReal ? (
              <div className="polaroid-photo">
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                {photo.kind === "upload" && (
                  <button
                    className="photo-del"
                    onClick={removeCurrent}
                    aria-label="Xoá ảnh này"
                    title="Xoá ảnh này"
                  >
                    <Icon name="trash" size={16} />
                  </button>
                )}
              </div>
            ) : (
              <div
                className="polaroid-photo"
                style={{
                  background: `linear-gradient(160deg, ${photo.from}, ${photo.to})`,
                }}
              >
                <Icon name={photo.icon} size={56} className="polaroid-emoji" />
              </div>
            )}
            <p className="polaroid-caption">{photo.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="nav-btn" onClick={() => go(1)} aria-label="Sau">
        <Icon name="arrowRight" size={22} />
      </button>

      <div className="dots">
        {list.map((_, i) => (
          <span key={i} className={`dot ${i === idx ? "active" : ""}`} />
        ))}
      </div>

      {/* Nút tải ảnh lên */}
      <div className="album-actions">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={onPick}
          style={{ display: "none" }}
        />
        <button
          className="btn upload-btn"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
        >
          <Icon name="upload" size={20} />
          {busy ? "Đang thêm…" : "Tải ảnh của Lanh lên"}
        </button>
      </div>

      {error && <p className="album-error">{error}</p>}
      {!hasReal && (
        <p className="album-hint">
          Bấm nút trên để chọn ảnh từ máy/điện thoại, hoặc bỏ ảnh vào thư mục{" "}
          <b>src/photos</b> 🌷
        </p>
      )}
    </div>
  );
}
