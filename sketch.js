var ball;
var database;
var position;

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  ball = createSprite(250, 250, 20, 20);
  ball.shapeColor = "#DC143C";
}

function draw() {
  background("white");

  if (keyDown("d")) {
    ball.x += 5;
  }
  if (keyDown("a")) {
    ball.x -= 5;
  }
  if (keyDown("s")) {
    ball.y += 5;
  }
  if (keyDown("w")) {
    ball.y -= 5;
  }

  drawSprites();
}
