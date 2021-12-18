class Rubber{
	constructor(x,y)
	{
	 var options={
		'density':1,
		'friction': 5,
		'restitution':0.8
	 }
		
		this.body=Bodies.circle(x,y,30,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,30);

			pop()
	}

}