import Ball from './Ball';
// const Ball = require('./Ball');

let video;

const red = new Ball(color(172, 39, 48), 15);
const blue = new Ball(color(30, 110, 208), 25);
const purple = new Ball(color(49, 31, 107), 15);
const green = new Ball(color(0, 187, 176), 25);


const setup = () => {
  createCanvas(480, 360, P2D); // Important to note the renderer
  
  video = createCapture(VIDEO);
  // capture.size(320, 240);
  video.hide();
}

const draw = () => {
  background(0);
  console.log('drawing')
//   if (video.available()) {
//     video.read();
//     video.loadPixels();
//   }
  image(video, 0, 0, width, height);
//   red.findColor();
//   red.showTrail(color(200, 50, 50), "Dashes", false);
  
//   blue.findColor();
//   blue.showTrail(color(70, 70, 250), "Line", true);
  
//   purple.findColor();
//   purple.showTrail(color(100, 10, 100), "Line", false);
  
//   green.findColor();
//   green.showTrail(color(0, 250, 0), "Dots", false);

  
}





// function setup() {
//   createCanvas(390, 240);
//   video = createCapture(VIDEO);
//   // capture.size(320, 240);
//   video.hide();
// }

// function draw() {
//   background(255);
//   image(video, 0, 0, 320, 240);
//   // filter(INVERT);r
// }