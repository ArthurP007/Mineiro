class Pedra {
    constructor(x, y) {
      var options = {
        density:12,
        friction: 10,
        restitution:0.5
      };
      this.body = Bodies.rectangle(x, y, 100, 100, options);
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
      stroke('black')
      fill('lightGrey')
      rectMode(CENTER)
      rect(0, 0, 100, 100);
      pop();
    };
  };