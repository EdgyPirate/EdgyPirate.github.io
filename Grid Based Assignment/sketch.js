//Blazingsky Carrier
//Grid Based Assignment
//Nov 12

//controls 
//cells under the mouse cursor change underneath it

let grid;
let rows = 20;
let cols = 20;
let state = 'menu'

//adjusts the starting pos of the block
let playerX = 10;
let playerY = 10;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(200);
  menu();
  if (state === 'gamestart'){
    displayGrid(grid, rows, cols);
    stroke(10);
    blockAI();
    mouseHoover();
  }
  // if (state === 'AImirror'){
  //   grid[playerX][playerY] = 0;  // mirrors ai
  // }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function blockAI(){
  if (state === 'gamestart'){
    grid[playerY][playerX] = 2;
    if (grid != grid[playerY][playerX]){
      let math = random(1, 100);
      if (math < 25 && playerY > 0){
        playerY -= 1;
      }
      else if (math < 50 && playerY < cols -1){
        playerY += 1;
      }
      else if (math < 75 && playerX > 0){
        playerX -= 1;
      }
      else if (math < 100 && playerX < rows -1){
        playerX += 1;
      }
    }
  }
}


function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  if (state = 'menu'){
    if (mouseX > windowWidth && mouseY > windowHeight){
      state = 'gamestart';
    }
  }
  if (state = 'gamestart'){
    if (grid[yCoord][xCoord] === 1) {
      grid[yCoord][xCoord] = 0;
    }
    else {
      grid[yCoord][xCoord] = 0;
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
      else if (grid[y][x] === 1){
        fill(0);
      }
      else{ // changes the color of the block
        fill(175,0,0);
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
    text('Click anywhere to start', 325,400)
  }
}


function mouseHoover(){
  let cellSize = width/cols;
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);

  if (grid[yCoord][xCoord] === 1 || 2) {
    grid[yCoord][xCoord] = 0;
  }
}

// function timer(){
//   if (state === 'gamestart'){
//     if (millis > 10000){
//       if(grid[yCoord][xCoord] != 2){
//         state === 'win';
//       }
//     }
//   }
// }

// function win(){
//   if (state === 'win'){
//     text('you win', 100,100,100)
//   }
// }