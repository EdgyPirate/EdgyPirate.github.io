// Linearts
// Blazingsky Carrier 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx = 5;
let dy = 5;
let radius = 100;
let rectSize = 100;
let mode = "rectangle";


function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random(-15, 10);
  dy = random(-15, 10);
}


function draw(){
  background(125)
  if (mode === 'circle'){
    displayCircle();
  }
  if (mode === 'rectangle'){
    displayRectangle();
  }
}

function windowResized(){
  setup();
}

function displayCircle(){
  if (mode === "circle"){
    if (x >= width - radius/2 || x <= 0 + radius/2){
      dx *= -1;
    }
    if (y >= height - radius/2 || y <= 0 + radius/2){
      dy *=  -1;
    }
    ellipse(x, y,radius);
    fill(0)
  }   
}

function displayRectangle(){
  if (mode === "rectangle"){
    fill(0);
    rect(x,y,rectSize,rectSize)
    if (x >= width - rectSize/2 || x <= 0){
        dx *= -1;
      }
      if (y >= height - rectSize/2 || y <= 0){
        dy *=  -1;
      }
    }
  }