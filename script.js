/* ============================================================================
   KHU VƯỜN ĐÊM — 20.10
   ----------------------------------------------------------------------------
   👉 CHỈNH SỬA TẠI ĐÂY: toàn bộ nội dung cá nhân nằm trong CONFIG bên dưới.
   Bạn không cần đụng vào phần code phía sau.
   ============================================================================ */

const CONFIG = {
  // Tên hoặc biệt danh của vợ bạn
  wifeName: "May",

  // Ảnh của vợ bạn — thay file images/wife.jpg bằng ảnh thật (nên là ảnh vuông,
  // hoặc ảnh có khuôn mặt ở giữa). Nếu thiếu ảnh, trang vẫn chạy bình thường.
  photoPath: "images/wife.jpg",

  // ---------- CẢNH A: LỜI MỜI ----------
  invitation: {
    date: "20.10",
    title: "Dành tặng May",
    subtitle: "Một khu vườn nhỏ, đợi em bước vào và khám phá.",
    button: "Bước vào khu vườn",
  },

  // ---------- CẢNH B: HOA NỞ ----------
  bloom: {
    heading: "Bông hoa của May",
    hint: "Chạm vào từng cánh hoa để đọc lời nhắn giấu trong đó.",
    progressLabel: "Em đã đọc {read}/{total} cánh hoa",
    continueButton: "Đi tiếp",
    petalLabel: "Cánh hoa {index}", // nhãn cho screen reader
  },

  // Mỗi dòng là một lời nhắn trên một cánh hoa (6–10 dòng).
  // 👉 Thay bằng lời của chính bạn.
  petalMessages: [
    "Cảm ơn em vì đã luôn ở cạnh anh.",
    "Anh luôn tự hào về em, May",
    "Bông hoa xinh đẹp nhất của anhh",
    "Long Distance but can't stop me from loving you more",
    "Em luôn rực rỡ hơn mỗi ngày đó May aa",
    "Mỗi ngày bên em đều đáng để ăn mừng.",
    "Cảm ơn em đã kiên nhẫn với anh.",
    "Anh thương em — hôm qua, hôm nay và mãi về sau.",
  ],

  // Khám phá ẩn: đốm sáng nhỏ ở góc cảnh hoa nở
  secretFirefly: {
    message: "✦ Em tìm thấy đom đóm rồi! Có những điều nhỏ xíu anh chưa từng nói: anh luôn mong chờ ngày anh trở thành người được về nhà với em.",
    ariaLabel: "Một đốm sáng nhỏ đang nhấp nháy",
  },

  // ---------- CẢNH C: CÂU ĐỐ ----------
  riddle: {
    heading: "Một phong thư đang chờ",
    sub: "Nhưng nó được niêm phong. Trả lời câu đố nhỏ này để mở nhé.",
    question: "“Một ngày trong năm nhưng cũng như mọi năm anh đều yêu và mong em luôn được hạnh phúc. Ngày ấy là ngày nào? (viết dạng số)”",
    // Chấp nhận nhiều cách viết — so sánh không phân biệt hoa thường/dấu/khoảng trắng
    answers: ["2010", "20/10", "20.10", "20-10", "ngay 20 thang 10", "20 thang 10"],
    hint: "Gợi ý: chính là hôm nay đó",
    placeholder: "Câu trả lời của em…",
    submit: "Mở niêm phong",
    wrong: "Chưa đúng rồi… thử lại nhé, anh tin em!",
    correct: "Đúng rồi! Niêm phong đang mở…",
    skip: "Bỏ qua câu đố",
    hintButton: "Gợi ý nhỏ",
    attemptsBeforeSkip: 2, // sau số lần sai này sẽ hiện nút bỏ qua
  },

  // ---------- CẢNH D: LÁ THƯ ----------
  letter: {
    heading: "Phong thư đã mở niêm phong",
    envelopeHint: "Chạm để mở",
    greeting: "Dear May,",
    // 👉 Thay các đoạn dưới đây bằng lá thư thật của bạn (mỗi phần tử = 1 đoạn).
    paragraphs: [
      "Hic hôm nay anh lu bu vài việc quá xong quên béng mất nay là 20/10 mãi lên công ty anh mới sực nhớ ra nên anh đã lỡ mất là người đầu tiên chúc em 20/10 mất rồi hic",
      "Nhưng không chỉ vậy mà anh bỏ cuộc, nếu anh không trở thành người đầu tiên thì anh sẽ làm tất cả để trở thành người cuối cùng dành cho em mọi sự yêu thương, trân quý và tất nhiên không chỉ ở mỗi ngày 20/10 mà còn là tất cả những ngày về sau trong suốt cuộc đời này.",
      "20/10 anh mong cầu em luôn hạnh phúc, mãi vui tươi. Hãy luôn là đoá hoa rực rỡ nhất và để anh tưới nước mỗi ngày, anh sẽ trở thành thợ làm vườn nhưng không phải chăm sóc cả khu vườn mà anh sẽ dành mọi sự quan tâm cho duy nhất đoá hoa Nguyễn Trần Anh Thư của anh. Anh yêu em, 20-10 vui vẻ nha love ơi. Đừng có mà im lặng với anh nghe chưa!!",
    ],
    closing: "Chúc mừng ngày 20 tháng 10, my everything.",
    signature: "— Chồng của em",
  },

  // Lời kết hiển thị dưới lá thư
  finalMessage: "Hoa sẽ tàn, nhưng khu vườn này nở vì em mỗi ngày.",
  replayButton: "Xem lại từ đầu ↺",
};

/* ============================================================================
   TỪ ĐÂY TRỞ XUỐNG LÀ PHẦN CODE — KHÔNG CẦN CHỈNH SỬA
   ============================================================================ */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const SVG_NS = "http://www.w3.org/2000/svg";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fillTemplate = (str) => (str || "").replaceAll("{name}", CONFIG.wifeName);

  /* ------------------------------------------------------------------
     Áp nội dung từ CONFIG vào giao diện
     ------------------------------------------------------------------ */
  function applyContent() {
    $("#invitationDate").textContent = CONFIG.invitation.date;
    $("#invitationTitle").textContent = fillTemplate(CONFIG.invitation.title);
    $("#invitationSubtitle").textContent = fillTemplate(CONFIG.invitation.subtitle);
    $("#btnEnter").textContent = CONFIG.invitation.button;

    $("#bloomHeading").textContent = fillTemplate(CONFIG.bloom.heading);
    $("#bloomHint").textContent = CONFIG.bloom.hint;
    $("#btnToSecret").textContent = CONFIG.bloom.continueButton;
    $("#secretFirefly").setAttribute("aria-label", CONFIG.secretFirefly.ariaLabel);

    $("#secretHeading").textContent = CONFIG.riddle.heading;
    $("#secretSub").textContent = CONFIG.riddle.sub;
    $("#riddleQuestion").textContent = CONFIG.riddle.question;
    $("#riddleInput").placeholder = CONFIG.riddle.placeholder;
    $("#btnRiddle").textContent = CONFIG.riddle.submit;
    $("#btnHint").textContent = CONFIG.riddle.hintButton;
    $("#btnSkipRiddle").textContent = CONFIG.riddle.skip;

    $("#letterHeading").textContent = CONFIG.letter.heading;
    $("#envelopeHint").textContent = CONFIG.letter.envelopeHint;
    $("#letterGreeting").textContent = fillTemplate(CONFIG.letter.greeting);
    const body = $("#letterBody");
    body.innerHTML = "";
    CONFIG.letter.paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = fillTemplate(text);
      body.appendChild(p);
    });
    $("#letterClosing").textContent = fillTemplate(CONFIG.letter.closing);
    $("#letterSignature").textContent = CONFIG.letter.signature;
    $("#finalMessage").textContent = fillTemplate(CONFIG.finalMessage);
    $("#btnReplay").textContent = CONFIG.replayButton;
  }

  /* ------------------------------------------------------------------
     Chuyển cảnh
     ------------------------------------------------------------------ */
  function showScene(id) {
    document.querySelectorAll(".scene").forEach((s) => s.classList.remove("is-active"));
    const scene = document.getElementById(id);
    if (scene) scene.classList.add("is-active");
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  /* ------------------------------------------------------------------
     Dựng bông hoa SVG
     options: { prefix, interactive }
     ------------------------------------------------------------------ */
  const OUTER_PETAL_PATH =
    "M300 300 C 252 226, 250 146, 300 104 C 350 146, 348 226, 300 300 Z";
  const INNER_PETAL_PATH =
    "M300 300 C 264 246, 264 192, 300 162 C 336 192, 336 246, 300 300 Z";

  function svgEl(name, attrs = {}) {
    const el = document.createElementNS(SVG_NS, name);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
  }

  function buildFlower(svg, { prefix, interactive }) {
    svg.innerHTML = "";
    const messages = CONFIG.petalMessages.slice(0, 10);
    const outerCount = Math.max(6, Math.min(10, messages.length));
    const innerCount = 6;

    // ----- defs: gradient + clip ảnh -----
    const defs = svgEl("defs");

    const gOuter = svgEl("linearGradient", { id: `${prefix}-grad-outer`, x1: "0", y1: "1", x2: "0", y2: "0" });
    gOuter.append(
      svgEl("stop", { offset: "0%", "stop-color": "#a06284" }),
      svgEl("stop", { offset: "60%", "stop-color": "#d9a1b8" }),
      svgEl("stop", { offset: "100%", "stop-color": "#ecc7d6" })
    );

    const gInner = svgEl("linearGradient", { id: `${prefix}-grad-inner`, x1: "0", y1: "1", x2: "0", y2: "0" });
    gInner.append(
      svgEl("stop", { offset: "0%", "stop-color": "#c3b2df" }),
      svgEl("stop", { offset: "100%", "stop-color": "#efe0ef" })
    );

    const gCenter = svgEl("radialGradient", { id: `${prefix}-grad-center`, cx: "0.4", cy: "0.35", r: "0.9" });
    gCenter.append(
      svgEl("stop", { offset: "0%", "stop-color": "#ecc7d6" }),
      svgEl("stop", { offset: "100%", "stop-color": "#8c4a63" })
    );

    const clip = svgEl("clipPath", { id: `${prefix}-clip-center` });
    clip.append(svgEl("circle", { cx: 300, cy: 300, r: 72 }));

    defs.append(gOuter, gInner, gCenter, clip);
    svg.append(defs);

    // ----- quầng sáng sau hoa -----
    svg.append(
      svgEl("circle", {
        cx: 300, cy: 300, r: 215,
        fill: "rgba(233, 201, 143, 0.06)",
      })
    );

    // ----- cánh ngoài (tương tác) -----
    const outerGroup = svgEl("g");
    for (let i = 0; i < outerCount; i++) {
      const angle = (360 / outerCount) * i;
      const petal = svgEl("g", { class: "petal" });
      petal.style.setProperty("--angle", `${angle}deg`);
      petal.style.setProperty("--i", i);

      const shape = svgEl("path", {
        d: OUTER_PETAL_PATH,
        class: "petal-shape",
        fill: `url(#${prefix}-grad-outer)`,
        stroke: "rgba(244,236,225,0.35)",
        "stroke-width": "1.5",
      });
      const vein = svgEl("path", {
        d: "M300 292 C 298 236, 298 176, 300 126",
        fill: "none",
        stroke: "rgba(140,74,99,0.4)",
        "stroke-width": "2",
        "stroke-linecap": "round",
      });
      petal.append(shape, vein);

      if (interactive) {
        petal.setAttribute("role", "button");
        petal.setAttribute("tabindex", "0");
        petal.setAttribute(
          "aria-label",
          CONFIG.bloom.petalLabel.replaceAll("{index}", String(i + 1))
        );
        petal.dataset.index = i;
      }
      outerGroup.append(petal);
    }
    svg.append(outerGroup);

    // ----- cánh trong (trang trí) -----
    const innerGroup = svgEl("g");
    for (let i = 0; i < innerCount; i++) {
      const angle = (360 / innerCount) * i + 30;
      const petal = svgEl("g", { class: "petal petal-inner", "aria-hidden": "true" });
      petal.style.setProperty("--angle", `${angle}deg`);
      petal.style.setProperty("--i", i + 2);
      petal.append(
        svgEl("path", {
          d: INNER_PETAL_PATH,
          fill: `url(#${prefix}-grad-inner)`,
          opacity: "0.92",
        })
      );
      innerGroup.append(petal);
    }
    svg.append(innerGroup);

    // ----- nhụy hoa: ảnh hoặc dự phòng -----
    const center = svgEl("g", { class: "flower-center" });
    const ring = svgEl("circle", {
      cx: 300, cy: 300, r: 76,
      fill: "none",
      stroke: "#e9c98f",
      "stroke-width": "3",
    });

    const fallback = svgEl("g");
    fallback.append(
      svgEl("circle", { cx: 300, cy: 300, r: 72, fill: `url(#${prefix}-grad-center)` })
    );
    const initial = svgEl("text", {
      x: 300, y: 288,
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      "font-family": "'Cormorant Garamond', serif",
      "font-size": "58",
      fill: "#fbf6ec",
    });
    initial.textContent = (CONFIG.wifeName.trim()[0] || "❀").toUpperCase();
    const heart = svgEl("text", {
      x: 300, y: 334,
      "text-anchor": "middle",
      "font-size": "26",
      fill: "#fbf6ec",
    });
    heart.textContent = "♥";
    fallback.append(initial, heart);
    center.append(fallback);

    // Ảnh chỉ chèn khi tải được — tránh lỗi/biểu tượng vỡ ảnh
    const probe = new Image();
    probe.onload = () => {
      const img = svgEl("image", {
        href: CONFIG.photoPath,
        x: 228, y: 228, width: 144, height: 144,
        preserveAspectRatio: "xMidYMid slice",
        "clip-path": `url(#${prefix}-clip-center)`,
      });
      center.append(img);  // ảnh đè lên fallback
      center.append(ring); // đưa vành vàng lên trên cùng
    };
    probe.onerror = () => { /* giữ fallback, không báo lỗi */ };
    probe.src = CONFIG.photoPath;

    center.append(ring);
    svg.append(center);
  }

  /* ------------------------------------------------------------------
     Cảnh B: tương tác cánh hoa + đom đóm bí mật
     ------------------------------------------------------------------ */
  const visited = new Set();
  let continueShown = false;

  function updateProgress() {
    const total = Math.max(6, Math.min(10, CONFIG.petalMessages.length));
    $("#bloomProgress").textContent = CONFIG.bloom.progressLabel
      .replaceAll("{read}", String(visited.size))
      .replaceAll("{total}", String(total));
  }

  function openPetal(petal) {
    const i = Number(petal.dataset.index);
    const msg = CONFIG.petalMessages[i];
    if (msg == null) return;

    petal.classList.add("is-visited");
    visited.add(i);

    const note = $("#petalNote");
    $("#petalNoteIndex").textContent = CONFIG.bloom.petalLabel.replaceAll("{index}", String(i + 1));
    $("#petalNoteText").textContent = fillTemplate(msg);
    note.hidden = false;

    updateProgress();
    maybeShowContinue();
  }

  function maybeShowContinue() {
    if (continueShown) return;
    // Hiện nút "Đi tiếp" sau khi đọc ít nhất 1 lời nhắn (không ép đọc hết)
    if (visited.size >= 1) {
      continueShown = true;
      $("#btnToSecret").hidden = false;
    }
  }

  function initBloomScene() {
    const svg = $("#flower");
    buildFlower(svg, { prefix: "main", interactive: true });

    svg.addEventListener("click", (e) => {
      const petal = e.target.closest(".petal:not(.petal-inner)");
      if (petal) openPetal(petal);
    });
    svg.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const petal = e.target.closest(".petal:not(.petal-inner)");
      if (petal) {
        e.preventDefault();
        openPetal(petal);
      }
    });

    const firefly = $("#secretFirefly");
    firefly.addEventListener("click", () => {
      firefly.classList.add("is-found");
      showToast(fillTemplate(CONFIG.secretFirefly.message), 7000);
    });

    updateProgress();
  }

  let toastTimer = null;
  function showToast(text, ms) {
    const toast = $("#toast");
    toast.textContent = text;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, ms);
  }

  /* ------------------------------------------------------------------
     Cảnh C: câu đố mở niêm phong
     ------------------------------------------------------------------ */
  // Chuẩn hoá: bỏ dấu, chữ thường, bỏ khoảng trắng & ký tự phân cách
  function normalizeAnswer(s) {
    return (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[\s./\\-]+/g, "");
  }

  function initRiddle() {
    const form = $("#riddleForm");
    const input = $("#riddleInput");
    const feedback = $("#riddleFeedback");
    const card = form.closest(".riddle-card");
    const expected = CONFIG.riddle.answers.map(normalizeAnswer);
    let wrongCount = 0;

    function unlock() {
      feedback.textContent = CONFIG.riddle.correct;
      input.disabled = true;
      $("#btnRiddle").disabled = true;
      $("#sealedEnvelope").classList.add("is-unsealing");
      setTimeout(() => showScene("scene-letter"), prefersReducedMotion ? 150 : 1200);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const guess = normalizeAnswer(input.value);
      if (guess && expected.includes(guess)) {
        unlock();
        return;
      }
      wrongCount++;
      feedback.textContent = CONFIG.riddle.wrong;
      card.classList.remove("is-wrong");
      // reflow để animation shake chạy lại được
      void card.offsetWidth;
      card.classList.add("is-wrong");
      if (wrongCount >= CONFIG.riddle.attemptsBeforeSkip) {
        $("#btnSkipRiddle").hidden = false;
      }
    });

    $("#btnHint").addEventListener("click", () => {
      feedback.textContent = CONFIG.riddle.hint;
    });

    $("#btnSkipRiddle").addEventListener("click", unlock);
  }

  /* ------------------------------------------------------------------
     Cảnh D: phong thư & lá thư
     ------------------------------------------------------------------ */
  function spawnFallingPetals() {
    if (prefersReducedMotion) return;
    const container = $("#petalFall");
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("span");
      p.className = "falling-petal";
      p.style.left = `${Math.random() * 100}%`;
      p.style.setProperty("--fall-dur", `${6 + Math.random() * 6}s`);
      p.style.setProperty("--fall-delay", `${Math.random() * 2.5}s`);
      p.style.setProperty("--spin", `${180 + Math.random() * 420}deg`);
      container.appendChild(p);
    }
    // dọn dẹp sau khi rơi xong
    setTimeout(() => { container.innerHTML = ""; }, 16000);
  }

  function initLetter() {
    const envelope = $("#envelope");
    envelope.addEventListener("click", () => {
      if (envelope.classList.contains("is-open")) return;
      envelope.classList.add("is-open");
      spawnFallingPetals();
      const delay = prefersReducedMotion ? 100 : 1400;
      setTimeout(() => {
        $("#envelopeStage").hidden = true;
        const stage = $("#letterStage");
        stage.hidden = false;
        buildFlower($("#miniFlower"), { prefix: "mini", interactive: false });
      }, delay);
    });

    $("#btnReplay").addEventListener("click", () => window.location.reload());
  }

  /* ------------------------------------------------------------------
     Đom đóm nền
     ------------------------------------------------------------------ */
  function initFireflies() {
    if (prefersReducedMotion) return;
    const box = $("#fireflies");
    for (let i = 0; i < 12; i++) {
      const f = document.createElement("span");
      f.className = "firefly";
      f.style.left = `${Math.random() * 100}%`;
      f.style.top = `${15 + Math.random() * 80}%`;
      f.style.setProperty("--dx", `${-60 + Math.random() * 120}px`);
      f.style.setProperty("--dy", `${-90 + Math.random() * 60}px`);
      f.style.setProperty("--dur", `${12 + Math.random() * 12}s`);
      f.style.setProperty("--delay", `${Math.random() * 6}s`);
      box.appendChild(f);
    }
  }

  /* ------------------------------------------------------------------
     Khởi động
     ------------------------------------------------------------------ */
  function init() {
    applyContent();
    initFireflies();
    initBloomScene();
    initRiddle();
    initLetter();

    $("#btnEnter").addEventListener("click", () => {
      showScene("scene-bloom");
      // chờ chuyển cảnh rồi mới cho hoa nở
      setTimeout(() => $("#flower").classList.add("is-bloomed"), prefersReducedMotion ? 0 : 350);
    });

    $("#btnToSecret").addEventListener("click", () => showScene("scene-secret"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
