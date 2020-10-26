var smoke = [];
var waves = [];
var rain = [];
var xoff = 0;
var yoff = 0;
var aggression = 1;
var eye = new Eye(200, 200);
var cig = new Cig(150, 200, 100)
var timer = 25;
var state = '0';

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    rain[i] = new Drop();
  }
}

function draw() {
  for (let i = 0; i < 100; i++) {
    rain[i].update()
  }
  if ((key == '0') || (key == '1')) {
    state = key;
  }
  if (state == '0') {
    yoff++
    if (yoff > 30) {
      yoff = 0
    }
    xoff++
    let i = 0;
    for (let i = 0; i < 3 + height / 30; i++) {
      if (mouseIsPressed) {
        if (aggression < 1.3) {
          aggression += 0.0005;
        }
      } else {
        if (aggression > 1) {
          aggression -= 0.002
        }
      }
      waves[i] = new Wave(xoff, i * 30 - yoff, aggression);
    }
    background(0);
    stroke(250);
    noFill();

    for (let i = 0; i < waves.length; i++) {
      stroke(map((waves[i].y - height / 2) ** 2, 0, (height / 2) ** 2, 255, 40), 50, 50, 255);
      waves[i].display();
    }
    eye.display();
  } else {

    timer++
    if (timer % 440 == 0) {
      timer = 0
      cig.randomize()
    }

    if ((timer > 0) && (timer < 20)) {
      background(random(240, 255));
      faceeffect();
      stroke(0,100)
      drawface();
    } else {
      background(random(253, 250));
      stroke(0)
      drawface();
    }
    for (let i = 0; i < 100; i++) {
      rain[i].display()
    }
    cig.display()
  }
}

function drawface() {
  strokeWeight(2);
  //top lip
  line(40, 290, 75, 265)
  line(75, 265, 70, 252)
  line(70, 252, 50, 272)
  //bottom lip
  line(80, 290, 80, 300);
  line(40, 290, 80, 290)
  line(80, 300, 75, 315)
  line(80, 300, 40, 290)
  //chin
  line(75, 315, 35, 330)
  line(50, 325, 70, 360)
  line(70, 360, 60, 375)
  line(60, 375, 0, 380)
  //above lip
  line(70, 254, 55, 235)
  //schnoz
  line(30, 220, 40, 240)
  line(40, 240, 90, 215)
  line(90, 215, 85, 190)
  line(85, 190, 70, 185)
  line(70, 185, 20, 140)
  line(43, 230, 55, 224)
  line(55, 224, 57, 226)
  line(20, 140, 20, 113)
  line(20, 113, 0, 95)
}

function faceeffect() {
  push()
  translate(random(-5, 5), random(-5, 5));
  stroke(255, 0, 0, 100)
  drawface()
  pop()
  push()
  stroke(0, 0, 255, 100)
  translate(random(-5, 5), random(-5, 5));
  drawface()
  pop()
}