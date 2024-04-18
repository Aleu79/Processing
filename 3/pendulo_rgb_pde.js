let z = 0;
let nz = 5;
let x = 200;
let y = 0;
function setup(){
  size(400,400);
}
function draw(){
  background(245,245,240);
  size(400, 400);
line(x, y, z, 300);
   if(z < 0 || z > 400){
   nz = nz * (-1);
  }
 
  z = z + nz;
  point(z,x);
  strokeWeight(2);
  stroke(int(random(0,255)));
  
  
}
