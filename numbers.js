const container = document.getElementById("numbers-container");

for (let i = 1; i <= 100; i++) {
  const col = document.createElement("div");
  col.className = "col";

  col.innerHTML = `
    <button class="number-card" onclick="playNumber(${i}, this)">
      ${i}
    </button>
  `;

  container.appendChild(col);
}

function playNumber(num, el) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${num}&tl=en&client=tw-ob`;
  const audio = new Audio(url);
  audio.play();

  el.classList.remove("animate");
  void el.offsetWidth; // Re-trigger animation
  el.classList.add("animate");
}
