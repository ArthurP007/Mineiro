class Hammer {
  constructor(x,y) {
    var options = {
      'density':12,
        'friction': 0,
        'restitution':0.8
    };
    this.body = Bodies.rectangle(x,y, 50, 150, options);
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0,0,50,150);
    pop();
  };
};