class Dustbin{
    constructor(x,y,width,height){
        var options={
            
           'restitution':0.3,
           'friction':0.5,
           'density':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=200;
        this.height=200;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 600, 570, this.width, this.height);
        
    }
}