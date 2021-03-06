let x;
let y;
let dx;
let dy;
let radius = 100;
let rectSize = 100;
let state = 'menu';

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(-15, 15);
  dy = random(-15, 15);
}

function draw() {
  background(255);

  if (state === 'menu'){
    showMenu();
    checkIfButtonClicked();

  }
  
  if (state === "circle") {
    moveShape();
    displayCircle();
  }
  if (state === "rectangle") {
    moveShape();
    displayRectangle();
  }
}

function windowResized() {
  setup();
}

function moveShape() {
  // move
  x += dx;
  y += dy;
}

function displayCircle() {
  // bounce if needed
  if (x > width - radius/2 || x < 0 + radius/2) {
    dx *= -1;
  }

  if (y > height - radius/2 || y < 0 + radius/2) {
    dy *= -1;
  }

  fill(0);
  circle(x, y, radius);
}

function displayRectangle() {
  // bounce if needed
  if (x > width - rectSize || x < 0) {
    dx *= -1;
  }

  if (y > height - rectSize || y < 0) {
    dy *= -1;
  }

  fill(0);
  rect(x, y, rectSize, rectSize);
}

function showMenu(){
  // show rectangle button
  rectMode(CENTER);
  fill(255, 0, 0, 125);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Rectangle Time', width/2, height/2 - 100);
  textSize(50);

  // show circle button
  rectMode(CENTER);
  fill(255, 0, 0, 125);
  rect(width/2, height/2 + 100, 400, 150);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Circle Time', width/2, height/2 + 100);
  textSize(50);
}

function checkIfButtonClicked(){
  if (mouseIsPressed){
    // check for rectangle button click
    if (mouseX > width/2 - 2000 && mouseX < width/2 + 200 &&
      mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75){
        state = 'rectangle';
      }
      // check for rectangle button click
    if (mouseX > width/2 - 2000 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 - 75){
        state = 'circle';
      }
  }
}