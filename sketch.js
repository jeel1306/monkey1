
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;
var bananasGroup;
var obstaclesGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
  monkey=createSprite(300,500,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400,500,900,10)
  ground.velocityX=-4;
 ground.x=ground.width/2;
  console.log(ground.x);
bananasGroup=new Group();
  obstaclesGroup=new Group();
  survivalTime=0;
  
}


function draw() {
  background("blue");
  if(keyDown("space")){
  monkey.velocityY=-8;
  }
  monkey.velocityY=monkey.velocityY+0.8;
if(ground.x <400){
  ground.x=ground.width/2;
}
  monkey.collide(ground);
  food();
  obstacles();
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:"+survivalTime,100,50);



  
  
  
  
  



  
 drawSprites();
  
}
function food(){
  if(frameCount%80===0){
  banana=createSprite(500,250,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.y=Math.round(random(150,250));
  banana.velocityX=-3;
  bananasGroup.add(banana);
}

}
function  obstacles(){
  if(frameCount%300===0){
  obstacle=createSprite(400,460,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
    obstaclesGroup.add(obstacle);
    obstacle.lifetime=200;
}
}
 
   
  
 


