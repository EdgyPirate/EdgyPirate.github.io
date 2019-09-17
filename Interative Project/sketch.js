// Orange Eating
// Blazingsky Carrier 
// Sep 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y;

let c;
//var audio = new Audio('assets/test.mp3');
var gangplank = ["assets/gangplank.png"];

// preload() runs once //
function preload(){
  gangplank = loadImage("assets/gangplank.png");
  //soundFormats('mp3', 'oog');
}

// setup() waits untill preload() is done //
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height /2;
  background(125);
  image(gangplank,x,y);
}

function draw(){
  background(125);
  imageMode(CENTER);
  image(gangplank,x,y,50,50);
}

function windowResized(){
  setup();
}

// plays audio on keypress //
function keyPressed(){
  if (key === "w"){
    (y += -10)
  }
  if (key === "s"){
    (y += 10)
  }
  if (key === "a"){
      (x += -10)
  }
  if (key === "d"){
      (x += 10)
  }
}
// if (key === "w");
//  audio.play();ss