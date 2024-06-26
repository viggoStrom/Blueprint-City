
class Person extends Particle {
    constructor(pos) {
        super(pos);
        layers.entity1.push(this);
        
        this.findAJob();

        this.schedule = [
            ["1500", "work"],
            ["1800", "home"],
        ]

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

    findAJob() {
        const availableWorkplaces = workplaces.filter(workplace => workplace.employeeCount.current < workplace.employeeCount.max);

        if (availableWorkplaces.length > 0) {
            this.workplace = availableWorkplaces[Math.floor(Math.random() * availableWorkplaces.length)];
            this.workplace.employ(this);
            return 
        }
        
        this.workplace = null;
        return;
    }

    getDestination(schedule, time) {
        
    }

    calculatePath() {
        // A* algorithm
    }
}