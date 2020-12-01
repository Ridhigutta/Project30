const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var ground;
var hexImage, polygon;
var block,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var stand,stand2;
var rope;

function setup() {
  createCanvas(1000,450);

  engine = Engine.create();
  world = engine.world;
  
  stand=new Stand(350,330,220,10)
  stand2=new Stand(670,200,150,10)
  
ground=new Ground(500,400,1000,10)

block=new Block(255,250,400,500);
block2=new Block(285,250,400,500);
block3=new Block(315,250,400,500);
block4=new Block(345,250,400,500);
block5=new Block(375,250,400,500);
block6=new Block(405,250,400,500);
block7=new Block(435,250,400,500);
block8=new Block(285,220,400,500);
block9=new Block(315,220,400,500);
block10=new Block(345,220,400,500);
block11=new Block(375,220,400,500);
block12=new Block(405,220,400,500);
block13=new Block(315,150,400,500);
block14=new Block(345,150,400,500);
block15=new Block(375,150,400,500);
block16=new Block(345,150,400,500);
block17= new Block(610,150,400,500);
block18= new Block(640,150,400,500);
block19= new Block(670,150,400,500);
block20= new Block(700,150,400,500);
block21= new Block(730,150,400,500);
block22= new Block(640,150,400,500);
block23= new Block(670,150,400,500);
block24= new Block(700,150,400,500);
block25= new Block(670,100,400,500);

polygon=new Hex(50,200,60)

rope=new Rope(polygon.body,{x:95,y:260})
rope.shapeColor="white";


Engine.run(engine);

}

function draw() {
  background(211,211,211); 
  
  block.display();
  block2.display(); 
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();

  ground.display();

  stand.display();

  stand2.display();

polygon.display();

rope.display();

fill("white")
text(mouseX+","+mouseY,mouseX,mouseY)

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){

if(keyCode===32){


rope.attach(polygon.body)


}


}
