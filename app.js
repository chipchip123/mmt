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

/* ================= UI ================= */
function showHeader(title) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("title").innerText = title;
}

function showMenu() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("content").innerHTML =
    "<p>Chọn chương hoặc đề thi để bắt đầu.</p>";
}

/* ================= RESET ================= */
function resetState() {
  QUESTIONS = [];
  USER_ANSWERS = [];
  CURRENT_INDEX = 0;
  CORRECT_COUNT = 0;
  WRONG_COUNT = 0;
}

/* ================= LOAD CHAPTER ================= */
function loadChapter(ch) {
  CURRENT_MODE = "chapter";
  CURRENT_CHAPTER = ch;
  resetState();

  showHeader(CHAPTER_TITLES[ch]);

  const script = document.createElement("script");
  script.src = `question${ch}.js`;
  script.onload = () => {
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
  document.body.appendChild(script);
}

/* ================= MOCK PDF ================= */
function loadMockPDF() {
  CURRENT_MODE = "mock_pdf";
  resetState();

  showHeader("Mock Test – 40 / 200 PDF");

  const script = document.createElement("script");
  script.src = "mock_pdf.js";
  script.onload = () => {
    QUESTIONS = shuffle(mock_pdf).slice(0, 40);
    renderQuestion();
  };
  document.body.appendChild(script);
}

/* ================= MOCK MIX ================= */
function loadMockMix() {
  CURRENT_MODE = "mock_mix";
  resetState();

  showHeader("Mock Test – Mix Chapters 1–7");

  const loaders = [];
  for (let i = 1; i <= 7; i++) {
    loaders.push(
      new Promise(res => {
        const s = document.createElement("script");
        s.src = `question${i}.js`;
        s.onload = res;
        document.body.appendChild(s);
      })
    );
  }

  Promise.all(loaders).then(() => {
    let pool = [];
    for (let i = 1; i <= 7; i++) {
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
    QUESTIONS = shuffle(pool).slice(0, 40);
    renderQuestion();
  });
}

/* ================= RENDER QUESTION ================= */
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

  content.innerHTML = `
    <h3>${q.section}</h3>
    <p><b>Câu ${CURRENT_INDEX + 1} / ${QUESTIONS.length}:</b> ${q.q}</p>
    <div id="answers">
      ${options
        .map(
          o =>
            `<button class="answer-btn" onclick="submitAnswer(${o.correct}, this)">
              ${o.text}
            </button>`
        )
        .join("")}
    </div>
  `;
}

/* ================= SUBMIT ANSWER ================= */
function submitAnswer(isCorrect, btn) {
  const q = QUESTIONS[CURRENT_INDEX];

  // khóa tất cả đáp án
  document.querySelectorAll(".answer-btn").forEach(b =>
    b.classList.add("disabled")
  );

  if (isCorrect) {
    CORRECT_COUNT++;
    btn.classList.add("correct");
  } else {
    WRONG_COUNT++;
    btn.classList.add("wrong");
  }

  USER_ANSWERS.push({
    question: q.q,
    correct: isCorrect,
    keyword: q.keyword,
    cheatSheet: q.cheatSheet
  });

  const content = document.getElementById("content");
  content.innerHTML += `
    <hr>
    <p><b>${isCorrect ? "✅ ĐÚNG" : "❌ SAI"}</b></p>
    <h4>Cheat Sheet (keyword: ${q.keyword})</h4>
    <ul>
      ${q.cheatSheet
        .map(c => `<li><b>${c.term}</b>: ${c.def}</li>`)
        .join("")}
    </ul>
    <button onclick="nextQuestion()">Câu tiếp</button>
  `;
}

/* ================= NEXT ================= */
function nextQuestion() {
  CURRENT_INDEX++;
  renderQuestion();
}

/* ================= REVIEW ================= */
function renderReview() {
  const total = CORRECT_COUNT + WRONG_COUNT;
  const score =
    total === 0 ? 0 : ((CORRECT_COUNT / total) * 100).toFixed(2);

  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>📊 KẾT QUẢ BÀI LÀM</h2>

    <p><b>✅ Số câu đúng:</b> ${CORRECT_COUNT}</p>
    <p><b>❌ Số câu sai:</b> ${WRONG_COUNT}</p>
    <p><b>📌 Tổng số câu:</b> ${total}</p>
    <p><b>🎯 Điểm:</b> ${score}%</p>

    <hr>

    <h3>📖 REVIEW CHI TIẾT</h3>

    ${USER_ANSWERS
      .map(
        (a, i) => `
      <div>
        <p><b>Câu ${i + 1}:</b> ${a.question}</p>
        <p>Kết quả: ${a.correct ? "✅ ĐÚNG" : "❌ SAI"}</p>
        <ul>
          ${a.cheatSheet
            .map(c => `<li><b>${c.term}</b>: ${c.def}</li>`)
            .join("")}
        </ul>
        <hr>
      </div>
    `
      )
      .join("")}

    <button onclick="goBack()">⬅ Back to Menu</button>
  `;
}

/* ================= BACK ================= */
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
