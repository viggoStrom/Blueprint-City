class Person extends Particle {
    constructor(pos) {
        super(pos);
        layers.entity1.push(this);

        this.findAHome();
        this.findAJob();

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
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    findAHome() {
        const availableHomes = homes.filter(
            (home) => home.residents.current < home.residentCount.max
        );

        if (availableHomes.length > 0) {
            this.home =
                availableHomes[Math.floor(Math.random() * availableHomes.length)];
            this.home.addResident(this);
            return;
        }

        this.home = null;
        return;
    }

    findAJob() {
        const availableWorkplaces = workplaces.filter(
            (workplace) =>
                workplace.employeeCount.current < workplace.employeeCount.max
        );

        if (availableWorkplaces.length > 0) {
            this.workplace =
                availableWorkplaces[
                Math.floor(Math.random() * availableWorkplaces.length)
                ];
            this.workplace.employ(this);
            return;
        }

        this.workplace = null;
        return;
    }

    createSchedule() {
        // Change the values of the schedule object to 'work' when the person is supposed to be at work according to this.workplace.schedule

        this.schedule = this.workplace.schedule;

        // Calculate the time it takes to get to and from work

    }

    getDestination(schedule, time) { }

    calculatePath() {
        const start = this.currentLocation.node;
        const end = this.destination.node;

        let openSet = new Set([start]);
        let cameFrom = new Map();

        let gScore = new Map();
        gScore.set(start, 0);

        let fScore = new Map();
        fScore.set(start, this.heuristic(start, end));

        while (openSet.size > 0) {
            let current = [...openSet].reduce((a, b) =>
                fScore.get(a) < fScore.get(b) ? a : b
            );

            if (current === end) {
                return this.reconstructPath(cameFrom, current);
            }

            openSet.delete(current);

            current.neighbors.forEach(({ node: neighbor, distance }) => {
                let tentative_gScore = gScore.get(current) + distance;

                if (tentative_gScore < (gScore.get(neighbor) || Infinity)) {
                    cameFrom.set(neighbor, current);
                    gScore.set(neighbor, tentative_gScore);
                    fScore.set(
                        neighbor,
                        tentative_gScore + this.heuristic(neighbor, end)
                    );

                    if (!openSet.has(neighbor)) {
                        openSet.add(neighbor);
                    }
                }
            });
        }

        // No path found
        return [];
    }

    reconstructPath(cameFrom, current) {
        let totalPath = [current];
        while (cameFrom.has(current)) {
            current = cameFrom.get(current);
            totalPath.unshift(current);
        }
        return totalPath;
    }
}
