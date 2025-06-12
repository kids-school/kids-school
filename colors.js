const colors = [
  { name: "Red", code: "#FF4C4C" },
  { name: "Green", code: "#4CAF50" },
  { name: "Blue", code: "#2196F3" },
  { name: "Yellow", code: "#FFEB3B" },
  { name: "Orange", code: "#FF9800" },
  { name: "Purple", code: "#9C27B0" },
  { name: "Pink", code: "#FF69B4" },
  { name: "Brown", code: "#A52A2A" },
  { name: "Black", code: "#000000" },
  { name: "White", code: "#FFFFFF", border: true },
  { name: "Cyan", code: "#00BCD4" },
  { name: "Lime", code: "#CDDC39" },
];

const container = document.getElementById("color-container");

colors.forEach((color, index) => {
  const col = document.createElement("div");
  col.className = "col";

  const box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color.code;
  if (color.border) box.style.border = "2px solid #ccc";

  box.onclick = () => {
    // Speak color name
    const utter = new SpeechSynthesisUtterance(color.name);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);

    // Animate the color box
    box.classList.remove("animate");
    void box.offsetWidth;
    box.classList.add("animate");

    // Change the page background
    document.body.style.background = color.code;

    // Optional: update the text color for visibility if background is too dark
    const isDark = isDarkColor(color.code);
    document.body.style.color = isDark ? "#fff" : "#000";
  };

  col.appendChild(box);
  container.appendChild(col);
});

// Helper to detect dark background color
function isDarkColor(hex) {
  const c = hex.substring(1); // remove #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // luminance
  return luma < 128;
}
