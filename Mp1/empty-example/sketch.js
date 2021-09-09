let song1;
var drop = []

function preload() {
  song1 = loadSound("assets/bensoundBetterdays.mp3");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  for (var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
  song1.loop();

}



function draw() {

  background(220);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    background("black");
    fill("brown");
    rect(200, 200, 200, 100);
    fill("blue");
    ellipse(150, 250, 75, 75);
    ellipse(250, 250, 75, 75);
    fill("blue");
    ellipse(0, 0, 125, 175);
    for (var i = 0; i < 200; i++) {
      drop[i].show();
      drop[i].update();
    }
    stroke("black");
    // fill("black");
    // text("playing music for heros even at night", 10, 300);

  } else {
    // when the mouse isn't pressed!
    fill("brown");
    rect(200, 200, 200, 100);
    fill("blue");
    ellipse(150, 250, 75, 75);
    ellipse(250, 250, 75, 75);
    line(400, 50, 0, 50);
    line(400, 300, 0, 300);
    line(400, 150, 0, 150);
    fill("yellow");
    ellipse(0, 0, 125, 175);
    fill("black");
    ellipse(200, 95, 150, 150);
    fill("red");
    ellipse(200, 95, 50, 50);

  }
fill("black");
  //line(10, 380, 50, 50);
  push();
  line(400, 50, 0, 50);
  line(400, 300, 0, 300);
  line(400, 150, 0, 150);
pop();
    if (song1.isPlaying()) {

      song1.pause();
    } else {
      song1.loop();


  }
text("this is the CD hero and he is the one playing music for heros", 50, 300);


  // this shows mouse location - comment it out when you're done!

  //fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}


function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function() {
    noStroke();
     fill(255);
     ellipse(this.x, this.y, random(1, 5), random(1, 5));
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed * this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }

}
function touchStarted() {
  getAudioContext().resume();
}
