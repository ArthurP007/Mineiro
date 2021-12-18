class Ferro {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0,
        'restitution':0.001
      };
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.width = 150;
      this.height = 150;
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
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, 150, 150);
      pop();
    };
  };