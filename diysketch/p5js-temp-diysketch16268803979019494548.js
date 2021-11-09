var img;
var initials ='ap'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('75.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(51);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    noStroke(0);
     
     fill(0, 0, 150, 10); 
      ellipse(100, 0, 0, 10); 
     ellipse(mouseX, mouseY, 200, 200);
     line(mouseX, mouseY, pmouseX, pmouseY);
     
    
    } else if (toolChoice == '2') { // second tool
    //pink//
 frameRate(60);
    noStroke(0);
     fill(238,130,238, 10);
     ellipse(mouseX, mouseY, 200, 200);
     line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    //sun// 
    fill(255,165,0,5);
    stroke(300, 100, 0, 50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY, 150, 150);
  } else if (toolChoice == '4') {
     //black pen//
   
    noStroke(255);
     ellipse(mouseX, mouseY, 5, 5);
      fill(0,0,0, 100);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 10, 10);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

   noStroke(255);
     
     fill(0, 0, 0, 100); 
     
     ellipse(mouseX, mouseY, 50, 50);
     line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {
     //pink lines//
     noStroke(255);
     
     fill(255,105,180, 255); 
     
     ellipse(mouseX, mouseY, 5, 5);
     line(mouseX, mouseY, pmouseX, pmouseY);
     
     
  } else if (toolChoice == '8') {
  //stars//
noStroke(255);
    fill(255,255,255, 80);
    rect(mouseX, mouseY, 5, 5);
  } else if (toolChoice == '9') {
  //yellow part of sun//
   fill(255,165,0,5);
    stroke(255,255,51, 50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY, 100, 100);
  } else if (toolChoice == '0') {
    //coral part of sun//
   fill(255,127,80,5);
    stroke(255,255,51, 50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY, 200, 200);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX-200, mouseY-300, 400, 400);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(0,206,209);
  rect(x-0, y-0, 20, 20);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
