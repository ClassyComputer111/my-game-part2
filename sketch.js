const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var soldier;
var soldierimg;
var ground1, ground2;
var ground1img,ground2img;
var terrorist1, terrorist2;
var terrorist1img, terrorist2img;
var life1, life2, life3, life4, life5;
var lifeimg

// function for loading the images for sprites
function preload(){
  soldierimg = loadImage("images/sol1img.png");
  backimg = loadImage("images/back5img.png");
  lifeimg = loadImage("images/Lifeimg1.png");
  
}

// function for making sprites and bodies
function setup() {
    engine = Engine.create();
    world = engine.world;

    soldier = createSprite(1000,480,50,50);
    soldier.addImage(soldierimg);
    soldier.scale = 0.2;

    life1 = createSprite(850,100,20,20);
    life1.addImage(lifeimg);
    life1.scale = 0.2;

    life2 = createSprite(940,100,20,20);
    life2.addImage(lifeimg);
    life2.scale = 0.2;

    life3 = createSprite(1030,100,20,20);
    life3.addImage(lifeimg);
    life3.scale = 0.2;

    life4 = createSprite(1220,100,20,20);
    life4.addImage(lifeimg);
    life4.scale = 0.2;

    life5 = createSprite(1120,100,20,20);
    life5.addImage(lifeimg);
    life5.scale = 0.2;

    ground1 = createSprite(500,720,80,20);
    ground1.visible = false;

    ground2 = new Ground(607,742,2000,20);
    terrorist1 = new Terrorist(50,50,80,20);
    terrorist2 = new Terrorist(100,80,20,20);
}

function draw() {
  
  createCanvas(displayWidth, displayHeight);
  background(backimg);

  text(mouseX+','+ mouseY,mouseX,mouseY);
  Engine.update(engine);

    ground2.display();
    terrorist1.display();
    terrorist2.display();

  // to move the soldier and ground in Up direction when up arrow key is pressed
    if(keyDown(UP_ARROW)){
      soldier.y = soldier.y-5;
      ground1.y = ground1.y-5;
    }

  // to move the soldier and ground Down when Down arrow key is pressed
    if(keyDown(DOWN_ARROW)){
      soldier.y = soldier.y+5;
      ground1.y = ground1.y+5;
    }

  // to move the soldier in left direction when left arrow key is pressed
    if(keyDown(LEFT_ARROW)){
      soldier.x = soldier.x-5;
    }
  // to move the soldier in right direction when right arrow key is pressed
    if(keyDown(RIGHT_ARROW)){
      soldier.x = soldier.x+5;
    }
  // to make the soldier jump when space key is pressed
    if(keyDown("space")){
      soldier.velocityY = -10;
    }
  
  // giving the soldier gravity so that when space key is pressed the soldier will not go out ofthe canvas
    soldier.velocityY = soldier.velocityY+0.5;

  // so the ground1 will also move along with soldier
    ground1.x = soldier.x;
  // so that when space key is pressed and soldier will come down he will collide with the ground
    soldier.collide(ground1);

  drawSprites();
}