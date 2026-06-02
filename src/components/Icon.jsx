// 🎨 Bộ icon SVG tự vẽ, đồng bộ phong cách (nét mảnh, bo tròn)
// Dùng: <Icon name="heart" size={24} className="..." />
// Màu icon theo "currentColor" — đặt color ở CSS là đổi được.

const icons = {
  heart: (
    <path d="M12 20.4 4.5 12.9a4.5 4.5 0 0 1 6.4-6.3l1.1 1.1 1.1-1.1a4.5 4.5 0 0 1 6.4 6.3Z" />
  ),
  heartFill: (
    <path
      d="M12 20.4 4.5 12.9a4.5 4.5 0 0 1 6.4-6.3l1.1 1.1 1.1-1.1a4.5 4.5 0 0 1 6.4 6.3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  cat: (
    <>
      <path d="M6.2 7 4.9 3.3 8.4 5.1" />
      <path d="M17.8 7l1.3-3.7L15.6 5.1" />
      <path d="M18.5 11.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
      <path d="M10 11v.9M14 11v.9" />
      <path d="M8.6 14.2l-2 .4M8.6 14.2l-2-.6M15.4 14.2l2 .4M15.4 14.2l2-.6" />
      <path d="M11.3 13.1h1.4l-.7.8Z" fill="currentColor" stroke="none" />
    </>
  ),
  paw: (
    <>
      <circle cx="7.5" cy="12.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="12.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M9 18c0-2 1.4-3.2 3-3.2S15 16 15 18s-1.4 2.6-3 2.6S9 20 9 18Z" />
    </>
  ),
  envelope: (
    <>
      <rect x="3.3" y="6" width="17.4" height="12" rx="2" />
      <path d="M3.6 7 12 13l8.4-6" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20.2 5 16 15.6 5.4a2 2 0 0 1 2.8 0l.2.2a2 2 0 0 1 0 2.8L8 19.2 4 20.2Z" />
      <path d="M14 7l3 3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.3 2" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.5h10.5a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2Z" />
      <path d="M5 17.5a2 2 0 0 1 2-2h10.5" />
      <path d="M8.5 8.5h6M8.5 11.5h4" />
    </>
  ),
  note: (
    <>
      <path d="M5 4h14v9.5L13.5 19H5Z" />
      <path d="M19 13.5h-5.5V19" />
      <path d="M8 8h8M8 11h5" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.3-2h7.4L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  checklist: (
    <>
      <path d="M10 6h10M10 12h10M10 18h7" />
      <path d="M4 5.6 5 6.8 7 4.6M4 11.6 5 12.8 7 10.6M4 17.6 5 18.8 7 16.6" />
    </>
  ),
  music: (
    <>
      <path d="M9 17.5V5.5l10-2v12" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="15.5" r="2.5" />
    </>
  ),
  star: (
    <path d="M12 3.6 14.6 9l5.9.6-4.4 4 1.3 5.8L12 16.6 6.6 19.4l1.3-5.8-4.4-4 5.9-.6Z" />
  ),
  sparkle: (
    <path
      d="M12 3.8c.6 3.8 1.4 4.6 5.2 5.2-3.8.6-4.6 1.4-5.2 5.2-.6-3.8-1.4-4.6-5.2-5.2 3.8-.6 4.6-1.4 5.2-5.2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  flower: (
    <>
      <circle cx="12" cy="7" r="2.4" />
      <circle cx="6.8" cy="10.8" r="2.4" />
      <circle cx="8.8" cy="16.8" r="2.4" />
      <circle cx="15.2" cy="16.8" r="2.4" />
      <circle cx="17.2" cy="10.8" r="2.4" />
      <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14Z" />
      <path d="M9 15c2-2.5 4.5-4 8-5" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.2a2.6 2.6 0 1 1 3.6 2.4c-.9.4-1.1 1-1.1 2" />
      <path d="M12 16.6h.01" />
    </>
  ),
  gift: (
    <>
      <path d="M4 8.5h16V12H4Z" />
      <path d="M5.2 12h13.6v8H5.2Z" />
      <path d="M12 8.5V20" />
      <path d="M12 8.5C12 6 10.6 4.6 9 5.3 7.7 5.9 8.3 8.5 12 8.5Z" />
      <path d="M12 8.5C12 6 13.4 4.6 15 5.3 16.3 5.9 15.7 8.5 12 8.5Z" />
    </>
  ),
  quote: (
    <>
      <path d="M5 7.5c-1.7 0-3 1.4-3 3.3 0 1.7 1.2 3 2.9 3 .9 0 1-.2 1-.2-.3 1.5-1.4 2.4-3 2.6v1.8c3-.3 5-2.5 5-5.8V10.8C7.9 8.9 6.7 7.5 5 7.5Z" fill="currentColor" stroke="none" />
      <path d="M16 7.5c-1.7 0-3 1.4-3 3.3 0 1.7 1.2 3 2.9 3 .9 0 1-.2 1-.2-.3 1.5-1.4 2.4-3 2.6v1.8c3-.3 5-2.5 5-5.8V10.8C18.9 8.9 17.7 7.5 16 7.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6.5-5.6 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  jar: (
    <>
      <path d="M8 4h8" />
      <path d="M9 4v2.4c0 1.1-3 2.6-3 5.6v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6c0-3-3-4.5-3-5.6V4" />
      <path d="M6.6 12.5h10.8" />
      <path d="M12 18.5l-1.7-1.7a1.15 1.15 0 0 1 1.7-1.5 1.15 1.15 0 0 1 1.7 1.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M8.3 14a4.3 4.3 0 0 0 7.4 0" />
    </>
  ),
  playlist: (
    <>
      <path d="M4 7h11M4 12h11M4 17h7" />
      <path d="M16.5 14.5 21.5 17l-5 2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M4 10h16M8 4v4M16 4v4" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  lantern: (
    <>
      <path d="M9 4h6M12 3v3" />
      <rect x="7" y="6" width="10" height="13" rx="5" />
      <path d="M7.5 10.5h9M7.5 14.5h9" />
      <path d="M12 19v2.5" />
    </>
  ),
  noEntry: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M6.2 6.2l11.6 11.6" />
    </>
  ),
  trash: (
    <>
      <path d="M5 7h14" />
      <path d="M10 7V5h4v2" />
      <path d="M6.5 7l.9 12.2A1 1 0 0 0 8.4 20h7.2a1 1 0 0 0 1-.8L17.5 7" />
    </>
  ),
  upload: (
    <>
      <path d="M12 15.5V4.5M8 8l4-3.5L16 8" />
      <path d="M5 14.5v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
    </>
  ),
  faceNeutral: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M9 15h6" />
    </>
  ),
  faceSad: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M8.3 15.5a4.3 4.3 0 0 1 7.4 0" />
    </>
  ),
  faceTired: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.4 10.6h2.2M13.4 10.6h2.2" />
      <path d="M10 15h4" />
    </>
  ),
  arrowLeft: <path d="M15 5 8 12l7 7" />,
  arrowRight: <path d="M9 5l7 7-7 7" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  menu: (
    <>
      <path d="M12 6C9.5 4.5 6.5 4.5 4 5.5v13c2.5-1 5.5-1 8 .6 2.5-1.6 5.5-1.6 8-.6v-13c-2.5-1-5.5-1-8 .5Z" />
      <path d="M12 6v13.1" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="M5 12.5 10 17 19 7" />,
};

export default function Icon({ name, size = 24, className = "", style }) {
  const content = icons[name] || icons.heart;
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
