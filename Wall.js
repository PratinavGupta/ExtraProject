class Wall {
    constructor(x, y, h, a) {
        var prop = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, 10, h, prop);
        Matter.World.add(world, this.body);
        this.h = h;
        Matter.Body.setAngle(this.body, a);
    }

    display() {
        var ang = this.body.angle;
        push();
        fill("lightblue");
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(ang)
        rect(0, 0, 10, this.h);
        pop()
    }
}