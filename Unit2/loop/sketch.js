

let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state){
    case 0:
    background("red");
    text("state 0", 100,100);
    for (var j = 0; j <= width; j += 20) {
      for (var i = 0; i <= width; i += 20) {
        rect(i, j, 5, 5);
      }
    }
    break ;
    case 1:
    background("blue");
    text("state 1", 100,100);
    for (var j = 0; j <= width; j += 20) {
      for (var i = 0; i <= width; i += 20) {
        rect(i, j, 5, 5);
      }
    }
    break ;
    case 2:
    background("purple");
    text("state 2", 100,100);
    for (var j = 0; j <= width; j += 20) {
      for (var i = 0; i <= width; i += 20) {
        rect(i, j, 5, 5);
      }
    }
    break ;
    case 3:
    background("pink");
    text("state 3", 100,100);
    for (var j = 0; j <= width; j += 20) {
      for (var i = 0; i <= width; i += 20) {
        rect(i, j, 5, 5);
      }
    }
    break ;
    case 4:
    background("brown");
    text("state 4", 100,100);
    for (var j = 0; j <= width; j += 20) {
      for (var i = 0; i <= width; i += 20) {
        rect(i, j, 5, 5);
      }
    }
    break ;
    case 5:
    background("yellow");
    text("state 5", 100,100);
    for (var j = 0; j <= width; j += 20) {
      for (var i = 0; i <= width; i += 20) {
        rect(i, j, 5, 5);
      }
    }
    break ;
  }
  }
function mouseReleased(){
  state++;
  if (state>5){
    state=0;
  }
}
