class Bob{
    constructor(x,y){
        var options={
           'restitution':1.15,
           'slop':1,
           'inertia':Infinity

        }
        this.body=Bodies.circle(x,y,40,options);
        this.radius=30
        World.add(world,this.body);
    
    }
    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
ellipseMode(RADIUS);
fill("red")
//strokeWeight(10)
//stroke(255)
ellipse(0,0,this.radius);
pop ()
    }
};