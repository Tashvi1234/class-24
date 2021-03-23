class Box {  
    //properties
    constructor(x,y,w,h) {
        this.width = w;
        this.height = h;
        this.boxBody;
        
        var boxOptions = {
            isStatic : false, 
            restitution : 0.3  // bounciness
        }
        
        //create physics engine body
        this.boxBody = Bodies.rectangle (x, y, this.width, this.height, boxOptions);
        // add the physics engine body world
        World.add (myWorld, this.boxBody);
        console.log(this.boxBody);
    }


    //methods  or functions

    display () {
        var pos = this.boxBody.position;
        var angle = this.boxBody.angle;
        push();
        angleMode (RADIANS);
        translate(pos.x,pos.y);
        rectMode (CENTER); 
        strokeWeight(4);
        stroke("brown");   
        fill ("white");
        rotate(angle);
        rect (0,0, this.width, this.height);
        pop();

        
        
        
  
    }





}