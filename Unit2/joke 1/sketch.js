
let state=0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
switch (state) {
  case 0:
  background("yellow");
    text("what do you call a fake noodle?",100,100);
    break;
    case 1:
    background("pink");
      text("impasta",100,100);
      break;

}
}
function mouseReleased(){
  state++;
  if(state>1){
    state=0;
  }

}
