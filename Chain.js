class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA :bodyA,
            pointB:pointB,
            stiffness:1,
            length:500

        }
        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world,this.chain);

    }
    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.pointB
        push()
        stroke(200)
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        pop()
    
    }
}
