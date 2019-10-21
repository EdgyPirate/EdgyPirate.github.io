// Keyboard and Guitar Interactive Keyboard
// Blazingsky Carrier 
// Oct 9, 2019
//
// controls - letters a to g on the keyboard play a note or chord on piano or guitar mode
// mouse1 click for a random note (guitar only)
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 'menu';
let img;
let vol;

let pianoSounds = []
let guitarSounds = []

function preload(){
  soundFormats('mp3', 'wav');
  noteA = loadSound('assets/noteA.mp3'), noteB = loadSound('assets/noteB.mp3'), noteC = loadSound('assets/noteC.mp3'), noteD = loadSound('assets/noteD.mp3')
  noteE = loadSound('assets/noteE.mp3'), noteF = loadSound('assets/noteF.mp3'), noteG = loadSound('assets/noteG.mp3');
  
  chordA = loadSound('assets/chord-A.wav'), chordC = loadSound('assets/chord-C.wav'), chordD = loadSound('assets/chord-D.wav') //chordB = loadSound('assets/chord-B.wav')
  chordE = loadSound('assets/chord-E.wav'), chordF = loadSound('assets/chord-F.wav'), chordG = loadSound('assets/chord-G.wav');

  img = loadImage('assets/homeButton.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pianoSounds.push(noteA), pianoSounds.push(noteB), pianoSounds.push(noteC), pianoSounds.push(noteD)
  pianoSounds.push(noteE), pianoSounds.push(noteF), pianoSounds.push(noteG)

  guitarSounds.push(chordA), guitarSounds.push(chordC), guitarSounds.push(chordD), guitarSounds.push(chordE)
  guitarSounds.push(chordF), guitarSounds.push(chordG)

  fill(100,100,100);
  textSize(50)
}

function draw(){
  background(120)
  if (state === 'menu'){
    showMenu();
    detectionOfMenu();
  }
  if (state === 'piano'){
    background(75);
    imageMode(CENTER);
    image(img, 50, 50, 50, 50);
    returnHomeDetection();
    drawNotes();
    keyClickDetection();
  }
  if (state === 'guitar'){
    background(0);
    imageMode(CENTER);
    image(img, 50, 50, 50, 50);
    returnHomeDetection();
  }
}

function windowResized(){
  setup();
}

// function which is called upon to play notes
function playPianoNote(whichNote,howLoud) {
  whichNote.setVolume(howLoud);
  whichNote.play();
} 

// function calls upon to play notes in a state
function playGuitarString(whichChord, howLoud) {
  whichChord.setVolume(howLoud);
  whichChord.play();
}

// draws menus of piano or guitar
function showMenu(){
  // shows panel for piano
  rectMode(CENTER);
  fill(0, 100, 255);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER), textSize(75);
  fill(0);
  text('Piano', width/2, height/2 - 100);
  
  // shows panel for guitar
  rectMode(CENTER);
  fill(0, 240 , 250);
  rect(width/2, height/2 + 100, 400, 150);
  textAlign(CENTER, CENTER), textSize(75);
  fill(0);
  text('Guitar', width/2, height/2 + 100);
}

// x and y hitboxes for menus
function detectionOfMenu(){
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

// hitbox for the home image
function returnHomeDetection(){
  if (state === 'piano' || state === 'guitar'){
    if(mouseIsPressed){
    if (mouseX > 25 && mouseX < 75 &&
      mouseY > 25 && mouseY < 75){
      state = 'menu';
    }
    }
  }
} 

// plays piano keys when in state piano and guitar chords when in guitar state
function keyPressed(){
  if (state === 'piano'){
    if (key === 'a'){
      playPianoNote(noteA, 0.5);
   }
    else if (key === 'b'){
      playPianoNote(noteB, 0.5);
    }
   else if (key === 'c'){
     playPianoNote(noteC, 0.45);
    }
   else if (key === 'd'){
      playPianoNote(noteD, 0.4);
    }
   else if (key === 'e'){
     playPianoNote(noteE, 0.35);
   }
   else if (key === 'f'){
      playPianoNote(noteF, 0.3);
   }
    else if (key === 'g'){
     playPianoNote(noteG, 0.25);
   }
  }
  if (state === 'guitar'){
    if (key === 'a'){
    playGuitarString(chordA, 0.5);
    }
    else if (key === 'c'){
    playGuitarString(chordC, 0.5);
    }
    else if (key === 'd'){
    playGuitarString(chordD, 0.5);
    }
    else if (key === 'e'){
    playGuitarString(chordE, 0.5);
    }
    else if (key === 'f'){
    playGuitarString(chordF, 0.5);
    }
    else if (key === 'g'){
    playGuitarString(chordG, 0.5);
    } 
  }
}

// hitboxes for the piano keys
function keyClickDetection(){
  if (state === 'piano'){
    if (mouseIsPressed){
      if (mouseX > width - 475 && mouseX < width - 325 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteG,0.5);
        }
      else if (mouseX > width - 625 && mouseX < width - 475 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteF,0.5);
        }
      else if (mouseX > width - 775 && mouseX < width - 625 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteE,0.5);
        }
      else if (mouseX > width - 925 && mouseX < width - 775 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteD,0.5);
        } 
      else if (mouseX > width - 1075 && mouseX < width - 925 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteC,0.5);
        }
      else if (mouseX > width - 1225 && mouseX < width - 1075 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteB,0.5);
        } 
      else if (mouseX > width - 1375 && mouseX < width - 1225 &&
        mouseY > 195 && mouseY < 595){
          playPianoNote(noteA,0.5);
        }   
      }
    }
  }

function mouseClicked(){
    if (state === 'guitar'){
      let play = random(guitarSounds);
      playGuitarString(play, 0.5);
    }
  } 

// draws the notes on the canvas **needs work**
function drawNotes(){
  if (state === 'piano'){
    
    fill(255);
    // MAKE A FOR LOOP SOON
    rect(width - 400, height/2, 150, 400);
    rect(width - 550, height/2, 150, 400);
    rect(width - 700, height/2, 150, 400);
    rect(width - 850, height/2, 150, 400);
    rect(width - 1000, height/2, 150, 400);
    rect(width - 1150, height/2, 150, 400);
    rect(width - 1300, height/2, 150, 400);
    
    
    fill(0);
    text('G', width - 400, height/2);
    text('F', width - 550, height/2);
    text('E', width - 700, height/2);
    text('D', width - 850, height/2);
    text('C', width - 1000, height/2);
    text('B', width - 1150, height/2);
    text('A', width - 1300, height/2);
  }
}