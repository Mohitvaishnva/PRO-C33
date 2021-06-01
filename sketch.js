const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var snowImg, snowManImg, snowBallImg, boy1Img;
var  boy1, snowMan, snowBall;
var engine, world;
var maxFlakes = 10;
var flakes = [];
var snowCreatedFrame = 0;
var slingShot;

function preload() {
  snowImg = loadImage("snow2.jpg");
  snowManImg = loadImage("snowman.jpg");
  snowBallImg = loadImage("snowball.png");
  boy1Img = loadImage("boyImage.jpg");
  

}

function setup() {
  createCanvas(1280,720);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  snowMan = createSprite(1000, 600);
  snowMan.addImage("snowman",snowManImg);
  snowMan.scale = 0.2;

  boy1 = createSprite(300, 600);
  boy1.addImage("boy1",boy1Img);
  boy1.scale = 0.18;

  
  snowBall = Bodies.circle(350,550,20);
  World.add(world,snowBall);

slingShot = new SlingShot(this.snowBall,{x:350,y:530});


}
function draw() {
  background(snowImg); 
  textSize(30);
  fill("black");
  text("Drag the snowball to hit the boy", 400, 30);
  text("Press Space key to return the snowball to its original position", 250, 60);
  drawSprites();
  slingShot.display();
  Engine.update(engine);
  imageMode(CENTER)
  image(snowBallImg ,snowBall.position.x,snowBall.position.y,40,40);
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.snowBall,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.snowBall);
  }
}