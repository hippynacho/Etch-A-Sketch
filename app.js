const container = document.getElementById("container");

function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};


const grid = createGrid(16, 16);

square = document.addEventListener('hover', active);

function active() {
    const square = document.querySelector('grid-item');
    square.classList.add('active');
}
