// Main
//
// Author: Alessandro Sebastianelli
var video;
let res;
let thresholdR;
let thresholdG;
let thresholdB;

function setup() { 
  
    pixelDensity(1);
    createCanvas(800, 600);
    video = createCapture(VIDEO);
    video.hide();
    res = 5;

    thresholdR = 160;
    thresholdG = 160;
    thresholdB = 160;
} 

function draw() { 
  //background(255);
  image(video,0,0,width,height);

  loadPixels();

  for (var y = 0; y < height; y+= res) {
	for (var x = 0; x < width; x+= res) {
        var r = pixels[4 * (y*width + x)];
	    var g = pixels[4 * (y*width + x) + 1];      
        var b = pixels[4 * (y*width + x) + 2];    
    
        if (r > thresholdR && g > thresholdG && b > thresholdB){
            fill(255);
        } else {
            fill(r, g, b);
        }

        noStroke();
        rect(width - x, y, res, res);
    }
  }
}