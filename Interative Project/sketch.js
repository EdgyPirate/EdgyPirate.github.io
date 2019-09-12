// Orange Eating
// Blazingsky Carrier 
// Sep , 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img;
let c;
function preload(){
  // preload() runs once
  img = loadImage("assets/gp.gif");
}

function setup() {
  // setup() waits untill preload() is done
  createCanvas(windowWidth, windowHeight);
  background(125);
  image(img, 0, 0);
}

function draw(){
  background(c)
  image(img,25, 25, 50, 50)
  
}
