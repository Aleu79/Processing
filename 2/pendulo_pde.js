let z= 0;
let nz = 5;
function setup(){
  size(400,400);
}
function draw(){
  background(220,220,220);
  size(400, 400);
line(200, 0, z, 300);
   if(z < 0 || z > 400){
   nz = nz * (-1);
  }
 
  z = z + nz;
}
