const container = document.getElementById("container");
const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#faebd7",
  "#00ffff",
  "#7fff00",
  "#ff00ff",
  "#ffff00",
  '#4B0082',
  '#F08080',
  '#BA55D3',
  '#FFFF00'
];
const SQURS = 700;

for (let i = 0; i < SQURS; i++) {
  const box = document.createElement("div");
  box.classList.add("square");

  box.addEventListener("mouseover", () => {
    SetcolorBox(box);
  });

  box.addEventListener("mouseout", () => {
    RemovecolorBox(box);
  });

  container.appendChild(box);
}

function getrandomcolor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function SetcolorBox(element) {
  const color = getrandomcolor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function RemovecolorBox(element) {
  const color = getrandomcolor();
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}