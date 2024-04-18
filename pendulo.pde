int z = 0;
int nz = 5;
void setup(){
  size(400,400);
}
void draw(){
  background(220,220,220);
  size(400, 400);
line(200, 0, z, 300);
   if(z < 0 || z > 400){
   nz = nz * (-1);
  }
 
  z = z + nz;
}
