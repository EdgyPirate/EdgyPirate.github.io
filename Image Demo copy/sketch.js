// Linearts
// Blazingsky Carrier 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Defines the var for gangplank
let gangplank;

Let scalar = 1;

//Preloads the image
function preload(){
  gangplank = loadImage('assets/gangplank.png');
  
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

//Creates the image and puts the origin point the center
function draw(){
  background(255);

  if (keyIsPressed{
    if (keycode === UP_ARROW){
      // Increase Image Size
      scalar *= 1.1;
    }
    if (keycode === DOWN_ARROW){
      // Decrease Image Size
      scalar /= 1.1;
    }
  }
  imageMode(CENTER);
  image(gangplank, mouseX, mouseY, nemo.diwth * scalar, nemo.hieght * scalar);
}


