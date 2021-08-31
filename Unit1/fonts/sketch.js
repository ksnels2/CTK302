
var f1;
function setup() {
  createCanvas(500,500);
  f1= loadFont("assets/BubbleShine.ttf")
}
function draw() {
  background("yellow");
  textFont(f1);
  textSize(48);
  text("hello World", 100,100)
}
