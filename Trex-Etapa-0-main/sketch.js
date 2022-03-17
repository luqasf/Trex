
var trex ,trex_running;
var solo
var soloImage
var solo_invisible
var nuvem
var imageNuvem
var cacto1,cacto2,cacto3,cacto4,cacto5,cacto6
var cacto
var score
var PLAY = 1
var END = 0
var estadoJogo = PLAY 
var groupCac
var groupNuv
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImage = loadImage("ground2.png")
  imageNuvem = loadImage("cloud.png")
  cacto1 = loadImage("obstacle1.png")
  cacto2 = loadImage("obstacle2.png")
  cacto3 = loadImage("obstacle3.png")
  cacto4 = loadImage("obstacle4.png")
  cacto5 = loadImage("obstacle5.png")
  cacto6 = loadImage("obstacle6.png")

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5
  solo = createSprite(300,190,1200,20)
  solo.addImage("ground",soloImage);
  solo.velocityX = -8
  solo_invisible = createSprite(300,200,1200,20)
  solo_invisible.visible = false
  score = 0
}


function draw(){
  background("white")
  text("score: "+ score,500,20)
  if (estadoJogo === PLAY) {
  trex.velocityY = trex.velocityY +0.8
  createCactos();
  createNuv();
  if (groupCac.isTouching(trex)) {
  estadoJogo = END

  }
  score = score + Math.round(frameCount/50)
  if (solo.x < 0  ) {
    solo.x = solo.width/2
    
  }
  if (keyDown("space")&& trex.y>160 ) {

    trex.velocityY = -12   
  } 
  }
  else if (estadoJogo === END) {
solo.velocityX = 0
groupCac.setvelocityXEach (0)
groupNuv.setvelocityXEach (0)
  }
  


  
  trex.velocityY = trex.velocityY +0.8
  console.log(trex.y)
  trex.collide(solo_invisible);
  

  drawSprites();


}
function createNuv() {

  if (frameCount%80 === 0) {
    nuvem = createSprite(600,100,20,20)
    nuvem.velocityX = -2  

    nuvem.addImage("sky",imageNuvem)

    nuvem.scale = 0.8

    nuvem.y = Math.round(random(50,120))

    nuvem.depth = trex.depth

    trex.depth = trex.depth + 1
    nuvem.lifetime = 308
   groupNuv.add(nuvem)
  }
}
function createCactos() {
  if (frameCount%80 === 0) {
  cacto = createSprite(600,175,20,20)

  cacto.velocityX = -4

  var sorteio = Math.round(random(1,6))
  switch (sorteio) {

case 1: cacto.addImage(cacto1)
break

case 2: cacto.addImage(cacto2)
break

case 3: cacto.addImage(cacto3)
break

case 4: cacto.addImage(cacto4)
break

case 5: cacto.addImage(cacto5)
break

case 6: cacto.addImage(cacto6)
break

default:break
  }
  cacto.scale = 0.4  

  cacto.lifetime = 308
  groupCac.add(cacto)
  }
}