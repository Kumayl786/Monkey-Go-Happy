
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas (600,600)
monkey = createSprite (80,315,20,20)
monkey.addAnimation ("monkey Image", monkey_running)
  monkey.scale = 0.1
  
ground = createSprite (400,350,900,10)
  ground.velocityX = -5
  ground.x = ground.width/2
 foodGroup = new Group()
  obstacleGroup = new Group()

}


function draw() {
background(255)
  
  stroke("white");
  textSize(20);
  fill("white")
  text("score:"  + score, 500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100,50)
  
  
  
  
  if (keyDown("space")){
    monkey.velocityY = -10
    monkey.velocityX = 0
  }
  monkey.velocityY = monkey.velocityY + 0.8  
  monkey.collide(ground)
  
  if(ground.x<0){
    ground.x = ground.width/2
    
  }
  
  spawnobstacle();
  fruit();
  drawSprites();
 
}

function fruit() {
  if(frameCount %80 === 0){
  
  banana = createSprite (600,250,40,10)
  banana.velocityX = -5 
  banana.addImage (bananaImage)
    banana.scale = 0.1
    banana.y = Math.round(random(120,200))
    banana.lifetime = 120
    foodGroup.add(banana)
}
}

function spawnobstacle(){
  if(frameCount %150 === 0){
  
  obstacle = createSprite (600,320,10,40)
  obstacle.velocityX = -5
  obstacle.addImage (obstacleImage)
  obstacle.scale = 0.1
  obstacle.lifetime = 120
    obstacleGroup.add(obstacle)
  }
  
}




