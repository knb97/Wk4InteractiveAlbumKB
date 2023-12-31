// video i used to create this code: https://www.youtube.com/watch?v=QjCtbMNLRuc&t=641s

//video to add sound and volume slider: https://youtu.be/Pn1g1wjxl_0?si=hiOhGOEp0Ut2EHXq

var roses; // song name
var slider;

var BohemianSoul; // font name

let gap = 10;
//circle number means 40 circles layering together
let cirNum = 40;
//circle size means the smaller size of the circle (in the center)
let cirSize = 20;
let angle = 0;
// ptNum is the spots in the background
let ptNum = 100;
let rectSize = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
  slider = createSlider(0, 1, 0.5, 0.01); // volume slider at the bottom of page
  song.play();

}

function draw() {
  background(80, 33, 42); //plum coffee color
  song.setVolume(slider.value());

  
  //mouse cursor
  noCursor();
  noStroke();
  fill(244, 146, 146); // light pink color
  circle(mouseX, mouseY, 8);

  //main graph
  // for the circle to rotate base on the mouse position -- use translate, rotate, and push and pop function. The push and pop function will seperate different sections with translate funsctions *they always use togehter*
  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(244, 146, 146); // peachy pink color
  strokeWeight(1);
  // define the angle variable at the top (let angle)
  rotate(angle);
  // to change rotate angle speed
  angle = angle + map(mouseX, 0, width, -0.1, 0.1);
 // to make the loop repetitive and save time use for Loop
  // 1st argument is where to start, 
  // 2nd argument is where to end 
  //3rd argument is the increment each time. increment by one use i++, by two i+=2 by 3 i+=3.
  for (let i = 0; i < cirNum; i++) {
    // change the circle to an arc so you can be able to see the rotate
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - angle / 2);
  }
  pop();

  // title & subtitle
  // using custom font ref: https://youtu.be/Vz-bEwmvzSw
  push();
  translate(width / 2, height - 60);
  textSize(20);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont(BohemianSoul); // change font to BohemianSoul font
  fill(234, 74, 88);
  text("Red Moon in Venus", 0, 0);
  textSize(15);
  text("I Wish You Roses", 0, 20);
  pop();

  //border of the album cover
  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, rectSize, rectSize);

  // background noise(spots)
  
  stroke(244, 146, 146); // peachy pink color
  // this means you draw the spots 100 times
  for (let i = 0; i < ptNum; i++) {
    point(
      random(-rectSize / 2, rectSize / 2),
      random(-rectSize / 2, rectSize / 2)
    );
  }
  pop();
}

//text preload
function preload() {
  BohemianSoul = loadFont("Bohemian Soul.otf");
  
  song = loadSound("I wish you roses.mp3");
}

//close preload

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(48, 48, 48);
  } else {
    song.play();
    background(204, 132, 152
);
  }
}