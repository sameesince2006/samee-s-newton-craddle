const Engine = Matter .Engine;    
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine;
var world;
var object;
var roof1;

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

roof1=new roof(450,65,600,20)
bob1=new Bob(250,280,50)
bob2=new Bob(350,280,50)
bob3=new Bob(450,280,50)
bob4=new Bob(550,280,50)
bob5=new Bob(650,280,50)
//create rope objects here 
rope1=new rope(bob1.body,{x:250,y:80})
rope2=new rope(bob2.body,{x:350,y:80})
rope3=new rope(bob3.body,{x:450,y:80})
rope4=new rope(bob4.body,{x:550,y:80})
rope5=new rope(bob5.body,{x:650,y:80})

}

function draw() {
  background(0);  
  Engine.update(engine)
roof1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
//display rope objects
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-390,y:-385});

  }
}