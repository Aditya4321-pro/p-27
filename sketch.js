const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var gr,g2,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5,b6,c6,s1;
function setup() {
	createCanvas(1400, 700);
engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

g2=new Ground(400,60,600,50)
b1=new Bob(150,100)
c1=new Chain(b1.body,{x:150,y:70})

b2=new Bob(225,300)
c2=new Chain(b2.body,{x:225,y:70})

b3=new Bob(300,300)
c3=new Chain(b3.body,{x:300,y:70})

b4=new Bob(375,100)
c4=new Chain(b4.body,{x:375,y:70})

b5=new Bob(450,300)
c5=new Chain(b5.body,{x:450,y:70})
s1=new Space(600,250,50,50)
b6=new Bob(525,300)
c6=new Chain(b6.body,{x:525,y:70})
	Engine.run(engine);

  
}


function draw() {
	background("black");
    Engine.update(engine);
    s1.display();
  g2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
 c6.display();

}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(b1.body,b1.body.position,{x:-15,y:-180})
}
}