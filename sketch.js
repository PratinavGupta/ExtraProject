var engine, world;

function setup() {
	createCanvas(800, 700);
	engine = Matter.Engine.create();
	world = engine.world;

	rectMode(CENTER);
	wall = new Wall(400, 100, 400, PI / 2);
	wall1 = new Wall(200, 240, 300, 0);
	wall2 = new Wall(600, 240, 300, 0);
	wall3 = new Wall(550, 480, 200, PI / 3);
	wall4 = new Wall(250, 480, 200, -PI / 3);
	wall5 = new Wall(370, 250, 100, PI / 6);
	wall6 = new Wall(420, 250, 100, -PI / 6);

	ball = new BALL(random(230, 580), random(120, 300));
	ball2 = new BALL(random(230, 580), random(120, 300));
	ball3 = new BALL(random(230, 580), random(120, 300));
	ball4 = new BALL(random(230, 580), random(120, 300));
	ball5 = new BALL(random(230, 580), random(120, 300));
	ball6 = new BALL(random(230, 580), random(120, 300));
	ball7 = new BALL(random(230, 580), random(120, 300));
	ball8 = new BALL(random(230, 580), random(120, 300));
	ball9 = new BALL(random(230, 580), random(120, 300));
	ball10 = new BALL(random(230, 580), random(120, 300));
	ball11 = new BALL(random(230, 580), random(120, 300));
	ball12 = new BALL(random(230, 580), random(120, 300));
	ball13 = new BALL(random(230, 580), random(120, 300));
	ball14 = new BALL(random(230, 580), random(120, 300));
	ball15 = new BALL(random(230, 580), random(120, 300));

	Matter.Engine.run(engine);
}


function draw() {
	background(0);
	Matter.Engine.update(engine);

	ball.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ball6.display();
	ball7.display();
	ball8.display();
	ball9.display();
	ball10.display();
	ball11.display();
	ball12.display();
	ball13.display();
	ball14.display();
	ball15.display();

	wall.display();
	wall1.display();
	wall2.display();
	wall3.display();
	wall4.display();
	wall5.display();
	wall6.display();

	drawSprites();
}