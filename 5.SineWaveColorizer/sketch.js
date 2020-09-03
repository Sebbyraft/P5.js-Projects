// Main
//
// Author: Alessandro Sebastianelli

let t;
let initial_phase;

function setup() { 
  createCanvas(600, 600);
  background(51);
  t = 0;
  initial_phase = PI;
} 

function draw() { 

  for(let x = 0; x < 600; x+=60){
    for(let y = 0; y < 600; y+=60){
      noStroke();

      //let r = 255*(0.5+sin(initial_phase + (x*y)/(2) + t));
      let r = 255*(0.5+sin(initial_phase + (x - y)/(x + y) + t));
      let g = 255*(0.5+sin(initial_phase - (x - y)/(x + y) + t));
      let b = 255*(0.5+sin(initial_phase - (x - y)/(x + y) - t));
      //let b = 255*(0.5+sin(initial_phase + (x)/(y) + t));
      fill(r, g, b);
      rect(x, y, 60, 60);
    }
  }
  t = t + 0.01;
}