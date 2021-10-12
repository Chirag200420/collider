var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 40);
fixedRect.shapeColor="red";
movingRect=createSprite(200, 250, 70, 30);
movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="black";
    fixedRect.shapeColor="black";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}