// Food class
//
// Author: Alessandro Sebastianelli


class Food{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    // Display the food
    render(){
        fill(229,43,80);
        stroke(51);
        strokeWeight(5)
        rect(this.x, this.y, scl, scl);
    }
    
    // Spawn the food in a random position
    spawn(){
        this.x = floor(random(0, width/scl))*scl;
        this.y = floor(random(0, height/scl))*scl;
    }

}
