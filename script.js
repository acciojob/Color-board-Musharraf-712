const container = document.getElementById("board");
const colors = ['#00ffea', '#f54242', '#ffee00', '#8d42f5', '#42f554'];

const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = color;
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d"; // ✅ allow CSS transition to work
}
