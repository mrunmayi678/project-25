class Paper{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.1,
            'friction':0.1,
            'density':0.1 
        }
        this.body = Matter.Bodies.circle(x,y,(radius-20)/2,options);
        this.radius=radius
        this.image = loadImage("paper.png");
        World.add(world,this.body)
         }
        display(){
            imageMode(CENTER);
            image(this.image, this.body.position.x,this.body.position.y,this.radius,this.radius); 
           
        }
    }
