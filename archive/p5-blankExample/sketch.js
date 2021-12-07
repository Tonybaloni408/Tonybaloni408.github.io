// declare variables here
let ellipsePosition=1;

function setup() {
  // put setup code here --> this runs once upon launch


  createCanvas(500, 500);
// set background color in grayscale:

  background(150, 0, 150);
}
// draw ellipse}
function draw() {
  background(150, 0, 150);
  ellipse(ellipsePosition, 50, 80, 80);
  ellipsePosition+=1;


  // put drawing code here --> this loops every frame
}


// write custom functions here
