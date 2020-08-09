// Main
//
// Author: Alessandro Sebastianelli

// Scale factor
const scl = 30;

let player;
let food;

// Flag for displaying a grid
let grid = false;

// Flag for wall teleporting
let tp = true;

// Frame rate
let fr = 5;

// Pause flag
let pause = false;

function setup() {
    // Create a canvas and set the frame rate
    createCanvas(600, 600);
    frameRate(fr);

    // Spwan the player in a random position
    let x = floor(random(0, width/scl))*scl;
    let y = floor(random(0, height/scl))*scl;

    player = new Snake(x, y);

    // Spawn a food in a random position
    x = floor(random(0, width/scl))*scl;
    y = floor(random(0, height/scl))*scl;

    food = new Food(x, y);

}

function draw() {
    // Set a color for the background
    background(51);
    // Update the framerate
    frameRate(fr);
    updateFrameRate();
   
    // Update and render the player
    player.update();
    player.render();

    // If the player eats a food respawn the food
    if (player.eat(food.x, food.y)){
        food.spawn();
    }

    // Render the food
    food.render();
    
    // Display UI
    textSize(32);
    noStroke();
    fill(255);
    text("Score: ", 10, 40)
    text(player.counter, 120, 40);
    text("Level: ", 200, 40);
    text(fr-4, 300, 40);

    // If true display a grid
    if(grid){
        drawGrid();
        console.log(player.counter);
    }

}

// Move the player
function keyPressed(){
    if (key == "ArrowUp"){
        player.setDirection(0, -1);
    } else if (key == "ArrowDown"){
        player.setDirection(0,  1);
    } else if (key == "ArrowLeft"){
        player.setDirection(-1, 0);
    } else if (key == "ArrowRight"){
        player.setDirection( 1, 0);
    } else {
        if(pause){
            frameRate(fr);
            pause = false;
        } else {
            frameRate(0);
            pause = true;
        }
    }
}

// Draw a grid 
function drawGrid(){
    stroke(255);
    strokeWeight(1);
    for(let i = 0; i < width/scl; i++){
        line(0, i*scl, width, i*scl);
    }
    for(let i = 0; i < height/scl; i++){
       line(i*scl, 0, i*scl, height); 
    }
}

function updateFrameRate(){
    fr = 5 + floor(player.counter/10); 
    //console.log(player.counter%10)
}



