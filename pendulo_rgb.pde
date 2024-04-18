int z = 0;
int nz = 5;
int x = 200;
int y = 0;
void setup(){
  size(400,400);
}
void draw(){
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
