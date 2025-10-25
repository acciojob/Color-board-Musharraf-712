const container = document.querySelector(".container");
const colors = ["#00ffea", "#f54242", "#ffee00", "#8d42f5", "#42f554"];

const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // ✅ INITIAL COLOR SET VIA JS (Cypress can detect this!)
    square.style.backgroundColor = "rgb(29, 29, 29)";

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = color;
}

function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = "rgb(29, 29, 29)";
    }, 1000);
}
