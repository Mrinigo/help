
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var ball
var ground	


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_options={
		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	 }
	 ball = Bodies.circle(450,500,10,ball_options)
     World.add(world,ball)
	 ground = new Ground(width/2,670,width,50)
	Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10)
  ball.show()
  ground.display()
  drawSprites();
 
}



