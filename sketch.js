function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // default value = display refresh rate
}

function draw() {
  //Stunden
  let winkel = (hour() / 12.0) * TWO_PI;
  drawPart(winkel, 350, "#FFFF00", "#FF7800");

  //Minuten
  winkel = (minute() / 60.0) * TWO_PI;
  drawPart(winkel, 250, "#00FFFF", "#0078FF");

  //Sekunden
  winkel = (second() / 60.0) * TWO_PI;
  drawPart(winkel, 150, "#96FFC8", "#6478FF");

  //Millisekunden
  winkel = ((millis() % 1000) / 1000.0) * TWO_PI;
  drawPart(winkel, 100, "#E6FF64", "#967850");
}

function drawPart(winkel, diameter, background, foreground) {
  fill(background);
  arc(200, 200, diameter, diameter, 0 - HALF_PI, winkel - HALF_PI);

  fill(foreground);
  arc(200, 200, diameter, diameter, winkel - HALF_PI, TWO_PI - HALF_PI);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
