let baby, smile, persons, apples, picnic, furby, birds;
let furbyX = 370;
let furbyY = 280;

let cloud1X = 120;
let cloud2X = 300;

let birdsX = -200;
let birdsY = 50;
let birdsActive = false;

function preload() {
  baby = loadImage("dancingbaby2.gif");
  smile = loadImage("Smile.png");
  persons = loadImage("Persons.png");
  apples = loadImage("apples.png");
  picnic = loadImage("picnic.png");
  furby = loadImage("furby.png");
  birds = loadImage("Birds.png"); // New birds image
}

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(135, 206, 235); // Sky blue

  // Sun
  fill(255, 204, 0);
  ellipse(500, 80, 80, 80);
  image(smile, 460, 40, 80, 80);

  // Hills
  fill(34, 139, 34);
  arc(200, 400, 400, 300, PI, TWO_PI);
  arc(450, 400, 400, 250, PI, TWO_PI);

  // Ground
  fill(60, 179, 113);
  rect(0, 300, width, 100);

  // House
  fill(255, 0, 0);
  rect(100, 220, 120, 80);
  fill(139, 69, 19);
  triangle(100, 220, 160, 170, 220, 220);
  fill(210, 180, 140);
  rect(145, 260, 30, 40);

  // Tree
  fill(139, 69, 19);
  rect(400, 240, 20, 60);
  fill(34, 139, 34);
  ellipse(410, 220, 60, 60);
  ellipse(390, 230, 60, 60);
  ellipse(430, 230, 60, 60);

  // Apples in tree
  image(apples, 395, 215, 25, 25);
  image(apples, 410, 230, 25, 25);
  image(apples, 380, 225, 25, 25);

  // Clouds
  fill(255);
  ellipse(cloud1X, 80, 40, 40);
  ellipse(cloud1X + 20, 70, 50, 50);
  ellipse(cloud1X + 40, 80, 40, 40);

  ellipse(cloud2X, 60, 40, 40);
  ellipse(cloud2X + 20, 50, 50, 50);
  ellipse(cloud2X + 40, 60, 40, 40);

  // Baby
  image(baby, 180, 260, 40, 60);

  // Persons
  image(persons, 440, 260, 120, 100);

  // Picnic
  image(picnic, 350, 290, 60, 40);

  // Furby
  image(furby, furbyX, furbyY, 40, 50);

  // Birds movement
  if (birdsActive) {
    image(birds, birdsX, birdsY, 200, 100);
    birdsX += 2;

    if (birdsX > width + 100) {
      birdsActive = false; // Stop showing birds once off screen
    }
  }
}

function mousePressed() {
  // Move Furby
  furbyX = random(0, width - 40);
  furbyY = random(200, height - 50);

  // Move clouds
  cloud1X = random(50, 250);
  cloud2X = random(280, 500);

  // Launch birds
  birdsX = -200;
  birdsY = random(40, 120);
  birdsActive = true;
}
