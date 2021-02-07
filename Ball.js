class BALL {
    constructor(x, y) {
        this.body = Matter.Bodies.circle(x, y, 10);
        Matter.World.add(world, this.body);
    }

    display() {
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, 10);
    }
}