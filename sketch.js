const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var eng,world
var box1;
var ground
function setup() {
  createCanvas(400,400);

  eng=Engine.create() //eng.world
  world=eng.world

  box1 = new Box (200,200,100,100);
  box2 = new Box(100,10,20,50)
  box3 = new Box (50,100,25,40)
  ground = new Ground (200,390,400,10)
  
}

function draw() {
  background("black"); 
  Engine.update(eng)
  
  box1.display();
  box2.display()
  fill ("green")
  box3.display()

  fill ("#231709")
  ground.display()

 
   
}