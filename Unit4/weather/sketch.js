// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var humid = 0;
var desc;
let rock7;
var f1;
function setup() {
  createCanvas(400, 400);
f1= loadFont("assets/ZenKakuGothicNew-Bold.ttf");
rock7 = loadImage("assets/rock7.jpg");
  // HERE is the call to get the weather.

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=bourbonnais,IL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=092f4b910837b0822e21ea7e03fa65fc"; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humid = weather.main.humidity;
  desc = weather.weather[0].description;
}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill("black");
      textFont(f1);
      textSize(48);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temp, 20, 60);
      text("humidity is " + humid, 20, 80);
      text("description is " + desc, 20, 100);

      // cloud
      fill("white");
      noStroke();
      image(rock7,x, 300, x*25/2, x*15/2);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
