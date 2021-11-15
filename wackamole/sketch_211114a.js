var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState = 'L1';


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup=======================


function draw() {
  background(151,109,199);
 if(gameState== "L1"){
 levelOne();
 }
 if(gameState == "L2"){
   levelTwo();
 }
  text(("Score: " + score), width/2, 40);
  } // end draw


function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
  gameState= "L2";
  }

  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level one








function levelTwo (){
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// call level 2

  }

  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two
