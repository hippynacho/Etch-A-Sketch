const container = document.getElementById("container");



function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};


const grid = createGrid(12, 12);
const gridItem = Array.from(document.querySelectorAll('.grid-item'));


gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
  gridItem.classList.add('active');
}));

const btn = document.querySelector('.size')


    

