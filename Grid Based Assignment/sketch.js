//Blazingsky Carrier
//Grid Based Assignment
//Nov 12

//controls 
//cells under the mouse cursor change underneath it
//wasd keyboard movement

let grid;
let rows = 20;
let cols = 20;
let state = 'menu'

//adjusts the starting pos of the player block
let playerX = 10;
let playerY = 10;

let randomX = 13;
let randomY = 17;

// let randomX = round(random(0,19));
// let randomY = round(random(0,19));

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
  if (state === 'keyBoardMode'){
    displayGrid(grid, rows, cols);
    stroke(10);
    player();
    keyboardMovement();
    gridCheck();
  }
  else if (state === 'vsAI'){
    displayGrid(grid,rows,cols);
    stroke(10);
    mouseHoover();
    blockAI();
  }
  else if (state === 'mouseCursorMode'){
    displayGrid(grid, rows, cols);
    stroke(10);
    mouseHoover();
    gridCheck();
  }
  else{
    win();
  }
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
  if (state === 'vsAI'){
    grid[playerY][playerX] = 2;
    if (grid !== grid[playerY][playerX]){
      let math = random(1, 100);
      // chooses a direction within a random number
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
  if (state === 'menu'){
    if (mouseX > 15 && mouseX < 150
      && mouseY > 900 && mouseY < 950){
        state = 'vsAI';
      }
    if (mouseX > 250 && mouseX < 750
      && mouseY > 150 && mouseY < 350){
      state = 'mouseCursorMode';
    }
    if (mouseX > 250 && mouseX < 750
      && mouseY > 500 && mouseY < 700){
        state = 'keyBoardMode';
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
      randomGrid[x].push(1);
    }
  }
  return randomGrid;
}

// playertrail
function player(){
  grid[playerY][playerX] = 0;
}

function menu(){
  if (state === 'menu'){
    rect(250, 150, 500,200);
    text('MouseCursor Mode', 435,250);
    rect(250, 500, 500, 200);
    text('Keyboard Mode', 445,600);
    rect(15,900,135, 50);
    text('Experimental AI Mode', 25, 925);
  }
}

// when mouse cursor is over a grid space it turns it to defualt
function mouseHoover(){
  let cellSize = width/cols;
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);

  if (grid[yCoord][xCoord] > 0) {
    grid[yCoord][xCoord] = 0;
  }
}


function keyboardMovement(){
  if (key === 'w' && playerY > 0){
    playerY -= 1;
  }
  else if (key === 'a' && playerX > 0){
    playerX -= 1;
  }
  else if (key === 's' && playerY < cols - 1){
    playerY += 1;
  }
  else if (key === 'd' && playerX < rows - 1){
    playerX += 1;
  }
  grid[playerY][playerX] = 2;
}

// when random block on grid is default switches
function gridCheck(){ 
  if (grid[randomX][randomY] === 0){
    state = 'win';
  }
}

function win(){
  if (state === 'win'){
    background(200);
    text('Congratulations! you found the target block', 350,400);
    text('Now refresh the page.', 415, 425);
  }
}