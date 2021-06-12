
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	myworld = engine.world;
ground=new Ground(400,595,800,10)
roof1=new Ground(320,100,40,10)
roof2=new Ground(360,100,40,10)
roof3=new Ground(400,100,40,10)
roof4=new Ground(440,100,40,10)
roof5=new Ground(480,100,40,10)
  ball1=new Ball(320,300,20)
  ball2=new Ball(360,300,20)
  ball3=new Ball(400,300,20)
  ball4=new Ball(440,300,20)
  ball5=new Ball(480,300,20)
  c1=new Connection(roof1.ground,ball1.ball)
  c2=new Connection(roof2.ground,ball2.ball)
  c3=new Connection(roof3.ground,ball3.ball)
  c4=new Connection(roof4.ground,ball4.ball)
  c5=new Connection(roof5.ground,ball5.ball)
}


function draw() {
  background("pink");
  Engine.update(engine)
  ground.display()
 roof1.display()
 roof2.display()
 roof3.display()
 roof4.display()
 roof5.display()
 ball1.display()
 ball2.display()
 ball3.display()
 ball4.display()
 ball5.display()
c1.display()
c2.display()
c3.display()
c4.display()
c5.display()
}
function keyPressed(){
if (keyDown("UP_ARROW"))
{
	Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:0.105,y:-0.105})
}
}


