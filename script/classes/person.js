
class Person extends Particle {
    constructor(pos) {
        super(pos);
        layers.entity1.push(this);
        
        const availableWorkplaces = workplaces.filter(workplace => workplace.employeeCount.current < workplace.employeeCount.max);

        this.workplace = availableWorkplaces[Math.floor(Math.random() * availableWorkplaces.length)];

        workplace.employ(this);
        
        // DEBUG ONLY
        this.visible = true;
    }

    update() {
        // Get in-game time


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

    setDestination(destination) {
        this.destination = destination;
    }

    calculatePath() {
        // A* algorithm
    }
}