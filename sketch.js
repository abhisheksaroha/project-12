var runnerImage,pathImage,path,runner,coinImage,coin ,left_boundary,right_boundary
function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png");
  coinImage = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,);
  path.addImage("path",pathImage);
  path.velocityY = -4;
  path.y = path.height/30;
  path.scale = 1.2;
  runner = createSprite(190,320,30,70);
  runner.addAnimation("running",runnerImage);
  runner.scale = 0.1;
  
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3;
  
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;

}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
 if(runner.isTouching(coin)) {
  coinscore = coinscore+1;
 } 
}


drawSprites();
}
