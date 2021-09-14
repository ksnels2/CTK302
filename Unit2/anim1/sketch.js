let x=0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
background("blue");
rect(x, 100, 100, 100);
x=x+1;
if(x>=500){
x=0;
}
}
