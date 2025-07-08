let xPos, yPos;
let xSpeed = 2;
let ySpeed = 2;
let furby;
let score = 0;
let mouseDist;
let startBool = true;
let winBool = false;

function preload() {
  furby = loadImage('furby.png'); // Asegúrate de tener esta imagen
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = windowWidth / 2;
  yPos = windowHeight / 2;
  imageMode(CENTER);
}

function draw() {
  if (startBool == true) {
    startGame();
  }

  if (winBool == true) {
    winGame();
  }
}

function startGame() {
  background(0);
  fill(255);
  textSize(40);
  text('Tag the Furby! Your score is ' + score + ' points!!', 20, 100);

  // mover al furby
  xPos += xSpeed;
  yPos += ySpeed;

  image(furby, xPos, yPos, 30, 30);

  // calcular distancia con el mouse
  mouseDist = dist(mouseX, mouseY, xPos, yPos);

  // rebote con bordes
  if (xPos >= windowWidth - 15 || xPos <= 15) {
    xSpeed *= -1;
  }
  if (yPos >= windowHeight - 15 || yPos <= 15) {
    ySpeed *= -1;
  }

  // si el mouse lo toca
  if (mouseDist < 15) {
    score++;
    xPos = random(16, windowWidth - 16);
    yPos = random(16, windowHeight - 16);
    xSpeed *= 1.1;
    ySpeed *= 1.1;
  }

  // si llega a 5 puntos, gana
  if (score == 5) {
    winBool = true;
    startBool = false;
  }
}

function winGame() {
  background(0, 0, 255);
  fill(255);
  textSize(40);
  text('YOU WIN!! 🎉 Score: ' + score, 100, height / 2);
}
