
let cars = [];
let frogPos;
let maxCars = 2 ;
let timer = 0 ;
let state = 0 ;
let rock,rock1,rock2,rock3,rock4,rock5,rock6,star,truewin,welcome;
function setup() {
  rock =  loadImage("assets/rock.jpg");
  rock1 =  loadImage("assets/rock1.jpg");
  rock2 =  loadImage("assets/rock2.jpg");
  rock3 =  loadImage("assets/rock3.jpg");
  rock4 =  loadImage("assets/rock4.jpg");
  rock5 =  loadImage("assets/rock5.jpg");
  rock6 = loadImage("assets/rock6.jpg");
  star =  loadImage("assets/star.jpg");
  truewin =  loadImage("assets/truewin.jpg");
  welcome =  loadImage("assets/welcome.jpg");
  win =  loadImage("assets/win.jpg");
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
      background('black');
      image(welcome,700,400,700,700)
      //fill("black");
      //text("welcome",300,300);
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
      background('black') ;
      image(win,700,400,700,700)
      //text("won",100,100)
      break ;

      case 3:
      background('blue') ;
      image(truewin,700,400,700,700)
      //text("lost",100,100)
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

  background('black') ;
   for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(frogPos)) < 150) {
      cars.splice(i, 1) ;
    }
  }

  if (cars.length==0){
    state=2;
  }
  // frog
  fill("green");
  image(star,frogPos.x, frogPos.y, 50, 50);
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
    //fill(this.col);
    //textSize(this.size);
    image(rock, this.pos.x, this.pos.y);
    image(rock1, this.pos.x, this.pos.y);
    image(rock2, this.pos.x, this.pos.y);
    image(rock3, this.pos.x, this.pos.y);
    image(rock4, this.pos.x, this.pos.y);
    image(rock5, this.pos.x, this.pos.y);
    image(rock6, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
