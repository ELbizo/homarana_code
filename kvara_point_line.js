  posx=0;
  posy=0;
  aftx=400;
  afty=0;

function setup() {
  createCanvas(400,400);
  background(150);
}

function draw() {
  stroke(255,0,0);
  strokeWeight(6);
  point(posx,posy);
  posx+=1;
  posy+=1;
  
  if((posx>=width)||(posy>=height)){
  stroke(0,0,255);
  strokeWeight(6);
  point(aftx, afty);
  aftx-=1;
  afty+=1;
  }
 
  if((aftx<=0)||(afty>=height)){
  frameRate(12);
  strokeWeight(random(8));
  stroke(random(255), random(255), random(255));
  line(random(399), random(399), random(399), random(399));
  }  
  
  }
  