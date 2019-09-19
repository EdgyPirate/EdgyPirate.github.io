// Orange Eating
// Blazingsky Carrier 
// Sep 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gangplank;
let c;
let mySound;

// preload() runs once //
function preload(){
  //gangplank = loadImage('assets/gangplank.png');
  sound = ('assets/noteA.mp3');
}

// setup() waits untill preload() is done //
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(125);
  keyboardnotes();
}

function windowResized(){
  setup();
}

// corresponds with a sound of the piano and shows the note pressed on the screen
function keyboardnotes(){
  if (keyIsPressed);{
    if (key === 'a');{
      noteA.play();
      text(key, 33, 65);
    }
    if (key === 'b');{
      noteB.play();
      text(key, 33, 65);
    }
    if (key === 'c');{
      noteC.play();
      text(key, 33, 65);
    }
    if (key === 'd');{
      noteD.play();
      text(key, 33, 65);
    }
    if (key === 'e');{
      noteE.play();
      text(key, 33, 65);
    }
    if (key === 'f');{
      noteF.play();
      text(key, 33, 65);
    }
    if (key === 'g');{
      noteG.play();
      text(key, 33, 65);
    }
  }
}