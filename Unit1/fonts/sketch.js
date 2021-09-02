
var f1,f2;
function setup() {
  createCanvas(500,500);
  f1= loadFont("assets/BubbleShine.ttf");
  f2= loadFont("assets/TheFrankline.ttf");
}
function draw() {
  background("yellow");
  textFont(f1);
  textSize(48);
  text("hello World", 100,100);
  textFont(f2);
  textSize(28);
  text("I will RULE OVER THE HELLO WORLDOOOO!!",10,200);
}
