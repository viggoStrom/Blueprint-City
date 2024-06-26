
class Person extends Particle {
    constructor(pos) {
        super(pos);
        this.visible = true;
    }

    update() {
        


        // this.vel.x += this.acc.x;
        // this.vel.y += this.acc.y;
        // this.pos.x += this.vel.x;
        // this.pos.y += this.vel.y;
    }

    render() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}