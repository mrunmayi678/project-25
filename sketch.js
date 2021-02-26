
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
	ground = Bodies.rectangle(400, 680, 800, 20 , {isStatic:true} );
	World.add(world, ground);


	dustbinPosition=500
	dustbinY=580


	dustbinleftSprite=createSprite(490, dustbinY, 20,180);
	dustbinleftSprite.shapeColor=color("white");

	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,180 , {isStatic:true} );
	World.add(world, dustbinLeftBody);

	

	dustbinBottomBody = Bodies.rectangle(dustbinPosition+100, dustbinY+45-20, 200,20 , {isStatic:true} );
	World.add(world, dustbinBottomBody);

	dustbinRightSprite=createSprite(510+200 , dustbinY, 20,180);
	dustbinRightSprite.shapeColor=color("white");

	dustbinRightBody = Bodies.rectangle(510+200-20 , dustbinY, 20,180 , {isStatic:true} );
	World.add(world, dustbinRightBody);


   Engine.run(engine);
     
	paper1= new Paper(100,550,80);
    dustbin1= new Dustbin();
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,20);
  
  paper1.display();
  dustbin1.display();
  drawSprites();
 
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:12,y:-12});
	}
}


