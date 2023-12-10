// Array of possible background colors.
const colors = ["#5e0b45", "#99003a", "#d0002b", "#ff4000", "#fbb800", "#012f68"];

// Function to generate a random number within a range.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Select the art div from the HTML panel.
const art = document.getElementById("art");

// Create 100 square elements and append them to the art div.
for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    art.appendChild(square);
}

// Get all square elements.
const squares = document.getElementsByClassName("square");

// Function to apply random styles to squares.
function randomColor() {
    if (squares.length > 0) {
        for (const item of squares) {
            const zindex = randomNumber(0, 100);
            const opacity = Math.random();
            const colorValue = randomNumber(0, colors.length - 1);
            const scaleValue = randomNumber(25, 255) / 100;
            const translateX = randomNumber(-50, 50);
            const translateY = randomNumber(-50, 50);
            
            item.style.zIndex = zindex;
            item.style.opacity = opacity;
            item.style.transform = `scale(${scaleValue}) translate(${translateX}px, ${translateY}px)`;
            item.style.backgroundColor = colors[colorValue];
        }
    }
}

// Initial random color application.
randomColor();
