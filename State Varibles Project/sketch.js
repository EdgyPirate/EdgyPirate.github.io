// keyboard and guitar
// Blazingsky Carrier 
// Sep 27, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 'menu';

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
}

function draw(){
  background(125);
  if (state === 'menu'){
    showMenu();
  }

  if (state === 'piano'){
    background(75);
    pianokeys();
  }

  if (state === 'guitar'){
    background(0);
    // guitarstrings();
  }
}

function windowResized(){
  setup();
}


// corresponds with a sound of the piano
function pianokeys(){
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

// function guitarstrings(){
//   if (key === 'a'){
//     guitarA.volume(0.5);
//     guitarA.play();
//   }
//   else if (key === 'b'){
//     guitarB.volume(0.5);
//     guitarB.play();
//   }
// }

function showMenu(){
  // shows panel for piano
  rectMode(CENTER);
  fill(0, 90 , 200 , 125);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(75);
  fill(0);
  text('Piano', width/2, height/2 - 100);
  
  // shows panel for guitar
  rectMode(CENTER);
  fill(255, 0 , 0 , 125);
  rect(width/2, height/2 + 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(75);
  fill(0);
  text('Guitar', width/2, height/2 + 100);
}

function detectionofmenu(){
  if (mouseIsPressed){
    //checks if click is in hitbox
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75){
        state = 'piano';
      }
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75){
        state = 'guitar';
      }
  }
}