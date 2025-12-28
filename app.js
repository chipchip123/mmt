/* ================= GLOBAL STATE ================= */
let CURRENT_MODE = "menu";
let CURRENT_CHAPTER = null;
let QUESTIONS = [];
let CURRENT_INDEX = 0;
let USER_ANSWERS = [];

let CORRECT_COUNT = 0;
let WRONG_COUNT = 0;

/* ================= CHAPTER TITLES ================= */
const CHAPTER_TITLES = {
  1: "Chapter 1 – Introduction",
  2: "Chapter 2 – Physical Layer",
  3: "Chapter 3 – Data Link Layer",
  4: "Chapter 4 – MAC & LAN",
  5: "Chapter 5 – Network Layer",
  6: "Chapter 6 – Transport Layer",
  7: "Chapter 7 – Application Layer"
};

/* ================= UTILS ================= */
function shuffle(arr) {
  return arr
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(x => x.v);
}

/* ================= UI FUNCTIONS ================= */
function showHeader(title) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("title").innerText = title;
}

function showMenu() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("content").innerHTML =
    "<p style='text-align:center'>Chọn chương hoặc chế độ thi để bắt đầu.</p>";
}

/* ================= RESET STATE ================= */
function resetState() {
  QUESTIONS = [];
  USER_ANSWERS = [];
  CURRENT_INDEX = 0;
  CORRECT_COUNT = 0;
  WRONG_COUNT = 0;
}

/* ================= LOADERS ================= */
function loadChapter(ch) {
  CURRENT_MODE = "chapter";
  CURRENT_CHAPTER = ch;
  resetState();
  showHeader(CHAPTER_TITLES[ch]);

  const script = document.createElement("script");
  script.src = `question${ch}.js`;
  
  script.onload = () => {
    if (!window[`question${ch}`]) {
        alert("Chưa có dữ liệu cho chương này!");
        showMenu();
        return;
    }
    window[`question${ch}`].forEach(sec => {
      sec.questions.forEach(q => {
        QUESTIONS.push({
          ...q,
          section: sec.section,
          cheatSheet: sec.cheatSheet
        });
      });
    });
    QUESTIONS = shuffle(QUESTIONS);
    renderQuestion();
  };
  
  script.onerror = () => {
      alert(`Không tìm thấy file: question${ch}.js`);
      showMenu();
  };
  
  document.body.appendChild(script);
}

function loadMockPDF() {
  CURRENT_MODE = "mock_pdf";
  resetState();
  showHeader("Mock Test – 40 / 200 PDF");

  const script = document.createElement("script");
  script.src = "mock_pdf.js";
  script.onload = () => {
    if(typeof mock_pdf === 'undefined') { alert("Lỗi file mock_pdf.js"); return; }
    QUESTIONS = shuffle(mock_pdf).slice(0, 40);
    renderQuestion();
  };
  document.body.appendChild(script);
}

function loadMockMix() {
  CURRENT_MODE = "mock_mix";
  resetState();
  showHeader("Mock Test – Mix Chapters 1–7");

  const loaders = [];
  for (let i = 1; i <= 7; i++) {
    loaders.push(
      new Promise(resolve => {
        const s = document.createElement("script");
        s.src = `question${i}.js`;
        s.onload = () => resolve(true);
        s.onerror = () => resolve(false);
        document.body.appendChild(s);
      })
    );
  }

  Promise.all(loaders).then(() => {
    let pool = [];
    for (let i = 1; i <= 7; i++) {
      if (window[`question${i}`]) {
        window[`question${i}`].forEach(sec => {
          sec.questions.forEach(q => {
            pool.push({
              ...q,
              section: sec.section,
              cheatSheet: sec.cheatSheet
            });
          });
        });
      }
    }
    if (pool.length === 0) { alert("Không tải được câu hỏi nào!"); showMenu(); return; }
    QUESTIONS = shuffle(pool).slice(0, 40);
    renderQuestion();
  });
}

/* ================= MAIN RENDER ================= */
function renderQuestion() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  if (CURRENT_INDEX >= QUESTIONS.length) {
    return renderReview();
  }

  const q = QUESTIONS[CURRENT_INDEX];
  
  const options = shuffle(
    q.options.map((opt, idx) => ({
      text: opt,
      correct: idx === q.answer
    }))
  );

  // LƯU Ý: Thêm thuộc tính data-correct="${o.correct}" để tìm nút đúng dễ dàng
  content.innerHTML = `
    <div style="margin-bottom: 10px; color: #666; font-size: 0.9em;">${q.section || "General"}</div>
    <div class="progress">Câu ${CURRENT_INDEX + 1} / ${QUESTIONS.length}</div>
    <p class="question-text">${q.q}</p>
    <div id="answers">
      ${options
        .map(
          o =>
            `<button class="answer-btn" onclick="submitAnswer(${o.correct}, this)" data-correct="${o.correct}">
              ${o.text}
            </button>`
        )
        .join("")}
    </div>
  `;
}

/* ================= SUBMIT & FEEDBACK (ĐÃ NÂNG CẤP) ================= */
function submitAnswer(isCorrect, btn) {
  const q = QUESTIONS[CURRENT_INDEX];

  // 1. Khóa tất cả các nút
  document.querySelectorAll(".answer-btn").forEach(b => b.classList.add("disabled"));

  // 2. Tìm nút đúng (để hiển thị nếu người dùng chọn sai)
  let correctBtn = null;
  document.querySelectorAll(".answer-btn").forEach(b => {
      if (b.getAttribute("data-correct") === "true") {
          correctBtn = b;
      }
  });

  // 3. Xử lý Đúng/Sai
  if (isCorrect) {
    CORRECT_COUNT++;
    btn.classList.add("correct"); // Tô xanh nút mình chọn
  } else {
    WRONG_COUNT++;
    btn.classList.add("wrong"); // Tô đỏ nút mình chọn
    if (correctBtn) {
        correctBtn.classList.add("correct"); // TỰ ĐỘNG TÔ XANH NÚT ĐÚNG
    }
  }

  USER_ANSWERS.push({
    question: q.q,
    correct: isCorrect,
    keyword: q.keyword,
    cheatSheet: q.cheatSheet
  });

  const content = document.getElementById("content");
  
  // Tạo Cheat Sheet
  let cheatSheetHTML = "";
  if (q.cheatSheet && q.cheatSheet.length > 0) {
      cheatSheetHTML = `
        <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 15px; border-left: 4px solid #007bff;">
            <strong>💡 Kiến thức cần nhớ (Keyword: ${q.keyword || "General"})</strong>
            <ul style="margin: 5px 0 0 20px; padding: 0;">
                ${q.cheatSheet.map(c => {
                    const isRelevant = q.keyword && c.term.includes(q.keyword.split(":")[0]); 
                    const style = isRelevant ? "color: #d63384; font-weight: bold;" : "";
                    return `<li style="${style}"><b>${c.term}</b>: ${c.def}</li>`;
                }).join("")}
            </ul>
        </div>
      `;
  }

  // Lấy nội dung text của đáp án đúng để hiện ra log
  const correctAnswerText = correctBtn ? correctBtn.innerText : "Không xác định";

  content.innerHTML += `
    <hr>
    <div style="margin-top: 10px;">
        ${isCorrect 
            ? "<span style='color:green; font-weight:bold; font-size:1.2em'>✅ CHÍNH XÁC!</span>" 
            : `<span style='color:red; font-weight:bold; font-size:1.2em'>❌ SAI RỒI!</span><br>
               <span style='color:green;'>👉 Đáp án đúng là: <b>${correctAnswerText}</b></span>`
        }
    </div>
    ${cheatSheetHTML}
    <button class="next-btn" onclick="nextQuestion()" style="margin-top: 15px; padding: 10px 20px; cursor: pointer; background: #333; color: #fff; border: none; border-radius: 4px;">Câu tiếp ➡</button>
  `;
}

function nextQuestion() {
  CURRENT_INDEX++;
  renderQuestion();
}

/* ================= RESULT SCREEN ================= */
function renderReview() {
  const total = CORRECT_COUNT + WRONG_COUNT;
  const score = total === 0 ? 0 : ((CORRECT_COUNT / total) * 100).toFixed(0);
  let scoreColor = score >= 80 ? "green" : (score >= 50 ? "orange" : "red");

  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>📊 KẾT QUẢ BÀI LÀM</h2>
    <div style="font-size: 1.2em; margin-bottom: 20px;">
        <p>✅ Đúng: <b>${CORRECT_COUNT}</b></p>
        <p>❌ Sai: <b>${WRONG_COUNT}</b></p>
        <p>🏆 Điểm số: <b style="color:${scoreColor}; font-size: 1.5em">${score}/100</b></p>
    </div>
    <hr>
    <h3>📖 XEM LẠI CÁC CÂU ĐÃ LÀM</h3>
    ${USER_ANSWERS.map((a, i) => `
      <div style="border-bottom: 1px solid #eee; padding: 10px 0;">
        <p><b>Câu ${i + 1}:</b> ${a.question} <span style="float:right">${a.correct ? "✅" : "❌"}</span></p>
        ${!a.correct ? `<p style="color: #666; font-size: 0.9em;"><i>Xem lại keyword: ${a.keyword}</i></p>` : ""}
      </div>
    `).join("")}
    <button onclick="goBack()" style="margin-top: 20px; padding: 10px; width: 100%;">⬅ Quay về Menu</button>
  `;
}

function goBack() {
  CURRENT_MODE = "menu";
  CURRENT_CHAPTER = null;
  resetState();
  showMenu();
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  showMenu();
});
