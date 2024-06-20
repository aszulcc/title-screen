

let myFont;
let buttonText = "Five stages of grief Let's play"
let buttonX, buttonY, buttonWidth, buttonHeight;

function preload() {
  myFont = loadFont('PixelifySans-Regular.ttf');
}

function setup() {
  createCanvas(1920, 1080);
  textFont(myFont);
  textSize(64);
  buttonWidth = textWidth(buttonText);
  buttonHeight = 128; 
  buttonX = (width - buttonWidth) / 2;
  buttonY = (height - buttonHeight) / 2;
}

function draw() {
  background(0);


  fill(220);
  textAlign(CENTER, CENTER);
  text(buttonText, width / 2, height / 2, 800);
}

function mousePressed() {
  if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
      mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    window.open('https://zofiarybinska.github.io/programowanieCD/', '_self'); 
  }
}

