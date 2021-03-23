class Pig {  
    //properties
    constructor(x,y) {
        this.width = 50;
        this.height = 50;
        this.pigBody;
        
        var pigOptions = {
            isStatic : false, 
            restitution : 0.8,  // bounciness
           friction:0.3,
           density:1.0
        }
        
        //create physics engine body
        this.pigBody = Bodies.rectangle (x, y, this.width, this.height, pigOptions);
        // add the physics engine body world
        World.add (myWorld, this.pigBody);
        console.log(this.pigBody);
    }


    //methods  or functions

    display () {
        var pos = this.pigBody.position;
        var angle = this.pigBody.angle;
        push();
        angleMode (RADIANS);
        translate(pos.x,pos.y);
        rectMode (CENTER); 
        strokeWeight(4);
        stroke("brown");   
        fill ("green");
        rotate(angle);
        rect (0,0, this.width, this.height);
        pop();

        
        
        
  
    }





}