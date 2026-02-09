// ================== SAFETY CHECK ==================
if (typeof questions === "undefined" || !Array.isArray(questions)) {
  alert("Questions not loaded properly!");
  throw new Error("Questions array missing");
}

// ================== VARIABLES ==================
let currentIndex = 0;
let answers = [];
let status = [];
let timeLeft = 6000; // 100 minutes
let timerStarted = false;

// ================== INIT ==================
for (let i = 0; i < questions.length; i++) {
  answers[i] = null;
  status[i] = "notVisited";
}

// ================== TIMER ==================
function startTimer() {
  if (timerStarted) return;
  timerStarted = true;

  setInterval(() => {
    if (timeLeft <= 0) {
      submitExam();
      return;
    }

    timeLeft--;

    let h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    let m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    let s = String(timeLeft % 60).padStart(2, "0");

    document.getElementById("timer").innerText = `${h}:${m}:${s}`;
  }, 1000);
}

// ================== LOAD QUESTION ==================
function loadQuestion() {
  const q = questions[currentIndex];

  document.getElementById("qno").innerText =
    `Question ${currentIndex + 1}`;

  document.getElementById("questionText").innerText = q.question;

  const opt = document.getElementById("options");
  opt.innerHTML = "";

  q.options.forEach((o, i) => {
    const isSelected = answers[currentIndex] === i;

    opt.innerHTML += `
      <label class="option ${isSelected ? "active" : ""}" onclick="selectOption(${i})">
        <span class="dot"></span>
        ${o}
      </label>
    `;
  });

  if (status[currentIndex] === "notVisited") {
    status[currentIndex] = "notAnswered";
  }

  buildPalette();
}

// ================== SELECT OPTION ==================
function selectOption(i) {
  answers[currentIndex] = i;
  status[currentIndex] =
    status[currentIndex] === "marked"
      ? "answeredMarked"
      : "answered";

  // 🔥 IMPORTANT: re-render to apply active class
  loadQuestion();
}

// ================== ACTIONS ==================
function saveAndNext() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}

function markForReview() {
  status[currentIndex] =
    answers[currentIndex] !== null ? "answeredMarked" : "marked";
  buildPalette();
}

function markForReviewNext() {
  markForReview();
  saveAndNext();
}

function clearResponse() {
  answers[currentIndex] = null;
  status[currentIndex] = "notAnswered";
  loadQuestion();
}

// ================== PALETTE ==================
function buildPalette() {
  const p = document.getElementById("paletteGrid");
  p.innerHTML = "";

  questions.forEach((_, i) => {
    p.innerHTML += `
      <button class="pbtn ${status[i]}" onclick="jump(${i})">
        ${String(i + 1).padStart(2, "0")}
      </button>
    `;
  });
}

function jump(i) {
  currentIndex = i;
  loadQuestion();
}

// ================== SUBMIT ==================
function submitExam() {
  localStorage.setItem(
    "examResult",
    JSON.stringify({ questions, answers, status })
  );
  window.location.href = "summary.html";
}

// ================== START ==================
startTimer();
loadQuestion();
