var space, spaceImg;
var ship, shipImg, shipImg2, shipAnimation
var lazer, lazerImg

function preload() {
spaceImg = loadImage("space2.jpg")
shipAnimation = loadAnimation("ship1.png","ship2.png")
lazerImg = loadImage("lazer.png")
}
function setup() {
  canvas = createCanvas(500, 630);
  space = createSprite(250, 400, 500, 800)
  space.addImage(spaceImg)
  ship = createSprite(250,400,20, 30)
  ship.addAnimation("ship animation",shipAnimation)
  ship.scale = 0.1

}

function draw() 
{
   background("white");
if(space.y>1000){
  space.y=250
}
   space.velocityY=2
  if (keyDown(RIGHT_ARROW)) 
  {
  ship.x+=6
  }

    if (keyDown(LEFT_ARROW)) 
  {
    ship.x-=6   
  }
if (keyDown(UP_ARROW)){
  createLazer();
}
 drawSprites()
}
function createLazer(){
  if(World.frameCount%10 === 0){
    lazer = createSprite(250,300,6,6);
    lazer.velocityY = -7;
    lazer.x = ship.x;
    lazer.addImage(lazerImg);
    lazer.scale = 0.1;
    lazer.tt = 50
  }
}


