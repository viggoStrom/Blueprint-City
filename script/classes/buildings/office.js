
class Office extends Building {
    constructor(pos, maxEmployeeCount) {
        super(pos);
        layers.background2.push(this);
        workplaces.push(this);

        this.employeeCount = {current: 0, max: maxEmployeeCount};
        this.employees = [];

        // DEBUG ONLY
        this.visible = true;
    }

    update() {
        
    }
    
    render() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.pos.x, this.pos.y, 50, 50);
    }

    employ(person) {
        this.employeeCount.current++;
        this.employees.push(person);
    }
}