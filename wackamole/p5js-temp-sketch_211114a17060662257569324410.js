var ballx = 300;
var bally = 300;
var ballSize = 25;
var score =0;
var gameState = 'L1';


var img;
var img2


function preload(){
  img = loadImage('finalmallet.png');
  img2 =loadImage('mole.png');
  img3 =loadImage('grass.png');
  img4 =loadImage('winner.gif');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
   noCursor();
} // end setup=======================


function draw() {
  background(151,109,199);
 image(img, mouseX-20, mouseY-20,50,50);

 
 
 if(gameState== "L1"){
 levelOne();
 }
 if(gameState == "L2"){
 levelTwo();
 }
 if(gameState == "L3"){
  levelThree();
 }
 if(gameState == "L4"){
   levelFour();
 }
 
   if(gameState == "WINNER WINNER CHICKEN DINNER"){
    Win();
  }

  text(("Score: " + score), width/2, 40);
  } // end draw=======================================================


function levelOne(){
   background(img3);
  image(img, mouseX-20, mouseY-20,50,50);
  text("level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(600);
    bally= random(600);
    score= score +1;
  }
  if(score>10){
// call level 2
  gameState= "L2";
  }

  line(ballx, bally, mouseX, mouseY);
   image(img2, ballx-35,bally-35, ballSize+30, ballSize+30);
} // end level one=========








function levelTwo(){
   background(img3);
  image(img, mouseX-20, mouseY-20,50,50);
  text("level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(600);
    bally= random(600);
    score= score +1;
  }
  if(score>20){
  gameState= "L3";
  }

 
   image(img2, ballx-5,bally-5, ballSize+5, ballSize+5);
} // end level two=========================


function levelThree(){
   background(img3);
  image(img, mouseX-20, mouseY-20,25,25);
  text("level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(600);
    bally= random(600);
    score= score +1;
  }
  if(score>30){
// call level 3
  gameState= "L4";
  }

 
   image(img2, ballx-10,bally-10, ballSize+10, ballSize+10);
} // end level three===================


function levelFour(){
   background(img3);
  image(img, mouseX-20, mouseY-20,50,50);
  text("level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(600);
    bally= random(600);
    score= score +1;
  }
  if(score>40){
// call level 4
  gameState= "WINNER WINNER CHICKEN DINNER";
  }

 
   image(img2, ballx-20,bally-20, ballSize+5, ballSize+5);
} // end level four===========================

function Win(){
  background(img4);
  fill(0,0,0);
  textSize(25);
 text("WINNER WINNER CHICKEN DINNER", width/2,height-20);
  
}
