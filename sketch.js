const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);

    stone1 = new Block(640,175,30,40);
    stone2 = new Block(670,175,30,40);
    stone3 = new Block(700,175,30,40);
    stone4 = new Block(730,175,30,40);
    stone5 = new Block(760,175,30,40);
    stone6 = new Block(670,135,30,40);
    stone7 = new Block(700,135,30,40);
    stone8 = new Block(730,135,30,40);
    stone9 = new Block(700,95,30,40);

}
function draw(){
     background(0);
    Engine.update(engine);

    textSize(20);
    fill("green");
    text("drag the hexagonal stone and release it, launch it towards the blocks",100,30);

    stand1.display();
    stand2.display();
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("purple");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("skyblue");
    block13.display();
    block14.display();
    block15.display();
    fill("blue");
    block16.display();

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    fill("violet");
    stone6.display();
    stone7.display();
    stone8.display();
    fill("pink");
    stone9.display();
}