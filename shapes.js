const shapes = [
  { name: "Circle", class: "shape-box shape-circle", color: "#e84393" },
  { name: "Square", class: "shape-box", color: "#00cec9" },
  {
    name: "Rectangle",
    class: "shape-box",
    color: "#fdcb6e",
    style: { width: "180px", height: "100px" },
  },
  {
    name: "Triangle",
    class: "shape-box shape-triangle",
    color: "#e17055",
    noText: true,
  },
  {
    name: "Star",
    class: "shape-box shape-star",
    color: "#fab1a0",
    noText: true,
  },
];

const container = document.getElementById("shape-container");

shapes.forEach((shape, index) => {
  const col = document.createElement("div");
  col.className = "col";

  const div = document.createElement("div");
  div.className = shape.class;
  div.style.backgroundColor = shape.color;
  if (shape.style) {
    Object.entries(shape.style).forEach(([key, value]) => {
      div.style[key] = value;
    });
  }

  if (!shape.noText) {
    div.innerText = shape.name;
  }

  div.onclick = () => {
    const utter = new SpeechSynthesisUtterance(shape.name);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);

    div.classList.remove("animate");
    void div.offsetWidth;
    div.classList.add("animate");
  };

  col.appendChild(div);
  container.appendChild(col);
});
