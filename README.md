# Sổ tay của Lanh 💝 (ReactJS + Vite)

Một cuốn **sổ tay điện tử** dễ thương & lãng mạn — mở phong thư, lật từng trang: lời mở đầu, đếm ngày, nhật ký, lý do, ghi chú, album ảnh, điều muốn cùng làm…

## ✨ Các trang (có MENU lật trang ở góc trái + nút lật trước/sau dưới đáy)

1. **Trang bìa** — phong thư → mèo + tên + câu nói xoay vòng
2. **Lời mở đầu** — thư đánh máy từng chữ
3. **Ngày "ngưng làm bạn"** — đếm ngày/giờ/phút/giây từ 16/02/2026 → tương lai
4. **Nhật ký** — dòng thời gian cột mốc nhỏ
5. **Lý do dễ thương** — thẻ hình tim, chạm để lật
6. **Lời nhắn** — giấy nhớ dán tường
7. **Album** — Lanh **tự tải ảnh** từ máy/điện thoại (lưu trong trình duyệt) + tự nạp ảnh đặt sẵn trong `src/photos`
8. **Muốn cùng làm** — danh sách tích ✓
9. **Playlist** — danh sách bài hát cho Lanh
10. **Nơi muốn đi** — thẻ những nơi muốn cùng đến
11. **Đố vui** — câu hỏi tương tác
12. **Hũ điều ước** — chạm để rút lời chúc ngẫu nhiên
13. **Máy đo độ đáng yêu** — thanh đo + sao, luôn vượt 100%
14. **Mở ra khi…** — phong thư mở theo tâm trạng (buồn/mệt/nhớ/vui…)
15. **Lời hứa của tớ** — danh sách lời hứa
16. **Hôm nay thế nào?** — chọn tâm trạng → lời nhắn riêng
17. **Lời khen mỗi ngày** — bấm nhận lời khen ngẫu nhiên
18. **Bắt trái tim** — mini game 20 giây
19. **Một câu hỏi nhỏ** — nút "Không" chạy trốn → pháo hoa
20. **Lời kết**

### 📷 Tải ảnh ở trang Album
Bấm **"Tải ảnh của Lanh lên"** → chọn ảnh từ máy/điện thoại (chọn được nhiều ảnh, mở camera trên điện thoại). Ảnh được nén nhẹ (~1100px) và lưu trong trình duyệt nên còn nguyên sau khi tải lại trang. Mỗi ảnh có nút 🗑 để xoá.

🎨 Toàn bộ icon là **bộ SVG tự vẽ** (`src/components/Icon.jsx`) — đồng bộ, đổi màu được, không dùng emoji.
🎵 **Nhạc nền tự phát** (`public/aingaoianh.mp3`) + nút bật/tắt.

## ▶️ Chạy

```bash
npm install
npm run dev          # máy tính
npm run dev -- --host  # để mở trên điện thoại cùng Wi-Fi
```

## 🎨 Tùy chỉnh

Mọi nội dung nằm trong **`src/data.js`**: tên, xưng hô (Lanh/tớ), ngày bắt đầu,
thư, nhật ký, lý do, ghi chú, wishlist, câu nói, tên file nhạc.

## 📸 Thêm ảnh Lanh

Bỏ ảnh (`.jpg .png .webp .gif`) vào thư mục **`src/photos/`** —
album tự hiện thêm trang. Tên file dùng làm chú thích. Đang `npm run dev`
thì lưu ảnh vào là cập nhật ngay.

## 🎵 Nhạc nền (nhiều bài)

Danh sách bài khai báo ở `TRACKS` trong **`src/data.js`** (file `.mp3` để trong `public/`).
Bài đầu tự phát, hết bài tự sang bài kế. Nút ♫ góc phải = phát/dừng; nút nhỏ
bên cạnh = mở danh sách chọn bài + chuyển trước/sau. Trang **Playlist (trang 8)**
cũng bấm chọn bài được và tô sáng bài đang phát (dùng chung một trình phát).

## ⚡ Tối ưu mượt

Vệt tim & mắt-theo-chuột chỉ chạy trên máy tính; mobile giảm số hạt hiệu ứng;
cánh hoa dùng `transform` (không gây reflow); giảm `backdrop-filter`;
hỗ trợ `prefers-reduced-motion`.

Thư viện: **react**, **framer-motion**, **canvas-confetti**.
