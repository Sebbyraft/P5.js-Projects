let img;
let currentZoom;
let zooming;
let sliderX;
let sliderY;
let autoRot;
let x;
let y;
let z;
let phi;

function preload(){
  img = loadImage('earth.jpg');
}

function setup() {
  createCanvas(1000,600,WEBGL);
  sliderX = createSlider(-4, 4, 0, 0.1);
  sliderX.position(10, 30);
  sliderX.style('width', '100px');
  sliderY = createSlider(-4, 4, 0, 0.1);
  sliderY.position(10, 80);
  sliderY.style('width', '100px');
  currentZoom = 0;
  zooming = 0;
  autoRot = false;
  x = 0;
  y = 0;
  z = 0;
  phi = -PI/2;
}

function draw() {
  background(0,191,255);
  if(autoRot===false){
    rotateX(sliderY.value());
    rotateY(sliderX.value());
  } else {
    rotateY(-millis()/1000);
    rotateX(-0.15);
  }
  
  texture(img);
  sphere(100+currentZoom,24,16);
  zoom();
  fill(255);
  translate(x,y, z);
  //rotateY(-millis());

  sphere(20);  
  
  // z = 200*cos(6.24*millis()/4000);
  // y = 200*sin(6.24*millis()/4000);
  x = -8*currentZoom*cos(phi)*cos(millis()/10000);
  y = 8*currentZoom*cos(phi)*sin(millis()/10000);
  z = 8*currentZoom*sin(phi);
  phi = phi+0.1;
}

function mousePressed(){
  // if(drawMap === false) drawMap = true;
  // else drawMap = false;
  console.log("x:"+mouseX+" y: "+mouseY);
}

function zoom(){
  // 100 - 500
  currentZoom += zooming;
}

function keyPressed(){
  console.log(keyCode);
  // z -> zoom in
  if(keyCode === 90){
    zooming = 5;
  }
  // x -> zoom out
  if(keyCode === 88){
    zooming = - 5;
  }
  // r -> enable auto rotation
  if(keyCode === 82){
    if(autoRot === false) autoRot = true;
    else autoRot = false;
  }
}

function keyReleased(){
  if(keyCode === 90 || keyCode === 88){
    zooming = 0;
  }
}
