//Creating Variables For Images....
var SpaceShip_img,AlienShip_img;
var background_img;

function Preload(){
  background_img = loadImage("SpaceBack.jpg")
}
function setup() {
  //Creating fullSize BackGround....
  createCanvas(displayWidth-50,displayHeight-120);
  }

function draw() {
  background("grenn");  
  drawSprites();
}