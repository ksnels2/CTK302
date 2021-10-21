let state = 0;
let timer = 0;
let pizzza,meltCream,iceCream;
function setup() {
  createCanvas(500, 500);
  pizzza =  loadImage("assets/pizzza.jpg");
  meltCream =  loadImage("assets/meltedicecream.jpg");
  iceCream =  loadImage("assets/icecreamSunday.jpg");
    //imageMode(CENTER);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      text("click the square start", 100, 100);
      fill("red");
      rect(100, 100, 50, 25);
      break;

    case 1:
      text("tap the pizza to eat dessert", 100, 100);
      image(pizzza,200,200,100,100);
      if (touches.length==1){
        state=2;
      }
      break;

    case 2:
      text("the Icecream will melt fast", 100, 100);
      image(iceCream,200,200,100,100);
      timer++ ;
      if (timer > 360) {
        timer = 0 ;
        state = 3 ;
      }
      break;
      case 3:
      text('melted Icecream',100,100) ;
      image(meltCream,200,200,100,100);
      timer++ ;
      if (timer > 360) {
        timer = 0 ;
        state = 0 ;
      }
  }
//text("touches = "+touches[], 300, 300) ;
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {

    state = 1;
  }
}
