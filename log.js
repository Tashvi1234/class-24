class Log {  
    //properties
    constructor(x,y,h,angle) {
        this.width = 20;
        this.height = h;
        this.logBody;
        
        var logOptions = {
            isStatic : false, 
            restitution : 0.3,  // bounciness
            friction:1.0,
            density:1.0
        }
        
        //create physics engine body
        this.logBody = Bodies.rectangle (x, y, this.width, this.height, logOptions);
        Matter.Body.setAngle(this.logBody, angle);
        // add the physics engine body world
        World.add (myWorld, this.logBody);
        console.log(this.logBody);
    }


    //methods  or functions

    display () {
        var pos = this.logBody.position;
        var angle = this.logBody.angle;
        push();
        angleMode (RADIANS);
        translate(pos.x,pos.y);
        rectMode (CENTER); 
        strokeWeight(4);
        stroke("brown");   
        fill ("blue");
        rotate(angle);
        rect (0,0, this.width, this.height);
        pop();

        
        
        
  
    }





}