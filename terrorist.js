class Terrorist
{
    constructor(x,y,width,height)
    {
       
        var options={    
     }

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("images/terrorist1img.png")
      World.add(world, this.body);
    }
    
    display() 
    {

      var terroristPos=this.body.position;		

      push();
      translate(terroristPos.x, terroristPos.y);
      imageMode(CENTER);
      fill("yellow");
      image(this.image,0,0,150,150 );
      pop();
      
    }
  }