
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


	//Create the Bodies Here.
    bin=createSprite(330,685,20,200);
	bin=createSprite(420,685,200,20);
	bin=createSprite(530,685,20,200);

	bin.shapeColor="green";
	bin.shapeColor="green";
	bin.shapeColor="green";

	paper = new paper(200,685,20,200);
	
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  bin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
	}




