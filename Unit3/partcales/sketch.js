let cars = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background("grey");

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if(cars[i].a<=0){
      cars.splice(i,1);
    }

  }

  print(cars.length);
  cars.push(new Car());
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(5, 10), random(5, 10));
  this.a=random(200,205);
    this.r=random(255);
    this.g=random(255);
    this.b=random(255);
    this.s=random(10,25);
  }

  // methods
  display() {
    fill(this.r,this.g,this.b, this.a);
    text("I RIDO PANDORA!",this.pos.x, this.pos.y,this.s,this.s);
  }
  move() {
    this.pos.add(this.vel);
    this.a -=3;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
