
let cars = [];
let frogPos;
let maxCars = 2 ;
let timer = 0 ;
let state = 0 ;


function setup() {
  createCanvas(windowWidth, windowHeight);
imageMode(CENTER);
  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);

}

function draw() {

  switch(state){
    case 0://welcome state
      background('red') ;
      fill("black");
      text("welcome",300,300);
      break;

      case 1://game state
      game()
      timer++;
      if(timer>10*60){
        timer=0;
        state=3
      }
      break ;

      case 2:
      background('red') ;
      text("won",100,100)
      break ;

      case 3:
      background('blue') ;
      text("lost",100,100)
      break ;


  }

}


 function mouseReleased(){
   switch(state){
    case 0:
      state = 1 ;
      break ;

      case 2://won
      resetTheGame();
      state = 0 ;
      break ;

      case 3://lost
      resetTheGame();
      state = 0 ;
      break ;
 }
 }

function game() {

  background('pink') ;
   for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(frogPos)) < 50) {
      cars.splice(i, 1) ;
    }
  }

  if (cars.length==0){
    state=2;
  }
  // frog
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function resetTheGame(){
  timer=0
  cars=[];
    for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(200, 200);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    text("HELLO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
