var b1;

function preload(){
  

}
function setup(){
  createCanvas(700,450);
  background("black");
  b1 = createSprite(200,200,20,20);
  b1.shapeColor = "white"
 

}
function draw(){
 if(mousePressedOver(b1)){
  b1.shapeColor = "blue";
 }
 if (event.touches[0].b1){
  b1.shapeColor = "blue";
 }
  drawSprites();
}
