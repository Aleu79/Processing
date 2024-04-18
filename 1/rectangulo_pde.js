let r = 0;
let g = 0;
let b = 0;
function setup(){
  size(800,600);
}

function draw(){
  background(95,158,160);
  noStroke();
  rect(300,200, 200,125);
  fill(r,g,b);
  delay(2000);
  r = int(random(0,165));
  g = int(random(0,165));
  b = int(random(0,165));
}
