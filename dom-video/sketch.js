/*
 * @name Video Canvas
 * @description Load a video with multiple formats and draw it to the canvas.
 * To run this example locally, you will need a running 
 * <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.
 */
// let fingers;

// function setup() {
//   createCanvas(710, 400);
//   // specify multiple formats for different browsers
//   fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
//   fingers.hide(); // by default video shows up in separate dom
//   // element. hide it and draw it to the canvas
//   // instead
// }

// function draw() {
//   background(150);
//   image(fingers, 10, 10); // draw the video frame to canvas
//   filter(GRAY);
//   image(fingers, 150, 150); // draw a second copy to canvas
// }

// function mousePressed() {
//   fingers.loop(); // set the video to loop and start playing
// }
let vid;
function setup() {

  createCanvas(300, 300);
  //createVideo creates an HTML5 <video> element in the DOM for simple playback of audio/video. 
  // if you dont want this HTML5 element to show but you want to play the video using the image 
  //function inside the canvas instead. Call vid.hide() like below. (Same for capture).
  vid = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
  vid.size(300, 300);
  vid.hide(); //hide video element 

  capture = createCapture(VIDEO);
  capture.hide(); //we dont want the HTML5 capture element to show below the canvas.

}

function draw(){
  background(255);
    if(mouseX<width/2){
      vid.play(); //play video
      vid.volume(0);
      image(vid,0,0); //draw video buffer to canvas
      text("Mouse is left.", 10, height-30);
      text("Draw video to the canvas with image()", 10, height-15);

    }else{  
      vid.stop(); //stop video
      image(capture, 0, 0, width, width * capture.height / capture.width);//draw capture buffer to canvas
      text("Mouse is right.", 10, height-30);
      text("Draw camera capture to the canvas with image()", 10, height-15);
    }

};


