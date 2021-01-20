
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ball=new paper(50,650,40)
ground1=new ground(400,680,800,10)	
b1=new trashbin(600,550,150,150)
//b2=new trashbin(515,625,25,100)
//b3=new trashbin(660,625,25,100)



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();
 ball.display();
 ground1.display();
 b1.display();
 //b2.display();
 //b3.display();
}

function keyPressed(){
if (keyCode === 32){

Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-40});


    }
}




