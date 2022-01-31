var caixa;

function setup() {
  createCanvas(500, 500);

  caixa = createSprite(250,250,50,50);
  caixa.shapeColor = "#462d75"
}

function draw() {
  background("black");

  if (keyDown("up")) {
    caixa.y = caixa.y -5;
  }
  if (keyDown("down")) {
    caixa.y = caixa.y +5;
  }
  if (keyDown("space")) {
    background("yellow")
  }
  if (keyDown("left")) {
    caixa.x = caixa.x -5;
  }
  if (keyDown("right")) {
    caixa.x = caixa.x +5;
  }

  drawSprites();
}

