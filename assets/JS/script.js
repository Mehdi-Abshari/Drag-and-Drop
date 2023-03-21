/* 
    nameProject: Drag & Drop with titab image;
    productionDate: 1401/12/23;
    developer: Mehdi-Abshari;
*/

// --> Variables
// Selecting all squares
const squares = document.querySelectorAll(".squares"),
  // Selecting the image
  img = document.querySelector(".img");

// --> Loop
// a forEach for dragover Event & dragleave Event & drop Event
squares.forEach((squares) => {
  // Dragover Event to when img drawn , the squares get border style.
  squares.addEventListener("dragover", (e) => {
    // prevent default for to not refresh the page
    e.preventDefault();
    // get class to squares to get border style
    squares.classList.add("hover");
});

// Dragleave Event to when img released , the squares remove the border style
squares.addEventListener("dragleave", () => {
    // remove class the squares and return to previous style
    squares.classList.remove("hover");
});

// Drop Event for drop image into the another square
squares.addEventListener("drop", () => {
    // Appending img to square
    squares.appendChild(img);
    // remove class the squares and return to previous style
    squares.classList.remove("hover");
  });
});
