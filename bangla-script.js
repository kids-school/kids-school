function flipCard(cardElement, letter) {
  // Unflip all other cards
  document.querySelectorAll(".flip-card").forEach((card) => {
    if (card !== cardElement) {
      card.classList.remove("flipped");
    }
  });

  // Toggle flip on clicked card
  cardElement.classList.toggle("flipped");

  // Speak the letter using Google TTS (Bangla)
  const encodedText = encodeURIComponent(letter);
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=bn&client=tw-ob`;

  // Play the audio
  const audio = new Audio(ttsUrl);
  audio.play().catch((e) => {
    console.error("Audio playback failed:", e);
  });
}
