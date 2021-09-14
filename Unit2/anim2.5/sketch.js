// Reed Cavi's Rain Man
let x=0;
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(220);
  push();
  translate(x,0);

avatar();
pop();
x=x+3;if(x>= width){
x=0;
}
}
function avatar(){
  fill("brown");
  rect(200, 200, 200, 100);
  fill("blue");
  ellipse(150, 250, 75, 75);
  ellipse(250, 250, 75, 75);
  //fill("blue");
  //ellipse(0, 0, 125, 175);
}
