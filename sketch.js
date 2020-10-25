var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1b,rect2b,rect3b;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-10, width, 10 , {isStatic:true} );
	 World.add(world, ground);

 	rectPosition=width/2-100
 	rectY=640;
	 
 	rectleftSprite=createSprite(rectPosition, rectY -5, 20,100);
 	rectleftSprite.shapeColor=color(255,0,0);

 	rectLeftBody = Bodies.rectangle(rectPosition, rectY - 5, 20,100 , {isStatic:true} );
 	World.add(world, rectLeftBody);

 	rectBase=createSprite(rectPosition+100, rectY+35, 200,20);
 	rectBase.shapeColor=color(255,0,0);

 	rectBottomBody = Bodies.rectangle(rectPosition+100, rectY+45, 200,20 , {isStatic:true} );
 	World.add(world, rectBottomBody);

 	rectrightSprite=createSprite(rectPosition+200 , rectY - 5, 20,100);
 	rectrightSprite.shapeColor=color(255,0,0);

 	rectRightBody = Bodies.rectangle(rectPosition+200-20 , rectY - 5, 20,100 , {isStatic:true} );
 	World.add(world, rectRightBody);


	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0);

	Engine.update(engine);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
	 
	
	fill("white");
	 text("Hey Soldier,",100,40);
	 text("There is a special task for you, Are you ready for that",100,60);
	 text("There is an Zombie apoclypse in a City you have to drop some food for the survivors in the city Park ",100,80);
     text("Press & Hold 'Down' key to Drop the Supplies",100,100);


	  
	if(keyDown(DOWN_ARROW)) {
	  Matter.Body.setStatic(packageBody,false);

      textSize(70);
	text("YOU DID IT",200,300);
	  }	

	drawSprites();
  }






