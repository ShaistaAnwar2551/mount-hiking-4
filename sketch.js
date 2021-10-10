  var jacksonimg,jackson;
  var tower,towerimg;
  var jacksonstanding;
  var rockG,rockImg,rock;
  var coinG,coinImg, coin;
  //var redappleG,redappleImg, redapple;
  var greenappleG,greenappleImg, greenapple;
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  var score = 0;

function setup() {
  createCanvas(800,700);

  tower = createSprite(400,400,800,800);
  tower.addImage("tower",towerimg);
  tower.scale = 1.5;
  tower.velocityY = 0;

  jackson = createSprite(400,400)
  jackson.addImage("jackson",jacksonstanding);
  jackson.addAnimation("player",jacksonimg);
  jackson.scale = 0.7

  rockG = new Group();
  coinG = new Group();
  redappleG = new Group();
}

function preload(){
jacksonimg = loadAnimation("jackson1.png","jackson2.png","jackson3.png");
jacksonstanding = loadImage("jackson1.png")
towerimg = loadImage("tower.png");
rockImg = loadImage("rock.png");
coinImg = loadImage("coin.png");
redappleImg = loadImage("red apple.png");
//greenappleImg = loadImage("green apple.png");


}

function draw() {
  background("red");

  

  if(gameState === PLAY){
    if(keyDown("space")){
      tower.velocityY = 2;
      jackson.changeAnimation("player",jacksonimg)
      
        }
      
        if(keyDown (LEFT_ARROW)  && jackson.x >= 50){
      jackson.x = jackson.x -20;
        }
      
        if(keyDown (RIGHT_ARROW) && jackson.x <= 750){
          jackson.x = jackson.x + 20;
            }
    if (tower.y > 650){
      tower.y = tower.height/2;
    }
  
    if(jackson.isTouching (coinG)){
      score = score + 10
      coinG.destroyEach();
    }

    /*if(jackson.isTouching (redappleG)){
      score = score + 5
      redappleG.destroyEach();
    }*/
  
    if(jackson.isTouching (greenappleG)){
      score = score + 3
      greenappleG.destroyEach();
    }

    if(jackson.isTouching (rockG)){
    gameState = END;
     
    }

    spawnRock();
    spawncoin();
    spawnRedapple();
    //spawnGreenapple();
    
        drawSprites();
  
  }

  if(gameState === END){
 tower.velocityY = 0
 rockG.destroyEach();
  }

 
  fill("white")
 textSize(25)
  text("score = "+score, 600,50)

}
function spawnRock(){
  if(frameCount % 80 === 0){
  var rock = createSprite(400,-10,20,20)
  rock.x = Math.round(random(100,700))
  rock.addImage("rock",rockImg);
  rock.velocityY = 3;
  rock.scale = 0.2;
  rock.lifetime = 800/3; 
    rockG.add(rock);
  }
}

function spawncoin(){
  if(frameCount % 120 === 0){
  var coin = createSprite(400,-10,20,20)
  coin.x = Math.round(random(100,700))
  coin.addImage("coin",coinImg);
  coin.velocityY = 3;
  coin.scale = 0.2;
  coin.lifetime = 800/3
  coinG.add(coin);
  }
}

function spawnRedapple(){
  if(frameCount % 130 === 0){
  var redapple = createSprite(400,-10,20,20)
  redapple.x = Math.round(random(100,700))
  redapple.addImage("Rapple",redappleImg);
  redapple.velocityY = 3;
  redapple.scale = 0.1;
  redapple.lifetime = 800/3
  redappleG.add(redapple);
  }
}

/*function spawnGreenapple(){
  if(frameCount % 140 === 0){
  var greenapple = createSprite(400,-10,20,20)
  greenapple.x = Math.round(random(100,700))
  greenapple.addImage("Gapple",greenappleImg);
  greenapple.velocityY = 3;
  greenapple.scale = 0.1;
  greenapple.lifetime = 800/3
  greenappleG.add(greenapple);
  }
}*/



//function keyPressed(){
 
//}