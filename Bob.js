class Bob{
    constructor(x, y, radius){
        var options = {
            restitution : 1,
            isStatic : false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(255, 51, 153);
        ellipse(pos.x, pos.y, this.radius, this.radius); 
    }
}