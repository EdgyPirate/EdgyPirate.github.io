// keyboard and guitar
// Blazingsky Carrier 
// Sep 27, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 'menu';
let img;
let Whichnote;

function preload(){
  soundFormats('mp3')
  noteA = loadSound('assets/noteA.mp3'), noteB = loadSound('assets/noteB.mp3'), noteC = loadSound('assets/noteC.mp3'), noteD = loadSound('assets/noteD.mp3')
  noteE = loadSound('assets/noteE.mp3'), noteF = loadSound('assets/noteF.mp3'), noteG = loadSound('assets/noteG.mp3')
  img = loadImage('assets/homeButton.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(125);
  if (state === 'menu'){
    showMenu();
    detectionofmenu();
  }
  if (state === 'piano'){
    background(75);
    imageMode(CENTER)
    image(img, 50, 50, 50, 50)
    returnHomeDetection();
    playPianoNote(noteB);
  }
  if (state === 'guitar'){
    background(0);
    //guitarstrings();
    imageMode(CENTER)
    image(img, 50, 50, 50, 50)
    returnHomeDetection();
  }
}

function windowResized(){
  setup();
}

// corresponds with a sound of the piano
function playPianoNote(Whichnote) {
  if (key === 'a'){
    Whichnote= noteA;
    }
    Whichnote.play();
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

function returnHomeDetection(){
  if (state === 'guitar' || state === 'piano'){
    if (mouseX > 100 + 50 && mouseX < 150 - 50 &&
      mouseY > 100 - 50 && mouseX < 150 + 50){
      state = 'menu'
    }
  }
} 