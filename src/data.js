// 💖 Tùy chỉnh mọi nội dung ở đây. "icon" là tên icon trong components/Icon.jsx

export const NAME = "Lan Anh";   // tên hiện ở trang chính
export const NICK = "Lanh";      // cách xưng hô thân mật
export const ME = "tớ";          // người viết tự xưng

// Danh sách nhạc nền (file đặt trong thư mục public/).
// Bài đầu sẽ tự phát; hết bài sẽ tự sang bài kế. Sửa "title" cho đẹp tuỳ ý.
// file: tên file trong public/ (không có dấu "/" đầu — sẽ tự ghép base URL)
export const TRACKS = [
  { file: "aingaoianh.mp3", title: "Ai Ngại Ngùng Anh" },
  { file: "Mattroicuaem.mp3", title: "Mặt Trời Của Em" },
  { file: "1thanh2.mp3", title: "1 Thành 2" },
  { file: "votay.mp3", title: "Vỗ Tay" },
];

// Ngày "ngưng làm bạn" — bắt đầu đếm (năm, tháng 0-11, ngày)
export const SINCE_DATE = new Date(2026, 1, 16, 0, 0, 0); // 16/02/2026
export const SINCE_LABEL = 'Ngày "ngưng làm bạn"';
export const SINCE_TEXT = "Tính từ 16/02/2026 đến hôm nay… và còn dài dài về sau 💫";

// ====== MENU CÁC TRANG (thứ tự khớp với App.jsx) ======
export const PAGES = [
  { id: "cover", title: "Trang bìa", icon: "heart" },
  { id: "lantern", title: "Thả đèn lồng ước", icon: "lantern" },
  { id: "intro", title: "Lời mở đầu", icon: "pen" },
  { id: "days", title: 'Ngày "ngưng làm bạn"', icon: "clock" },
  { id: "diary", title: "Nhật ký", icon: "book" },
  { id: "reasons", title: "Lý do dễ thương", icon: "heart" },
  { id: "notes", title: "Lời nhắn", icon: "note" },
  { id: "album", title: "Album", icon: "camera" },
  { id: "wishlist", title: "Muốn cùng làm", icon: "checklist" },
  { id: "favorites", title: "Sở thích của Lanh", icon: "heartFill" },
  { id: "places", title: "Nơi muốn đi", icon: "map" },
  { id: "quiz", title: "Đố vui", icon: "question" },
  { id: "wishjar", title: "Hũ điều ước", icon: "jar" },
  { id: "meter", title: "Đo độ đáng yêu", icon: "smile" },
  { id: "openwhen", title: "Mở ra khi…", icon: "envelope" },
  { id: "promises", title: "Lời hứa của tớ", icon: "heartFill" },
  { id: "mood", title: "Hôm nay thế nào?", icon: "faceNeutral" },
  { id: "compliment", title: "Lời khen mỗi ngày", icon: "sparkle" },
  { id: "heartcatch", title: "Bắt trái tim", icon: "heart" },
  { id: "ask", title: "Một câu hỏi nhỏ", icon: "paw" },
  { id: "end", title: "Lời kết", icon: "gift" },
];

// ====== THẢ ĐÈN LỒNG ƯỚC ======
export const LANTERN_PLACEHOLDER = "Viết điều ước cho Lanh…";
export const LANTERN_DEFAULT_WISH = "Mong Lanh luôn vui và xinh xắn";

// Lá thư đánh máy từng chữ
export const LOVE_LETTER = `Gửi Lanh,

Tớ không giỏi nói mấy lời hoa mỹ đâu,
nên tớ làm hẳn một cuốn sổ tay nhỏ thế này.

Mỗi trang là một điều tớ thích ở Lanh,
một ngày tụi mình đi qua, một điều tớ mong sắp tới.

Cảm ơn Lanh vì đã "ngưng làm bạn" với tớ,
để mình bắt đầu một chương dễ thương hơn nhiều.

— ${ME}`;

// Những lý do (chạm để lật mở)
export const REASONS = [
  { icon: "flower", text: "Vì nụ cười của Lanh đáng yêu lắm" },
  { icon: "star", text: "Vì Lanh làm ngày của tớ sáng hơn" },
  { icon: "heartFill", text: "Vì sự dịu dàng của Lanh" },
  { icon: "sparkle", text: "Vì Lanh luôn cố gắng mỗi ngày" },
  { icon: "gift", text: "Vì Lanh xinh theo cách rất riêng" },
  { icon: "cat", text: "Vì… đơn giản là Lanh thôi" },
];

// Nhật ký nhỏ — dòng thời gian
export const DIARY = [
  { date: "16 · 02 · 2026", title: "Ngày ngưng làm bạn", text: "Một quyết định be bé mà tớ thấy đúng nhất từ trước tới giờ.", icon: "flower" },
  { date: "Những ngày sau đó", title: "Quen dần", text: "Tự nhiên thấy ngày nào nhắn tin với Lanh cũng vui hơn hẳn.", icon: "quote" },
  { date: "Mỗi ngày", title: "Thói quen mới", text: "Sáng mở mắt là muốn chúc Lanh một ngày dễ thương.", icon: "star" },
  { date: "Sắp tới", title: "Còn nhiều trang trống", text: "Để dành viết tiếp cùng Lanh nha.", icon: "book" },
];

// Lời nhắn (giấy ghi chú)
export const NOTES = [
  { text: "Lanh cười là tớ thấy cả ngày ổn áp", icon: "smile" },
  { text: "Nhớ uống đủ nước nha Lanh", icon: "leaf" },
  { text: "Mệt thì cứ nghỉ, có tớ ở đây", icon: "heart" },
  { text: "Lanh giỏi hơn Lanh nghĩ nhiều đó", icon: "star" },
  { text: "Hôm nay Lanh cũng đáng yêu như mọi hôm", icon: "flower" },
];

// Điều muốn cùng làm (chạm để tích ✓)
export const WISHLIST = [
  { text: "Đi ăn món Lanh thích", icon: "gift" },
  { text: "Chụp một tấm hình thật xinh", icon: "camera" },
  { text: "Đi dạo lúc trời mát", icon: "leaf" },
  { text: "Xem chung một bộ phim", icon: "playlist" },
  { text: "Cùng nhau ngắm hoàng hôn", icon: "star" },
];

// ====== TRANG MỚI ======

// Trang "Sở thích của Lanh" — gợi ý bấm nhanh (Lanh vẫn tự thêm được)
export const FAV_LIKES_SUGGEST = [
  "Trà sữa", "Đồ ngọt", "Mèo con", "Ngủ nướng", "Nghe nhạc",
  "Trời mát", "Hoa", "Xem phim", "Đi dạo", "Được khen",
  "Chụp ảnh", "Ăn vặt", "Thú bông", "Mưa nhẹ",
];
export const FAV_DISLIKES_SUGGEST = [
  "Trời nóng", "Đợi lâu", "Bị bỏ đói", "Muỗi", "Thức khuya",
  "Bị giục", "Deadline", "Cãi nhau", "Mất wifi", "Bị phớt lờ",
];

// Những nơi muốn cùng đi
export const PLACES = [
  { name: "Quán nhỏ ven đường", note: "Ngồi nhâm nhi và nói chuyện cả buổi", icon: "leaf" },
  { name: "Đồi ngắm hoàng hôn", note: "Xem trời đổi màu cùng nhau", icon: "star" },
  { name: "Hiệu sách yên tĩnh", note: "Mỗi đứa chọn cho nhau một cuốn", icon: "book" },
  { name: "Bất cứ đâu", note: "Miễn là có Lanh là vui rồi", icon: "heartFill" },
];

// Đố vui nho nhỏ
export const QUIZ = [
  {
    q: "Theo Lanh, điều tớ thích nhất ở Lanh là gì?",
    options: ["Nụ cười", "Sự dịu dàng", "Tất cả luôn"],
    answer: 2,
    yay: "Đúng rồi đó, là tất cả luôn 🥰",
  },
  {
    q: "Tụi mình “ngưng làm bạn” từ ngày nào?",
    options: ["14/02/2026", "16/02/2026", "Bí mật"],
    answer: 1,
    yay: "Chuẩn không cần chỉnh 💞",
  },
  {
    q: "Khi Lanh buồn thì nên làm gì?",
    options: ["Nhắn cho tớ", "Nghỉ ngơi", "Cả hai nha"],
    answer: 2,
    yay: "Đúng nè, đừng giữ một mình nha 🤍",
  },
];

// Hũ điều ước — rút ngẫu nhiên
export const WISHES = [
  "Chúc Lanh hôm nay cười thật nhiều 🌼",
  "Mong mọi điều tốt lành đều tìm đến Lanh 🍀",
  "Ước gì tớ luôn làm Lanh thấy an tâm 🫧",
  "Chúc Lanh ngủ ngon và mơ đẹp 🌙",
  "Mong tụi mình đi được thật xa cùng nhau ✨",
  "Chúc Lanh luôn là phiên bản dễ thương nhất 🎀",
];

// Trang "Mở ra khi…" — chạm để mở phong thư
export const OPEN_WHEN = [
  { label: "khi Lanh buồn", icon: "faceSad", message: "Buồn cũng không sao đâu. Hít thở thật sâu, rồi nhắn cho tớ một câu nhé. Tớ nghe Lanh nè 🤍" },
  { label: "khi Lanh mệt", icon: "faceTired", message: "Nghỉ một chút đi, thế giới chờ Lanh được mà. Lanh đã cố gắng nhiều rồi 🌿" },
  { label: "khi Lanh nhớ tớ", icon: "heartFill", message: "Vậy thì… tớ cũng đang nhớ Lanh nè. Đọc lại cuốn sổ này là thấy tớ ngay 💞" },
  { label: "khi Lanh vui", icon: "smile", message: "Giữ nụ cười đó thật lâu nha! Niềm vui của Lanh là điều tớ thích nhất 🌈" },
  { label: "khi cần động viên", icon: "star", message: "Lanh giỏi hơn Lanh nghĩ nhiều lắm. Cứ từ từ, tớ tin Lanh làm được ✨" },
  { label: "khi trời mưa", icon: "leaf", message: "Pha một ly gì ấm, nghe bản nhạc nền của sổ này, và nghĩ tới điều dễ thương nhé ☔" },
];

// Lời hứa của tớ
export const PROMISES = [
  { text: "Tớ hứa luôn lắng nghe khi Lanh cần", icon: "smile" },
  { text: "Tớ hứa làm Lanh cười nhiều hơn khóc", icon: "heartFill" },
  { text: "Tớ hứa kiên nhẫn kể cả lúc Lanh giận dỗi", icon: "leaf" },
  { text: "Tớ hứa nhớ những điều nhỏ xíu của Lanh", icon: "star" },
  { text: "Tớ hứa cùng Lanh đi thật xa, từ từ thôi", icon: "map" },
];

// Hôm nay Lanh thấy thế nào? — chọn tâm trạng
export const MOODS = [
  { label: "Vui", icon: "smile", reply: "Yeah! Vậy thì tớ cũng vui lây rồi 🌈" },
  { label: "Tạm ổn", icon: "faceNeutral", reply: "Ổn là tốt rồi. Mong điều dễ thương sẽ ghé qua Lanh hôm nay 🌼" },
  { label: "Buồn", icon: "faceSad", reply: "Ôm Lanh một cái nè. Buồn cứ nói với tớ, đừng giữ một mình nhé 🤍" },
  { label: "Mệt", icon: "faceTired", reply: "Nghỉ ngơi đi Lanh, tớ canh cho. Lanh xứng đáng được thư giãn 🌿" },
  { label: "Nhớ tớ", icon: "heartFill", reply: "Bắt được Lanh rồi nha! Tớ cũng nhớ Lanh nhiều lắm 💞" },
];

// Lời khen — rút ngẫu nhiên
export const COMPLIMENTS = [
  "Lanh có nụ cười làm người ta vui theo.",
  "Lanh dịu dàng một cách rất tự nhiên.",
  "Ở cạnh Lanh thấy bình yên ghê.",
  "Lanh chăm chỉ và đáng yêu cùng lúc, hiếm lắm đó.",
  "Giọng Lanh nói chuyện nghe dễ thương xỉu.",
  "Lanh là kiểu người làm ngày thường cũng thành đặc biệt.",
  "Tớ thích cách Lanh quan tâm mọi người.",
  "Lanh xinh, mà bên trong còn xinh hơn.",
];

// Câu nói lãng mạn xoay vòng
export const QUOTES = [
  "“Lanh là điều dễ thương nhất tớ từng gặp.”",
  "“Mỗi ngày có Lanh đều đáng yêu hơn.”",
  "“Gửi Lanh một bầu trời đầy sao nhỏ.”",
  "“Lanh cười là cả thế giới sáng lên.”",
];

// Lời nhắn ngẫu nhiên khi chạm vào mèo
export const POPUP_MESSAGES = [
  "Lanh ơi, Lanh là điều dễ thương nhất hôm nay 🌷",
  "Mèo con thay tớ gửi Lanh một cái ôm thật ấm 🫶",
  "Nụ cười của Lanh đáng yêu lắm đó 🥰",
  "Chúc Lanh luôn vui và xinh xắn nha 🌈",
  "Có tớ luôn quý Lanh nhiều lắm 💞",
  "Mỗi ngày của Lanh đều rực rỡ như hoa 🌸",
];

// Ảnh dự phòng khi chưa có ảnh thật trong src/photos
export const PLACEHOLDER_PHOTOS = [
  { from: "#ffd6e8", to: "#ffb3d1", caption: "Thêm ảnh Lanh vào đây nhé", icon: "camera" },
  { from: "#d6e8ff", to: "#b3d1ff", caption: "Một khoảnh khắc xinh", icon: "flower" },
  { from: "#e8d6ff", to: "#d1b3ff", caption: "Lấp lánh như sao", icon: "star" },
];
