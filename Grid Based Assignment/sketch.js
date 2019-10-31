let grid;
let rows = 30;
let cols = 30;
let state = 'menu'
let playerX = 15;
let playerY = 15;

function setup() {
    if (windowWidth > windowHeight) {
      createCanvas(windowHeight, windowHeight);
    }
    else {
      createCanvas(windowWidth, windowWidth);
    }
  grid = createRandom2dArray(cols, rows);
  grid[playerY][playerX] = 1;
}

function draw() {
  background(220);
  menu();
  if (state === 'gamestart')
  displayGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  if (state === 'gamestart'){
    grid[playerY][playerX] = 0;

    // moves
    if (key === "w" && playerY > 0) {
      playerY -= 1;
    }
    if (key === "s" && playerY < cols -1 ){
      playerY += 1;
    }
    if (key === "a" && playerX > 0) {
      playerX -= 1;
    }
    if (key === "d" && playerX < rows -1) {
      playerX += 1;
    }

    grid[playerY][playerX] = 1;
    console.log(playerX, playerY)
  }
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  if (state = 'menu'){
    if (mouseX > 400 && mouseX < 600 &&
      mouseY > 200 && mouseY < 400){
      state = 'gamestart'
      }
  }
  if (state = 'gamestart'){
    if (grid[yCoord][xCoord] === 1) {
      grid[yCoord][xCoord] = 0;
    }
    else {
      grid[yCoord][xCoord] = 1;
    }
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}


function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(1);
      }
      else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}

function menu(){
  if (state === 'menu'){
    rect(100,100,400,200);
  }
}
