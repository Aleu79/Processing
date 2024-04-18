int r = 0;
int g = 0;
int b = 0;
void setup(){
  size(800,600);
}

void draw(){
  background(95,158,160);
  noStroke();
  rect(300,200, 200,125);
  fill(r,g,b);
  delay(2000);
  r = int(random(0,165));
  g = int(random(0,165));
  b = int(random(0,165));
}
