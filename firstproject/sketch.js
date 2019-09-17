// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

x = width / 2;
y = height;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let redChangeAmount = 1;
let redAmount = 0;
background(220)

function draw() {
  fill(redAmount ,255 ,0 );
  
  if (mouseIsPressed){
    if(mouseButton === LEFT)
    //noCursor();
    noStroke();
    ellipse(mouseX, mouseY, 25, 25);
    redAmount += redChangeAmount;

    if (redAmount >= 256 || redAmount <= 0) {
      redChangeAmount *= -1;
    }
    //else if(mousebutton === CENTER)
    
  }



  console.log(redAmount);
}
