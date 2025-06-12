function flipCard(cardElement, letter) {
  // Unflip all other cards
  document.querySelectorAll(".flip-card").forEach((card) => {
    if (card !== cardElement) {
      card.classList.remove("flipped");
    }
  });

  // Toggle flip on clicked card
  cardElement.classList.toggle("flipped");

  // Play sound using Google TTS
  const text = encodeURIComponent(letter);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${text}&tl=bn&client=tw-ob`;
  const audio = new Audio(url);
  audio.play();
}
