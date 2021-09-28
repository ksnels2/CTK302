let song1, song2, song3;
let state = 0;

function preload() {
  song1 = loadSound("assets/bensound-Betterdays.mp3");
  song2 = loadSound("assets/love.mp3")
  song3 = loadSound("assets/city.mp3")
  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);


}

function draw() {

  background(100);
  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      text("listen to song 1", 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      text("listen to 2", 100, 100);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      text("listen to song 3", 100, 100);
      break;
  }
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}

function touchStared() {
  getAudioContext().resume();
}

function mouseReleased() {
  state++;
  if (state > 5) {
    state = 0;
    song1.pause();
    song2.pause();
    song3.pause();
  }
}
