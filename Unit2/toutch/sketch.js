let numberOfTouches;
let lol, stella, vanagurd;

function setup() {
  createCanvas(400, 400);
  lol =  loadImage("assets/lol.jpg");
  stella =  loadImage("assets/stella.jpg");
  vanagurd =  loadImage("assets/vanagurd.png");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22);
      break;

    case 1:
      text("poke", 5, 22);
      image(lol, width / 2, height / 2, 100, 100);
      break;

    case 2:
      text("two fingers are poking the screen", 5, 22);
      image(stella, width / 2, height / 2 - 120, 100, 100);
      break;

    case 3:
      text("three are poking the screen", 5, 22);
      image(vanagurd, width / 2, height / 2 - 120, 100, 100);
      break;


  }

}
