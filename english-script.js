// Letter-to-emoji mapping
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

// Initialize and populate all cards
function initCards() {
  container.innerHTML = ""; // Clear previous cards if any

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
}

// Flip the clicked card and play sound
function flipCard(cardElement, letter) {
  // Unflip all other cards
  document.querySelectorAll(".flip-card").forEach((card) => {
    if (card !== cardElement) {
      card.classList.remove("flipped");
    }
  });

  // Flip clicked card
  cardElement.classList.toggle("flipped");

  // Play pronunciation from audio folder
  const audio = new Audio(`audio/Letters_En/${encodeURIComponent(letter)}.mp3`);
  audio
    .play()
    .catch((err) => console.warn(`Audio load failed: ${err.message}`));
}

// Reload all cards (can be linked to a Reload button)
function reloadCards() {
  initCards();
}

// Go back to the previous page
function goBack() {
  history.back();
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initCards);
