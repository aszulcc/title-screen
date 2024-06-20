

let myFont;
let buttonText = "Five stages of grief"
let buttonX, buttonY, buttonWidth, buttonHeight;

function preload() {
  myFont = loadFont('PixelifySans-Regular.ttf');
}

function setup() {
  createCanvas(1920, 1080);
  textFont(myFont);
  textSize(64);
  buttonWidth = textWidth(buttonText.width);
  buttonHeight = 128; 
  buttonX = (1920 - buttonWidth) / 2;
  buttonY = (1080 - buttonHeight) / 2;
}

function draw() {
  background(0);


  fill(220);
  textAlign(CENTER, CENTER);
  text(buttonText);
  text("Let's play")
}

function mousePressed() {
  if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
      mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    window.open('https://zofiarybinska.github.io/programowanieCD/', '_self'); 
  }
}

