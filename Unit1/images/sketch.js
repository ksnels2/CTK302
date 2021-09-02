
let lol,stella,vanagurd ;
function setup() {
  createCanvas(500, 500);
lol =  loadImage("assets/lol.jpg");
stella =  loadImage("assets/stella.jpg");
vanagurd =  loadImage("assets/vanagurd.png");
  imageMode(CENTER);
}

function draw() {
background('green');
image(lol,width/2,height/2,100,100);
image(stella,width/2,height/2-120,100,100);
image(vanagurd,width/2,height/2-120,100,100);
}
