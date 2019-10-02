let img
let filteredImage;

function preload(){
  img = loadImage('assets/montagne.png');

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  filteredImage = makeGrayScale(img);
}

//Creates the image and puts the origin point the center
function draw(){
  background(255);
  imageMode(CENTER);
  image(filteredImage,mouseX,mouseY,450,700);
}

function makeGrayScale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.LoadPixels();

  for (let x = 0; x < sourceImage.width; x ++){
    for (let y = 0; y < sourceImage.height; y ++){
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + b + g) /3;
      img.set(x, y ,color(average, average, average));
    }
  }
  img.updatePixels();
  return img;
}

