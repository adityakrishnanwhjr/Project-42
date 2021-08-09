var spacecraft, iss, bg;
var spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var issImage;
var hasDocked;
hasDocked = false;

function preload(){
  spacecraft1Img=loadAnimation("spacecraft1.png");
  spacecraft2Img=loadAnimation("spacecraft2.png");
  spacecraft3Img=loadAnimation("spacecraft3.png");
  spacecraft4Img=loadAnimation("spacecraft4.png");
  bg=loadImage("spacebg.jpg");
  issImage=loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);

  spacecraft=createSprite(400,290);
  spacecraft.scale=0.2;

  iss=createSprite(400, 150, 50, 50);
  iss.addImage(issImage);
  iss.scale=0.5;
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x=Math.round(random(spacecraft.x-2,spacecraft.x+2))
    spacecraft.addAnimation("normal",spacecraft1Img);
    if(keyDown(LEFT_ARROW)){
      spacecraft.addAnimation("normal",spacecraft3Img);
      spacecraft.x=spacecraft.x-1;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addAnimation("normal",spacecraft4Img);
      spacecraft.x=spacecraft.x+1;
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addAnimation("normal",spacecraft2Img);
    }

    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-1
    }

    if(spacecraft.x>360 && spacecraft.x<380 && spacecraft.y>200 && spacecraft.y<210){
      hasDocked = true;
    }
  }

  drawSprites();

  if(hasDocked===true){
    textSize(25);
    fill("white");
    text("Docking Successful!", 300, 375);
  }
}