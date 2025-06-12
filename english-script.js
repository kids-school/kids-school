const letters = {
  A: "🍎",
  B: "🐝",
  C: "🐱",
  D: "🐶",
  E: "🦅",
  F: "🐸",
  G: "🦒",
  H: "🏠",
  I: "🍦",
  J: "🕹️",
  K: "🔑",
  L: "🦁",
  M: "🐵",
  N: "🌃",
  O: "🐙",
  P: "🅿️",
  Q: "👑",
  R: "🤖",
  S: "🐍",
  T: "🐯",
  U: "☂️",
  V: "🎻",
  W: "🌊",
  X: "❌",
  Y: "🛳️",
  Z: "🦓",
};

const container = document.getElementById("alphabet-cards");

Object.entries(letters).forEach(([letter, emoji]) => {
  const card = document.createElement("div");
  card.className = "col";
  card.innerHTML = `
    <div class="flip-card" onclick="flipCard(this, '${letter}')">
      <div class="flip-card-inner">
        <div class="flip-card-front letter-card">
          <div class="letter">${letter}</div>
          <div class="emoji">${emoji}</div>
        </div>
        <div class="flip-card-back">
          <div class="emoji-back">${emoji}</div>
        </div>
      </div>
    </div>
  `;
  container.appendChild(card);
});

function flipCard(cardElement, letter) {
  // Unflip all other cards
  document.querySelectorAll(".flip-card").forEach((card) => {
    if (card !== cardElement) {
      card.classList.remove("flipped");
    }
  });

  // Toggle flip on clicked card
  cardElement.classList.toggle("flipped");

  // Play pronunciation using Google TTS
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
    letter
  )}&tl=en&client=tw-ob`;
  const audio = new Audio(url);
  audio.play();
}
