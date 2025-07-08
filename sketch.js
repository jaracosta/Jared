function setup() {
  createCanvas(600, 400);
  noStroke();
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

  // Cloud 1
  fill(255);
  ellipse(120, 80, 40, 40);
  ellipse(140, 70, 50, 50);
  ellipse(160, 80, 40, 40);

  // Cloud 2
  ellipse(300, 60, 40, 40);
  ellipse(320, 50, 50, 50);
  ellipse(340, 60, 40, 40);
}
