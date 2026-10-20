# 🌸 Khu Vườn Đêm — Quà 20.10

Một website quà tặng tương tác: bông hoa nở dần trong khu vườn đêm, mỗi cánh hoa
giấu một lời nhắn, một câu đố nhỏ mở niêm phong, và một lá thư ở cuối hành trình.

**Chỉ dùng HTML + CSS + JavaScript thuần.** Không framework, không build, không backend.
Mở `index.html` là chạy.

## Cấu trúc

```
index.html      — trang duy nhất, chứa 4 cảnh
style.css       — toàn bộ giao diện & animation
script.js       — ⭐ CONFIG (nội dung cá nhân) + logic
images/wife.jpg — ảnh của vợ bạn (hiện là ảnh giữ chỗ)
README.md
```

## Cá nhân hoá (5 phút)

1. **Thay ảnh:** ghi đè `images/wife.jpg` bằng ảnh thật (giữ nguyên tên file, hoặc
   đổi `photoPath` trong CONFIG). Nên dùng ảnh vuông hoặc khuôn mặt ở giữa —
   ảnh sẽ được cắt tròn tự động. Nếu thiếu ảnh, nhụy hoa hiển thị chữ cái đầu
   tên + trái tim, trang không lỗi.
2. **Mở `script.js`**, sửa khối `CONFIG` ngay đầu file:
   - `wifeName` — tên/biệt danh.
   - `petalMessages` — 6–10 lời nhắn (mỗi dòng = 1 cánh hoa; số cánh tự khớp).
   - `riddle` — câu đố, các đáp án chấp nhận (`answers`), gợi ý. Đáp án được so
     sánh không phân biệt hoa thường, dấu tiếng Việt, khoảng trắng hay `/ . -`.
   - `letter.paragraphs` — lá thư thật của bạn (mỗi phần tử = 1 đoạn).
   - `finalMessage`, `secretFirefly.message` — lời kết & khám phá ẩn.
3. Mở `index.html` trong trình duyệt để xem trước. Không cần công cụ nào khác.

## Hành trình trải nghiệm

1. **Lời mời** → bấm "Bước vào khu vườn".
2. **Hoa nở** → chạm từng cánh để đọc lời nhắn; có một **đom đóm bí mật** nhấp
   nháy ở góc dưới bên phải. Nút "Đi tiếp" hiện sau khi đọc cánh đầu tiên.
3. **Câu đố** → trả lời để mở niêm phong (có gợi ý; sai 2 lần sẽ hiện nút bỏ qua
   — không ai bị kẹt lại).
4. **Lá thư** → chạm phong thư để mở; lá thư, hoa nhỏ và lời kết hiện ra cùng
   cánh hoa rơi.

## Đăng lên GitHub Pages (miễn phí, không cần build)

1. Tạo repository mới trên GitHub (ví dụ `qua-2010`).
2. Tải toàn bộ file của project lên repo (kéo-thả qua **Add file → Upload files**
   là đủ — nhớ kèm thư mục `images/`).
3. Vào **Settings → Pages**.
4. Ở **Build and deployment → Source**, chọn **Deploy from a branch**; branch
   `main`, thư mục `/ (root)` → **Save**.
5. Chờ 1–2 phút để GitHub Pages xuất bản.
6. Mở URL dạng `https://<username>.github.io/<ten-repo>/` và kiểm tra trên cả
   điện thoại.

> ⚠️ **Lưu ý riêng tư:** repo và URL có thể công khai — ai có link đều xem được,
> và đáp án câu đố nằm ngay trong `script.js`. Các yếu tố "ẩn" chỉ là trò chơi,
> **không phải** bảo mật. Nếu muốn kín hơn, đặt tên repo khó đoán và chỉ gửi link
> cho vợ bạn (hoặc dùng repo private + Pages nếu tài khoản hỗ trợ).

## Kỹ thuật

- Hoa là SVG dựng bằng JS thuần, nở bằng CSS transform; số cánh = số lời nhắn.
- Hoạt động tốt desktop & mobile, không cuộn ngang, nút ≥ 44–48px cho chạm.
- Cánh hoa điều khiển được bằng bàn phím (Tab + Enter/Space).
- Tôn trọng `prefers-reduced-motion`: tắt đom đóm/cánh rơi, hoa nở ngay.
- Tài nguyên ngoài duy nhất: 2 font Google (hỗ trợ đầy đủ tiếng Việt), có
  font hệ thống dự phòng nếu offline.
