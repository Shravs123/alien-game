
var alien1 ,alien;
var seed1 ,seed2;
var laser1,laser2;
var edge;
function preload()
{
alien1=loadImage("images/alien.png");
seed1=loadImage("images/seed.png");
}
function setup()
{
  createCanvas(400,400);
  laser1=createSprite(80,350,180,10);
  laser1.velocityY = -4
  laser1.shapeColor="red"
  laser2=createSprite(320,70,180,10);
  laser2.velocityY=4
  laser2.shapeColor="red"
  alien = createSprite(50,350,20,20)
  alien.addImage(alien1)
  alien.scale=0.5
  seed2=createSprite(350,50,20,20)
  seed2.addImage(seed1)
  seed2.scale=0.3
}
  function draw(){
    
    background("cyan");
    edge =createEdgeSprites();
    laser1.bounceOff(edge);
    laser2.bounceOff(edge);
    drawSprites()
}
