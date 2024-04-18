let bg;
let y = 0;
let x = 0;

function setup() {
  size(300, 300);
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 640 x 360 pixels.
  bg = loadImage("/home/Ale79/Downloads/manza.jpg");
}
function draw() {
  background(255,255,255);
    noStroke();

  image(bg, x, y);
}
function keyPressed(){
  if(key == 'a'){
    x--;  
  }
  if(key == 'd'){
    x++;  
  }
  if(key == 's'){
    y++;  
  }
  if(key == 'w'){
    y--;  
  }
}
