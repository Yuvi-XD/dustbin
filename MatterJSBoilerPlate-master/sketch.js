
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxBottomBody=Bodies.rectangle(720,728,210,40,{isStatic:true})
	World.add(world,boxBottomBody)
	boxRightBody=Bodies.rectangle(650,650,50,200,{isStatic:true})
	World.add(world,boxRightBody)
	boxLeftBody=Bodies.rectangle(800,650,50,200,{isStatic:true})
	World.add(world,boxLeftBody)
ball=Bodies.circle(200,650,30,{restitution:0.3})
World.add(world,ball)
ground=Bodies.rectangle(200,800,1300,40,{isStatic:true})
World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(boxBottomBody.position.x,boxBottomBody.position.y,210,40)
  rect(boxLeftBody.position.x,boxLeftBody.position.y,50,200)
  rect(boxRightBody.position.x,boxRightBody.position.y,50,200)
  ellipse(ball.position.x,ball.position.y,60)
  rect(ground.position.x,ground.position.y,1300,40)
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-105})
		
}







}

