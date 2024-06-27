class Home extends Building {
    constructor(pos, maxResidencyCount) {
        super(pos);
        layers.background2.push(this);
        homes.push(this);

        this.residencyCount = { current: 0, max: maxResidencyCount };
        this.employees = [];


        // DEBUG ONLY
        this.visible = true;
    }

    update() { }

    render() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, 50, 50);
    }

    addResident(person) {
        this.residencyCount.current++;
        this.employees.push(person);
    }
}