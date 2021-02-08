const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1;
var endPoint1, endPoint2, endPoint3, endPoint4;

function setup() {
	var canvas = createCanvas(1340, 600);

	engine = Engine.create();
	world = engine.world;

	endPoint1 = createSprite(1340, 300, 7, 600);
	endPoint1.shapeColor = 'black';
	endPoint2 = createSprite(0, 300, 7, 600);
	endPoint2.shapeColor = 'black';
	endPoint3 = createSprite(670, 0, 1340, 7);
	endPoint3.shapeColor = 'black';
	endPoint4 = createSprite(670, 600, 1340, 7);
	endPoint4.shapeColor = 'black';

	roof = new Roof(670, 50, 650, 50);

	bobObject1 = new Bob(670, 540, 50);
	bobObject2 = new Bob(570, 540, 50);
	bobObject3 = new Bob(470, 540, 50);
	bobObject4 = new Bob(770, 540, 50);
	bobObject5 = new Bob(870, 540, 50);

	rope1 = new Rope(bobObject1.body, roof.body, 0, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, -200, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 100, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 200, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject3.body, bobObject3.body.position, {x : -0.55, y : -0.55});
	}
}