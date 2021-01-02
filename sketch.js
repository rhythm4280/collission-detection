var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
 movingRect=createSprite(100,100,100,10);
 movingRect.shapeColor="red";
 movingRect.debug=true;
 fixedRect=createSprite(200,200,10,100);
 fixedRect.shapeColor="red";
 fixedRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
    {
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
    }
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
  drawSprites();
}