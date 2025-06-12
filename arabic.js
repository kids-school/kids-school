const arabicLetters = [
  "أ",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "هـ",
  "و",
  "ي",
];

const container = document.getElementById("arabic-letters-container");

arabicLetters.forEach((letter) => {
  const col = document.createElement("div");
  col.className = "col";

  col.innerHTML = `
    <button class="letter-card" onclick="playLetter('${letter}', this)">
      ${letter}
    </button>
  `;

  container.appendChild(col);
});

function playLetter(letter, element) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
    letter
  )}&tl=ar&client=tw-ob`;
  const audio = new Audio(url);
  audio.play();

  // Animate
  element.classList.remove("animate");
  void element.offsetWidth;
  element.classList.add("animate");
}
