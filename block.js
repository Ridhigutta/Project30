class Block {
    constructor(x,y,) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,30,30,options);
      this.width =30;
      this.height = 30;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<7){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
      } 
else{

  World.remove(world,this.body)
  push();

  this.visibility=this.visibility-5
  tint(255,this.visibility)

  pop();

}

   
    }
  };