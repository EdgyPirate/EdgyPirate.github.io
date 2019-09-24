// Keyboard
// Blazingsky Carrier 
// Sep 13, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function preload(){
  soundFormats('mp3')
  noteA = loadSound('assets/noteA.mp3')
  noteB = loadSound('assets/noteB.mp3')
  noteC = loadSound('assets/noteC.mp3')
  noteD = loadSound('assets/noteD.mp3')
  noteE = loadSound('assets/noteE.mp3')
  noteF = loadSound('assets/noteF.mp3')
  noteG = loadSound('assets/noteG.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(245, 123, 158);
  textSize(50);
}

function draw(){
  background(125);
}

function windowResized(){
  setup();
}

// corresponds with a sound of the piano
function keyTyped(){
  if (key === 'a' ){
    noteA.setVolume(0.5)
    noteA.play();
    text(key, 50, 50)
  }else if(key === 'b' ){
    noteB.setVolume(0.5)
    noteB.play();
  }
  else if(key === 'c' ){
    noteC.setVolume(0.5)
    noteC.play();
  }else if(key === 'd' ){
    noteD.setVolume(0.4)
    noteD.play();
  }
  else if(key === 'e' ){
    noteE.setVolume(0.5)
    noteE.play();
  }
  else if(key === 'f' ){
    noteF.setVolume(0.25)
    noteF.play();
  }
  else if(key === 'g' ){
    noteG.setVolume(0.10)
    noteG.play();
  }
}