let baby;
let furby;
let Smile;
let Persons;
let apples;
let picnic;
let birds;

function preload() {
  // Load images before setup
  baby = loadImage("dancingbaby2.gif");
  smile = loadImage("Smile.png");
  persons = loadImage("persons.png");
  apples = loadImage("apples.png");
  picnic = loadImage("picnic.png");
  furby = loadImage("furby.png");
  birds = loadImage("Birds.png");
}

function setup() {
  createCanvas(600, 400);
  noStroke(); // No borders for shapes
}

function draw() {
  background(135, 206, 235); // Sky blue

  // Sun
  fill(255, 204, 0);
  ellipse(500, 80, 80, 80);

  // Hills (arcs)
  fill(34, 139, 34);
  arc(200, 400, 400, 300, PI, TWO_PI);
  arc(450, 400, 400, 250, PI, TWO_PI);

  // Ground
  fill(60, 179, 113);
  rect(0, 300, width, 100);

  // House
  fill(255, 0, 0);
  rect(100, 220, 120, 80); // House body
  fill(139, 69, 19);
  triangle(100, 220, 160, 170, 220, 220);
  fill(210, 180, 140);
  rect(145, 260, 30, 40);
  fill(139, 69, 19);
  triangle(100, 220, 160, 170, 220, 220); // Roof

  // Door
  fill(210, 180, 140);
  rect(145, 260, 30, 40);
  
  // Tree trunk
  fill(139, 69, 19);
  rect(400, 240, 20, 60);
 
  // Tree foliage
  fill(34, 139, 34);
  ellipse(410, 220, 60, 60);
  ellipse(390, 230, 60, 60);
  ellipse(430, 230, 60, 60);
  
  // Apples in tree
  image(apples, 395, 215, 25, 25);
  image(apples, 410, 230, 25, 25);
  image(apples, 380, 225, 25, 25);

  // Cloud 1
  fill(255);
  ellipse(120, 80, 40, 40);
  ellipse(140, 70, 50, 50);
  ellipse(160, 80, 40, 40);

  // Cloud 2
  ellipse(300, 60, 40, 40);
  ellipse(320, 50, 50, 50);
  ellipse(340, 60, 40, 40);

  // Draw baby near the door
  image(baby, 180, 260, 40, 60);

// Persons
  image(persons, 440, 260, 120, 100);

   // Picnic
  image(picnic, 350, 290, 60, 40);

  // Draw furby next to the tree trunk
  image(furby, 370, 280, 40, 50);

   // Birds movement
  if (birdsActive) {
    image(birds, birdsX, birdsY, 200, 100);
    birdsX += 2;

    if (birdsX > windowWidth + 100) {
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