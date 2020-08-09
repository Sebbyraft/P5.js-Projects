// Snake class
//
// Author: Alessandro Sebastianelli

class Snake{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.velx = 0;
        this.vely = 0;
        this.tail = [];
        this.counter = 0;
    }

    // Eat food. If the food position and the Snake position is ~ the same
    // then increase the counter
    eat(foodx, foody){
        let d = dist(this.x, this.y, foodx, foody);
        if(d < 1){
            this.counter++;
            return true;
        } else {
            return false;
        }
    }
    
    // Update snake position
    update(){

        // Test the death condition
        if(this.counter > 2){
            this.checkDeath();
        }

        // Check walls
        if (this.x > width){
            // If teleporting (tp) is allowed and the Snake is moving
            // towards the right wall, then teleport the Snake on the 
            // left side, otherwise teleport the Snake on the right side
            // If the teleporting is not allowed, then restart the game
            if(tp){
                this.x = 0;
                this.velx = 1;
            } else {
               this.restart(); 
            }
        } else if (this.x < 0){
            if(tp){
                this.x = width;
                this.velx = -1;
            } else{
                this.restart();
            }
        }

        // If teleporting (tp) is allowed and the Snake is moving
        // towards the uppper wall, then teleport the Snake on the 
        // bottom side, otherwise teleport the Snake on the top side
        // If the teleporting is not allowed, then restart the game    
        if (this.y > height){
            if(tp){
                this.y = 0;
                this.vely = 1;
            } else {
                this.restart();
            }    
        } else if (this.y < 0){
            if(tp){
                this.y = height;
                this.vely = -1;
            }else{
                this.restart();
            }
        }
        
        // Update the tail
        if(this.counter === this.tail.length){
            for(let i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1]
            }
        }
        
        this.tail[this.counter - 1] = createVector(this.x, this.y);

        // Update Snake x and y using the velocity 
        // (scl is the global scale factor)
        this.x = this.x + this.velx*scl;
        this.y = this.y + this.vely*scl; 
    }
    
    // Draw the Snake
    render(){
        fill(255);
        stroke(51);
        strokeWeight(5);

        // Draw tail
        for(let i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        
        // Draw head
        stroke(0, 100, 0);
        rect(this.x, this.y, scl, scl);
    }

    // Set the direction
    setDirection(velx, vely){
        this.velx = velx;
        this.vely = vely;
    }

    // Reset the game 
    restart(){
        this.tail = [];
        this.counter= 1;    
        // Re-Spwan the player in a random position
        this.x = floor(random(0, width/scl))*scl;
        this.y = floor(random(0, height/scl))*scl;

        this.velx = 0;
        this.vely = 0;
    }

    // Check death. If the Snake eats himself, then restart
    checkDeath(){
        for(let i = 0; i < this.tail.length; i++){
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);

            if (d < 1){
                this.restart();
            }
        }
    }
}
