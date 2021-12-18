class Chao {
    constructor(x,y){
       var options={
         isStatic:true
       }
  
      this.body = Bodies.rectangle(x,y,1600,30,options)

       World.add(world,this.body)
    }
   
    display(){
      var pos = this.body.position;
      fill("green");
      rectMode(CENTER);
      rect(pos.x,pos.y,1600,30);


    }

}