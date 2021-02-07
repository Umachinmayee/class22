const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  var groundoptions={
    isStatic:true
  }
  ground= Bodies.rectangle(300,570,200,20,groundoptions);
  World.add(world,ground);
  var balloptions={
    restitution:1.1
  }
  ball=Bodies.circle(300,100,20,balloptions);
  World.add(world,ball);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 200, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}
