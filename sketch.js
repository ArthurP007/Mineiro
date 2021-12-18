const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rubber;
var iron;
var stone;
var ground;
var caixa;
var bolinha;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Chao(600,590,1200,20);
    rubber = new Hammer(500,200,50,50);
    iron = new Ferro(550,300,100,100);
    stone = new Pedra(400,500,100,100);
    caixa = new Caixa(200,100,50,150);
    bolinha = new Rubber(400,100);
  
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    rubber.display();
    iron.display();
    stone.display();
    caixa.display();
    bolinha.display();

  
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(caixa.body,caixa.body.position,{x:130,y:-300});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(caixa.body,caixa.body.position,{x:-130,y:-145});
	}
}
