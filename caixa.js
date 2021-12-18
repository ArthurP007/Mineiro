class Caixa{
    constructor(x,y){
        var options ={
            'density':1,
            'friction': 0.1,
            'restitution':0.5
        }
       
       this.body = Bodies.rectangle(x,y,100,200,options)
       World.add(world,this.body)
       this.width = 100
       this.weight = 200
      
    }

    display(){

      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      rect(0,0,100,200);
      pop();
      

    }
}